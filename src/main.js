//import * as Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/index.js"
import AnimatedCounter from "vue-animated-counter"
import VueX from "vuex";


// ERRADO
// createApp(App).use(router)
// createApp(App).mount('#app')

// CERTO

//Vue.config.productionTip = false;

const store = new VueX.Store({
    state: {},
    mutations: {},
    actions: {},
    getters: {}
})

const app = createApp(App).use(router).use(VueX).use(store)
.component("AnimatedCounter", AnimatedCounter)

app.config.warnHandler = function () {
    return null
}

app.mount('#app')
