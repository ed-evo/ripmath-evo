<template>
  <ClientOnly>
    <div class="ggb-wrapper" :style="{ width, height }">
      <div :id="containerId" class="ggb-container"></div>
      <!-- Render child components in a hidden div so they mount and run lifecycle hooks -->
      <div style="display: none;">
        <slot />
      </div>
    </div>
  </ClientOnly>
</template>

<script setup>
import { onMounted, onUnmounted, provide, ref, watch } from 'vue'

const props = defineProps({
  id: {
    type: String,
    default: () => 'ggb-' + Math.random().toString(36).substring(2, 9)
  },
  xMin: { type: Number, default: -5 },
  xMax: { type: Number, default: 5 },
  yMin: { type: Number, default: -5 },
  yMax: { type: Number, default: 5 },
  width: { type: String, default: '100%' },
  height: { type: String, default: '400px' }
})

const containerId = ref(props.id)
const ggbApi = ref(null)

// Provide the reactive API reference to all child components
provide('ggbApi', ggbApi)

const setupView = () => {
  if (!ggbApi.value) return
  ggbApi.value.setCoordSystem(props.xMin, props.xMax, props.yMin, props.yMax)
}

const loadScript = () => {
  return new Promise((resolve, reject) => {
    if (window.GGBApplet) return resolve()
    const script = document.createElement('script')
    script.src = 'https://www.geogebra.org/apps/deployggb.js'
    script.async = true
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('Failed to load GeoGebra script.'))
    document.head.appendChild(script)
  })
}

const initGgb = async () => {
  try {
    await loadScript()
    const el = document.getElementById(containerId.value)
    if (!el) return

    const params = {
      appName: 'graphing',
      width: el.clientWidth || 600,
      height: el.clientHeight || 400,
      showToolBar: false,
      showAlgebraInput: false,
      showMenuBar: false,
      showResetIcon: false,
      enableShiftDragZoom: true,
      appletOnLoad(api) {
        ggbApi.value = api
        setupView()
      }
    }

    const applet = new window.GGBApplet(params, true)
    applet.inject(containerId.value)
  } catch (err) {
    console.error(err)
  }
}

watch(() => [props.xMin, props.xMax, props.yMin, props.yMax], setupView)

onMounted(initGgb)

onUnmounted(() => {
  if (ggbApi.value) {
    const el = document.getElementById(containerId.value)
    if (el) el.innerHTML = ''
  }
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