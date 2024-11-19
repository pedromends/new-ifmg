<template lang="">
    <section class="bg-white h-full">
        <TOTOAlert :id="'alert-logout'" v-if="showLogoutSuccess" :title="'Saiu!'"
            :message="'Logout efetuado com sucesso!'" :bg_color="'bg-maingreen'" :duration="3000" />
            
        <button v-if="!isLoggedIn" class="h-full flex items-center gap-2 text-lg font-medium  bg-white hover:text-maingreen transition duration-200 px-4">
            <router-link to="/login"
                class="p-4 transition duration-200 text-maingreen tracking-wide text-sm hover:underline">LOGIN</router-link>
        </button>
        <v-menu location="start" v-if="loaded" transition="slide-x-transition">
            <template v-slot:activator="{ props }">
                <button v-if="isLoggedIn" v-bind="props" rounded="0"
                    class="h-full flex items-center gap-2 text-lg font-medium  bg-white hover:text-maingreen transition duration-200 px-4"
                    type="button">
                    <div v-if="loadImg">
                        <img :src="info.img.code" class="w-10 h-10 rounded-full" alt="">
                    </div>
                    <div class="flex gap-4 items-center">
                        <p class="text-sm tracking-normal text-maingreen">{{ info.firstName }}</p>
                        <svg class="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#2f9e40"
                            viewBox="0 0 10 6">
                            <path stroke="#2f9e40" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 1 4 4 4-4" />
                        </svg>
                    </div>
                </button>
            </template>

            <v-list class="mt-4 divide-y-2 divide-maingreen">
                <div>
                    <v-list-item class="px-4 py-3 text-sm text-gray-900 dark:text-white bg-maingreen">
                        <div class="font-bold text-white">{{ info.role }}</div>
                        <div class="truncate text-white">{{ info.firstName }}</div>
                    </v-list-item>
                    <v-list-item class="flex items-center px-3 hover:bg-lightgray transition duration-200">
                        <a href="/editar" v-if="isAdmin"  class="flex items-center">
                            <img :src="require('@/assets/icons/components.svg')" class="w-7 h-7" alt="">
                            <p class="text-start p-2 hover:text-black">Edição de Componentes</p>
                        </a>
                    </v-list-item>
                    <v-list-item class="flex items-center px-3 hover:bg-lightgray transition duration-200">
                        <a href="/perfil" class="flex items-center">
                            <img :src="require('@/assets/icons/profile.svg')" class="w-5 h-5" alt="">
                            <p class="text-start px-4 py-2 hover:text-black">Perfil</p>
                        </a>
                    </v-list-item>
                    <v-list-item class="flex items-center px-3 hover:bg-lightgray transition duration-200">
                        <a href="/configuracoes" class="flex items-center">
                            <img :src="require('@/assets/icons/settings.svg')" class="w-6 h-6" alt="">
                            <p class="text-start px-4 py-2 hover:text-black">Configurações</p>
                        </a>
                    </v-list-item>
                </div>
                <v-list-item class="py-2 hover:text-white hover:bg-red-600 transition duration-200">
                    <button @click.prevent="logOut()" class="w-full px-4 py-2 text-sm">
                        Sair
                    </button>
                </v-list-item>
            </v-list>
        </v-menu>
    </section>
</template>

