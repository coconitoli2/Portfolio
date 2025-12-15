import { onMounted } from 'vue'
onMounted(() => {
    document.title = "404 - Page introuvable"
})

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from './Home.vue'
import NotFound from './NotFound.vue'

// ça définit les routes
const routes = [
    { path: '/', component: Home },
    { path: '/:pathMatch(.*)*', component: NotFound } // 404
]

// Créer le router
const router = createRouter({
    history: createWebHistory(),
    routes
})

// Créer l'app Vue et utiliser le router
createApp(App).use(router).mount('#app')
