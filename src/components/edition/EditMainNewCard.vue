<template lang="">
    <section class="flex flex-col justify-center gap-4">
        <div role="status" class="pt-5 animate-pulse">
            <p class="font-semibold text-2xl underline underline-offset-2 decoration-4 decoration-maingreen self-start my-5 ml-20">Notícia Principal</p>

            <!-- Esqueleto do componente -->
            <section class="px-20 max-lg:px-5">
                <div href="#" target="_blank" class="flex bg-white max-lg:flex-col justify-between items-center gap-48 border-2 rounded-3xl border-gray-100 hover:shadow-2xl transition duration-300">
                    <div class="flex flex-col gap-3 pl-10 max-lg:px-3 pt-4">
                        <div @mouseover="onOffEffect('tip-div')" @mouseleave="onOffEffect('tip-div')" class="border-2 hover:border-red-700 border-maingreen rounded-lg w-40 justify-center px-2 py-1 max-lg:mt-6 4xl:mx-auto flex items-center">
                            <div class="h-2.5 bg-black rounded-full w-24 self-center"></div>
                        </div>
                        <div @mouseover="onOffEffect('title-div')" @mouseleave="onOffEffect('title-div')" class="border-2 border-transparent hover:border-red-700 w-80 max-lg:w-auto text-2xl font-bold mt-2 flex flex-col gap-4 justify-start">
                            <div class="h-2.5 bg-black rounded-full w-80"></div>
                            <div class="h-2.5 bg-black rounded-full w-96"></div>
                            <div class="h-2.5 bg-black rounded-full w-72"></div>
                        </div>
                        <div @mouseover="onOffEffect('resume-div')" @mouseleave="onOffEffect('resume-div')" class="border-2 border-transparent p-2 hover:border-red-700 w-80 max-lg:w-auto text-2xl font-bold mt-2 flex flex-col gap-1 justify-start">
                            <div class="h-1 bg-gray-200 rounded-full w-80"></div>
                            <div class="h-1 bg-gray-200 rounded-full w-96"></div>
                            <div class="h-1 bg-gray-200 rounded-full w-72"></div>
                        </div>
                        <a href="#" class="text-xs text-maingreen hover:underline">Ler Mais -></a>
                    </div>
                    <div @mouseover="onOffEffect('image-div')" @mouseleave="onOffEffect('image-div')" class="flex items-center justify-center w-full h-48 rounded bg-maingreen sm:w-96 border-4 border-transparent hover:border-red-700">
                        <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                        </svg>
                    </div>
                </div>
            </section>
        </div>

        <!-- Formulário-->
        <form class="bg-white p-10 rounded-lg mb-10">
            <div class="flex justify-center gap-10">
                <div class="flex flex-col gap-5">
                    <div id="tip-div" class="border-2 border-transparent p-2 rounded-lg">
                        <label for="tip" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Dica</label>
                        <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5" placeholder="John" required 
                            type="text" id="tip" v-model="newMainCard.tip"/>
                    </div>
                    <div id="title-div" class="border-2 border-transparent p-2 rounded-lg">
                        <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Título</label>
                        <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5"
                            type="text" id="title" placeholder="Doe" required v-model="newMainCard.title"/>
                    </div>
                    <div id="image-div" class="border-2 border-transparent px-2 pt-9 rounded-lg">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Imagem de Capa</label>
                        <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none"
                            aria-describedby="file_input_help" id="file_input" type="file" @change="onImageChange($event)">
                        <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                    </div>
                </div>
                <div class="flex flex-col gap-5">
                    <div id="resume-div" class="border-2 border-transparent p-2 rounded-lg">
                        <label for="parag" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Resumo</label>
                        <textarea class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-red-600 focus:border-red-600" 
                            id="parag" rows="10" cols="50" v-model="newMainCard.paragraph" placeholder="Escreva sobre a sua manchete aqui..."></textarea>
                    </div>
                    <div class="w-full flex justify-center">
                        <button type="submit" @click.prevent="updateCard()" class="text-white bg-maingreen hover:bg-govblue focus:ring-2 focus:outline-none focus:ring-red-600 font-medium rounded-lg text-sm w-full sm:w-auto px-48 py-2.5 text-center transition duration-200">Salvar</button>
                    </div>
                </div>
            </div>
        </form>
    </section>
</template>

<script>
import router from '@/router/index.js'
import { updateMainNew } from '@/services/MainNewService.js'

export default {
    name: 'EditAdvantagesCard',
    data(){
        return {
            bool: false,
            newMainCard: {
                id: 1,
                tip: '',
                title: '',
                paragraph: '',
                image: {
                    id: 26,
                    name: 'mainnew-img',
                    code: null
                }
            }
        }
    },
    methods: {
        onOffEffect(div){
            let target = document.getElementById(div);
            this.bool ? target.style.borderColor = 'transparent' : target.style.borderColor = 'red'
            this.bool = !this.bool
        },
        onImageChange(e){
            const image = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = e => {
                this.newMainCard.image.code = e.target.result;
            };
        },
        updateCard(){
            if(this.newMainCard.tip !== '' && this.newMainCard.title !== ''){
                console.log(this.newMainCard)
                updateMainNew(this.newMainCard).then((response) => {
                    console.log(response)
                }).finally(() => {
                    router.push('/').then(() => {
                        var element = document.getElementById("navbar");
                        element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                        window.location.reload();
                    }); 
                })
            }

        },
    },
}
</script>

<style scoped>

</style>