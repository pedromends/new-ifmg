<template lang="">
    <section class="p-3 bg-white">
        <SignOutSuccess/>
        <button v-if="!isLoggedIn" class="p-1 rounded-lg">
            <router-link to="/login" class="p-4 transition duration-200 text-maingreen tracking-wide text-sm hover:underline">LOGIN</router-link>
        </button>

        <button v-if="isLoggedIn" id="dropdownAvatarNameButton" data-dropdown-toggle="dropdownAvatarName"
            class="flex items-center gap-2 text-lg font-medium text-maingreen rounded-lg hover:bg-white hover:text-maingreen transition duration-200"
            type="button">
            <div v-if="loadImg">
                <img :src="info.img.code" class="w-10 h-10 rounded-full" alt="">
            </div>
            <p class="text-sm">{{ user.firstName }}</p>
            <svg class="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#2f9e40"
                viewBox="0 0 10 6">
                <path stroke="#2f9e40" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
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
                <button  @click="componentEdit()" v-if="isAdmin" to="/edit/" class="flex items-center px-3 hover:bg-lightgray transition duration-200">
                    <img :src="require('@/assets/icons/components.svg')" class="w-7 h-7" alt="">
                    <p class="text-start p-2 hover:text-black">Edição de Componentes</p>
                </button>
                <button @click="profile()" to="/profile" class="flex items-center px-3 hover:bg-lightgray transition duration-200">
                    <img :src="require('@/assets/icons/profile.svg')" class="w-5 h-5" alt="">
                    <p class="text-start px-4 py-2 hover:text-black">Perfil</p>
                </button>
                <button @click="settings()" to="/settings" class="flex items-center px-3 hover:bg-lightgray transition duration-200">
                    <img :src="require('@/assets/icons/settings.svg')" class="w-6 h-6" alt="">
                    <p class="text-start px-4 py-2 hover:text-black">Configurações</p>
                </button>
            </ul>
            <div class="py-2 hover:text-white hover:bg-red-600 transition duration-200">
                <button @click.prevent="logOut()" class="w-full px-4 py-2 text-sm">
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
                if(this.info.img != undefined){
                    this.loadImg = true
                }
            }).catch((e) => {
                console.log(e)
            })
        } 
    },
    components: {
        SignOutSuccess
    },
    data(){
        return {
            isLoggedIn: this.$store.getters.isLoggedIn,
            isAdmin: this.$store.getters.isAdmin,
            user: this.$store.getters.getUser,
            info: null,
            loadImg: false,
            componentEdit: () => {
                router.push({ path: '/edit' }).then(() => {
                    window.location.reload()
                })
            },
            profile: () => {
                router.push({ path: '/profile' }).then(() => {
                    window.location.reload()
                })
            },
            settings: () => {
                router.push({ path: '/settings' }).then(() => {
                    window.location.reload()
                })
            },
        }
    },
    methods: {
        ...mapMutations(["setUser", "setToken",  "setRole"]),
        showSignOutSuccess(){
            let div = document.getElementById("success-logout-alert")
            div.style.display = "flex"
        },
        logOut() {
            this.setUser(null);
            this.setToken(null);
            this.setRole('USER')
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