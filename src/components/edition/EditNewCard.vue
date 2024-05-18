<template lang="">
    <section class="flex flex-col justify-center bg-lightgray gap-10 mb-10">
        <div role="status" class="pt-5">
            <p class="font-bold text-2xl underline underline-offset-2 decoration-4 decoration-maingreen self-start mt-5 mb-10">Notícias Secundárias</p>

            <!-- Sequência de Cards -->
            <section class="flex gap-3 animate-pulse">
                <div @mouseover="changeForm(1, 27)" class="flex flex-col bg-white justify-between items-center shadow-xl shadow-transparent hover:shadow-red-600 border-2 rounded-3xl border-gray-100 transition duration-300">
                    <div @mouseover="onOffEffect('image-div')" @mouseleave="onOffEffect('image-div')" class="flex items-center justify-center w-full h-48 bg-maingreen sm:w-96 rounded-t-lg border-4 border-transparent hover:border-red-700">
                        <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                        </svg>
                    </div>
                    <div class="flex flex-col gap-3 mt-3 max-lg:px-3 pb-5">
                        <div @mouseover="onOffEffect('tip-div')" @mouseleave="onOffEffect('tip-div')" class="border-maingreen rounded-lg w-40 justify-center px-2 py-1 max-lg:mt-6 4xl:mx-auto flex items-center border-4 hover:border-red-700">
                            <div class="h-1 bg-black rounded-full w-24 self-center"></div>
                        </div>
                        <div @mouseover="onOffEffect('title-div')" @mouseleave="onOffEffect('title-div')" class="w-80 max-lg:w-auto text-2xl font-bold mt-2 flex flex-col gap-4 justify-start border-4 border-transparent hover:border-red-700">
                            <div class="h-2.5 bg-black rounded-full w-64"></div>
                            <div class="h-2.5 bg-black rounded-full w-72"></div>
                        </div>
                        <div class="w-80 max-lg:w-auto text-2xl font-bold mt-2 flex gap-1 items-center">
                            <div @mouseover="onOffEffect('readtime-div')" @mouseleave="onOffEffect('readtime-div')" class="h-1 bg-gray-200 rounded-full w-80 border border-transparent hover:border-red-700"></div> |
                            <div @mouseover="onOffEffect('date-div')" @mouseleave="onOffEffect('date-div')" class="h-1 bg-gray-200 rounded-full w-96 border border-transparent hover:border-red-700"></div>
                        </div>
                        <a href="#" class="text-xs text-maingreen hover:underline">Ler Mais -></a>
                    </div>
                </div>
                <div @mouseover="changeForm(2, 28)" class="flex flex-col bg-white justify-between items-center shadow-xl shadow-transparent hover:shadow-red-600 border-2 rounded-3xl border-gray-100 transition duration-300">
                    <div @mouseover="onOffEffect('image-div')" @mouseleave="onOffEffect('image-div')" class="flex items-center justify-center w-full h-48 bg-maingreen sm:w-96 rounded-t-lg border-4 border-transparent hover:border-red-700">
                        <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                        </svg>
                    </div>
                    <div class="flex flex-col gap-3 mt-3 max-lg:px-3 pb-5">
                        <div @mouseover="onOffEffect('tip-div')" @mouseleave="onOffEffect('tip-div')" class="border-maingreen rounded-lg w-40 justify-center px-2 py-1 max-lg:mt-6 4xl:mx-auto flex items-center border-4 hover:border-red-700">
                            <div class="h-1 bg-black rounded-full w-24 self-center"></div>
                        </div>
                        <div @mouseover="onOffEffect('title-div')" @mouseleave="onOffEffect('title-div')" class="w-80 max-lg:w-auto text-2xl font-bold mt-2 flex flex-col gap-4 justify-start border-4 border-transparent hover:border-red-700">
                            <div class="h-2.5 bg-black rounded-full w-64"></div>
                            <div class="h-2.5 bg-black rounded-full w-72"></div>
                        </div>
                        <div class="w-80 max-lg:w-auto text-2xl font-bold mt-2 flex gap-1 items-center">
                            <div @mouseover="onOffEffect('readtime-div')" @mouseleave="onOffEffect('readtime-div')" class="h-1 bg-gray-200 rounded-full w-80 border border-transparent hover:border-red-700"></div> |
                            <div @mouseover="onOffEffect('date-div')" @mouseleave="onOffEffect('date-div')" class="h-1 bg-gray-200 rounded-full w-96 border border-transparent hover:border-red-700"></div>
                        </div>
                        <a href="#" class="text-xs text-maingreen hover:underline">Ler Mais -></a>
                    </div>
                </div>
                <div @mouseover="changeForm(3, 29)" class="flex flex-col bg-white justify-between items-center shadow-xl shadow-transparent hover:shadow-red-600 border-2 rounded-3xl border-gray-100 transition duration-300">
                    <div @mouseover="onOffEffect('image-div')" @mouseleave="onOffEffect('image-div')" class="flex items-center justify-center w-full h-48 bg-maingreen sm:w-96 rounded-t-lg border-4 border-transparent hover:border-red-700">
                        <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                        </svg>
                    </div>
                    <div class="flex flex-col gap-3 mt-3 max-lg:px-3 pb-5">
                        <div @mouseover="onOffEffect('tip-div')" @mouseleave="onOffEffect('tip-div')" class="border-maingreen rounded-lg w-40 justify-center px-2 py-1 max-lg:mt-6 4xl:mx-auto flex items-center border-4 hover:border-red-700">
                            <div class="h-1 bg-black rounded-full w-24 self-center"></div>
                        </div>
                        <div @mouseover="onOffEffect('title-div')" @mouseleave="onOffEffect('title-div')" class="w-80 max-lg:w-auto text-2xl font-bold mt-2 flex flex-col gap-4 justify-start border-4 border-transparent hover:border-red-700">
                            <div class="h-2.5 bg-black rounded-full w-64"></div>
                            <div class="h-2.5 bg-black rounded-full w-72"></div>
                        </div>
                        <div class="w-80 max-lg:w-auto text-2xl font-bold mt-2 flex gap-1 items-center">
                            <div @mouseover="onOffEffect('readtime-div')" @mouseleave="onOffEffect('readtime-div')" class="h-1 bg-gray-200 rounded-full w-80 border border-transparent hover:border-red-700"></div> |
                            <div @mouseover="onOffEffect('date-div')" @mouseleave="onOffEffect('date-div')" class="h-1 bg-gray-200 rounded-full w-96 border border-transparent hover:border-red-700"></div>
                        </div>
                        <a href="#" class="text-xs text-maingreen hover:underline">Ler Mais -></a>
                    </div>
                </div>
            </section>
        </div>
        <form class="bg-white p-10 rounded-lg">
            <div class="grid gap-6 mb-6 grid-cols-3">
                <div id="tip-div" class="border-2 border-transparent p-2">
                    <label for="tip" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Dica {{ currentCard }}</label>
                    <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                        type="text" id="tip" placeholder="Ex: Posse da Diretoria..." v-model="newCard.tip" required />
                </div>
                <div id="title-div" class="border-2 border-transparent p-2">
                    <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Título {{ currentCard }}</label>
                    <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                        type="text" id="title" placeholder="Ex: Polo IFMG inicia nova direção..." v-model="newCard.title" required />
                </div>
                <div id="date-div" class="border-2 border-transparent p-2">
                    <label for="date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Data Card {{ currentCard }}</label>
                    <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                        type="text" id="date" placeholder="14 de Dezembro..." v-model="newCard.date" required />
                </div>  
                <div id="readtime-div" class="border-2 border-transparent p-2">
                    <label for="read_time" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tempo de Leitura {{ currentCard }}</label>
                    <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                        type="tel" id="read_time" placeholder="3 minutos..." v-model="newCard.read" required />
                </div>
                <div id="image-div" class="border-2 border-transparent p-2">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Imagem do Card {{ currentCard }}</label>
                    <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none"
                        aria-describedby="file_input_help" id="file_input" type="file" @change="onImageChange($event)"/>
                    <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                </div>
            </div>
            <div class="w-full flex justify-center">
                <button type="submit" @click.prevent="updateCards()" class="text-white bg-maingreen hover:bg-govblue focus:ring-2 focus:outline-none focus:ring-red-600 font-medium rounded-lg text-sm w-full sm:w-auto px-48 py-2.5 text-center">Salvar</button>
            </div>
        </form>
    </section>
</template>

<script>
import router from '@/router/index.js'
import { updateNewsCard } from '@/services/NewsCardService.js'

export default {
    name: 'EditNewCard',
    data(){
        return {
            bool: false,
            currentCard: null,
            newCard: {
                id: null,
                tip: '',
                title: '',
                date: '',
                read: '',
                img: {
                    id: null,
                    code: null
                }
            },
        }
    },
    methods: {
        onOffEffect(div){
            let target = document.getElementById(div);
            this.bool ? target.style.borderColor = 'transparent' : target.style.borderColor = 'red'
            this.bool = !this.bool
        },
        changeForm(id, id_img){
            this.newCard.id = id
            this.newCard.img.id = id_img
            this.currentCard = id
        },
        onImageChange(e){
            const image = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = e => {
                this.newCard.img.code = e.target.result;
            };
        },
        updateCards(){
            if(this.newCard.title !== '' && this.newCard.paragraph !== ''){

                updateNewsCard(this.newCard).then((response) => {
                    console.log(response)
                }).finally(() => {
                    router.push('/').then(() => {
                        var element = document.getElementById("news");
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