<template lang="">
    <section class="w-full flex flex-col justify-center bg-lightgray gap-10 rounded-lg">
        <p class="font-semibold text-2xl underline underline-offset-2 decoration-4 decoration-maingreen text-center mt-10 self-start max-sm:ml-0">
            Cards de Vantagens
        </p>

        <div role="status" class="flex items-center gap-10 rounded-xl mb-10">
            
            <div class="flex max-sm:flex-col items-center gap-4 bg-white rounded-xl h-full p-4">

                <!-- Imagem de capa -->
                <div class="border-2 border-transparent p-2 mx-10 flex items-center h-full">
                    <svg class="w-20 h-20 text-gray-200 dark:text-gray-600" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                        <path
                            d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                    </svg>
                </div>

                <!-- Cards verticais -->
                <div class="animate-pulse flex flex-col gap-5">
                    <div @mouseover="changeForm(1)"
                        class="text-black hover:bg-maingreen flex items-center px-6 py-6 gap-10 rounded-xl transition duration-300 hover:text-white bg-white border-gray-100 max-lg:w-auto max-lg:px-0">
                        <div class="border-2 border-transparent p-2">
                            <svg class="w-16 h-12 text-gray-200 dark:text-gray-600" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                <path
                                    d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                            </svg>
                        </div>
                        <div class="flex gap-1 edit items-center relative transition duration-500">
                            <div class="flex flex-col gap-2 ">
                                <div class="flex flex-col gap-2 mb-2 border-2 border-transparent p-2">
                                    <div class="ml-4 h-2.5 bg-black rounded-full w-56"></div>
                                    <div class="ml-4 h-2.5 bg-black rounded-full w-48"></div>
                                </div>
                                <div class="flex flex-col gap-1 border-2 border-transparent p-2">
                                    <div class="ml-4 h-1 bg-black rounded-full w-48"></div>
                                    <div class="ml-4 h-1 bg-black rounded-full w-36"></div>
                                    <div class="ml-4 h-1 bg-black rounded-full w-40"></div>
                                    <div class="ml-4 h-1 bg-black rounded-full w-44"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div @mouseover="changeForm(2)"
                        class="text-black hover:bg-maingreen flex items-center px-6 py-6 gap-10 rounded-xl transition duration-300 hover:text-white bg-white border-gray-100 max-lg:w-auto max-lg:px-0">
                        <div class="border-2 border-transparent p-2">
                            <svg class="w-16 h-12 text-gray-200 dark:text-gray-600" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                <path
                                    d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                            </svg>
                        </div>
                        <div class="flex gap-1 edit items-center relative transition duration-500">
                            <div class="flex flex-col gap-2 ">
                                <div class="flex flex-col gap-2 mb-2 border-2 border-transparent p-2">
                                    <div class="ml-4 h-2.5 bg-black rounded-full w-56"></div>
                                    <div class="ml-4 h-2.5 bg-black rounded-full w-48"></div>
                                </div>
                                <div class="flex flex-col gap-1 border-2 border-transparent p-2">
                                    <div class="ml-4 h-1 bg-black rounded-full w-48"></div>
                                    <div class="ml-4 h-1 bg-black rounded-full w-36"></div>
                                    <div class="ml-4 h-1 bg-black rounded-full w-40"></div>
                                    <div class="ml-4 h-1 bg-black rounded-full w-44"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div @mouseover="changeForm(3)"
                        class="text-black hover:bg-maingreen flex items-center px-6 py-6 gap-10 rounded-xl transition duration-300 hover:text-white bg-white border-gray-100 max-lg:w-auto max-lg:px-0">
                        <div class="border-2 border-transparent p-2">
                            <svg class="w-16 h-12 text-gray-200 dark:text-gray-600" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                <path
                                    d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                            </svg>
                        </div>
                        <div class="flex gap-1 edit items-center relative transition duration-500">
                            <div class="flex flex-col gap-2 ">
                                <div class="flex flex-col gap-2 mb-2 border-2 border-transparent p-2">
                                    <div class="ml-4 h-2.5 bg-black rounded-full w-56"></div>
                                    <div class="ml-4 h-2.5 bg-black rounded-full w-48"></div>
                                </div>
                                <div class="flex flex-col gap-1 border-2 border-transparent p-2">
                                    <div class="ml-4 h-1 bg-black rounded-full w-48"></div>
                                    <div class="ml-4 h-1 bg-black rounded-full w-36"></div>
                                    <div class="ml-4 h-1 bg-black rounded-full w-40"></div>
                                    <div class="ml-4 h-1 bg-black rounded-full w-44"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <v-form class="w-full flex flex-col gap-1 bg-white p-10 rounded-lg max-sm:px-1">
                <p class="font-semibold text-xl underline underline-offset-2 decoration-4 decoration-maingreen text-center">
                    Em edição: Card {{ currentForm }}
                </p>
                <v-text-field v-model="newAdvantages.differential" :counter="10" :rules="[rules.text]" class="text-maingreen"
                    color="#2F9E40" :label="'Título do card ' + currentForm"></v-text-field>

                <v-text-field v-model="newAdvantages.description" :counter="10" :rules="[rules.text]" class="text-maingreen"
                    color="#2F9E40" :label="'Resumo Card ' + currentForm "></v-text-field>

                <v-file-input accept="image/*" color="#2F9E40" :label="'Ícone do Card ' + currentForm "
                    @change="onFileChanged($event)"></v-file-input>

                <hr class="bg-maingreen h-1 mb-5"/>

                <v-file-input accept="image/*" color="#2F9E40" label="Imagem de Capa"
                    @change="onBannerChange($event)"></v-file-input>

               <div class="flex justify-center">
                    <v-btn class="me-4" color="#2F9E40" type="submit" dark @click.prevent="updateCards()">
                        Salvar
                    </v-btn>

                    <v-btn @click="handleReset" color="error" dark>
                        Limpar
                    </v-btn>
               </div>
            </v-form>
        </div>
    </section>
