<template lang="">
    <section class="flex flex-col justify-center bg-lightgray gap-10">
        <div class="flex flex-col items-center gap-5 pt-10 max-sm:mb-12">
            <p class="font-semibold text-2xl underline underline-offset-2 decoration-4 decoration-maingreen self-start ml-6 mb-5">Sessão de Apresentação</p>
            <div class="relative max-sm:mt-10fff">
                <!-- Box dos Cards -->
                <div class="flex gap-5 max-sm:flex-col">
                    <div @mouseover="setCard(1)" class="bg-white border-b-4 border-maingreen flex flex-col text-center items-center px-2 py-6 shadow-lg shadow-transparent hover:shadow-red-600 transition duration-400 relative z-20">
                        <div role="status" class="max-w-sm animate-pulse flex flex-col pt-4 px-14 gap-4">
                            <h1 class="h-8 bg-maingreen rounded-full w-24 self-center border-4 border-transparent hover:border-red-700"></h1>
                            <p class="h-2 bg-black rounded-full w-36 mb-2.5 border-2 border-transparent hover:border-red-700"></p>
                        </div>
                    </div>
                
                    <div @mouseover="setCard(2)" class="bg-white border-b-4 border-maingreen flex flex-col text-center items-center px-2 py-6 shadow-lg shadow-transparent hover:shadow-red-600 transition duration-400 relative z-20">
                        <div role="status" class="max-w-sm animate-pulse flex flex-col pt-4 px-14 gap-4">
                            <h1 class="h-8 bg-maingreen rounded-full w-24 self-center border-4 border-transparent hover:border-red-700"></h1>
                            <p class="h-2 bg-black rounded-full w-36 mb-2.5 border-2 border-transparent hover:border-red-700"></p>
                        </div>
                    </div>
                
                    <div @mouseover="setCard(3)" class="bg-white border-b-4 border-maingreen flex flex-col text-center items-center px-2 py-6 shadow-lg shadow-transparent hover:shadow-red-600 transition duration-400 relative z-20">
                        <div role="status" class="max-w-sm animate-pulse flex flex-col pt-4 px-14 gap-4">
                            <h1 class="h-8 bg-maingreen rounded-full w-24 self-center border-4 border-transparent hover:border-red-700"></h1>
                            <p class="h-2 bg-black rounded-full w-36 mb-2.5 border-2 border-transparent hover:border-red-700"></p>
                        </div>
                    </div>
                
                    <div @mouseover="setCard(4)" class="bg-white border-b-4 border-maingreen flex flex-col text-center items-center px-2 py-6 shadow-lg shadow-transparent hover:shadow-red-600 transition duration-400 relative z-20">
                        <div role="status" class="max-w-sm animate-pulse flex flex-col pt-4 px-14 gap-4">
                            <h1 class="h-8 bg-maingreen rounded-full w-24 self-center border-4 border-transparent hover:border-red-700"></h1>
                            <p class="h-2 bg-black rounded-full w-36 mb-2.5 border-2 border-transparent hover:border-red-700"></p>
                        </div>
                    </div>
                </div>
            </div>
            <div @mouseover="onOffEffect('cover-div')" @mouseleave="onOffEffect('cover-div')" alt="Polo IFMG" class="rounded-lg border border-maingreen flex items-center px-5 border-transparent hover:border-red-700 absolute max-sm:mt-10">
                <svg class="w-32 h-32 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                </svg>
            </div>
        </div>

        <!-- Formulário -->
        <form class="bg-white p-10 rounded-lg mb-10">
            <div class="flex flex-col gap-6 mb-2 justify-center">
                <div class="flex flex-col gap-5">
                    <div id="number-div" class="flex flex-col gap-3 border border-transparent rounded-lg p-2">
                        <label for="number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Número Card {{ cardToUpdate }}</label>
                        <input class="bg-gray-50 border border-gray-300 text-gray-900 focus:ring-red-600 focus:ring-2 text-sm rounded-lg w-full p-2.5" 
                            type="number" id="number" placeholder="45+, 10+, 20+ etc..." required v-model="newCard.num"/>
                    </div>
                    <div id="name-div" class="border border-transparent rounded-lg p-2">
                        <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Texto Card {{ cardToUpdate }}</label>
                        <input class="bg-gray-50 border border-gray-300 text-gray-900 focus:ring-red-600 focus:ring-2 text-sm rounded-lg w-full p-2.5"
                            type="text" id="last_name" placeholder="Projetos Publicados, Empresas Parceiras....." required v-model="newCard.text"/>
                    </div>
                    <div id="cover-div" class="border border-transparent rounded-lg p-2">
                        <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Imagem de capa (Não obrigatório)</label>
                        <input class="bg-gray-50 border text-gray-900 text-sm focus:ring-red-600 focus:border-red-600 w-full rounded-xl"
                            type="file" id="logo" @change="onFileChanged($event)" accept="image/*" required />
                    </div>
                </div>
                <div class="w-full flex justify-center">
                    <button class="text-white bg-maingreen hover:bg-govblue focus:ring-2 focus:outline-none focus:ring-red-600 font-medium rounded-lg text-sm px-20 py-2.5 text-center transition duration-200"
                        type="submit" @click.prevent="updateCard()">Salvar</button>
                </div>
            </div>
        </form>
    </section>
</template>

<script>
import router from '@/router/index.js'
import { updateCard } from '@/services/PresenterCardService.js'
import { updateImage } from '@/services/ImageService.js'

export default {
    name: 'EditPresenterCard',
    data(){
        return {
            bool: false,
            cardToUpdate: 1,
            newCard:{
                num: null,
                text: '',
            },
            background: {
                name:'presenter-background',
                code: '',
                id: 145
            }
        }
    },
    methods: {
        onOffEffect(div){
            let target = document.getElementById(div);
            this.bool ? target.style.borderColor = 'transparent' : target.style.borderColor = 'red'
            this.bool = !this.bool
        },
        updateCard(){
            this.newCard.id = this.cardToUpdate
            
            if (this.newCard.num != null) {
                updateCard(this.newCard).then((response) => {
                    console.log(response)
                }).finally(() => {
                    router.push('/').then(() => {
                        var element = document.getElementById("navbar");
                        element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                    }); 
                })
            }

            if(this.background.code != null){
                updateImage(this.background).then((response) => {
                    console.log(response.data)
                }).finally(() => {
                    router.push('/').then(() => {
                        var element = document.getElementById("navbar");
                        element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                    }); 
                })
            }
        },
        setCard(card){
            this.cardToUpdate = card
        },
        onFileChanged(e){
            const image = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = e => {
                this.background.code = e.target.result;
            };
        },
    },
}
</script>

<style scoped>
</style>