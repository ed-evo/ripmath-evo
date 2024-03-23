// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
    transpile: [ 'vuetify' ]
  },
  app: {
    baseURL: process.env.BASE_URL || '/'
  },
  modules: [
    '@nuxt/content',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins?.push(vuetify({ autoImport: true }))
      })
    }
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls
      }
    }
  },
  /*
   ** Global CSS
   */
  css: [
    '~/node_modules/katex/dist/katex.css',
    '~/assets/style/katex.scss'
  ],
})
