<template>
  <ContentDoc>
    <template v-slot:not-found>
      <LysNav :query="{ where: [{ _path: path }] }" />
    </template>
  </ContentDoc>
</template>

<script lang="ts" setup>
const { path } = useRoute()
</script>