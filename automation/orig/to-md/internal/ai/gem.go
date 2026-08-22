package ai

import (
	"archive/zip"
	"context"
	"encoding/json"
	"fmt"
	"io/fs"
	"log"
	"os"
	"path"

	"github.com/ed-evo/ripmath-evo/markdownify/internal/config"
	"github.com/ed-evo/ripmath-evo/markdownify/internal/resources"
	"golang.org/x/sync/errgroup"
	"golang.org/x/time/rate"
	"google.golang.org/genai"
)

type ProcessData struct {
	Cfg *config.Config
	Resources []*resources.Resource
	SystemPrompt string
}

var tpm = 16_000
var limit = rate.Limit(float64(tpm) / 60.0)

func Process(
	ctx context.Context,
	c *genai.Client,
	d *ProcessData,
) error {
	cfg := d.Cfg
	screenshots, err := zip.OpenReader(cfg.ScreenshotsZip)
	if err != nil {
		return fmt.Errorf("Error opening screenshots")
	}
	defer screenshots.Close()

	htmls, err := zip.OpenReader(cfg.MateZip)
	if err != nil {
		return fmt.Errorf("Error opening mate")
	}
	defer htmls.Close()
	g, gCtx := errgroup.WithContext(ctx)
	l := rate.NewLimiter(limit, tpm)
	// Empty wait, to reduce hitting Genai limit on startup burst
	if err := l.WaitN(gCtx, tpm); err != nil {
		return fmt.Errorf("Rate limite error: limit err %w", err)
	}
	var consumes int
	for _, resource := range d.Resources {
		log.Printf("resource %s", resource.Name)
		img, err := fs.ReadFile(screenshots, resource.Png)
		if err != nil {
			return fmt.Errorf("Error reading screenshot: %w", err)
		}
		imgPart := &genai.Part{
			InlineData: &genai.Blob{
				MIMEType: "image/png",
				Data: img,
			},
		}
		html, err := fs.ReadFile(htmls, resource.Html)
		if err != nil {
			return fmt.Errorf("Error reading html: %w", err)
		}
		htmlPart := genai.NewPartFromText(string(html))
		userContent := genai.NewContentFromParts([]*genai.Part{imgPart, htmlPart}, genai.RoleUser)
		count, err := c.Models.CountTokens(
			ctx,
			cfg.GeminiModel,
			[]*genai.Content{userContent, genai.NewContentFromText(d.SystemPrompt, genai.RoleUser)},
			&genai.CountTokensConfig{},
		)
		if err != nil {
			return fmt.Errorf("Error counting tokens %w", err)
		} else {
			consumes = int(float64(count.TotalTokens) * 1.5)
			log.Printf("Token count %v, input %v, output estimate %v", resource.Name, count.TotalTokens, consumes)
			if (consumes >= tpm) {
				log.Printf("Resource %v exceed max token skip.", resource)
				continue
			}
		}

		if err := l.WaitN(gCtx, consumes); err != nil {
			return fmt.Errorf("Rate limite error: limit err %w, grouperr %w", err, gCtx.Err())
		}
		g.Go(func() error {
			resp, err := c.Models.GenerateContent(
				ctx,
				cfg.GeminiModel,
				[]*genai.Content{userContent},
				&genai.GenerateContentConfig{
					SystemInstruction: genai.Text(d.SystemPrompt)[0],
					MaxOutputTokens: int32(consumes),
				},
			)
			if err != nil {
				return fmt.Errorf("Error from genai: %w", err)
			}
			dir := path.Dir(resource.Name)
			err = os.MkdirAll(path.Join(cfg.OutputDir, dir), 0755)
			if err != nil {
				return err
			}
			outputBase := path.Join(cfg.OutputDir, resource.Name)
			err = os.WriteFile(outputBase + ".md", []byte(resp.Text()), 0755)
			if err != nil {
				return err
			}
			resp.Candidates = nil
			j, err := json.MarshalIndent(resp, "", "  ")
			if err != nil {
				return fmt.Errorf("Error serializing to json: %w", err)
			}
			err = os.WriteFile(outputBase + ".json", j, 0755)
			if err != nil {
				return err
			}
			return nil
		})
	}
	return g.Wait()
}
