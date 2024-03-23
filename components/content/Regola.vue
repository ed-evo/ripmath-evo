<template>
  <ContentDoc
  :path="src"
  v-slot="{ doc }"
  >
  <v-card color="grey-lighten-3" flat>
    <v-card-title>REGOLA:</v-card-title>
    <v-card-text class="text-indigo">
      {{ doc.description }}
    </v-card-text>
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

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          <ContentRenderer :value="doc" />
        </v-card-text>
      </div>
    </v-expand-transition>
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
