# RIPMAT Evo (Non-Commercial Static Edition)

> A modernized, responsive, and open-source revision of the classic **RIPMAT** (*RIPasso di MATematica*) educational web resource.

[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)
[![VitePress](https://img.shields.io/badge/Static%20Site-VitePress-blue.svg)](https://vitepress.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind%20v4-38bdf8.svg)](https://tailwindcss.com/)
[![GeoGebra](https://img.shields.io/badge/Math%20Engine-GeoGebra%20.mjs-green.svg)](https://www.geogebra.org/)

---

## 📌 Project Overview

This repository hosts a modernized, mobile-friendly revision of **RIPMAT**. The goal of this project is to preserve the step-by-step pedagogical clarity of the original site while introducing:

- **Interactive Math Views:** Powered by **GeoGebra** ES Modules (`.mjs`).
- **High-Speed KaTeX Rendering:** Rendered directly via `@mdit/plugin-katex`.
- **Custom Markdown Pipeline:** Go-based processing utilities (`tomd`) powered by the Google GenAI SDK.
- **Modern SSG Architecture:** Built with **VitePress**, **Vue 3**, **TypeScript**, and **Tailwind CSS v4**.

---

## 🚀 Tech Stack

- **Documentation Framework:** [VitePress](https://vitepress.dev/) (Vue 3 + Vite)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Math Formulas:** [KaTeX](https://katex.org/) (via `@mdit/plugin-katex`)
- **Math Graphics:** [GeoGebra Web API](https://www.geogebra.org/) (`webSimple` / `web3d` `.mjs` modules)
- **Markdown Utility (`/markdownify`):** Go 1.26+ module utilizing Google GenAI API for content transformation.
- **E2E Testing:** [Playwright](https://playwright.dev/)

---

## 📜 Attribution, Licensing & Legal Credits

This project is a non-commercial educational adaptation.

- **Repository License:** Distributed under the [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)](LICENSE) license.
- **Original Content:** Educational explanations and structure adapted from [RIPMAT.it](https://www.ripmat.it/).
- **Math Graphics Engine:** Interactive applets powered by [GeoGebra®](https://www.geogebra.org). Made with GeoGebra® (International GeoGebra Institute / GeoGebra GmbH) and used under the [GeoGebra Non-Commercial License](https://www.geogebra.org/license).