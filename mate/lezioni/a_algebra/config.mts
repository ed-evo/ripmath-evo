import { type DefaultTheme, defineAdditionalConfig } from "vitepress";

const AlgebraSidebarItem: DefaultTheme.SidebarItem = {
  text: 'A. Algebra',
  items: [
    { text: '01. Potenze', link: 'lezioni/a_algebra/01.potenze'},
    { text: '02. Introduzione Calcolo Letterale', link: 'lezioni/a_algebra/02.introduzione-calcolo-letterale'},
    { text: '03. Monomi', link: 'lezioni/a_algebra/03.monomi'},
  ]
}

export default defineAdditionalConfig({
  themeConfig: {
    sidebar: [ AlgebraSidebarItem ],
  },
});
