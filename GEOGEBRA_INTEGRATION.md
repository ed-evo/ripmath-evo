# GeoGebra Web Integration Guide

> **Attribution Notice**
> Powered by [GeoGebra®](https://www.geogebra.org). Made with GeoGebra® (International GeoGebra Institute).  
> Subject to the [GeoGebra Non-Commercial License Agreement](https://www.geogebra.org/license).

---

## GeoGebra Web Engine CDN References (`.mjs`)

| Module Name | Engine Capability | CDN Reference URL |
| :--- | :--- | :--- |
| **`webSimple`** | Light 2D Canvas & Basic Functions | `https://www.geogebra.org/apps/latest/webSimple/webSimple.nocache.mjs` |
| **`web`** | Full 2D Suite & Algebra Views | `https://www.geogebra.org/apps/latest/web/web.nocache.mjs` |
| **`web3d`** | WebGL 3D Views, Spatial Geometry & CAS | `https://www.geogebra.org/apps/latest/web3d/web3d.nocache.mjs` |
| **`deployggb.js`** | Legacy Global Script Loader (Fallback) | `https://www.geogebra.org/apps/deployggb.js` |

---

### GeoGebra Web Engine CDN Modules (`.mjs`)

GeoGebra provides three main ES Module bundles depending on your application's feature and bundle size requirements:

---

#### 1. Light 2D Engine (`webSimple`)

> [!WARNING]
> Currently the script is completly empty

* **CDN URL:** `[https://www.geogebra.org/apps/latest/webSimple/webSimple.nocache.mjs](https://www.geogebra.org/apps/latest/webSimple/webSimple.nocache.mjs)`
* **Features:** Pure 2D graphing, coordinate geometry, point and line interactions, basic function evaluation.
* **Best Used For:** 2D interactive diagrams, basic plotting, high-speed documentation views, or applications where fast load times and low memory usage are key.

---

#### 2. Full 2D Engine (`web`)

> [!WARNING]
> Script loaded correctly but not rendering, the container is blanck and callbacks not called.
> No active docs/tutorials found.

* **CDN URL:** `[https://www.geogebra.org/apps/latest/web/web.nocache.mjs](https://www.geogebra.org/apps/latest/web/web.nocache.mjs)`
* **Features:** Complete 2D app support, interactive algebraic input views, geometric tools, construction toolbars, and spreadsheets.
* **Best Used For:** 2D math tools where users need full construction toolbars, table views, or input fields.

---

#### 3. 3D & Full Engine (`web3d`)

* **CDN URL:** `[https://www.geogebra.org/apps/latest/web3d/web3d.nocache.mjs](https://www.geogebra.org/apps/latest/web3d/web3d.nocache.mjs)`
* **Features:** WebGL 3D rendering, spatial vectors, 3D surface plots, multivariable calculus, CAS (Computer Algebra System) symbolic computing, and full GeoGebra Suite perspectives (`classic`, `3d`).
* **Best Used For:** 3D visualizations, spatial geometry, dynamic surface generation, or complete interactive math suites.

---

### Legacy Script CDN (Fallback)

* **CDN URL:** `[https://www.geogebra.org/apps/deployggb.js](https://www.geogebra.org/apps/deployggb.js)`
* **Features:** Loads the global `GGBApplet` constructor into `window`.
* **Best Used For:** Non-module scripts or traditional static HTML pages without modern build tools.

