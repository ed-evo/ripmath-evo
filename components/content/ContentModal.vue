<template>
  <ContentDoc
  :path="`${src}`"
  v-slot="{ doc }"
  >
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
          <ContentRenderer :value="doc" :excerpt="doc.excerpt && !show" />
        </v-card-text>
        <v-card-actions>
          <v-btn
            v-if="doc.excerpt"
            icon
            block
            tile
            class="text-left"
            @click="show = !show"
          >
            <v-icon>{{ show ? 'chevron-up' : 'chevron-down' }}</v-icon>
            <span v-if="!show">Espandi</span>
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
  </ContentDoc>
</template>

<script lang="ts" setup>
defineProps({
    src: {
      type: String,
      required: true
    },
    activatorTitle: {
      type: String
    }
  })
const show = ref(false)
</script>
