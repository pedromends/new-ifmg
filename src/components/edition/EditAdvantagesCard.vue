<template lang="">
    <section class="flex flex-col justify-center bg-lightgray gap-10">
        <div role="status" class="animate-pulse flex flex-col items-center gap-10 bg-white rounded-xl py-5">
            <div class="flex items-center gap-4">
                <div @mouseover="onOffEffect('image-div')" @mouseleave="onOffEffect('image-div')"  class="border-2 border-transparent p-2 hover:border-red-700 mx-10">
                    <svg class="w-64 h-64 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                    </svg>                    
                </div>
                <div class="flex flex-col gap-5">
                    <div @mouseover="changeForm(1)" class="text-black hover:bg-maingreen flex items-center px-6 py-6 gap-10 rounded-xl transition duration-300 hover:text-white bg-white border-gray-100 max-lg:w-auto max-lg:px-0">
                        <div @mouseover="onOffEffect('icon-div')" @mouseleave="onOffEffect('icon-div')" class="border-2 border-transparent p-2 hover:border-red-700">
                            <svg class="w-20 h-20 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                            </svg>                    
                        </div>
                        <div class="flex gap-1 edit items-center relative transition duration-500">
                            <div class="flex flex-col gap-2 ">
                                <div @mouseover="onOffEffect('title-div')" @mouseleave="onOffEffect('title-div')" class="flex flex-col gap-2 mb-2 border-2 border-transparent p-2 hover:border-red-700">
                                    <div class="ml-4 h-2.5 bg-black rounded-full w-56"></div>
                                    <div class="ml-4 h-2.5 bg-black rounded-full w-48"></div>
                                </div>
                                <div @mouseover="onOffEffect('resume-div')" @mouseleave="onOffEffect('resume-div')" class="flex flex-col gap-1 border-2 border-transparent p-2 hover:border-red-700">    
                                    <div class="ml-4 h-1 bg-black rounded-full w-48"></div>
                                    <div class="ml-4 h-1 bg-black rounded-full w-36"></div>
                                    <div class="ml-4 h-1 bg-black rounded-full w-40"></div>
                                    <div class="ml-4 h-1 bg-black rounded-full w-44"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div @mouseover="changeForm(2)" class="text-black hover:bg-maingreen flex items-center px-6 py-6 gap-10 rounded-xl transition duration-300 hover:text-white bg-white border-gray-100 max-lg:w-auto max-lg:px-0">
                        <div @mouseover="onOffEffect('icon-div')" @mouseleave="onOffEffect('icon-div')" class="border-2 border-transparent p-2 hover:border-red-700">
                            <svg class="w-20 h-20 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                            </svg>                    
                        </div>
                        <div class="flex gap-1 edit items-center relative transition duration-500">
                            <div class="flex flex-col gap-2 ">
                                <div @mouseover="onOffEffect('title-div')" @mouseleave="onOffEffect('title-div')" class="flex flex-col gap-2 mb-2 border-2 border-transparent p-2 hover:border-red-700">
                                    <div class="ml-4 h-2.5 bg-black rounded-full w-56"></div>
                                    <div class="ml-4 h-2.5 bg-black rounded-full w-48"></div>
                                </div>
                                <div @mouseover="onOffEffect('resume-div')" @mouseleave="onOffEffect('resume-div')" class="flex flex-col gap-1 border-2 border-transparent p-2 hover:border-red-700">    
                                    <div class="ml-4 h-1 bg-black rounded-full w-48"></div>
                                    <div class="ml-4 h-1 bg-black rounded-full w-36"></div>
                                    <div class="ml-4 h-1 bg-black rounded-full w-40"></div>
                                    <div class="ml-4 h-1 bg-black rounded-full w-44"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div @mouseover="changeForm(3)" class="text-black hover:bg-maingreen flex items-center px-6 py-6 gap-10 rounded-xl transition duration-300 hover:text-white bg-white border-gray-100 max-lg:w-auto max-lg:px-0">
                        <div @mouseover="onOffEffect('icon-div')" @mouseleave="onOffEffect('icon-div')" class="border-2 border-transparent p-2 hover:border-red-700">
                            <svg class="w-20 h-20 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                            </svg>                    
                        </div>
                        <div class="flex gap-1 edit items-center relative transition duration-500">
                            <div class="flex flex-col gap-2 ">
                                <div @mouseover="onOffEffect('title-div')" @mouseleave="onOffEffect('title-div')" class="flex flex-col gap-2 mb-2 border-2 border-transparent p-2 hover:border-red-700">
                                    <div class="ml-4 h-2.5 bg-black rounded-full w-56"></div>
                                    <div class="ml-4 h-2.5 bg-black rounded-full w-48"></div>
                                </div>
                                <div @mouseover="onOffEffect('resume-div')" @mouseleave="onOffEffect('resume-div')" class="flex flex-col gap-1 border-2 border-transparent p-2 hover:border-red-700">    
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
            <form class="bg-white p-10 rounded-lg">
                <p class="font-bold text-lg underline underline-offset-2 decoration-4 decoration-maingreen">Card {{ currentForm }}</p>
                <div class="grid gap-6 mb-6 md:grid-cols-3">
                    <div id="title-div" class="border-2 border-transparent p-2">
                        <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Título</label>
                        <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            type="text" id="title" c placeholder="John" required v-model="newAdvantages.differential"/>
                    </div>
                    <div id="resume-div" class="border-2 border-transparent p-2">
                        <label for="resume" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Resumo</label>
                        <textarea class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" 
                            id="resume" cols="20" v-model="newAdvantages.description" placeholder="Escreva sobre a sua manchete aqui..."></textarea>
                    </div>
                    <div id="icon-div" class="border-2 border-transparent p-2">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Ícone do Card</label>
                        <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none"
                            aria-describedby="file_input_help" id="file_input" type="file" @change="onImageChange($event)">
                        <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                    </div>
                    <div id="image-div" class="border-2 border-transparent p-2">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Imagem de Capa</label>
                        <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none"
                            aria-describedby="file_input_help" id="file_input" type="file" @change="onBannerChange($event)" accept="image/*">
                        <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                    </div>
                </div>  
                <button type="submit" @click.prevent="updateCards()" class="text-white bg-maingreen hover:bg-govblue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Salvar</button>
            </form>
        </div>
    </section>