<script>
    import TOTOAlert from "@/components/alert/TOTOAlert.vue";
    import router from '@/router/index.js'
    import { mapMutations } from "vuex";
    import { getUserInfo } from '@/services/UserService'

    export default {
        name: 'ProfileDropdown',
        mounted() {
            if (this.isLoggedIn) {
                getUserInfo({ email: this.user }).then((response) => {
                    this.info = response.data
                    if (this.info.img != undefined) {
                        this.loadImg = true
                    }
                    this.loaded = true
                }).catch((e) => {
                    if (e.status == 403) {
                        console.log(e)
                        //this.logOut()
                    }
                })
            }
        },
        components: {
            TOTOAlert
        },
        data() {
            return {
                isLoggedIn: this.$store.getters.isLoggedIn,
                isAdmin: this.$store.getters.isAdmin,
                user: this.$store.getters.getUser,
                showLogoutSuccess: false,
                info: null,
                loaded: false,
                loadImg: false,
                items: [
                    { title: 'Click Me' },
                    { title: 'Click Me' },
                    { title: 'Click Me' },
                    { title: 'Click Me 2' },
                ],
                locations: [
                    'top',
                    'bottom',
                    'start',
                    'end',
                    'center',
                ],
                location: 'end',
                componentEdit: () => {
                    router.push({ path: '/editar' }).then(() => {
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
            ...mapMutations([
                "setUser",
                "setToken",
                "setRole",
                "setAlert"
            ]),
            logOut() {
                this.setUser(null);
                this.setToken(null);
                this.setRole('USER');

                window.localStorage.setItem("refresh_token", null)
                document.cookie = `refresh_token = ${null}`

                this.$store.commit('setAlert', true)
                this.showLogoutSuccess = true
                setInterval(() => {
                    this.showLogoutSuccess = false
                    window.location.reload()
                }, 4000)
            
            }
        }
    }
</script>

<style scoped>
    .v-list {
        padding: 0;
        border: #2F9E40 solid 2px;
        border-radius: 4px;
        /* ou qualquer valor desejado */
    }

    .v-btn.v-btn--density-default {
        height: 97%;
        /* ou um valor específico desejado */
    }

    .v-btn--variant-elevated {
        box-shadow: none;
    }
</style>

<!-- <section class="bg-white h-full p-2">
        <SignOutSuccess />
        <button v-if="!isLoggedIn" class="p-4 rounded-lg">
            <router-link to="/login"
                class="p-4 transition duration-200 text-maingreen tracking-wide text-sm hover:underline">LOGIN</router-link>
        </button>

        <div v-if="loaded">
            <button v-if="isLoggedIn" id="dropdownAvatarNameButton" data-dropdown-toggle="dropdownAvatarName"
                class="flex items-center gap-2 text-lg font-medium text-maingreen rounded-lg hover:bg-white hover:text-maingreen transition duration-200 m-3"
                type="button">
                <div v-if="loadImg">
                    <img :src="info.img.code" class="w-10 h-10 rounded-full" alt="">
                </div>
                <p class="text-sm">{{ info.firstName }}</p>
                <svg class="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#2f9e40"
                    viewBox="0 0 10 6">
                    <path stroke="#2f9e40" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 1 4 4 4-4" />
                </svg>
            </button>
    
            <div v-if="isLoggedIn"
                class="z-10 hidden bg-white divide-y divide-maingreen rounded-lg shadow border-maingreen border"
                id="dropdownAvatarName">
                <div class="px-4 py-3 text-sm text-gray-900 dark:text-white bg-maingreen">
                    <div class="font-bold text-white">{{ info.role }}</div>
                    <div class="truncate text-white">{{ info.firstName }}</div>
                </div>
                <ul class="flex flex-col py-2 text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton">
                    <button @click="componentEdit()" v-if="isAdmin" to="/editar/"
                        class="flex items-center px-3 hover:bg-lightgray transition duration-200">
                        <img :src="require('@/assets/icons/components.svg')" class="w-7 h-7" alt="">
                        <p class="text-start p-2 hover:text-black">Edição de Componentes</p>
                    </button>
                    <button @click="profile()" to="/profile"
                        class="flex items-center px-3 hover:bg-lightgray transition duration-200">
                        <img :src="require('@/assets/icons/profile.svg')" class="w-5 h-5" alt="">
                        <p class="text-start px-4 py-2 hover:text-black">Perfil</p>
                    </button>
                    <button @click="settings()" to="/settings"
                        class="flex items-center px-3 hover:bg-lightgray transition duration-200">
                        <img :src="require('@/assets/icons/settings.svg')" class="w-6 h-6" alt="">
                        <p class="text-start px-4 py-2 hover:text-black">Configurações</p>
                    </button>
                </ul>
                <div >
                    <button @click.prevent="logOut()" class="w-full px-4 py-2 text-sm">
                        Sair
                    </button>
                </div>
            </div>
        </div>
    </section> -->