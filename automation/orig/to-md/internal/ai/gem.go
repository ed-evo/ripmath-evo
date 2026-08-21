package ai

import (
	"context"
	"encoding/json"
	"fmt"
	"io/fs"
	"log"
	"os"
	"path"

	"github.com/ed-evo/ripmath-evo/markdownify/internal/config"
	"golang.org/x/sync/errgroup"
	"golang.org/x/time/rate"
	"google.golang.org/genai"
)

type ProcessData struct {
	Cfg *config.Config
	Screenshots fs.FS
	Htmls fs.FS
	SystemPrompt string
}

var tpm = 16_000
var limit = rate.Limit(float64(tpm) / 60.0)

func Process(
	ctx context.Context,
	c *genai.Client,
	d *ProcessData,
	resources <-chan string,
) error {
	g, gCtx := errgroup.WithContext(ctx)
	l := rate.NewLimiter(limit, tpm)
	consumes := tpm - 1
	for r := range resources {
		resource := r
		if err := l.WaitN(gCtx, consumes); err != nil {
			return fmt.Errorf("Rate limite error: %w", err)
		}
		log.Printf("resource %s", resource)
		img, err := fs.ReadFile(d.Screenshots, resource + ".png")
		if err != nil {
			return fmt.Errorf("Error reading screenshot: %w", err)
		}
		imgPart := &genai.Part{
			InlineData: &genai.Blob{
				MIMEType: "image/png",
				Data: img,
			},
		}
		html, err := fs.ReadFile(d.Htmls, resource + ".html")
		if err != nil {
			return fmt.Errorf("Error reading html: %w", err)
		}
		htmlPart := genai.NewPartFromText(string(html))
		userContent := genai.NewContentFromParts([]*genai.Part{imgPart, htmlPart}, genai.RoleUser)
		count, err := c.Models.CountTokens(
			ctx,
			d.Cfg.GeminiModel,
			[]*genai.Content{userContent, genai.NewContentFromText(d.SystemPrompt, genai.RoleUser)},
			&genai.CountTokensConfig{
			},
		)
		if err != nil {
			return fmt.Errorf("Error counting tokens %w", err)
		} else {
			consumes = int(float64(count.TotalTokens) * 1.5)
			log.Printf("%v, %v, %v", count, count.TotalTokens, 1.5 * float64(count.TotalTokens))
		}
		g.Go(func() error {
			resp, err := c.Models.GenerateContent(
				ctx,
				d.Cfg.GeminiModel,
				[]*genai.Content{userContent},
				&genai.GenerateContentConfig{
					SystemInstruction: genai.Text(d.SystemPrompt)[0],
					MaxOutputTokens: int32(consumes),
				},
			)
			if err != nil {
				return fmt.Errorf("Error from genai: %w", err)
			}
			dir := path.Dir(resource)
			err = os.MkdirAll(path.Join(d.Cfg.OutputDir, dir), 0755)
			if err != nil {
				return err
			}
			err = os.WriteFile(path.Join(d.Cfg.OutputDir, resource + ".md"), []byte(resp.Text()), 0755)
			if err != nil {
				return err
			}
			resp.Candidates = nil
			j, err := json.MarshalIndent(resp, "", "  ")
			if err != nil {
				return fmt.Errorf("Error serializing to json: %w", err)
			}
			err = os.WriteFile(path.Join(d.Cfg.OutputDir, resource + ".json"), j, 0755)
			if err != nil {
				return err
			}
			return nil
		})
	}
	return g.Wait()
}
