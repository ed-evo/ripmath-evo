import { chromium } from 'playwright';
import path from 'node:path';
import { glob, mkdir } from 'node:fs/promises'

async function captureStaticSite(src: string, dst: string) {
  // Launch headless browser
  const browser = await chromium.launch();
  
  // Set a standard desktop viewport for fixed table layouts
  const context = await browser.newContext({
    viewport: { width: 1280, height: 900 },
  });
  
  const page = await context.newPage();

  console.log(`Loading: ${src}`);
  await page.goto(`file://${src}`, { waitUntil: 'networkidle' });

  // Take a full-page screenshot
  await page.screenshot({
    path: dst,
    fullPage: true,
  });

  console.log('Saved screenshot to site-preview.png');
  await browser.close();
}


async function main() {
    const rootDir = path.resolve(path.join(import.meta.dirname, "../../.."))
    const mateDir = path.join(rootDir, 'static/originale/mate')
    const htmlGlobPtn = path.join(mateDir, '**/*.html')
    const tmpDir = path.join(rootDir, 'tmp')
    const outputImageDir = path.join(tmpDir, 'images')
    for await (const entry of glob(htmlGlobPtn)) {
        const relativePath = path.relative(mateDir, entry)
        const relativeScreenshotPath = relativePath.replace(/\.html$/i, '.png')
        const outputImagePath = path.resolve(outputImageDir, relativeScreenshotPath)
        await mkdir(path.dirname(outputImagePath), { recursive: true})
        await captureStaticSite(entry, outputImagePath)
    }
}
main().catch(console.error);