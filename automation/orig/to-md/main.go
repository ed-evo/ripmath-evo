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
	if err := run(); err != nil {
		log.Fatalf("Execution error: %v", err)
	}
}

func run() error {
	cfg := config.Get()
	
	logFile, err := os.OpenFile(cfg.LogFile, os.O_CREATE | os.O_WRONLY | os.O_APPEND, 0666)
	if err != nil {
		return fmt.Errorf("Error opening logfile, %w", err)
	}
	defer logFile.Close()
	log.SetOutput(logFile)
	log.Print("Start To-Md")
	defer log.Print("Stop To-Md")

	baseCtx, stop := signal.NotifyContext(context.Background(), syscall.SIGINT, syscall.SIGTERM)
	defer stop()

	client, err := genai.NewClient(baseCtx, &genai.ClientConfig{
		APIKey:  cfg.GeminiApiKey,
		Backend: genai.BackendGeminiAPI,
	})
	if err != nil {
		return fmt.Errorf("failed to create Genai Client: %w", err)
	}

	g, gCtx := errgroup.WithContext(baseCtx)

	resList, err := resources.ListHtml(gCtx, *cfg)

	if err != nil {
		return fmt.Errorf("Error reading resources: %w", err)
	}

	g.Go(func() error {
		return ai.Process(
			gCtx,
			client,
			&ai.ProcessData{
				Cfg: cfg,
				Resources: resList,
				SystemPrompt: systemPrompt,
			},
		)
	})

    if err := g.Wait(); err != nil {
		return fmt.Errorf("Execution error: %w\n", err)
	}
	return nil
}