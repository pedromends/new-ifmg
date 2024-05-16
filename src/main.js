import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/index.js"
import AnimatedCounter from "vue-animated-counter"

// ERRADO
// createApp(App).use(router)
// createApp(App).mount('#app')

// CERTO
createApp(App).use(router).component("AnimatedCounter", AnimatedCounter).mount('#app')
