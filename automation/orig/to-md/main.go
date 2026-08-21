package main

import (
	"context"
	_ "embed"
	"fmt"
	"log"
	"os"
	"os/signal"
	"syscall"

	"github.com/ed-evo/ripmath-evo/markdownify/internal/ai"
	"github.com/ed-evo/ripmath-evo/markdownify/internal/config"
	"github.com/ed-evo/ripmath-evo/markdownify/internal/resources"
	"golang.org/x/sync/errgroup"
	"google.golang.org/genai"
)

//go:embed system.prompt
var systemPrompt string

func main() {
	cfg := config.Get()
	log.Printf("%v", cfg)

	screenshotFs := os.DirFS(cfg.ScreenshotsDir)

	mateFs := os.DirFS(cfg.MateDir)

	log.Printf("%v\n%v", screenshotFs, mateFs)

	baseCtx, stop := signal.NotifyContext(context.Background(), syscall.SIGINT, syscall.SIGTERM)
	defer stop()

	client, err := genai.NewClient(baseCtx, &genai.ClientConfig{
		APIKey:  cfg.GeminiApiKey,
		Backend: genai.BackendGeminiAPI,
	})
	if err != nil {
		log.Fatal("failed to create Genai Client: %w", err)
		return
	}

	g, gCtx := errgroup.WithContext(baseCtx)

	resourcesChan := make(chan string, 1)

	g.Go(func() error {
		defer close(resourcesChan)
		return resources.ListHtml(gCtx, mateFs, resourcesChan)
	})

	g.Go(func() error {
		return ai.Process(
			baseCtx,
			client,
			&ai.ProcessData{
				Cfg: cfg,
				Htmls: mateFs,
				Screenshots: screenshotFs,
				SystemPrompt: systemPrompt,
			},
			resourcesChan,
		)
	})

    if err := g.Wait(); err != nil {
		fmt.Printf("Execution error: %v\n", err)
	}
}