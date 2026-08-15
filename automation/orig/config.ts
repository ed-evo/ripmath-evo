
import { glob } from 'node:fs/promises'
import { relative, resolve, join } from 'node:path'

export const rootDir = resolve(join(import.meta.dirname, "../.."))
export const mateDir = join(rootDir, 'static/originale/mate')
export const htmlGlobPtn = join(mateDir, '**/*.html')
export const tmpDir = join(rootDir, 'tmp')
export const outputImageDir = join(tmpDir, 'images')

export function getAllHtmlPaths(): AsyncIterableIterator<string> {
    return glob(htmlGlobPtn)
}

export async function resolveImagePath(entry: string): Promise<string> {
    const relativePath = relative(mateDir, entry)
    const relativeScreenshotPath = relativePath.replace(/\.html$/i, '.png')
    const outputImagePath = resolve(outputImageDir, relativeScreenshotPath)
    return outputImagePath
}