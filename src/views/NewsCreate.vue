<template lang="">
    <section class="flex flex-col px-24 py-10">
        <h1 class="text-4xl text-black font-semibold underline underline-offset-2 decoration-8 decoration-maingreen">Criação de Notícias</h1>
        <div class="px-52">
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

                    <div class="border-2 border-transparent p-2">
                        <label class="mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Destacar</label>
                        <select v-model="cardToSub" name="card-selector" id="card-selector" class="rounded-xl w-full text-sm text-gray-900 border border-gray-300 cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none">
                            <option value="mainnew">Manchete</option>
                            <option value="card-1">Card 1</option>
                            <option value="card-2">Card 2</option>
                            <option value="card-3">Card 3</option>
                        </select>
                    </div>
    
                    <div class="flex justify-center gap-10 col-span-2">
                        <button class="text-white bg-maingreen hover:bg-govblue focus:ring-2 focus:outline-none focus:ring-red-600 font-medium rounded-lg text-sm w-full sm:w-auto px-36 py-3 text-center transition duration-200"
                            type="submit" @click.prevent="createNew()">Salvar</button>
                    </div>
                </div>
            </form>
        </div>
        
    </section>
</template>

<script>
import router from '@/router/index.js'
import { createNew } from '@/services/NewService.js';

export default {
    name: 'NewsCreate',
    data(){
        return {
            currentCard: 1,
            cardToSub: 'mainnew',
            newNew:{
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
                paragraph2: ''
            }
        }
    },
    components:{
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
        createNew(){
            console.log(this.newNew)
            createNew(this.newNew).then((response) => {
                console.log(response)
            })
            .finally(() => {
                router.push('/news').then(() => {
                    var element = document.getElementById("navbar");
                    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                    window.location.reload();
                }); 
            })
        }
    }
}
</script>
<style lang="">
    
</style>