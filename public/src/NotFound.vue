<template>
  <div class="notfound">
    <h1>404 - Page introuvable</h1>
    <p>La page que vous cherchez n’existe pas.</p>
    <a href="/">Retour à l’accueil</a>
  </div>
</template>

<style scoped>
.notfound {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f2f2f2; /* background spécifique */
  color: #333;
}
.notfound a {
  margin-top: 20px;
  color: #007bff;
  text-decoration: none;
}
.notfound a:hover {
  text-decoration: underline;
}
</style>
<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  document.title = "404 - Page introuvable"
})
</script>
