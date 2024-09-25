<template lang="">
    <section class="flex flex-col px-24 py-10">
        <h1 class="text-4xl text-black font-semibold underline underline-offset-2 decoration-8 decoration-maingreen">Edição de Notícias</h1>
        <div class="px-52 pt-10">
            <AlertSuccessDelete />
            <form class="bg-white p-10 rounded-lg">
            
                <div class="grid gap-6 mb-6 grid-cols-2">
                    <div id="tip-div" class="border-2 border-transparent p-2 col-span-2">
                        <label for="tip" class="mb-2 text-sm font-medium text-gray-900 dark:text-white">Título da Notícia</label>
                        <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5" 
                            type="text" id="tip" v-model="newNew.title" placeholder="Ex: Posse da Diretoria..." required />
                    </div>
    
                    <div id="about-project-div" class="border-2 border-transparent p-2 rounded-lg">
                        <label for="project_resume" class="mb-2 text-sm font-medium text-gray-900 dark:text-white">Parágrafo 1</label>
                        <textarea id="project_resume" rows="10" cols="50" class="p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border focus:ring-red-600 focus:border-red-600"
                             v-model="newNew.paragraph1" placeholder="Escreva sobre o projeto aqui..."></textarea>
                    </div>
    
                    <div id="about-project-div" class="border-2 border-transparent p-2 rounded-lg">
                        <label for="project_resume" class="mb-2 text-sm font-medium text-gray-900 dark:text-white">Parágrafo 2</label>
                        <textarea id="project_resume" rows="10" cols="50" class="p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border focus:ring-red-600 focus:border-red-600"
                             v-model="newNew.paragraph2" placeholder="Escreva sobre o projeto aqui..."></textarea>
                    </div>
    
                    <div id="date-div" class="border-2 border-transparent p-2 rounded-lg">
                        <label for="date_resume" class="mb-2 text-sm font-medium text-gray-900 dark:text-white">Data:</label>
                        <textarea id="date_resume" rows="1" cols="50" class="p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border focus:ring-red-600 focus:border-red-600"
                             v-model="newNew.date" placeholder="Data de hoje..."></textarea>
                    </div>
    
                    <div id="image-div" class="border-2 border-transparent p-2">
                        <label class="mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Imagem 1</label>
                        <input class="w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none"
                            aria-describedby="file_input_help" id="file_input" type="file" @change="setImage(1, $event)"/>
                        <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                    </div>
    
                    <div id="image-div" class="border-2 border-transparent p-2">
                        <label class="mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Imagem 2</label>
                        <input class="w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none"
                            aria-describedby="file_input_help" id="file_input" type="file" @change="setImage(2, $event)"/>
                        <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                    </div>

                    <div class="flex items-center">
                        <label class="inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer" v-model="newNew.isMain">
                            <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-red-600 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-['']
                                after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-maingreen"></div>
                            <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Notícia Principal (Manchete) ?</span>
                        </label>

                        <div id="tip-div" class="border-2 border-transparent p-2" v-if="newNew.isMain">
                            <label class="mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Dica</label>
                            <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5" 
                                type="text" id="tip" v-model="newNew.tip" placeholder="Ex: Novidade" required />
                        </div>
                    </div>
  

                    <div class="flex justify-center gap-10 col-span-2">
                        <button class="text-white bg-maingreen hover:bg-govblue focus:ring-2 focus:outline-none focus:ring-red-600 font-medium rounded-lg text-sm w-full sm:w-auto px-36 py-3 text-center transition duration-200"
                            type="submit" @click.prevent="createNew()">Salvar</button>
                    </div>
                    <div class="flex justify-center gap-10 col-span-2">
                        <button class="flex text-white bg-red-600 hover:bg-orange-900 focus:ring-2 focus:outline-none focus:ring-red-600 font-medium rounded-lg text-sm w-full sm:w-auto px-36 py-3 text-center transition duration-200"
                            type="submit" @click.prevent="deleteNew()">Excluir
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
import { useRoute } from "vue-router";
import router from '@/router/index.js';
import { updateNew, deleteNew } from '@/services/NewService.js';
import { showOne } from '@/services/NewService.js';
import AlertSuccessDelete from '@/components/alert/AlertSuccessDelete.vue';

export default {
    name: 'NewsCreate',
    components: {
        AlertSuccessDelete
    },
    created(){
        const route = useRoute();
        const id = route.params.id;

        if(id != 0){
            showOne({ id:id }).then((response) => {
                this.newNew = response.data
                console.log(this.newNew)
            })
        }
    },
    data(){
        return {
            currentCard: 1,
            cardToSub: 'mainnew',
            newNew: {
                date: '',
                title: '',
                img1: {
                    name: 'noticia',
                    code: ''
                },
                img2: {
                    name: 'noticia',
                    code: ''
                },
                paragraph1: '',
                paragraph2: '',
                isMain: false,
                tip: 'Novidade'
            }
        }
    },
    methods: {
        setImage(img, e){
            const image = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(image);

            if(img == 1){
                reader.onload = e => {
                    this.newNew.img1.code = e.target.result;
                };
            }else{
                reader.onload = e => {
                    this.newNew.img2.code = e.target.result;
                };
            }
        },
        showDeleteSuccess(){
            let div = document.getElementById("success-delete-alert")
            console.log(div)
            div.style.display = "flex"
        },
        createNew(){
            console.log(this.newNew)
            updateNew(this.newNew).then((response) => {
                console.log(response)
            }).finally(() => {
                setInterval(() => {
                    router.push('/news').then(() => {
                        window.location.reload();
                    });
                }, 2500)
            })
        },
        deleteNew(){
            deleteNew(this.newNew.id).then((response) => {
                console.log(response)
                this.showDeleteSuccess()
            }).finally(() => {
                setInterval(() => {
                    router.push('/news').then(() => {
                        window.location.reload();
                    });
                }, 2500)
            })
        },
    }
}
</script>
<style lang="">
    
</style>