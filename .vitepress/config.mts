import { katex } from '@mdit/plugin-katex'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "mate",
  base: '/ripmath-evo/',
  
  title: "RipMat EVO",
  description: "Ripasso di Matematica",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Lezioni', link: '/lezioni' },
      { text: 'RipMat[orig.]', link: 'https://www.ripmat.it/'}
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ed-evo/ripmath-evo' }
    ]
  },

  // build
  cleanUrls: true,
  ignoreDeadLinks: true, // FIXME: after full migration this must be removed
  markdown: {
    config: (md) => {
      md.use(katex)
    }
  },
  sitemap: {
    hostname: 'https://ed-evo.github.io/ripmath-evo',
    lastmodDateOnly: true
  }
})
