<template>
  <ContentDoc
  :path="`_regole${src}`"
  v-slot="{ doc }"
  >
  <v-card color="grey-lighten-3" flat>
    <v-card-title>{{ doc.title }}</v-card-title>
    <v-expand-transition>
        <v-card-text :class="[textColor]">
          <ContentRenderer :value="doc" :excerpt="doc.excerpt && !showMore" />
        </v-card-text>
    </v-expand-transition>
    <v-card-actions v-if="doc.excerpt">
      <v-btn
        icon
        block
        tile
        class="text-left"
        @click="showMore = !showMore"
      >
        <v-icon>{{ showMore ? 'chevron-up' : 'chevron-down' }}</v-icon>
        <span v-if="!showMore">Se hai bisogno di aiuto per leggere la regola clicka qui</span>
      </v-btn>
    </v-card-actions>
  </v-card>
  </ContentDoc>
</template>

<script lang="ts" setup>
defineProps({
    src: {
      type: String,
      required: true
    },
    textColor: {
      type: String,
      default: 'text-indigo'
    }
  })
const showMore = ref(false)
</script>