</template>

<script>
    import router from '@/router/index.js'
    import { updateAdvantages } from '@/services/AdvantagesService.js'
    import { updateImage } from '@/services/ImageService.js'
    import { mapMutations, mapActions } from "vuex";

    export default {
        name: 'EditAdvantagesCard',
        data() {
            return {
                newAdvantages: {
                    id: null,
                    differential: '',
                    description: '',
                    img: {
                        id: null,
                        code: ''
                    }
                },
                rules: {
                    text(value) {
                        if (value?.length >= 0) return true;
                        return 'Texto obrigatório';
                    }
                },
                bannerImage: {
                    id: 35,
                    code: undefined
                },
                bool: false,
                currentForm: 1
            }
        },
        methods: {
            ...mapMutations([
                "setAlert"
            ]),
            ...mapActions([
                "isAlertFired"
            ]),
            onOffEffect(div) {
                let target = document.getElementById(div);
                this.bool ? target.style.borderColor = 'transparent' : target.style.borderColor = 'red'
                this.bool = !this.bool
            },
            onBannerChange(e) {
                const image = e.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(image);
                reader.onload = e => {
                    this.bannerImage.code = e.target.result;
                };
            },
            onImageChange(e) {
                const image = e.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(image);
                reader.onload = e => {
                    this.newAdvantages.img.code = e.target.result;
                };
            },
            alertMissingFields() {
                let div = document.getElementById("alert-missing-fields")
                div.style.display = "flex"
                setInterval(() => {
                    this.$store.commit('setAlert', false)
                }, 2000)
            },
            changeForm(form) {
                this.currentForm = form
            },
            updateCards() {
                if (this.newAdvantages.differential !== '' && this.newAdvantages.description !== '' && this.newAdvantages.img.code !== null) {
                    this.newAdvantages.id = this.currentForm
                    this.newAdvantages.img.id = this.currentForm

                    updateAdvantages(this.newAdvantages).then((response) => {
                        console.log(response)
                    }).finally(() => {
                        router.push('/').then(() => {
                            window.location.reload()
                        });
                    })
                } else {
                    this.$store.commit('setAlert', true)
                    this.$nextTick(() => {
                        this.alertMissingFields()
                    })
                }

                if (this.bannerImage.code !== undefined) {
                    updateImage(this.bannerImage).then((response) => {
                        console.log(response)
                    }).finally(() => {
                        router.push('/').then(() => {
                            window.location.reload()
                        });
                    })
                }
            },
        },
    }
</script>

<style scoped>

</style>