<template lang="">
    <section class="flex flex-col justify-center bg-lightgray gap-10">
        <p class="font-bold text-2xl underline underline-offset-2 decoration-4 decoration-maingreen self-start mt-5">Sobre Nós</p>
        <div role="status" class="animate-pulse flex bg-white py-10">

            <!-- Esqueleto do componente -->
            <div class="flex gap-24 w-full px-4">
                <div class="flex flex-col">
                    <span class="text-maingreen font-bold text-sm underline decoration-red-600 decoration-2 mb-10">QUEM SOMOS</span>
                    <div @mouseover="onOffEffect('title-div')" @mouseleave="onOffEffect('title-div')" class="border-2 border-transparent hover:border-red-700 p-2 rounded-lg">
                        <div class="h-5 bg-black rounded-full w-96 mb-1 effect"></div>
                        <div class="h-5 bg-black rounded-full w-84 mb-4 effect"></div>
                    </div>
                    <div @mouseover="onOffEffect('parag-div')" @mouseleave="onOffEffect('parag-div')" class="mb-10 border-2 border-transparent hover:border-red-700 p-2 rounded-lg">
                        <div class="h-1 bg-gray-500 rounded-full w-140 mb-1 effect"></div>
                        <div class="h-1 bg-gray-500 rounded-full w-124 mb-1 effect"></div>
                        <div class="h-1 bg-gray-500 rounded-full w-132 mb-1 effect"></div>
                        <div class="h-1 bg-gray-500 rounded-full w-140 mb-1 effect"></div>
                        <div class="h-1 bg-gray-500 rounded-full w-128 mb-1 effect"></div>
                        <div class="h-1 bg-gray-500 rounded-full w-132 mb-1 effect"></div>
                        <div class="h-1 bg-gray-500 rounded-full w-140 mb-1 effect"></div>
                        <div class="h-1 bg-gray-500 rounded-full w-124 mb-1 effect"></div>
                        <div class="h-1 bg-gray-500 rounded-full w-132 mb-1 effect"></div>
                        <div class="h-1 bg-gray-500 rounded-full w-140 mb-1 effect"></div>
                        <div class="h-1 bg-gray-500 rounded-full w-128 mb-1 effect"></div>
                        <div class="h-1 bg-gray-500 rounded-full w-132 mb-1 effect"></div>
                        <div class="h-1 bg-gray-500 rounded-full w-140 mb-1 effect"></div>
                        <div class="h-1 bg-gray-500 rounded-full w-124 mb-1 effect"></div>
                        <div class="h-1 bg-gray-500 rounded-full w-132 mb-1 effect"></div>
                        <div class="h-1 bg-gray-500 rounded-full w-140 mb-1 effect"></div>
                        <div class="h-1 bg-gray-500 rounded-full w-128 mb-1 effect"></div>
                        <div class="h-1 bg-gray-500 rounded-full w-132 mb-1 effect"></div>
                        <div class="h-1 bg-gray-500 rounded-full w-140 mb-1 effect"></div>
                        <div class="h-1 bg-gray-500 rounded-full w-124 mb-1 effect"></div>
                        <div class="h-1 bg-gray-500 rounded-full w-132 mb-1 effect"></div>
                        <div class="h-1 bg-gray-500 rounded-full w-140 mb-1 effect"></div>
                        <div class="h-1 bg-gray-500 rounded-full w-128 mb-1 effect"></div>
                        <div class="h-1 bg-gray-500 rounded-full w-132 mb-1 effect"></div>
                    </div>
                    <div class="bg-maingreen text-white w-40 py-3 rounded-lg border-2 border-white font-semibold hover:border-maingreen hover:bg-white hover:text-maingreen transition duration-300 text-center"
                        to="/institutional">
                        Saiba Mais
                    </div>
                </div>

                <!-- Imagem de capa -->
                <div @mouseover="onOffEffect('image-div')" @mouseleave="onOffEffect('image-div')" alt="Polo IFMG" class="border-transparent hover:border-red-700 p-2 rounded-xl border bg-white flex items-center px-10 py-4">
                    <svg class="w-96 h-20 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                    </svg>
                </div>
            </div>  
        </div>

        <!-- Formulário -->
        <form class="bg-white p-10 rounded-lg mb-10">
            <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div id="title-div" class="border border-transparent rounded-lg p-1">
                    <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Título</label>
                    <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 "
                        type="text" id="title" placeholder="Somos um centro de inovação e pesquisa..." required v-model="newAboutUs.title"/>
                </div>
                <div id="image-div" class="border border-transparent rounded-lg p-1">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Imagem de Capa</label>
                    <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none"
                        aria-describedby="file_input_help" id="file_input" type="file" @change="onFileChanged($event)" accept="image/*">
                    <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                </div>
                <div id="parag-div" class="border border-transparent rounded-lg p-1">
                    <label for="parag" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Parágrafo</label>
                    <textarea class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-red-600 focus:border-red-600"
                        placeholder="Escreva sobre o Polo de Inovação..."  id="parag" rows="10" cols="20" v-model="newAboutUs.parag"></textarea>
                </div>
            </div>  
            <div class="w-full flex justify-center">
                <button class="text-white bg-maingreen hover:bg-govblue focus:ring-2 focus:outline-none focus:ring-red-600 font-medium rounded-lg text-sm w-full sm:w-auto px-48 py-2.5 text-center transition duration-200"
                    type="submit" @click.prevent="updateAboutUs()" >Salvar</button>
            </div>
        </form>
    </section>
</template>

<script>
import router from '@/router/index.js'
import { updateWhoWeAre } from '@/services/WhoWeAreService.js'
import { updateImage } from '@/services/ImageService.js'

export default {
    name: 'EditAboutUs',
    data(){
        return {
            bool: false,
            newTitle: null,
            newImage: {
                id: 36,
                code: undefined
            },
            newAboutUs: {
                id: 1,
                title: '',
                parag: ''
            }
        }
    },
    methods: {
        onOffEffect(div){
            let target = document.getElementById(div);
            this.bool ? target.style.borderColor = 'transparent' : target.style.borderColor = 'red'
            this.bool = !this.bool
        },
        onFileChanged(e){
            const image = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = e =>{
                this.newImage.code = e.target.result;
            };
        },
        updateAboutUs(){
            if(this.newAboutUs.title !== '' && this.newAboutUs.parag !== ''){
                updateWhoWeAre(this.newAboutUs).then((response) => {
                    console.log(response)
                })
            }
            if(this.newImage.code !== undefined){
                updateImage(this.newImage).then((response) => {
                    console.log(response)
                }).finally(() => {
                    router.push('/').then(() => {
                        var element = document.getElementById("navbar");
                        element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                    }); 
                })
            }
        },
    },
}
</script>

<style scoped>

</style>