<template lang="">
    <section v-if="isAdmin" class="p-3 hover:bg-govblue rounded-lg transition duration-200">
        <button id="dropdownAvatarNameButton" data-dropdown-toggle="dropdownNotification"
            class="flex items-center rounded-lg relative"
            type="button">
            <img :src="require('@/assets/icons/bell.svg')" class="w-7 mx-1" alt=""/>
            <img v-if="notiCount > 0" :src="require('@/assets/icons/dot.svg')" class="w-4 absolute right-6 bottom-4" alt=""/>
        </button>

        <!-- Dropdown menu -->
        <div class="z-10 hidden bg-white divide-y divide-maingreen rounded-xl shadow border border-maingreen"
            id="dropdownNotification">
            <ul class="flex flex-col gap-1 divide divide-maingreen rounded-xl max-w-132 max-h-96 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-maingreen">
                <NotificationCard v-for="(notification, i) in notifications" :key="i" :companyName="notification.externalCompany" :notificationId="notification.id" :readed="notification.readed"/>
            </ul>
        </div>
    </section>
</template>

<script>
import router from '@/router/index.js'
import NotificationCard from "@/components/cards/NotificationCard"
import { listContacts } from "@/services/ContactService"
import { mapMutations } from "vuex";

export default {
    name: 'NotificationDropdown',
    created() {
        if(this.isAdmin){
            listContacts(this.contact).then((response) => {    
                this.notifications = response.data
                this.notiCount = this.notifications.length
            })
        }
    },
    components: {
        NotificationCard
    },
    data(){
        return {
            isAdmin: this.$store.getters.isAdmin,
            user: this.$store.getters.getUser,
            notifications: null,
            notiCount: null
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
            setInterval(() => {
                router.push("/").then(() => {
                    window.location.reload()
                })
            }, 3000)
        }
    }
}
</script>
<style scoped>
.effect:hover img{
        fill: white;
}
</style>