<template lang="">
    <section id="contact" class="flex justify-center items-center text-white p-20">
        <div class="bg-maingreen flex max-lg:flex-col p-10 max-lg:p-14 rounded-3xl relative">
            <div class="flex flex-col gap-4">
                <h1 class="text-3xl w-112 max-lg:w-auto font-semibold">Vamos conversar sobre as oportunidades de inovação da sua empresa.</h1>
                <span class="text-sm">Preencha o formulário e entraremos em contato.</span>
                <div class="flex flex-col gap-5 mt-10">
                    <div class="flex gap-3">
                        <img :src="require('@/assets/icons/phone.svg')" alt="Phone"/>
                        <p class="text-sm">(37) 3322-8529</p>
                    </div>
                    <div class="flex gap-3">
                        <img :src="require('@/assets/icons/email.svg')" alt="Email"/>
                        <p class="text-sm">prospeccao.polo(@)ifmg.edu.br</p>
                    </div>
                    <div class="flex gap-3">
                        <img :src="require('@/assets/icons/location.svg')" alt="Location"/>
                        <p class="text-sm flex flex-col">Rua Padre Alberico, nº 440 - São Luiz <span>Formiga/MG - CEP: 35.577-020</span></p>
                    </div>
                </div>
            </div>
            <div class="w-128 max-lg:w-auto h-auto relative">
                <div class="shadow-2xl bg-white p-5 rounded-lg text-black flex justify-start gap-10 absolute -top-28 max-lg:top-0">
                    <form class="flex flex-col gap-5 p-5 max-lg:gap-3">
                        <div class="flex flex-col w-96 max-lg:w-auto">
                            <label class="text-maingray text-sm">Nome</label>
                            <input required v-model="contact.name" type="text" class="rounded-lg border-1 border-gray-1 max-lg:h-8">
                        </div>
                        <div class="flex flex-col w-96 max-lg:w-auto">
                            <label class="text-maingray text-sm">Email</label>
                            <input required v-model="contact.email" type="text" class="rounded-lg border-1 border-gray-1 max-lg:h-8">
                        </div>
                        <div class="flex flex-col w-96 max-lg:w-auto">
                            <label class="text-maingray text-sm">Empresa</label>
                            <input required v-model="contact.externalCompany" type="text" class="rounded-lg border-1 border-gray-1 max-lg:h-8">
                        </div>
                        <div class="flex flex-col w-96 max-lg:w-auto">
                            <label class="text-maingray text-sm">Área de Atuação da Empresa</label>
                            <input required v-model="contact.area" type="text" class="rounded-lg border-1 border-gray-1 max-lg:h-8">
                        </div>
                        <div class="flex flex-col w-96 max-lg:w-auto">
                            <label class="text-maingray text-sm">Mensagem</label>
                            <textarea required v-model="contact.message" rows="5" type="text" class="rounded-lg border-1 border-gray-1 max-lg:h-8"></textarea>
                        </div>
                        <button class="px-5 py-2 bg-maingreen text-white w-48 rounded-md font-semibold border-2 border-maingreen transition duration-300 hover:text-maingreen hover:bg-white"
                            @click.prevent="sendContact()">Enviar Mensagem</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import { createContactMessage } from '@/services/ContactService';
import { mapMutations, mapActions } from "vuex";

export default {
    name: 'ContactSection',
    data() {
        return {
            contact:{
                name: '',
                email: '',
                externalCompany: '',
                area: '',
                message: ''
            }
        }
    },
    methods: {
        ...mapMutations([
            "setAlert"
        ]),
        ...mapActions([
            "isAlertFired"
        ]),
        alertMissingFields() {
            let div = document.getElementById("alert-missing-fields")
            div.style.display = "flex"
            
            setInterval(() => {
                div.style.display = "none"
            }, 3000)
        },
        sendContact(){
            if(this.contact.name.length > 0 && this.contact.email.length > 0 && this.contact.externalCompany.length > 0 && this.contact.area.length > 0 && this.contact.message.length > 0){
                createContactMessage(this.contact).then((response) => {
                    console.log(response.data)
                    this.$store.commit('setAlert', true)
                    this.$nextTick(()=>{
                        this.showSuccessSentMessage()
                    })
                }).finally(() => {
                    setInterval(() => {
                        window.location.reload()
                    }, 3000)
                })
            } else {
                this.$store.commit('setAlert', true)
                this.$nextTick(() => {
                    this.alertMissingFields()
                })
            }
        },
        showSuccessSentMessage() {
            let div = document.getElementById("contact-sent-alert")
            div.style.display = "flex"
            
            setInterval(() => {
                div.style.display = "none"
            }, 3000)
        },
    }
}
</script>
<style lang="">
    
</style>

