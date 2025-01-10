<template lang="">
    <section class="flex flex-col gap-4 m-4">
        <TOTOAlert :id="'alert-saved'" v-if="showSuccessAlert" :title="'Salvo com sucesso!'"
            :message="'Alterações aplicadas'" :bg_color="'bg-maingreen'" :duration="3000" />

        <TOTOAlert :id="'alert-error'" v-if="showErrorAlert" :title="'Erro na operação!'"
            :message="'Não foi possível completar sua solicitação'" :bg_color="'bg-red-600'" :duration="3000" />

        <div class="flex flex-col items-center gap-5 pt-10 max-sm:mb-12">
            <div class="flex justify-between w-full">
                <p
                    class="font-semibold text-2xl underline underline-offset-2 decoration-4 decoration-maingreen self-start mb-5">
                    Sessão de Apresentação</p>
                <p
                    class="font-semibold text-2xl underline underline-offset-2 decoration-4 decoration-maingreen self-start mb-5">
                    Em edição: Card {{ cardToUpdate }}
                </p>
            </div>

            <!-- Box dos Cards -->
            <div class="relative mt-16 z-30">
                <div class="flex gap-5 max-sm:flex-col">
                    <div @mouseover="setCard(1)"
                        class="bg-white border-b-4 border-maingreen flex flex-col text-center items-center px-2 py-6 shadow-lg shadow-transparent hover:shadow-red-600 transition duration-400 relative z-20">
                        <div role="status" class="max-w-sm animate-pulse flex flex-col pt-4 px-14 gap-4">
                            <h1
                                class="h-8 bg-maingreen rounded-full w-24 self-center border-4 border-transparent hover:border-red-700">
                            </h1>
                            <p
                                class="h-2 bg-black rounded-full w-36 mb-2.5 border-2 border-transparent hover:border-red-700">
                            </p>
                        </div>
                    </div>

                    <div @mouseover="setCard(2)"
                        class="bg-white border-b-4 border-maingreen flex flex-col text-center items-center px-2 py-6 shadow-lg shadow-transparent hover:shadow-red-600 transition duration-400 relative z-20">
                        <div role="status" class="max-w-sm animate-pulse flex flex-col pt-4 px-14 gap-4">
                            <h1
                                class="h-8 bg-maingreen rounded-full w-24 self-center border-4 border-transparent hover:border-red-700">
                            </h1>
                            <p
                                class="h-2 bg-black rounded-full w-36 mb-2.5 border-2 border-transparent hover:border-red-700">
                            </p>
                        </div>
                    </div>

                    <div @mouseover="setCard(3)"
                        class="bg-white border-b-4 border-maingreen flex flex-col text-center items-center px-2 py-6 shadow-lg shadow-transparent hover:shadow-red-600 transition duration-400 relative z-20">
                        <div role="status" class="max-w-sm animate-pulse flex flex-col pt-4 px-14 gap-4">
                            <h1
                                class="h-8 bg-maingreen rounded-full w-24 self-center border-4 border-transparent hover:border-red-700">
                            </h1>
                            <p
                                class="h-2 bg-black rounded-full w-36 mb-2.5 border-2 border-transparent hover:border-red-700">
                            </p>
                        </div>
                    </div>

                    <div @mouseover="setCard(4)"
                        class="bg-white border-b-4 border-maingreen flex flex-col text-center items-center px-2 py-6 shadow-lg shadow-transparent hover:shadow-red-600 transition duration-400 relative z-20">
                        <div role="status" class="max-w-sm animate-pulse flex flex-col pt-4 px-14 gap-4">
                            <h1
                                class="h-8 bg-maingreen rounded-full w-24 self-center border-4 border-transparent hover:border-red-700">
                            </h1>
                            <p
                                class="h-2 bg-black rounded-full w-36 mb-2.5 border-2 border-transparent hover:border-red-700">
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Imagem de fundo -->
            <div class="rounded-lg border border-maingreen flex items-center px-5 border-transparent z-20 hover:border-red-700 absolute mt-20"
                alt="Polo IFMG">
                <svg class="w-32 h-32 text-gray-200 dark:text-gray-600" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                    <path
                        d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                </svg>
            </div>
        </div>

        <v-form>
            <v-text-field v-model="newCard.num" :counter="10" :rules="[rules.num]" class="text-maingreen"
                color="#2F9E40" :label="'Número do Card ' + cardToUpdate "></v-text-field>

            <v-text-field v-model="newCard.text" :counter="7" :rules="[rules.text]" class="text-maingreen"
                color="#2F9E40" :label="'Texto do Card ' + cardToUpdate"></v-text-field>

            <hr class="bg-maingreen h-1 mb-5" />

            <v-file-input accept="image/*" color="#2F9E40" label="Imagem de Capa"
                @change="onFileChanged($event)"></v-file-input>

            <div class="flex justify-center gap-4">
                <v-btn class="me-4" color="#2F9E40" dark @click.prevent="update()" type="submit">
                    Salvar
                </v-btn>

                <v-btn @click="handleReset" color="error" dark>
                    Limpar
                </v-btn>
            </div>
        </v-form>
    </section>
</template>

<script>
    import router from '@/router/index.js'
    import { updateCard } from '@/services/PresenterCardService.js'
    import { updateImage } from '@/services/ImageService.js'
    import { mapMutations, mapActions } from "vuex";
    import TOTOAlert from '@/components/alert/TOTOAlert.vue'
    
    export default {
        name: 'EditPresenterCard',
        components: {
            TOTOAlert
        },
        data() {
            return {
                bool: false,
                cardToUpdate: 1,
                showSuccessAlert: false,
                showErrorAlert: false,
                newCard: {
                    num: null,
                    text: '',
                },
                background: {
                    name: 'presenter-background',
                    code: null,
                    id: 145 // ID fixo da imagem de capa
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
            update() {
                this.newCard.id = this.cardToUpdate
                console.log(this.newCard)
                if(this.newCard.num != null && this.newCard.text !== ''){
                    updateCard(this.newCard).then((response) => {
                        console.log(response)
                        this.showSuccessAlert = true
                    }).catch((error) => {
                        console.log(error)
                        this.showErrorAlert = true
                    })
                }

                if (this.background.code != null) {
                    updateImage(this.background).then((response) => {
                        console.log(response.data)
                    })
                }
                
                // setInterval(() => {
                //     router.push('/')
                //     window.location.reload()
                // }, 4000)
                
            },
            setCard(card) {
                this.cardToUpdate = card
            },
            onFileChanged(e) {
                const image = e.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(image);
                reader.onload = e => {
                    this.background.code = e.target.result;
                };
            }
        }
    }
</script>

<style scoped>
</style>