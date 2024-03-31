<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
    >
    <LysNav />
    </v-navigation-drawer>
    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <!-- <v-toolbar-title v-text="title" /> -->
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

<script setup>
const drawer = ref(true)
</script>