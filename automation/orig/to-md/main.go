package main

import (
	"context"
	"fmt"
	"log"
	"os"
	"os/signal"
	"syscall"

	"github.com/ed-evo/ripmath-evo/markdownify/internal/ai"
	"github.com/ed-evo/ripmath-evo/markdownify/internal/config"
	"github.com/ed-evo/ripmath-evo/markdownify/internal/resources"
	"golang.org/x/sync/errgroup"
)

func main() {
	cfg := config.Get()
	log.Printf("%v", cfg)

	screenshotFs := os.DirFS(cfg.ScreenshotsDir)

	mateFs := os.DirFS(cfg.MateDir)

	log.Printf("%v\n%v", screenshotFs, mateFs)

	baseCtx, stop := signal.NotifyContext(context.Background(), syscall.SIGINT, syscall.SIGTERM)
	defer stop()

	g, gCtx := errgroup.WithContext(baseCtx)

	resourcesChan := make(chan string)

	g.Go(func() error {
		defer close(resourcesChan)
		return resources.ListHtml(gCtx, mateFs, resourcesChan)
	})

	g.Go(func() error {
		return ai.Process(baseCtx, screenshotFs, mateFs, resourcesChan)
	})

    if err := g.Wait(); err != nil {
		fmt.Printf("Execution error: %v\n", err)
	}
}