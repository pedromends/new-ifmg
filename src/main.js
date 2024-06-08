//import * as Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/index.js"
import AnimatedCounter from "vue-animated-counter"
import { createStore } from 'vuex';
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
  })

const store = new createStore({
    state: {
        user: null,
        token: null
    },
    mutations: {
        setUser(state, user){
            state.user = user    
        },
        setToken(state, token){
            state.token = token
        },
    },
    plugins: [vuexLocal.plugin],
    actions: {},
    getters: {
        isLoggedIn(state){
            return state.token != null ? true : false// !! stand for return true or false
        }, // do jeito que tá se o usuário colocar qualquer coisa como token, vai dar acesso permitido, proteger isso depois
        getUser(state){
            return state.user
        },
        getToken(state){
            return state.token
        },
    }
})

const app = createApp(App)
.use(router).use(store).use(vuexLocal)
.component("AnimatedCounter", AnimatedCounter)

app.config.warnHandler = function () {
    return null
}

app.mount('#app')
