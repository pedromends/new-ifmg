<template lang="">
    <li @click="readNote()" class="flex flex-col effect text-maingreen hover:text-white px-10 py-2 cursor-pointer transition duration-200 hover:bg-red-500">
        <div class="flex items-center gap-2 effect">
            <img v-if="!readed" :src="require('@/assets/icons/dot.svg')" class="w-4" alt=""/>
            <img :src="require('@/assets/icons/info.svg')" class="w-5" alt="">
            <h1>Uma empresa nova fez contato!</h1>
        </div>
        <p>A {{ companyName }} mandou uma mensagem! Clique para saber mais!</p>
    </li>
</template>

<script>
import { readNotification } from "@/services/ContactService"
import router from '@/router/index.js'

export default {
    name: 'NotificationCard',
    props:{
        companyName: String,
        notificationId: Number,
        readed: Number
    },
    data() {
        return {
            contact:{
                name: 'Prospecção Vale',
                email: 'vale@vale.com',
                externalCompany: 'Vale do Rio Doce',
                area: 'Mineração',
                message: 'Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.'
            },
        }
    },
    methods:{
        readNote(){
            readNotification(this.notificationId).then((response) => {
                console.log(response.data)
            }).finally(() => {
                router.push("/notifications").then(() => {
                    window.location.reload()
                })
            });
        }
    }
}
</script>
<style lang="">
    
</style>