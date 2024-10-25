<template lang="">
    <main class="flex justify-center items-center px-10 max-sm:px-0">
        <div class="flex flex-col gap-10 px-20 w-full max-sm:px-8 max-sm:py-4">
            <div class="flex items-center gap-2">
                <img class="w-6" :src="require('@/assets/icons/house2.svg')" alt="">
                <router-link to="/" class="text-maingreen hover:underline">Home</router-link>
                <p class="flex items-center">
                    <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 9 4-4-4-4" />
                    </svg>
                    <span>Capacitação</span>
                </p>
            </div>
            <div class="flex justify-between">
                <h1 class="text-4xl max-sm:text-2xl text-black font-semibold underline underline-offset-2 decoration-8 decoration-maingreen">Capacitação</h1>
                <button v-if="isAdmin" data-modal-target="edit-modal" data-modal-toggle="edit-modal"
                    class="text-white bg-maingreen hover:bg-govblue focus:ring-4 focus:outline-none focus:ring-red-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition duration-200">Editar
                    Parágrafo</button>
            </div>
            <hr class="bg-red-600 h-1" />
            <div class="flex gap-10 max-lg:flex-col">
                <div class="w-3/4 flex flex-col gap-10 max-lg:w-auto">
                    {{ currentParag }}
                </div>
            </div>
        </div>
        <BackToTop />

        <div id="edit-modal" tabindex="-1" aria-hidden="true" v-if="isAdmin"
            class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative p-4 w-full max-w-2xl max-h-full">
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                            Editar Parágrafo
                        </h3>
                        <button
                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            type="button" data-modal-hide="edit-modal">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div class="p-4 md:p-5 space-y-4">

                        <!-- Sobre o Projeto -->
                        <div id="about-project-div"
                            class="border-2 border-transparent p-2 rounded-lg col-span-2 w-full">
                            <label for="project_resume"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Texto</label>
                            <textarea id="project_resume" rows="10" cols="50"
                                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border focus:ring-red-600 focus:border-red-600"
                                required v-model="newParag" placeholder="Escreva sobre as capacitações do IFMG"></textarea>
                        </div>
                    </div>
                    <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button
                            class="text-white bg-maingreen hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            data-modal-hide="edit-modal" type="button" @click="updateParag()">Salvar</button>
                        <button
                            class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-maingreen focus:z-10 focus:ring-4 focus:ring-gray-100"
                            data-modal-hide="edit-modal" type="button">Cancelar</button>
                    </div>
                </div>
            </div>
        </div>

    </main>
</template>

<script>
    import BackToTop from '@/components/buttons/BackToTop.vue';
    import { updateParag, getText } from '@/services/CapacitationService.js';

    export default {
        name: 'CapacitationPage',
        components: {
            BackToTop
        },
        data() {
            return {
                currentParag: null,
                isAdmin: false,
                page: 0,
                totalPages: 0,
                totalElements: 0,
                newParag: ''
            }
        },
        created() {
            this.isAdmin = this.$store.getters.isAdmin
            getText().then((response) => {
                console.log(response.data)
                this.currentParag = response.data.text
            }).catch((error) => console.log(error)) 
        },
        methods: {
            updateParag(){
                updateParag(this.newParag).then((response) => {
                    console.log(response.data)
                }).catch((error) => console.log(error))
            }
        }
    }
</script>
<style lang="">

</style>