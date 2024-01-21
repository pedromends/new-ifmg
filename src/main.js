import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/index.js"

// ERRADO
// createApp(App).use(router)
// createApp(App).mount('#app')

// CERTO
createApp(App).use(router).mount('#app')
