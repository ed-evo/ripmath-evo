package ai

import (
	"archive/zip"
	"context"
	"encoding/json"
	"fmt"
	"io/fs"
	"os"
	"path"

	"github.com/ed-evo/ripmath-evo/markdownify/internal/config"
	"github.com/ed-evo/ripmath-evo/markdownify/internal/logger"
	"github.com/ed-evo/ripmath-evo/markdownify/internal/resources"
	"golang.org/x/sync/errgroup"
	"golang.org/x/time/rate"
	"google.golang.org/genai"
)

type ProcessData struct {
	Cfg          *config.Config
	Resources    []*resources.Resource
	SystemPrompt string
}

var baseLogger = logger.Get()

var aiLogger = baseLogger.With("component", "ai")
var producerLogger = aiLogger.With("sub", "producer")
var consumerLogger = aiLogger.With("sub", "consumer")

var tpm = 16_000
var limit = rate.Limit(float64(tpm) / 60.0)

func produceRequests(
	ctx context.Context,
	c *genai.Client,
	d *ProcessData,
	reqCh chan<- *AiRequest,
) error {
	producerLogger.Info("Producer started")
	defer func() { producerLogger.Info("Producer completed.") }()
	cfg := d.Cfg
	screenshots, err := zip.OpenReader(cfg.ScreenshotsZip)
	if err != nil {
		return logger.ErrThrough(producerLogger, fmt.Errorf("Error opening screenshots"))
	}
	defer screenshots.Close()

	htmls, err := zip.OpenReader(cfg.MateZip)
	if err != nil {
		return logger.ErrThrough(producerLogger, fmt.Errorf("Error opening mate"))
	}
	defer htmls.Close()

	limiter := rate.NewLimiter(limit, tpm)
	// Empty wait, to reduce hitting Genai limit on startup burst
	if err := limiter.WaitN(ctx, tpm); err != nil {
		return logger.ErrThrough(producerLogger, fmt.Errorf("Rate limite error: limit err %w", err))
	}

	for _, resource := range d.Resources {
		l := producerLogger.With("resource", resource.Name)
		l.Info(fmt.Sprintf("resource %s", resource.Name))
		img, err := fs.ReadFile(screenshots, resource.Png)
		if err != nil {
			return logger.ErrThrough(l, fmt.Errorf("Error reading screenshot: %w", err))
		}
		imgPart := &genai.Part{
			InlineData: &genai.Blob{
				MIMEType: "image/png",
				Data:     img,
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
			return logger.ErrThrough(l, fmt.Errorf("Error counting tokens %w", err))
		}
		consumes := int(float64(count.TotalTokens) * 1.5)
		l.Info(fmt.Sprintf("Token count %v, input %v, output estimate %v", resource.Name, count.TotalTokens, consumes))
		if consumes >= tpm {
			l.Info(fmt.Sprintf("Resource %v exceed max token skip.", resource))
			continue
		}

		if err := limiter.WaitN(ctx, consumes); err != nil {
			return logger.ErrThrough(l, fmt.Errorf("Rate limite error: limit err %w, grouperr %w", err, ctx.Err()))
		}
		l.Info("Producing request for " + resource.Name)
		reqCh <- &AiRequest{
			Resource: *resource,
			Model:    cfg.GeminiModel,
			Contents: []*genai.Content{userContent},
			Config: &genai.GenerateContentConfig{
				SystemInstruction: genai.Text(d.SystemPrompt)[0],
				MaxOutputTokens:   int32(consumes),
			},
		}
	}
	return nil
}

type AiRequest struct {
	Resource resources.Resource
	Model    string
	Contents []*genai.Content
	Config   *genai.GenerateContentConfig
}

func consume(
	ctx context.Context,
	cfg *config.Config,
	c *genai.Client,
	r *AiRequest,
) error {
	l := consumerLogger.With("resource", r.Resource.Name)
	l.Info("Consuming " + r.Resource.Name)
	resp, err := c.Models.GenerateContent(
		ctx,
		r.Model,
		r.Contents,
		r.Config,
	)
	l.Info("Gemini call returned")
	if err != nil {
		return logger.ErrThrough(l, fmt.Errorf("Error from genai: %w", err))
	}
	dir := path.Dir(r.Resource.Name)
	err = os.MkdirAll(path.Join(cfg.OutputDir, dir), 0755)
	if err != nil {
		return logger.ErrThrough(l, err)
	}
	outputBase := path.Join(cfg.OutputDir, r.Resource.Name)
	err = os.WriteFile(outputBase+".md", []byte(resp.Text()), 0755)
	if err != nil {
		return logger.ErrThrough(l, err)
	}
	resp.Candidates = nil
	j, err := json.MarshalIndent(resp, "", "  ")
	if err != nil {
		return logger.ErrThrough(l, fmt.Errorf("Error serializing to json: %w", err))
	}
	err = os.WriteFile(outputBase+".json", j, 0755)
	if err != nil {
		return logger.ErrThrough(l, err)
	}
	l.Info("Markdown written into " + outputBase + ".md")
	l.Info("Consumed " + r.Resource.Name)
	return nil
}

func Process(
	ctx context.Context,
	c *genai.Client,
	d *ProcessData,
) error {

	reqCh := make(chan *AiRequest, 1)

	g, gCtx := errgroup.WithContext(ctx)

	g.Go(func() error {
		defer close(reqCh)
		err := produceRequests(gCtx, c, d, reqCh)
		if err != nil {
			aiLogger.Error("Error request producer: " + err.Error())
		}
		return err
	})
	g.Go(func() error {
		for r := range reqCh {
			g.Go(func() error {
				err := consume(gCtx, d.Cfg, c, r)
				if err != nil {
					aiLogger.Error(fmt.Sprintf("Error Consuming request(%v): %v", r.Resource.Name, err))
				}
				return err
			})
		}
		return nil
	})
	return g.Wait()
}
