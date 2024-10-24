<template lang="">
    <main class="flex justify-start items-center px-10 max-sm:mt-4">
        <div class="flex flex-col gap-10 px-20 w-full max-sm:px-0">
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
                <h1 class="text-4xl text-black font-semibold underline underline-offset-2 decoration-8 decoration-maingreen">Documentos</h1>
                <button class="text-white bg-maingreen hover:bg-govblue focus:ring-4 focus:outline-none focus:ring-red-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition duration-200"
                    data-modal-target="default-modal" data-modal-toggle="default-modal" v-if="isAdmin" type="button">Inserir novo documento</button>

                <!-- Main modal -->
                <div id="default-modal" tabindex="-1" aria-hidden="true" v-if="isAdmin"
                    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div class="relative p-4 w-full max-w-2xl max-h-full">
                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                    Inserir Documento
                                </h3>
                                <button class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    type="button" data-modal-hide="default-modal">
                                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span class="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div class="p-4 md:p-5 space-y-4">
                                <div id="tip-div" class="border-2 border-transparent p-2 col-span-2">
                                    <label for="tip" class="mb-2 text-sm font-medium text-gray-900 dark:text-white">Título do Documento</label>
                                    <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5"
                                        type="text" id="tip" required v-model="docTitle"/>
                                </div>
                                <div id="tip-div" class="border-2 border-transparent p-2 col-span-2">
                                    <label for="tip" class="mb-2 text-sm font-medium text-gray-900 dark:text-white">Arquivo PDF</label>
                                    <form @submit.prevent="createPdf()" enctype="multipart/form-data">
                                        <input type="file" @change="onFileChange($event)" />
                                        <button class="text-white bg-maingreen hover:bg-govblue focus:ring-2 focus:outline-none focus:ring-red-600 font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-3 text-center transition duration-200"
                                            type="submit">Salvar</button>
                                    </form>
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
                        <li v-for="(doc, i) in edicts" :key="i" :href="doc.link" class="flex items-center gap-1">

                            <!-- Open modal edit Button -->
                            <button data-modal-target="edit-modal"  class="hover:bg-gray-300 text-white rounded-md"
                                data-modal-toggle="edit-modal" v-if="isAdmin" @click="setEdit(doc)">
                                <img class="w-7 m-2" :src="require('@/assets/icons/pencil-edit-maingreen.svg')" alt="">
                            </button>

                            <!-- Open modal delete Button -->
                            <button class="hover:bg-gray-300 text-white rounded-md" data-modal-target="delete-modal"
                                data-modal-toggle="delete-modal" v-if="isAdmin" @click="setDelete(doc.id, 'set')">
                                <img class="w-7 m-2" :src="require('@/assets/icons/trash.svg')" alt="">
                            </button>
                            <button class="hover:underline" @click="downloadFile(doc.filename)">{{ doc.title }}</button>
                        </li>

                        <!-- Edit Modal -->
                        <div id="edit-modal" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
                            tabindex="-1" aria-hidden="true">
                            <div class="relative p-4 w-full max-w-2xl max-h-full">
                                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                    Editar Documento
                                </h3>
                                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                    <div class="p-4 md:p-5 space-y-4">
                                        <div id="tip-div" class="border-2 border-transparent p-2 col-span-2">
                                            <label for="tip" class="mb-2 text-sm font-medium text-gray-900 dark:text-white">Título do Documento</label>
                                            <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5"
                                                type="text" id="tip" required v-model="updatedTitle.title"/>
        
                                        </div>
                                        <div id="tip-div" class="border-2 border-transparent p-2 col-span-2">
                                            <label class="mb-2 text-sm font-medium text-gray-900 dark:text-white" for="tip">Arquivo PDF</label>
                                            <input type="file" @change="onFileChange($event)" />
                                        </div>
                                    </div>
                                    <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                                        <button class="text-white bg-maingreen hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                            data-modal-hide="edit-modal" type="button" @click="updatePdf()">Salvar</button>
                                        <button class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-maingreen focus:z-10 focus:ring-4 focus:ring-gray-100"
                                            data-modal-hide="edit-modal" type="button">Cancelar</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Delete modal -->
                        <div id="delete-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                            <div class="relative p-4 w-full max-w-2xl max-h-full">
                                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                    <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                            Deseja REALMENTE deletar este documento ?
                                        </h3>
                                        <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="delete-modal">
                                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                            </svg>
                                            <span class="sr-only">Fechar</span>
                                        </button>
                                    </div>
                                    <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                                        <button class="text-white bg-maingreen hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                            data-modal-hide="delete-modal" type="button" @click="deletePdf()">Sim</button>
                                        <button class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-maingreen focus:z-10 focus:ring-4 focus:ring-gray-100"
                                            data-modal-hide="delete-modal" type="button" @click="setDelete(null, 'clear')">Não</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
        <BackToTop />
    </main>
