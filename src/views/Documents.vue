<template lang="">
    <main class="flex justify-start items-center px-10 ">
        <div class="flex flex-col gap-10 px-20 w-full">
            <div class="flex items-center gap-2">
                <img class="w-6" :src="require('@/assets/icons/house2.svg')" alt="">
                <router-link to="/news" class="text-maingreen hover:underline">Home</router-link>
                <p class="flex items-center">
                    <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 9 4-4-4-4" />
                    </svg>
                    <span>Documentos</span>
                </p>
            </div>

            <div class="flex justify-between">
                <h1
                    class="text-4xl text-black font-semibold underline underline-offset-2 decoration-8 decoration-maingreen">
                    Documentos</h1>
                <button
                    class="text-white bg-maingreen hover:bg-govblue focus:ring-4 focus:outline-none focus:ring-red-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition duration-200"
                    data-modal-target="default-modal" data-modal-toggle="default-modal" v-if="isAdmin"
                    type="button">Inserir novo documento</button>

                <!-- Main modal -->
                <div id="default-modal" tabindex="-1" aria-hidden="true"
                    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div class="relative p-4 w-full max-w-2xl max-h-full">
                        <!-- Modal content -->
                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <!-- Modal header -->
                            <div
                                class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                    Inserir Documento
                                </h3>
                                <button type="button"
                                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    data-modal-hide="default-modal">
                                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span class="sr-only">Close modal</span>
                                </button>
                            </div>
                            <!-- Modal body -->
                            <div class="p-4 md:p-5 space-y-4">
                                <div id="tip-div" class="border-2 border-transparent p-2 col-span-2">
                                    <label for="tip"
                                        class="mb-2 text-sm font-medium text-gray-900 dark:text-white">Título do
                                        Documento</label>
                                    <input
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5"
                                        type="text" id="tip" required />

                                </div>
                                <div id="tip-div" class="border-2 border-transparent p-2 col-span-2">
                                    <label for="tip"
                                        class="mb-2 text-sm font-medium text-gray-900 dark:text-white">Arquivo
                                        PDF</label>
                                    <input
                                        class="w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none"
                                        aria-describedby="file_input_help" id="file_input" type="file"
                                        @change="setImage(2, $event)" />
                                </div>
                                <!-- Modal footer -->
                                <div class="flex justify-center gap-10">
                                    <button
                                        class="text-white bg-maingreen hover:bg-govblue focus:ring-2 focus:outline-none focus:ring-red-600 font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-3 text-center transition duration-200"
                                        type="submit" button data-modal-hide="default-modal">Salvar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="bg-red-600 h-1" />
            <div class="flex flex-col gap-5 text-maingray">
                <div>
                    <ul class="flex flex-col gap-1 text-blue-700">
                        <li v-for="(doc, i) in docs" :key="i" :href="doc.link"  class="flex items-center gap-1">
                            <button class="hover:bg-gray-300 text-white rounded-md" v-if="isAdmin">
                                <img class="w-7 m-2" :src="require('@/assets/icons/pencil-edit-maingreen.svg')" alt="">
                            </button>
                            <button class="hover:bg-gray-300 text-white rounded-md" v-if="isAdmin">
                                <img class="w-7 m-2" :src="require('@/assets/icons/trash.svg')" alt="">
                            </button>
                            <a target="_blank" class="hover:underline">{{ doc.title }}</a>
                        </li>
                    </ul>
                    
                </div>
                <!-- TODO: Criar CRUD de editais com as seguintes informações -->
                <!-- Título do Edital -->
                <!-- Número - Ano -->
                <!-- Breve Descrição -->
                <!-- Link p inscrição -->
                <!-- Arquivo em PDF-->
                <!-- Imagem p/ divulgação -->
            </div>
        </div>
        <BackToTop />
    </main>
</template>


<script>
    import router from '@/router/index.js'
    import { listDocs } from '@/services/DocsService.js';

    export default {
        name: 'DocsPage',
        created() {
            listDocs().then((response) => {
                this.docs = response.data
                console.log(this.docs)
            })
        },
        data() {
            return {
                docs: null,
                isAdmin: this.$store.getters.isLoggedIn,
            }
        },
        methods: {
            createNewQuestion() {
                router.push('/create-faq').then(() => {
                    var element = document.getElementById("navbar");
                    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                });
            }
        },
    }
</script>
<style lang="">

</style>