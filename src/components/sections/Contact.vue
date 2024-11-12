<template lang="">
    <section id="contact" class="flex justify-center items-center text-white p-20">
        <div class="bg-maingreen flex max-lg:flex-col p-10 max-lg:p-14 rounded-3xl relative">
            <div class="flex flex-col gap-4">
                <h1 class="text-3xl w-112 max-lg:w-auto font-semibold">Vamos conversar sobre as oportunidades de
                    inovação da sua empresa.</h1>
                <span class="text-sm">Preencha o formulário e entraremos em contato.</span>
                <div class="flex flex-col gap-5 mt-10">
                    <div class="flex gap-3">
                        <img :src="require('@/assets/icons/phone.svg')" alt="Phone" />
                        <p class="text-sm">(37) 3322-8529</p>
                    </div>
                    <div class="flex gap-3">
                        <img :src="require('@/assets/icons/email.svg')" alt="Email" />
                        <p class="text-sm">prospeccao.polo(@)ifmg.edu.br</p>
                    </div>
                    <div class="flex gap-3">
                        <img :src="require('@/assets/icons/location.svg')" alt="Location" />
                        <p class="text-sm flex flex-col">Rua Padre Alberico, nº 440 - São Luiz <span>Formiga/MG - CEP:
                                35.577-020</span></p>
                    </div>
                </div>
            </div>
            <div class="w-128 max-lg:w-auto h-auto relative">
                <v-form class="border-2 border-maingreen text-maingreen p-5 rounded-lg absolute -top-28 max-lg:top-0 w-full" style="background-color: white;">
                    <v-text-field v-model="contact.name" :counter="10" :rules="[rules.name]"
                        color="#2F9E40" label="Nome"></v-text-field>

                    <v-text-field v-model="contact.phone" :counter="7" :rules="[rules.phone]"
                        color="#2F9E40" label="Telefone de Contato"></v-text-field>

                    <v-text-field v-model="contact.companyName" :rules="[rules.companyName]"
                        color="#2F9E40" label="Empresa"></v-text-field>

                    <v-text-field v-model="contact.email" :rules="[rules.email]" color="#2F9E40" label="E-mail"></v-text-field>

                    <v-text-field v-model="contact.area" :rules="[rules.area]"
                        color="#2F9E40" label="Área de Atuação da Empresa"></v-text-field>

                    <v-textarea color="#2F9E40" label="Mensagem" v-model="contact.message" :rules="[rules.message]"></v-textarea>

                    <div class="flex justify-center gap-4">
                        <v-btn dark color="#2F9E40" @click.prevent="sendContact()" class="me-4" type="submit">
                            Enviar
                        </v-btn>
    
                        <v-btn dark color="error" @click="handleReset">
                            Limpar
                        </v-btn>
                    </div>
                </v-form>
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
                contact: {
                    name: '',
                    phone: '',
                    companyName: '',
                    email: '',
                    area: '',
                    message: '',
                },
                rules: {
                    name(value) {
                        if (value?.length >= 2) return true;
                        return 'O nome precisa ser ao menos 2 caracteres.';
                    },
                    companyName(value) {
                        if (value?.length >= 2) return true;
                        return 'O nome da empresa precisa ser ao menos 2 caracteres.';
                    },
                    area(value) {
                        if (value?.length >= 3) return true;
                        return 'A área de atuação da empresa precisa ser ao menos 3 caracteres.';
                    },
                    message(value) {
                        if (value?.length >= 5) return true;
                        return 'A mensagem precisa ser ao menos 5 caracteres.';
                    },
                    phone(value) {
                        if (/^[0-9-]{7,}$/.test(value)) return true;
                        return 'O número de telefone precisa de pelo menos 7 dígitos.';
                    },
                    email(value) {
                        if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;
                        return 'Precisa ser um email válido.';
                    },
                },
            };
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
            sendContact() {
                createContactMessage(this.contact).then((response) => {
                    console.log(response.data)
                    this.$store.commit('setAlert', true)
                    this.$nextTick(() => {
                        this.showSuccessSentMessage()
                    })
                }).finally(() => {
                    setInterval(() => {
                        window.location.reload()
                    }, 3000)
                })
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