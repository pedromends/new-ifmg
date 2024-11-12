<template lang="">
    <section class="flex flex-col justify-center bg-lightgray gap-10 my-10">
        <p
            class="font-semibold text-2xl underline underline-offset-2 decoration-4 decoration-maingreen self-start ml-6">
            Cards de Capacitação</p>

        <!-- Box dos Cards-->
        <div role="status" class="animate-pulse flex max-sm:flex-col gap-1">

            <div @mouseover="changeForm(1, 4)"
                class="shadow-lg shadow-transparent hover:shadow-red-600 transition duration-200 hover:text-black hover:bg-white flex flex-col gap-3 px-8 py-8 rounded-3xl border-2 border-white bg-maingreen">
                <div class="flex justify-between items-center ">
                    <svg class="w-8 h-8 text-gray-200 effect-1 border border-transparent hover:border-red-700 rounded-lg"
                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                        <path
                            d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                    </svg>
                </div>
                <div class="border border-transparent hover:border-red-700 rounded-lg">
                    <div class="h-2.5 bg-white rounded-full w-36 mb-1 effect"></div>
                    <div class="h-2.5 bg-white rounded-full w-28 mb-4 effect"></div>
                </div>
                <div class="flex flex-col gap-1 border border-transparent hover:border-red-700 rounded-lg">
                    <div class="h-1 bg-white rounded-full effect w-56"></div>
                    <div class="h-1 bg-white rounded-full effect w-48"></div>
                    <div class="h-1 bg-white rounded-full effect w-36"></div>
                </div>
                <a class="text-xs flex items-center gap-2 font-semibold bg-no-repeat hover:underline text-white effect-1"
                    href="#">Explorar ->
                    <div class="w-5 h-5" />
                </a>
            </div>

            <div @mouseover="changeForm(2, 5)"
                class="shadow-lg shadow-transparent hover:shadow-red-600 transition duration-200 hover:text-black hover:bg-white flex flex-col gap-3 px-8 py-8 rounded-3xl border-2 border-white bg-maingreen">
                <div class="flex justify-between items-center ">
                    <svg class="w-8 h-8 text-gray-200 effect-1 border border-transparent hover:border-red-700 rounded-lg"
                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                        <path
                            d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                    </svg>
                </div>
                <div class="border border-transparent hover:border-red-700 rounded-lg">
                    <div class="h-2.5 bg-white rounded-full w-36 mb-1 effect"></div>
                    <div class="h-2.5 bg-white rounded-full w-28 mb-4 effect"></div>
                </div>
                <div class="flex flex-col gap-1 border border-transparent hover:border-red-700 rounded-lg">
                    <div class="h-1 bg-white rounded-full effect w-56"></div>
                    <div class="h-1 bg-white rounded-full effect w-48"></div>
                    <div class="h-1 bg-white rounded-full effect w-36"></div>
                </div>
                <a class="text-xs flex items-center gap-2 font-semibold bg-no-repeat hover:underline text-white effect-1"
                    href="#">Explorar ->
                    <div class="w-5 h-5" />
                </a>
            </div>

            <div @mouseover="changeForm(3, 6)"
                class="shadow-lg shadow-transparent hover:shadow-red-600 transition duration-200 hover:text-black hover:bg-white flex flex-col gap-3 px-8 py-8 rounded-3xl border-2 border-white bg-maingreen">
                <div class="flex justify-between items-center ">
                    <svg class="w-8 h-8 text-gray-200 effect-1 border border-transparent hover:border-red-700 rounded-lg"
                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                        <path
                            d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                    </svg>
                </div>
                <div class="border border-transparent hover:border-red-700 rounded-lg">
                    <div class="h-2.5 bg-white rounded-full w-36 mb-1 effect"></div>
                    <div class="h-2.5 bg-white rounded-full w-28 mb-4 effect"></div>
                </div>
                <div class="flex flex-col gap-1 border border-transparent hover:border-red-700 rounded-lg">
                    <div class="h-1 bg-white rounded-full effect w-56"></div>
                    <div class="h-1 bg-white rounded-full effect w-48"></div>
                    <div class="h-1 bg-white rounded-full effect w-36"></div>
                </div>
                <a class="text-xs flex items-center gap-2 font-semibold bg-no-repeat hover:underline text-white effect-1"
                    href="#">Explorar ->
                    <div class="w-5 h-5" />
                </a>
            </div>

            <div @mouseover="changeForm(4, 7)"
                class="shadow-lg shadow-transparent hover:shadow-red-600 transition duration-200 hover:text-black hover:bg-white flex flex-col gap-3 px-8 py-8 rounded-3xl border-2 border-white bg-maingreen">
                <div class="flex justify-between items-center ">
                    <svg class="w-8 h-8 text-gray-200 effect-1 border border-transparent hover:border-red-700 rounded-lg"
                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                        <path
                            d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                    </svg>
                </div>
                <div class="border border-transparent hover:border-red-700 rounded-lg">
                    <div class="h-2.5 bg-white rounded-full w-36 mb-1 effect"></div>
                    <div class="h-2.5 bg-white rounded-full w-28 mb-4 effect"></div>
                </div>
                <div class="flex flex-col gap-1 border border-transparent hover:border-red-700 rounded-lg">
                    <div class="h-1 bg-white rounded-full effect w-56"></div>
                    <div class="h-1 bg-white rounded-full effect w-48"></div>
                    <div class="h-1 bg-white rounded-full effect w-36"></div>
                </div>
                <a class="text-xs flex items-center gap-2 font-semibold bg-no-repeat hover:underline text-white effect-1"
                    href="#">Explorar ->
                    <div class="w-5 h-5" />
                </a>
            </div>
        </div>

        <v-form>
            <v-text-field v-model="capacitationCard.title" :counter="10" :rules="[rules.num]" class="text-maingreen"
                color="#2F9E40" :label="'Número do Card ' + currentForm "></v-text-field>

            <v-text-field v-model="capacitationCard.subtitle" :counter="7" :rules="[rules.text]" class="text-maingreen"
                color="#2F9E40" :label="'Resumo do Card ' + currentForm"></v-text-field>

            <v-text-field :counter="7" :rules="[rules.text]" class="text-maingreen"
                color="#2F9E40" :label="'Link do Card ' + currentForm"></v-text-field>

            <hr class="bg-maingreen h-1 mb-5"/>

            <v-file-input accept="image/*" color="#2F9E40" :label="'Ícone do Card ' + currentForm " @change="onFileChanged($event)"/>

            <v-btn class="me-4" color="#2F9E40" type="submit" dark @click="updateCard()">
                Salvar
            </v-btn>

            <v-btn @click="handleReset" color="error" dark>
                Limpar
            </v-btn>
        </v-form>
    </section>
