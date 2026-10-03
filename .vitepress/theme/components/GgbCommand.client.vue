<template>
  <div ref="contentRef" style="display: none;">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { inject, onMounted, onUnmounted, ref, watch, nextTick, type Ref } from 'vue'
import { GeoGebraAppApi } from '../../utils/loadGeoGebra';

interface Props {
  color?: string
  filling?: number
  thickness?: number | string
  pointStyle?: number | string
}

const {
  color = '',
  filling = undefined,
  thickness = '',
  pointStyle = '',
} = defineProps<Props>()

const contentRef = ref<HTMLDivElement | null>(null)
// Fallback to empty ref if not provided
const ggbApi = inject<Ref<GeoGebraAppApi | null>>('ggbApi', ref(null))
let createdObjName: string | null = null

const executeCommand = async () => {
  await nextTick() // Wait for Vue to render slot content into the hidden div
  console.log("execute")

  const api = ggbApi.value
  if (!api || !contentRef.value) {
    console.log("No api, no ref", api, contentRef.value)
    return
  }

  const cmdText = contentRef.value.textContent?.trim()
  if (!cmdText) return

  // Delete previous object if re-executing
  if (createdObjName) {
    try {
      api.deleteObject(createdObjName)
    } catch (_) {
      // Ignore if object was manually deleted
    }
    createdObjName = null
  }

  // 1. Evaluate command in GeoGebra engine
  const success = api.evalCommand(cmdText)

  // 2. Extract object identifier (e.g. "f" from "f(x) = ...", "f: y = x^2", or "A = (1,2)")
  const match = cmdText.match(/^([a-zA-Z0-9_]+)\s*(?:[:=(]|$)/)
  if (match) {
    createdObjName = match[1]

    // 3. Apply optional styling
    if (color) {
      api.evalCommand(`SetColor(${createdObjName}, "${color}")`)
    }
    if (filling) {
      api.evalCommand(`SetFilling(${createdObjName}, ${filling})`)
    }
    if (thickness !== '') {
      api.evalCommand(`SetLineThickness(${createdObjName}, ${thickness})`)
    }
    if (pointStyle !== '') {
      api.evalCommand(`SetPointStyle(${createdObjName}, ${pointStyle})`)
    }
  }
}

const cleanup = () => {
  if (ggbApi.value && createdObjName) {
    try {
      ggbApi.value.deleteObject(createdObjName)
    } catch (_) {}
    createdObjName = null
  }
}

// Watch for ggbApi initialization
watch(
  ggbApi,
  (api) => {
    if (api) {
      executeCommand()
    }
  },
  { immediate: true }
)

// Watch for prop changes (e.g., dynamic color adjustments from parent)
watch(
  () => [color, filling, thickness, pointStyle],
  () => {
    executeCommand()
  }
)

onMounted(() => {
  executeCommand()
})

onUnmounted(() => {
  cleanup()
})
</script>