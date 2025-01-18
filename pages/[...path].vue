<template>
  <ContentRenderer v-if="page" :value="page" />
  <div v-else>No Content</div>
</template>

<script lang="ts" setup>
console.log('page')
const { path } = useRoute()
const { data: page } = await useAsyncData('content', () =>
  queryCollection('content').path(path).first()
)
</script>
