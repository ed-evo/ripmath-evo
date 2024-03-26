<template>
  <v-list-group
  v-if="item.children"
  :value="item._path"

  >
    <template v-slot:activator="{ props, isOpen }">
      <v-list-item
        v-bind="props"
        :title="item.title"
        variant="tonal"
      >
        <template v-slot:prepend>
          <v-btn
          :to="item._path"
          icon="fas fa-arrow-up-right-from-square"
          size="x-small"
          variant="plain"
          :disabled="path === item._path"
          @click.native.stop
          ></v-btn>
        </template>
      </v-list-item>
    </template>
    <lys-nav-item
      v-for="child in item.children"
      :key="child._path"
      :item="child"
      class="pa-0"
    />
  </v-list-group>
  <v-list-item v-else
    :to="item._path"
    :title="item.title"
    :active="path === item._path"
  />
</template>

<script lang="ts" setup>
defineProps({
  item: {
      type: Object,
      required: true
    }
})
const route = useRoute()
const path = computed(() => route.path )
</script>

<style lang="scss" scoped>
.v-list {
  & .v-list-group {
    & .v-list-item {
      &.v-list-group__header {
        padding-inline-start: 16px !important;
      }
      padding-inline-start: 48px !important;
    }
  }
}


</style>