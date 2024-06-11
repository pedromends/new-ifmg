<template lang="">
    <li @click="readNote()" class="flex flex-col gap-5 text-maingreen px-10 py-5 cursor-pointer transition duration-200 bg-lightgray border border-red-600 rounded-lg">
        <div class="flex items-center gap-2 effect">
            <img :src="require('@/assets/icons/info.svg')" class="w-5" alt="">
            <h1>Uma empresa nova fez contato!</h1>
            <img v-if="!read" :src="require('@/assets/icons/dot.svg')" class="w-4" alt=""/>
        </div>
        <p>A Empresa de {{ area }}, {{ externalCompany }} mandou uma mensagem:</p>
        <p class="w-2/5">{{ message }}</p>
        <p>{{ email }}</p>
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
                }, 3000)
            });
        }
    }
}
</script>
<style lang="">
    
</style>