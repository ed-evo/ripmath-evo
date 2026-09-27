<template>
  <div class="ggb-wrapper">
    <div ref="containerRef" class="ggb-container"></div>
    <!-- Render child components in a hidden container so they mount and run lifecycle hooks -->
    <div style="display: none;">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, provide, ref, watch } from 'vue'
import {
  GeoGebraAppApi,
  GeoGebraAppletParameters,
  loadGeoGebra,
  type GeoGebraVariant
} from '../../utils/loadGeoGebra'

interface Props {
  variant?: GeoGebraVariant
  appParams?: GeoGebraAppletParameters
  xMin?: number
  xMax?: number
  yMin?: number
  yMax?: number
  width?: string
  height?: string
}

const {
  variant = 'web3d',
  xMin = -5,
  xMax = 5,
  yMin = -5,
  yMax = 5,
  appParams = {}
} = defineProps<Props>()

const containerRef = ref<HTMLDivElement | null>(null)
const ggbApi = ref<GeoGebraAppApi | null>(null)

// Provide typed API reference to child components
provide('ggbApi', ggbApi)

const setupView = () => {
  const api = ggbApi.value
  if (!api) return
  api.setCoordSystem(xMin, xMax, yMin, yMax)
  api.setGraphicsOptions(1, { gridType: 4 })
}

const initGgb = async () => {
  if (!containerRef.value) return

  try {
    const mathApps = await loadGeoGebra(variant)
    const el = containerRef.value

    console.log("ggb elt", el, el.clientWidth, el.clientHeight)

    const applet = mathApps.create({
      element: el,
      width: el.clientWidth || 600,
      height: el.clientHeight || 400,
      // component default override
      perspective: 'G',
      enable3D: false,
      borderColor: 'none',
      // custom
      ...appParams
    })

    ggbApi.value = await applet.getAPI()
    setupView()
  } catch (err) {
    console.error('[GeoGebra] Failed to initialize board:', err)
  }
}

watch(
  () => [xMin, xMax, yMin, yMax],
  setupView
)

onMounted(async () => {
  await initGgb()
})

onUnmounted(() => {
  if (containerRef.value) {
    containerRef.value.innerHTML = ''
  }
  ggbApi.value = null
})
</script>

<style scoped>
.ggb-wrapper {
  margin: 1.5rem 0;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg-soft);
}
.ggb-container {
  width: 100%;
  height: 100%;
}
</style>