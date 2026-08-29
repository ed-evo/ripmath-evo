package config

import (
	"log"
	"sync"

	"github.com/ilyakaznacheev/cleanenv"
)

type Config struct {
	GeminiApiKey   string `env:"GEMINI_API_KEY"`
	GeminiModel    string `env:"GEMINI_MODEL"`
	ScreenshotsZip string `env:"TOMD_SCREENSHOTS_ZIP"`
	MateZip        string `env:"TOMD_MATE_ZIP"`
	OutputDir      string `env:"TOMD_OUTPUT_DIR"`
	Sequential     bool   `env:"TOMD_SEQUENTIAL"`
	LogFile        string `env:"TOMD_LOG_FILE"`
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
