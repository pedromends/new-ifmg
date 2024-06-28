<template lang="">
    <div class="flex flex-col gap-10 justify-center items-center p-16 max-lg:p-2 max-lg:mt-24">
        <form class="flex flex-col gap-5 p-5 max-lg:gap-3">
            <ContactSent />
            <div class="flex flex-col w-96 max-lg:w-auto">
                <label class="text-maingray text-sm">Pergunta</label>
                <input required v-model="faq.question" type="text" class="rounded-lg border-1 border-gray-1 max-lg:h-8">
            </div>
            <div class="flex flex-col w-96 max-lg:w-auto">
                <label class="text-maingray text-sm">Resposta</label>
                <input required v-model="faq.answer" type="text" class="rounded-lg border-1 border-gray-1 max-lg:h-8">
            </div>
            <button class="px-5 py-2 bg-maingreen text-white w-48 rounded-md font-semibold border-2 border-maingreen transition duration-300 hover:text-maingreen hover:bg-white"
                @click.prevent="sendContact()">Enviar Mensagem</button>
        </form>
    </div>
</template>
 
<script>
import { createFAQ } from '@/services/FAQService.js';

export default {
    name: 'CreateFAQ',
    data() {
        return {
            faq:{
                question: null,
                answer: null,
                idBody: null,
                idHeading: null
            }
        }
    },
    methods: {
        sendContact(){
            let aux1 = this.faq.question.split(' ')[0];
            this.faq.idBody = `accordion-collapse-body-${aux1}`
            this.faq.idHeading = `accordion-collapse-heading-${aux1}`

            console.log(this.faq)

            createFAQ(this.faq).then((response) => {
                console.log(response.data)
            })
            // .finally(() => {
            //     setInterval(() => {
            //         window.location.reload()
            //     }, 3000)
            // })
        },
    }
}
</script>
<style lang="">
    
</style>