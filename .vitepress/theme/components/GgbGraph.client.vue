<template>
  <div class="ggb-wrapper" :style="{ width, height }">
    <div :id="containerId" ref="containerRef" class="ggb-container"></div>
    <!-- Render child components in a hidden container so they mount and run lifecycle hooks -->
    <div style="display: none;">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, provide, ref, watch } from 'vue'
import {
  loadGeoGebra,
  type GeoGebraVariant
} from '../../utils/loadGeoGebra'

// Define complete GeoGebra Applet API interface
export interface GeoGebraAPI {
  setCoordSystem(xMin: number, xMax: number, yMin: number, yMax: number): void
  evalCommand(cmd: string): boolean
  deleteObject(objName: string): void
  unregisterAddListener(listener: unknown): void
  [key: string]: unknown
}

interface Props {
  id?: string
  variant?: GeoGebraVariant
  appName?: 'graphing' | 'geometry' | '3d' | 'classic' | 'suite' | 'cas'
  xMin?: number
  xMax?: number
  yMin?: number
  yMax?: number
  width?: string
  height?: string
}

const props = withDefaults(defineProps<Props>(), {
  id: 'ggb-' + Math.random().toString(36).substring(2, 9),
  variant: 'web3d',
  appName: 'graphing',
  xMin: -5,
  xMax: 5,
  yMin: -5,
  yMax: 5,
  width: '100%',
  height: '400px'
})

const containerId = ref(props.id)
const containerRef = ref<HTMLDivElement | null>(null)
const ggbApi = ref<GeoGebraAPI | null>(null)

// Provide typed API reference to child components
provide('ggbApi', ggbApi)

const setupView = () => {
  if (!ggbApi.value) return
  ggbApi.value.setCoordSystem(props.xMin, props.xMax, props.yMin, props.yMax)
}

const initGgb = async () => {
  if (!containerRef.value) return

  try {
    const mathApps = await loadGeoGebra(props.variant)
    const el = containerRef.value

    console.log("ggb elt", el, el.clientWidth, el.clientHeight)

    const applet = mathApps.create({
      appName: props.appName,
      width: el.clientWidth || 600,
      height: el.clientHeight || 400,
      showToolBar: false,
      showAlgebraInput: false,
      showMenuBar: false,
      showResetIcon: false,
      enableShiftDragZoom: true
    })

    applet.inject(el)
    ggbApi.value = await applet.getAPI()
    setupView()
  } catch (err) {
    console.error('[GeoGebra] Failed to initialize board:', err)
  }
}

watch(
  () => [props.xMin, props.xMax, props.yMin, props.yMax],
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