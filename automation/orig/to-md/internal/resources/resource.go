package resources

import (
	"archive/zip"
	"context"
	"fmt"
	"io/fs"
	"os"
	"path"
	"strings"

	"github.com/ed-evo/ripmath-evo/markdownify/internal/config"
	"github.com/ed-evo/ripmath-evo/markdownify/internal/logger"
)

var rLogger = logger.Get().With("component", "Resource")

type Resource struct {
	Name string
	Html string
	Png  string
}

func ListHtml(
	ctx context.Context,
	cfg config.Config,
) ([]*Resource, error) {
	rLogger.Info("ListHtml start")
	defer func() { rLogger.Info("ListHtml completed") }()
	screenshots, err := zip.OpenReader(cfg.ScreenshotsZip)
	if err != nil {
		return nil, logger.ErrThrough(rLogger, fmt.Errorf("Error opening screenshots"))
	}
	defer screenshots.Close()

	mate, err := zip.OpenReader(cfg.MateZip)
	if err != nil {
		return nil, logger.ErrThrough(rLogger, fmt.Errorf("Error opening mate"))
	}
	defer mate.Close()

	var resList []*Resource

	for _, f := range mate.File {
		if f.FileInfo().IsDir() || !strings.HasSuffix(f.Name, ".html") {
			continue
		}
		name := f.Name[:len(f.Name)-5]

		if _, err := os.Stat(path.Join(cfg.OutputDir, name+".md")); err == nil {
			rLogger.Info(fmt.Sprintf("%v already processed", f.Name))
			continue
		}

		r := &Resource{
			Name: name,
			Html: f.Name,
			Png:  name + ".png",
		}

		if _, err := fs.Stat(screenshots, r.Png); err != nil {
			rLogger.Warn(fmt.Sprintf("Check screenshot %v failed.", r.Png))
			continue
		}

		resList = append(resList, r)
	}

	rLogger.Info(fmt.Sprintf("Found %d html files to process.", len(resList)))

	return resList, nil
}
