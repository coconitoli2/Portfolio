<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <router-view v-slot="{ Component }">
    <component :is="Component" class="view" />
  </router-view>
</template>

<style>
/* Background global par défaut */
body {
  background: white;
  margin: 0;
}

/* Masquer le background pour 404 ou autres vues */
.view {
  min-height: 100vh;
}
</style>