</template>

<script>
    import router from '@/router/index.js'
    import { createDoc, listDocs, updateDoc, deleteDoc, downloadDoc } from '@/services/DocsService.js';

    export default {
        name: 'DocsPage',
        created() {
            listDocs().then((response) => {
                this.edicts = response.data
            })
        },
        data() {
            return {
                edicts: null,
                isAdmin: this.$store.getters.isAdmin,
                selectedFile: null,
                docTitle: '',
                inEdit: null,
                inDelete: null,
                updatedFile: null,
                updatedTitle: {
                    title: ''
                }
            }
        },
        methods: {
            createNewQuestion() {
                router.push('/create-faq').then(() => {
                    var element = document.getElementById("navbar");
                    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                });
            },
            onFileChange(event) {
                this.selectedFile = event.target.files[0]; // Seleciona o arquivo
            },
            downloadFile(filename){
                downloadDoc(filename).then((response) => {
                    const blob = new Blob([response.data], { type: response.headers['content-type'] });
                    const url = window.URL.createObjectURL(blob);
                    const link = document.createElement('a');

                    link.href = url;
                    link.setAttribute('download', filename); // O nome que será sugerido para o arquivo baixado
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                })
            },
            setEdit(obj){
                console.log(obj)
                this.updatedTitle.title = obj.title
                this.inEdit = obj.id
            },
            setDelete(id, op){
                op == 'set' ? this.inDelete = id : null
                console.log('set delete: ' + this.inDelete)
            },
            updatePdf(){
                console.log('chamou')
                const formData = new FormData();

                if (!this.selectedFile) {
                    this.message = 'Por favor, selecione um arquivo para upload.';
                    return;
                }

                if (!this.updatedTitle) {
                    this.message = 'Por favor, crie um título.';
                    return;
                }

                formData.append('file', this.selectedFile); // C TEM QUE ENVIAR FORMDATA, NÃO O SELECTED FILE SEU FILHO DA PUTA!
                formData.append('title', this.updatedTitle.title);
                formData.append('id', this.inEdit);
                
                try {
                    updateDoc(formData).then((response) => {
                        this.message = response.data;
                        window.location.reload()
                    });
                } catch (error) {
                    this.message = 'Falha ao enviar o arquivo.';
                    console.error(error);
                }
            },
            deletePdf(){
                deleteDoc(this.inDelete).then((response) => {
                    console.log(response.data)
                    setTimeout(window.location.reload(), 2000)
                });
            },
            createPdf() {
                const formData = new FormData();

                if (!this.selectedFile) {
                    this.message = 'Por favor, selecione um arquivo para upload.';
                    return;
                }

                if (!this.docTitle) {
                    this.message = 'Por favor, crie um título.';
                    return;
                }

                formData.append('file', this.selectedFile); // C TEM QUE ENVIAR FORMDATA, NÃO O SELECTED FILE SEU FILHO DA PUTA!
                formData.append('title', this.docTitle);
                
                try {
                    createDoc(formData).then((response) => {
                        console.log(response.data)
                        console.log('Upload realizado com sucesso:', response.data);
                        this.message = response.data;
                        window.location.reload()
                    });
                } catch (error) {
                    this.message = 'Falha ao enviar o arquivo.';
                    console.error(error);
                }
            },
        },
    }
</script>
<style lang="">

</style>