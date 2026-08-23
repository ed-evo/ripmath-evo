package logger

import (
	"log"
	"log/slog"
	"os"
	"sync"

	"github.com/ed-evo/ripmath-evo/markdownify/internal/config"
)

var (
	baseLogger *slog.Logger
	once       sync.Once
)

func Get() *slog.Logger {
	once.Do(func() {
		cfg := config.Get()
		logFile, err := os.OpenFile(cfg.LogFile, os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0666)
		if err != nil {
			log.Fatalf("Error opening logfile, %v", err)
		}
		logger := slog.New(slog.NewJSONHandler(
			logFile,
			&slog.HandlerOptions{
				Level: slog.LevelInfo,
			},
		))
		baseLogger = logger.With("app", "ToMd")
	})
	return baseLogger
}

func ErrThrough(l *slog.Logger, err error) error {
	l.Error(err.Error())
	return err
}
