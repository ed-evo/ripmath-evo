<template>
  <v-dialog>
    <template v-slot:activator="{ props: activatorProps}">
      <v-btn
      v-bind="activatorProps"
      color="surface-variant"
      :text="activatorTitle || doc.title"
      variant="text"
      size="small"
      ></v-btn>
    </template>
    <template v-slot:default="{ isActive }">
      <v-card color="grey-lighten-3" flat>
        <v-card-text>
          <ContentRenderer :value="doc" :excerpt="doc.excerpt && !showMore" />
        </v-card-text>
        <v-card-actions>
          <v-btn
            v-if="doc.excerpt"
            icon
            block
            tile
            class="text-left"
            @click="showMore = !showMore"
          >
            <v-icon>{{ showMore ? 'chevron-up' : 'chevron-down' }}</v-icon>
            <span v-if="!showMore">Espandi</span>
          </v-btn>
          <v-btn
            icon
            block
            tile
            class="text-left"
            @click="isActive.value = false"
          >
            <span>Chiudi</span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script lang="ts" setup>
const props = defineProps({
    src: {
      type: String,
      required: true
    },
    activatorTitle: {
      type: String
    }
  })
const showMore = ref(false)

const { data: doc } = await useAsyncData('inset-content', () =>
  queryCollection('content').path(props.src).first(),
  { watch: () => props.src }
)
</script>
