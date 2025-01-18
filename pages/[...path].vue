<template>
  <ContentRenderer v-if="page" :value="page" />
  <div v-else>No Content</div>
</template>

<script lang="ts" setup>
const route = useRoute()
const page = ref(null)
watch(
  () => route.path,
  async newPath => {
    page.value = await queryCollection('content').path(newPath).first()
  },
  { immediate: true }
)
</script>
