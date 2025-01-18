<template>
    <v-list v-model:opened="open" nav>
      <lys-nav-item
        v-for="item in navigation"
        :key="item.path"
        :item="item"
      />
    </v-list>
</template>

<script lang="ts" setup>
const open = ref<string[]>([])
const { data: navigation } = await useAsyncData('navigation', () => queryCollectionNavigation('content'))
</script>
