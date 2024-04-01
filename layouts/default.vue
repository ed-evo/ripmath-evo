<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
    >
    <LysNav />
    </v-navigation-drawer>
    <v-app-bar>
      <v-app-bar-nav-icon :path="route.path" @click="drawer = !drawer" />
      <a :href="`https://www.ripmat.it${ originalPath }`" target="_blank">{{ originalPath }}</a>
    </v-app-bar>
    <v-main>
      <v-container>
        <pre>{{  data }}</pre>
        <NuxtPage />
      </v-container>
    </v-main>
    <v-footer>
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script setup>
const route = useRoute()
const drawer = ref(true)
const originalPath = ref(null)

watch(
  () => route.path,
  async newPath => {
    const data = await queryContent(newPath).findOne()
    originalPath.value = data.originalPath
  },
  { immediate: true }
)

</script>