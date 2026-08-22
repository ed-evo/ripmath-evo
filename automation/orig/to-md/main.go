package main

import (
	"archive/zip"
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

	logFile, err := os.OpenFile(cfg.LogFile, os.O_CREATE | os.O_WRONLY | os.O_APPEND, 0666)
	if err != nil {
		log.Fatalf("Error opening logfile, %w", err)
	}
	defer logFile.Close()
	log.SetOutput(logFile)

	screenshotFs, err := zip.OpenReader(cfg.ScreenshotsZip)
	if err != nil {
		log.Fatal("Error opening screenshots")
	}
	defer screenshotFs.Close()

	mateFs, err := zip.OpenReader(cfg.MateZip)
	if err != nil {
		log.Fatal("Error opening mate")
	}
	defer mateFs.Close()

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

	resourcesChan := make(chan resources.Resource, 1)

	g.Go(func() error {
		defer close(resourcesChan)
		return resources.ListHtml(gCtx, mateFs, screenshotFs, cfg.OutputDir, resourcesChan)
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