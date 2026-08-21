package config

import (
	"log"
	"sync"

	"github.com/ilyakaznacheev/cleanenv"
)

type Config struct {
	GeminiApiKey string `env:"GEMINI_API_KEY"`
	GeminiModel  string `env:"GEMINI_MODEL"`
	ScreenshotsDir string `env:"TOMD_SCREENSHOTS_DIR"`
	MateDir string `env:"TOMD_MATE_DIR"`
	OutputDir string `env:"TOMD_OUTPUT_DIR"`
}

var (
	appConfig *Config
	once      sync.Once
)

func Get() *Config {
	once.Do(func() {
		appConfig = &Config{}

		if err := cleanenv.ReadConfig(".env", appConfig); err != nil {
			log.Fatalf("FATAL: Cannot read config: %v", err)
		}
	})
	return appConfig
}
