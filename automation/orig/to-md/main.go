package main

import (
	"context"
	_ "embed"
	"flag"
	"fmt"
	"log"
	"os"
	"os/signal"
	"syscall"

	"github.com/ed-evo/ripmath-evo/markdownify/internal/ai"
	"github.com/ed-evo/ripmath-evo/markdownify/internal/config"
	"github.com/ed-evo/ripmath-evo/markdownify/internal/resources"
	"google.golang.org/genai"
)

//go:embed system.prompt
var systemPrompt string

func main() {

	resourcePtr := flag.String("resource", "", "Resource to process. Path without ext")
	flag.Parse()

	if err := run(resourcePtr); err != nil {
		log.Fatalf("Execution error: %v", err)
	}
}

func run(r *string) error {
	cfg := config.Get()

	logFile, err := os.OpenFile(cfg.LogFile, os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0666)
	if err != nil {
		return fmt.Errorf("Error opening logfile, %w", err)
	}
	defer logFile.Close()
	log.SetOutput(logFile)
	log.Print("Start To-Md")
	defer log.Print("Stop To-Md")

	ctx, stop := signal.NotifyContext(context.Background(), syscall.SIGINT, syscall.SIGTERM)
	defer stop()

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
			&resources.Resource{
				Name: *r,
				Html: *r + ".html",
				Png: *r + ".png",
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
		},
	)

	if err != nil {
		return fmt.Errorf("Error processing pages: %w\n", err)
	}
	return nil
}
