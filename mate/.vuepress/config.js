import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { markdownMathPlugin } from '@vuepress/plugin-markdown-math'

export default defineUserConfig({
  base: '/ripmath-evo/',
  lang: 'it-IT',

  title: 'RipMat EVO',
  description: 'Ripasso di Matematica',

  theme: defaultTheme({

    navbar: ['/', '/get-started'],
  }),

  bundler: viteBundler(),

  plugins: [
    markdownMathPlugin({
      type: 'katex',

    })
  ],
})
