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
      { text: 'Lezioni', link: '/lezioni' }
    ],

    sidebar: [
      {
        text: 'Lezioni',
        items: [
          { text: 'A. Algebra', link: 'lezioni/a_algebra' },
          { text: 'B. Aritmetica-E-Numeri', link: 'lezioni/b_aritmetica-e-numeri' },
          { text: 'C. Analisi', link: 'lezioni/c_analisi' },
          { text: 'D. Geometria-Cartesiana', link: 'lezioni/d_geometria-cartesiana' },
          { text: 'F. Geometria-Del-Piano-Euclideo', link: 'lezioni/f_geometria-del-piano-euclideo' },
          { text: 'G. Geometria-Dello-Spazio', link: 'lezioni/g_geometria-dello-spazio' },
          { text: 'H. Algebra-Astratta', link: 'lezioni/h_algebra-astratta' },
          { text: 'I. Trigonometria', link: 'lezioni/i_trigonometria' },
          { text: 'J. Teoria-Degli-Insiemi', link: 'lezioni/j_teoria-degli-insiemi' },
          { text: 'K. Logica', link: 'lezioni/k_logica' },
          { text: 'L. Calcolo-Delle-Probabilita', link: 'lezioni/l_calcolo-delle-probabilita' },
          { text: 'N. Matematica-Finanziaria-Ed-Attuariale', link: 'lezioni/n_matematica-finanziaria-ed-attuariale' },
          { text: 'P. Matematica-Per-Informatica', link: 'lezioni/p_matematica-per-informatica' },
          { text: 'Q. Successioni-E-Serie', link: 'lezioni/q_successioni-e-serie' },
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
