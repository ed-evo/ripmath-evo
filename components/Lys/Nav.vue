<template>
  <ContentNavigation
  v-slot="{ navigation }"
  >
    <v-list v-model:opened="open">
      <lys-nav-item
        v-for="item in navigation"
        :key="item._path"
        :item="item"
        as="lys-nav-item"
      />
    </v-list>
  </ContentNavigation>
</template>

<script lang="ts" setup>
defineProps({
  query: {
    type: Object
  }
})
const open = ref<string[]>([])
</script>
