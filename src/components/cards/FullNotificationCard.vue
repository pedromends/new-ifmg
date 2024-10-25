<template lang="">
    <li @click="readNote()" class="flex max-sm:flex-col items-center gap-5 text-maingreen hover:text-white px-10 py-5 cursor-pointer transition duration-200 bg-lightgray hover:bg-maingreen border border-red-600 rounded-lg" :class="!read ? 'font-bold':''">
        <div class="w-full h-full flex gap-2 effect">
            <img v-if="!read" :src="require('@/assets/icons/dot.svg')" class="w-4" alt=""/>
            <img :src="require('@/assets/icons/info.svg')" class="w-5" alt="">
            <div class="">
                <h1 class="mb-2">Uma empresa nova fez contato!</h1>
                <p>A {{ externalCompany }} mandou uma mensagem:</p>
            </div>
        </div>
        <div class="w-full h-full flex">
            <div>
                <p class="mb-2">Área: {{ area }}</p>
                <p>Email: {{ email }}</p>
            </div>
        </div>
        <p>"{{ message }}"</p>
        
    </li>
</template>

<script>
import { readNotification } from "@/services/ContactService"
import router from '@/router/index.js'

export default {
    name: 'NotificationCard',
    // created() {
    //     console.log(this.read)
    // },
    props:{
        notificationId: Number,
        area: String,
        email: String,
        externalCompany: String,
        message: String,
        name: String,
        read: Boolean
    },
    data() {
        return {
            contact:{
                name: 'Prospecção Vale',
                email: 'vale@vale.com',
                externalCompany: 'Vale do Rio Doce',
                area: 'Mineração',
                message: 'Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.'
            }
        }
    },
    methods:{
        readNote(){
            readNotification(this.notificationId)
            .then((response) => {
                console.log(response.data)
            }).finally(() => {
                setInterval(() => {
                    router.push("/notifications").then(() => {
                        window.location.reload()
                    })
                }, 1500)
            });
        }
    }
}
</script>
<style lang="">
    
</style>