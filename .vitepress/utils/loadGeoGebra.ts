// .vitepress/utils/loadGeoGebra.ts

export interface GeoGebraAppletParameters {
  appName?: 'graphing' | 'geometry' | '3d' | 'classic' | 'suite' | 'cas'
  width?: number
  height?: number
  showToolBar?: boolean
  showAlgebraInput?: boolean
  showMenuBar?: boolean
  showResetIcon?: boolean
  enableShiftDragZoom?: boolean
  material_id?: string
  filename?: string
  ggbBase64?: string
  [key: string]: unknown
}

export interface GeoGebraApplet {
  inject(containerIdOrElement: string | HTMLElement): void
  getAPI(): Promise<any>
}

export interface GeoGebraMathApps {
  create(params: GeoGebraAppletParameters): GeoGebraApplet
}

declare global {
  interface Window {
    mathApps?: GeoGebraMathApps
  }
}

export type GeoGebraVariant = 'webSimple' | 'web' | 'web3d'

const loadedModules = new Map<GeoGebraVariant, Promise<GeoGebraMathApps>>()

/**
 * Dynamically loads the specified GeoGebra ES Module variant using native browser imports.
 */
export async function loadGeoGebra(
  variant: GeoGebraVariant = 'web3d'
): Promise<GeoGebraMathApps> {
  // Prevent duplicate module fetches
  if (loadedModules.has(variant)) {
    return loadedModules.get(variant)!
  }

  const loadPromise = (async () => {
    if (typeof window === 'undefined') {
      throw new Error('GeoGebra cannot be loaded during Server-Side Rendering (SSR).')
    }

    const cdnUrl = `https://www.geogebra.org/apps/latest/${variant}/${variant}.nocache.mjs`

    // Native dynamic import handles evaluation and window global population cleanly
    // Vite needs /* @vite-ignore */ so it doesn't try to resolve external HTTP URLs at build time
    const module = await import(/* @vite-ignore */ cdnUrl)

    // GeoGebra exports mathApps on the module export object AND on window.mathApps
    const mathApps = module.mathApps || window.mathApps

    if (!mathApps) {
      throw new Error(`GeoGebra mathApps instance not found after importing ${variant}.`)
    }

    return mathApps
  })()

  loadedModules.set(variant, loadPromise)

  // Clear cache if import fails so the app can retry
  loadPromise.catch(() => loadedModules.delete(variant))

  return loadPromise
}