<template lang="">
    <section class="p-3 bg-white">
        <SignOutSuccess/>

        <button v-if="!isLoggedIn" class="p-1 rounded-lg">
            <router-link to="/login" class="p-4 transition duration-200 text-maingreen tracking-wide text-sm hover:underline">LOGIN</router-link>
        </button>

        <button v-if="isLoggedIn && info != null" id="dropdownAvatarNameButton" data-dropdown-toggle="dropdownAvatarName"
            class="flex items-center gap-2 text-lg font-medium text-maingreen rounded-lg hover:bg-white hover:text-maingreen transition duration-200"
            type="button">
            <img :src="info.img.code" class="w-12 h-12 rounded-full" alt="">
            <p class="text-sm">{{ user.firstName }}</p>
            <svg class="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#006666"
                viewBox="0 0 10 6">
                <path stroke="#006666" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 4 4 4-4" />
            </svg>
        </button>

        <!-- Dropdown menu -->
        <div v-if="isLoggedIn" class="z-10 hidden bg-white divide-y divide-maingreen rounded-lg shadow border-maingreen border"
            id="dropdownAvatarName">
            <div class="px-4 py-3 text-sm text-gray-900 dark:text-white bg-maingreen">
                <div class="font-bold text-white">Codemaster</div>
                <div class="truncate text-white">{{ user.email }}</div>
            </div>
            <ul class="flex flex-col py-2 text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton">
                <router-link to="/edit" class="transition duration-200 text-start px-4 py-2 hover:bg-lightgray hover:text-black">Edição de Componentes</router-link>
                <router-link to="/settings" class="transition duration-200 text-start px-4 py-2 hover:bg-lightgray hover:text-black">Configurações</router-link>
                <router-link to="/profile" class="transition duration-200 text-start px-4 py-2 hover:bg-lightgray hover:text-black">Perfil</router-link>
            </ul>
            <div class="py-2">
                <button @click.prevent="logOut()" class="w-full px-4 py-2 text-sm hover:text-white hover:bg-red-600 transition duration-200">
                    Sair
                </button>
            </div>
        </div>
    </section>
</template>

<script>
import SignOutSuccess from "@/components/alert/SignOutSuccess.vue";
import router from '@/router/index.js'
import { mapMutations } from "vuex";
import { getUserInfo } from '@/services/UserService'

export default {
    name: 'ProfileDropdown',
    created() {
        if(this.isLoggedIn){
            getUserInfo({email: this.user.email}).then((response) => {
                this.info = response.data
                console.log(this.info)
            }).catch((e) => {
                console.log(e)
                //this.showErrorLogin()
            })
        } 
    },
    components: {
        SignOutSuccess
    },
    data(){
        return {
            isLoggedIn: this.$store.getters.isLoggedIn,
            user: this.$store.getters.getUser,
            info: null
        }
    },
    methods: {
        ...mapMutations(["setUser", "setToken"]),
        showSignOutSuccess(){
            let div = document.getElementById("success-logout-alert")
            div.style.display = "flex"
        },
        logOut() {
            this.setUser(null);
            this.setToken(null);
            window.localStorage.setItem("refresh_token", null)
            document.cookie = `refresh_token = ${null}`
            this.showSignOutSuccess()
            setInterval(() => {
                router.push("/").then(() => {
                    window.location.reload()
                })
            }, 3000)
        }
    }
}
</script>
<style lang="">

</style>