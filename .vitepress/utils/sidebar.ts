import type { DefaultTheme } from "vitepress";
import { readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, relative, basename } from "node:path";

const projectRoot = process.cwd();
const mateDir = join(projectRoot, "mate");

export function buildSidebar(url: string): DefaultTheme.Sidebar {
  const __filename = fileURLToPath(url);
  const __dirname = dirname(__filename);
  const basePath = relative(mateDir, __dirname);
  const entries = readdirSync(__dirname, { withFileType: true });
  return [
    {
      text: "Path " + basePath,
      items: entries.map((f: string) => ({
        text: f,
        link: join(basePath, basename(f, ".md")),
      })),
    },
  ];
}
