<template lang="">
    <main class="flex justify-center items-center p-10 max-sm:p-2 max-sm:pt-10">
        <div class="flex flex-col gap-10 px-20 max-sm:px-2 w-full">
            <h1 class="text-4xl text-black font-semibold underline underline-offset-2 decoration-8 decoration-maingreen">Notificações</h1>
            <hr class="bg-red-600 h-1"/>
            <div class="flex flex-col gap-5 text-maingray">
                <div class=""
                    id="dropdownNotification">
                    <ul class="flex flex-col gap-5 divide divide-maingreen rounded-xl h-180 px-10 max-sm:px-2 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-maingreen">
                        <FullNotificationCard v-for="(notification, i) in notifications" :key="i"
                            :notificationId="notification.id" :area="notification.area"
                            :email="notification.email" :externalCompany="notification.externalCompany"
                            :message="notification.message" :name="notification.name" :read="notification.readed"/>
                    </ul>
                </div>
            </div>
        </div>
        <BackToTop />
    </main>
</template>

<script>
import BackToTop  from '@/components/buttons/BackToTop.vue';
import FullNotificationCard from "@/components/cards/FullNotificationCard"
import { getAll } from "@/services/ContactService"

export default {
    name: 'NotificationsPage',
    created() {
        getAll(this.contact).then((response) => {    
            this.notifications = response.data
            this.notiCount = this.notifications.length
            console.log(this.notifications)
        })
    },
    components: {
        BackToTop,
        FullNotificationCard
    },
    data(){
        return {
            isAdmin: this.$store.getters.isLoggedIn,
            user: this.$store.getters.getUser,
            notifications: null,
            notiCount: null
        }
    },
    props: {
    }
}
</script>
<style lang="">
    
</style>