</template>

<script>
    import router from '@/router/index.js'
    import { updateCapacitation } from '@/services/CapacitationService.js';
    import { mapMutations, mapActions } from "vuex";

    export default {
        name: 'EditCapacitation',
        data() {
            return {
                bool: false,
                currentForm: 1,
                capacitationCard: {
                    id: null,
                    title: null,
                    subtitle: null,
                    img: {
                        id: null,
                        code: null
                    }
                },
                rules: {
                    num(value) {
                        if (value?.length >= 0) return true;
                        return 'Número obrigatório';
                    },
                    text(value) {
                        if (value?.length >= 0) return true;
                        return 'Texto obrigatório';
                    }
                },
            }
        },
        methods: {
            ...mapMutations([
                "setAlert"
            ]),
            ...mapActions([
                "isAlertFired"
            ]),
            changeForm(id, id_img) {
                this.currentForm = this.capacitationCard.id = id
                this.capacitationCard.img.id = id_img
            },
            onImageChange(e) {
                console.log(e.target.files[0])
                const image = e.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(image);
                reader.onload = e => {
                    this.capacitationCard.img.code = e.target.result;
                };
            },
            alertMissingFields() {
                let div = document.getElementById("alert-missing-fields")
                div.style.display = "flex"
                setInterval(() => {
                    this.$store.commit('setAlert', false)
                }, 2000)
            },
            updateCard() {
                if (this.capacitationCard.img.code !== null && this.capacitationCard.img.code !== null && this.capacitationCard.title !== null && this.capacitationCard.subtitle !== null) {
                    updateCapacitation(this.capacitationCard).then((response) => {
                        console.log(response)
                    }).finally(() => {
                        router.push('/').then(() => {
                            window.location.reload();
                        });
                    })
                } else {
                    this.$store.commit('setAlert', true)
                    this.$nextTick(() => {
                        this.alertMissingFields()
                    })
                }
            },
        },
    }
</script>

<style scoped>
    section:hover .effect {
        background-color: black;
    }

    section:hover .effect-1 {
        color: rgb(47, 158, 64);
    }
</style>