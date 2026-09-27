import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import './style.css'
import GgbGraph from './components/GgbGraph.client.vue'
import GgbCommand from './components/GgbCommand.client.vue'

declare global {
  namespace vue {

  }
}

declare module 'vue' {
  export interface GlobalComponents {
    GgbGraph: typeof GgbGraph
    GgbCommand: typeof GgbCommand
  }
}

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app: app, router: _router, siteData: _siteData }) {
    app.component('GgbGraph', GgbGraph);
    app.component('GgbCommand', GgbCommand);
  }
} satisfies Theme
