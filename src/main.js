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
        token: null,
        role: null,
        clients: false,
    },
    mutations: {
        setUser(state, user) {
            state.user = user
        },
        setToken(state, token) {
            state.token = token
        },
        setRole(state, role) {
            state.role = role
        },
        setClients(state, focus) {
            state.clients = focus
        },
    },
    plugins: [vuexLocal.plugin],
    getters: {
        isLoggedIn(state) {
            return state.token != null ? true : false// !! stand for return true or false
        },
        getUser(state) {
            return state.user
        },
        getToken(state) {
            return state.token
        },
        isAdmin(state) {
            return state.role == "CODEMASTER" || state.role == "ADMIN" ? true : false
        },
        isClient(state) {
            return state.clients
        },
    },
})

const app = createApp(App)
    .use(router).use(store).use(vuexLocal)
    .component("AnimatedCounter", AnimatedCounter)

app.config.warnHandler = function () {
    return null
}

app.mount('#app')
