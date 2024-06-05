//import * as Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/index.js"
import AnimatedCounter from "vue-animated-counter"
import { createStore } from 'vuex';

const store = new createStore({
    state: {
        user:null,
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
    actions: {},
    getters: {
        isLoggedIn(state){
            return state.token != null ? true : false// !! stand for return true or false
        }, 
        getUser(state){
            return state.user
        },
        getToken(state){
            return state.token
        },
    }
})

const app = createApp(App)
.use(router).use(store)
.component("AnimatedCounter", AnimatedCounter)

app.config.warnHandler = function () {
    return null
}

app.mount('#app')
