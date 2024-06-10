<template lang="">
    <section v-if="isAdmin" class="p-3 bg-white rounded-lg hover:bg-maingray transition duration-200">
        <button id="dropdownAvatarNameButton" data-dropdown-toggle="dropdownNotification"
            class="flex items-center rounded-lg relative"
            type="button">
            <img :src="require('@/assets/icons/bell.svg')" class="w-7 mx-1" alt=""/>
            <img v-if="notification > 0" :src="require('@/assets/icons/dot.svg')" class="w-6 absolute left-6 top-4" alt=""/>
        </button>

        <!-- Dropdown menu -->
        <div class="z-10 hidden bg-white divide-y divide-maingreen rounded-xl shadow border border-maingreen"
            id="dropdownNotification">
            <ul class="flex flex-col gap-1 divide divide-maingreen rounded-xl">
                <li class="flex flex-col effect text-maingreen hover:text-white px-10 py-2 cursor-pointer rounded-t-xl transition duration-200 hover:bg-red-500">
                    <div class="flex items-center gap-2 effect">
                        <img :src="require('@/assets/icons/info.svg')" class="w-5" alt="">
                        <h1>Uma empresa nova fez contato!</h1>
                    </div>
                    <p>A Empresa Vale do Rio Doce mandou uma mensagem! Clique para saber mais!</p>
                </li>
                <li class="flex flex-col effect text-maingreen hover:text-white px-10 py-2 cursor-pointer transition duration-200 hover:bg-red-500">
                    <div class="flex items-center gap-2 effect">
                        <img :src="require('@/assets/icons/info.svg')" class="w-5" alt="">
                        <h1>Uma empresa nova fez contato!</h1>
                    </div>
                    <p>A Empresa Vale do Rio Doce mandou uma mensagem! Clique para saber mais!</p>
                </li>
                <li class="flex flex-col effect text-maingreen hover:text-white px-10 py-2 cursor-pointer transition duration-200 hover:bg-red-500">
                    <div class="flex items-center gap-2 effect">
                        <img :src="require('@/assets/icons/info.svg')" class="w-5" alt="">
                        <h1>Uma empresa nova fez contato!</h1>
                    </div>
                    <p>A Empresa Vale do Rio Doce mandou uma mensagem! Clique para saber mais!</p>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
//import router from '@/router/index.js'
import { mapMutations } from "vuex";

export default {
    name: 'NotificationDropdown',
    // created() {
    //     console.log(this.user)
    // },
    components: {
    },
    data(){
        return {
            isAdmin: this.$store.getters.isLoggedIn,
            user: this.$store.getters.getUser,
            notification: 0
        }
    },
    methods: {
        ...mapMutations(["setUser", "setToken"]),
        showSignOutSuccess(){
            let div = document.getElementById("success-logout-alert")
            div.style.display = "flex"
        },
        logOut(){ // TODO: passar para botão de logout na navbar depois
            this.setUser(null);
            this.setToken(null);
            window.localStorage.setItem("refresh_token", null)
            document.cookie = `refresh_token = ${null}`
            this.showSignOutSuccess()
            // setInterval(() => {
            //     router.push("/").then(() => {
            //         window.location.reload()
            //     })
            // }, 3000)
        }
    }
}
</script>
<style scoped>
.effect:hover img{
        fill: white;
}
</style>