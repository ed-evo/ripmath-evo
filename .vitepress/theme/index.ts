import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import './style.css'
import GgbGraph from './components/GgbGraph.vue'
import GgbCommand from './components/GgbCommand.vue'

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
