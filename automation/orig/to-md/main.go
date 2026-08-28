package main

import (
	"context"
	_ "embed"
	"flag"
	"fmt"
	"log"
	"os/signal"
	"syscall"

	"github.com/ed-evo/ripmath-evo/markdownify/internal/ai"
	"github.com/ed-evo/ripmath-evo/markdownify/internal/config"
	"github.com/ed-evo/ripmath-evo/markdownify/internal/logger"
	"github.com/ed-evo/ripmath-evo/markdownify/internal/resources"
	"google.golang.org/genai"
)

//go:embed system.prompt
var systemPrompt string

var l = logger.Get()

func main() {
	l.Info("ToMd Started")
	resourcePtr := flag.String("resource", "", "Resource to process. Path without ext")
	flag.Parse()

	if err := run(resourcePtr); err != nil {
		l.Error(fmt.Sprintf("Execcution error: %v", err))
		log.Fatalf("Execution error: %v", err)
	}
}

func run(r *string) error {
	l.Info("Start processing")
	cfg := config.Get()
	defer log.Print("Stop To-Md")

	ctx, stop := signal.NotifyContext(context.Background(), syscall.SIGINT, syscall.SIGTERM)
	defer stop()
	defer func() {
		l.Info("Stop Processing")
	}()

	client, err := genai.NewClient(ctx, &genai.ClientConfig{
		APIKey:  cfg.GeminiApiKey,
		Backend: genai.BackendGeminiAPI,
	})
	if err != nil {
		return fmt.Errorf("failed to create Genai Client: %w", err)
	}
	var resList []*resources.Resource
	if r != nil && *r != "" {
		resList = []*resources.Resource{
			{
				Name: *r,
				Html: *r + ".html",
				Png:  *r + ".png",
			},
		}
	} else {
		resList, err = resources.ListHtml(ctx, *cfg)

		if err != nil {
			return fmt.Errorf("Error reading resources: %w", err)
		}
	}

	err = ai.Process(
		ctx,
		client,
		&ai.ProcessData{
			Cfg:          cfg,
			Resources:    resList,
			SystemPrompt: systemPrompt,
			Sequential: len(resList) < 10,
		},
	)

	if err != nil {
		return fmt.Errorf("Error processing pages: %w\n", err)
	}
	return nil
}
