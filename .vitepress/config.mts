import { defineConfig } from 'vitepress'
import { katex } from '@mdit/plugin-katex'

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
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },

  // build
  mpa: true,
  ignoreDeadLinks: true, // FIXME: after full migration this must be removed
  markdown: {
    config: (md) => {
      md.use(katex)
    }
  }
})
