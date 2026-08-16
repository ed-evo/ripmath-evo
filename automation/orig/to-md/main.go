package main

import (
	"context"
	"fmt"
	"io/fs"
	"log"
	"os"
	"strings"

	"github.com/ed-evo/ripmath-evo/markdownify/internal/config"
)

func readResources(ctx context.Context, base fs.FS) (<-chan string, <-chan error) {
	resourcesCh := make(chan string)
	errsCh := make(chan error, 1)

	go func() {
		defer close(resourcesCh)
		defer close(errsCh)
		
		err := fs.WalkDir(base, ".", func (path string, d fs.DirEntry, err error) error {
				if err != nil {
					return err
				}

				select {
				case <- ctx.Done():
					return ctx.Err()
				default:
				}

				if !d.IsDir() && strings.HasSuffix(path, ".html") {
					select {
					case resourcesCh <- path[:len(path) - 5]:
					case <-ctx.Done():
						return ctx.Err()
					}
					
				}
				return nil
			})
		
		if err != nil {
			errsCh <- fmt.Errorf("Error woking FS %w", err)
		}
	}()

	return resourcesCh, errsCh
}

func main() {
	cfg := config.Get()
	log.Printf("%v", cfg)

	screenshotFs := os.DirFS(cfg.ScreenshotsDir)

	mateFs := os.DirFS(cfg.MateDir)

	log.Printf("%v\n%v", screenshotFs, mateFs)

	ctx := context.Background()

	resources, errs := readResources(ctx, mateFs)

	for r := range resources {
		log.Printf("resource %s", r)
	}

	if err := <-errs; err != nil {
		fmt.Printf("Walk error: %v\n", err)
	}
}