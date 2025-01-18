<template>
  <v-card color="grey-lighten-3" flat>
    <v-card-title>{{ doc?.title }}</v-card-title>
    <v-expand-transition>
        <v-card-text :class="[textColor]">
          <ContentRenderer v-if="doc" :value="doc" :excerpt="doc?.excerpt && !showMore" />
        </v-card-text>
    </v-expand-transition>
    <v-card-actions v-if="doc?.excerpt">
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
</template>

<script lang="ts" setup>
const props = defineProps({
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

const { data: doc } = await useAsyncData('inset-content', () =>
  queryCollection('content').path(props.src).first(),
  { watch: () => props.src }
)
</script>
