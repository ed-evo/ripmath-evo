package ai

import (
	"context"
	"fmt"
	"io/fs"
	"log"
	"time"

	"golang.org/x/sync/errgroup"
	"golang.org/x/time/rate"
)

func Process(
	ctx context.Context,
	screenshots fs.FS,
	htmls fs.FS,
	resources <-chan string,
) error {
	g, gCtx := errgroup.WithContext(ctx)
	l := rate.NewLimiter(rate.Every(20 * time.Second), 1)
	for r := range resources {
		resource := r
		if err := l.Wait(gCtx); err != nil {
			return fmt.Errorf("Rate limite error: %w", err)
		}
		g.Go(func() error {
			_, err := fs.ReadFile(htmls, resource + ".html")
			if err != nil {
				return fmt.Errorf("Error reading html: %w", err)
			}
			log.Printf("resource %s", resource)
			return nil
		})
	}
	return g.Wait()
}