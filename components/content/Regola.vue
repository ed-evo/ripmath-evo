<template>
  <ContentDoc
  :path="`_regole${src}`"
  v-slot="{ doc }"
  >
  <v-card color="grey-lighten-3" flat>
    <v-card-title>REGOLA: {{ doc.title }}</v-card-title>
    <v-expand-transition>
        <v-card-text class="text-indigo">
          <ContentRenderer :value="doc" :excerpt="!show" />
        </v-card-text>
    </v-expand-transition>
    <v-card-actions>
      <v-btn
        icon
        block
        tile
        class="text-left"
        @click="show = !show"
      >
        <v-icon>{{ show ? 'chevron-up' : 'chevron-down' }}</v-icon>
        <span v-if="!show">Se hai bisogno di aiuto per leggere la regola clicka qui</span>
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
    }
  })
const show = ref(false)
</script>
