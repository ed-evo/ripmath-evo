<template>
  <div ref="contentRef" style="display: none;">
    <slot />
  </div>
</template>

<script setup>
import { inject, onMounted, onUnmounted, ref, watch } from 'vue'

const props = defineProps({
  color: { type: String, default: '' },
  thickness: { type: [Number, String], default: '' },
  pointStyle: { type: [Number, String], default: '' }
})

const contentRef = ref(null)
const ggbApi = inject('ggbApi', ref(null))
let createdObjName = null

const executeCommand = () => {
  const api = ggbApi.value
  if (!api || !contentRef.value) return

  const cmdText = contentRef.value.textContent?.trim()
  if (!cmdText) return

  // Delete previous object if we are re-executing
  if (createdObjName) {
    api.deleteObject(createdObjName)
    createdObjName = null
  }

  // 1. Evaluate the main command directly
  api.evalCommand(cmdText)

  // 2. Extract object identifier (e.g. "f" from "f(x) = ...", "A" from "A = ...")
  const match = cmdText.match(/^([a-zA-Z0-9_]+)/)
  if (match) {
    createdObjName = match[1]

    // 3. Self-apply styles directly
    if (props.color) {
      api.evalCommand(`SetColor(${createdObjName}, "${props.color}")`)
    }
    if (props.thickness) {
      api.evalCommand(`SetLineThickness(${createdObjName}, ${props.thickness})`)
    }
    if (props.pointStyle !== '') {
      api.evalCommand(`SetPointStyle(${createdObjName}, ${props.pointStyle})`)
    }
  }
}

const cleanup = () => {
  if (ggbApi.value && createdObjName) {
    ggbApi.value.deleteObject(createdObjName)
    createdObjName = null
  }
}

// Execute as soon as GeoGebra API becomes ready
watch(ggbApi, (api) => {
  if (api) executeCommand()
}, { immediate: true })

// Watch for prop changes (e.g., dynamic color updates)
watch(() => [props.color, props.thickness, props.pointStyle], () => {
  executeCommand()
})

onMounted(() => {
  if (ggbApi.value) executeCommand()
})

onUnmounted(() => {
  cleanup()
})
</script>