</template>

<script>
import router from '@/router/index.js'
import { createAdvantage } from '@/services/AdvantagesService.js'
import { createImage } from '@/services/ImageService.js'

export default {
    name: 'EditAdvantagesCard',
    data(){
        return {
            bool: false,
            currentForm: 1,
            newAdvantages: {
                id: null,
                differential: '',
                description: '',
                img: {
                    id: null,
                    code: null
                }
            },
            newImage: {
                id: 35,
                code: undefined
            },
        }
    },
    methods: {
        onOffEffect(div){
            let target = document.getElementById(div);
            this.bool ? target.style.borderColor = 'transparent' : target.style.borderColor = 'red'
            this.bool = !this.bool
        },
        onBannerChange(e){
            const image = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = e =>{
                this.newImage.code = e.target.result;
            };
        },
        onImageChange(e){
            const image = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = e => {
                this.newAdvantages.img.code = e.target.result;
            };
        },
        changeForm(form){
            this.currentForm = form
        },
        updateCards(){
            if(this.newAdvantages.differential !== '' && this.newAdvantages.description !== ''){
                this.newAdvantages.id = this.currentForm
                this.newAdvantages.img.id = this.currentForm
                createAdvantage(this.newAdvantages).then((response) => {
                    console.log(response)
                    if(this.newImage.code !== undefined){
                        console.log(this.newImage)
                        createImage(this.newImage).then((response) => {
                            console.log(response)
                        })
                    }
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