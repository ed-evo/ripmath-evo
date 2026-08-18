package resources

import (
	"context"
	"fmt"
	"io/fs"
	"log"
	"strings"
)

func ListHtml(ctx context.Context, base fs.FS, resourcesCh chan<- string) error {

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
			log.Printf("Read %s", path)
			return nil
		})
	
	if err != nil {
		return fmt.Errorf("Error woking FS %w", err)
	}
	return nil
}