import { type DefaultTheme, defineAdditionalConfig } from "vitepress";

const AlgebraSidebarItem: DefaultTheme.SidebarItem = {
  text: 'A. Algebra',
  link: '/lezioni/a_algebra/',
  items: [
    { text: '01. Potenze', link: '/lezioni/a_algebra/01.potenze'},
    {
      text: '02. Calcolo Letterale',
      link: '/lezioni/a_algebra/02.calcolo-letterale/',
      items: [
        { text: 'Monomi', link: '/lezioni/a_algebra/02.calcolo-letterale/01.monomi' },
        {
          text: 'Polinomi',
          link: '/lezioni/a_algebra/02.calcolo-letterale/02.polinomi/',
          items: [
            { text: 'Operazioni base', link: '/lezioni/a_algebra/02.calcolo-letterale/02.polinomi/01.operazioni'},
            { text: 'Prodotti Notevoli', link: '/lezioni/a_algebra/02.calcolo-letterale/02.polinomi/02.prodotti-notevoli' },
            { text: 'Scomposizione', link: '/lezioni/a_algebra/02.calcolo-letterale/02.polinomi/03.scomposizione' },
            { text: 'M.C.D m.c.m.', link: '/lezioni/a_algebra/02.calcolo-letterale/02.polinomi/04.mcd-mcm' },
          ],
        },
        { text: 'Frazioni Algebriche', link: '/lezioni/a_algebra/02.calcolo-letterale/03.frazioni-algebriche' },
      ]
    },
    {
      text: '03. Equazioni', link: '/lezioni/a_algebra/03.equazioni/'
    }
  ]
}

export default defineAdditionalConfig({
  themeConfig: {
    sidebar: [
      AlgebraSidebarItem,
      { text: 'B. Aritmentica e Numeri', link: '/lezioni/b_aritmetica-e-numeri/' }
    ],
  },
});
