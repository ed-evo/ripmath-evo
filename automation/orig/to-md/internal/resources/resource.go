package resources

import (
	"archive/zip"
	"context"
	"fmt"
	"io/fs"
	"log"
	"os"
	"path"
	"strings"
)

type Resource struct {
	Name string
	Html string
	Png string
}

func ListHtml(
	ctx context.Context,
	htmls *zip.ReadCloser,
	screenshots *zip.ReadCloser,
	outputDir string,
	resourcesCh chan<- Resource,
) error {

	err := fs.WalkDir(htmls, ".", func (p string, d fs.DirEntry, err error) error {
			if err != nil {
				return err
			}

			select {
			case <- ctx.Done():
				return ctx.Err()
			default:
			}

			// if path != "a/ac/ac4.html" {
			// 	return nil
			// }
			if !d.IsDir() && strings.HasSuffix(p, ".html") {
				name := p[:len(p) - 5]
				_, err := os.Stat(path.Join(outputDir, name + ".md"))
				if err == nil {
					log.Printf("%v already processed", p)
					return nil
				}
				select {
				case resourcesCh <- Resource{
					Name: name,
					Html: p,
					Png: name + ".png",
				}:
				case <-ctx.Done():
					return ctx.Err()
				}
				
			}
			log.Printf("Read %s", p)
			return nil
		})
	
	if err != nil {
		return fmt.Errorf("Error woking FS %w", err)
	}
	return nil
}