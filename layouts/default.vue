<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
    >
    <LysNav />
    </v-navigation-drawer>
    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <a v-for="path in originalPath" :key="path" :href="`https://www.ripmat.it${ path }`" target="_blank">{{ path }}</a>
    </v-app-bar>
    <v-main>
      <v-container>
        <NuxtPage />
      </v-container>
    </v-main>
    <v-footer>
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts" setup>

const route = useRoute()
const drawer = ref(true)
const originalPath = ref(null)

watch(
  () => route.path,
  async newPath => {
    const data = await queryCollection('content').path(newPath).first()
    const paths = data?.meta?.originalPath
    if (paths) {
      originalPath.value = Array.isArray(paths) ? paths : [paths]
    } else {
      originalPath.value = []
    }
  },
  { immediate: true }
)

</script>
