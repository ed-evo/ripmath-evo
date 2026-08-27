import { defineAdditionalConfig } from "vitepress";
import { buildSidebar } from "../../../.vitepress/utils/sidebar";



console.log("hello")

export default defineAdditionalConfig({
  themeConfig: {
    sidebar: buildSidebar(import.meta.url),
  },
});
