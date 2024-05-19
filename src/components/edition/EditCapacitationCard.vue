<template lang="">
    <section class="flex flex-col justify-center bg-lightgray gap-10 my-10">
        <p class="font-bold text-2xl underline underline-offset-2 decoration-4 decoration-maingreen self-start ml-6">Cards de Capacitação</p>

        <!-- Box dos Cards-->
        <div role="status" class="animate-pulse flex gap-1">
            <div @mouseover="changeForm(1, 4)" class="shadow-lg shadow-transparent hover:shadow-red-600 transition duration-200 hover:text-black hover:bg-white flex flex-col gap-3 px-8 py-8 rounded-3xl border-2 border-white bg-maingreen">
                <div @mouseover="onOffEffect('image-div')" @mouseleave="onOffEffect('image-div')" class="flex justify-between items-center ">
                    <svg class="w-8 h-8 text-gray-200 effect-1 border border-transparent hover:border-red-700 rounded-lg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                    </svg>
                </div>
                <div @mouseover="onOffEffect('title-div')" @mouseleave="onOffEffect('title-div')" class="border border-transparent hover:border-red-700 rounded-lg">
                    <div class="h-2.5 bg-white rounded-full w-36 mb-1 effect"></div>
                    <div class="h-2.5 bg-white rounded-full w-28 mb-4 effect"></div>
                </div>
                <div @mouseover="onOffEffect('resume-div')" @mouseleave="onOffEffect('resume-div')" class="flex flex-col gap-1 border border-transparent hover:border-red-700 rounded-lg">
                    <div class="h-1 bg-white rounded-full effect w-56"></div>
                    <div class="h-1 bg-white rounded-full effect w-48"></div>
                    <div class="h-1 bg-white rounded-full effect w-36"></div>
                </div>
                <a class="text-xs flex items-center gap-2 font-semibold bg-no-repeat hover:underline text-white effect-1" href="#">Explorar -> <div class="w-5 h-5"/></a>
            </div>
            <div @mouseover="changeForm(2, 5)" class="shadow-lg shadow-transparent hover:shadow-red-600 transition duration-200 hover:text-black hover:bg-white flex flex-col gap-3 px-8 py-8 rounded-3xl border-2 border-white bg-maingreen">
                <div @mouseover="onOffEffect('image-div')" @mouseleave="onOffEffect('image-div')" class="flex justify-between items-center ">
                    <svg class="w-8 h-8 text-gray-200 effect-1 border border-transparent hover:border-red-700 rounded-lg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                    </svg>
                </div>
                <div @mouseover="onOffEffect('title-div')" @mouseleave="onOffEffect('title-div')" class="border border-transparent hover:border-red-700 rounded-lg">
                    <div class="h-2.5 bg-white rounded-full w-36 mb-1 effect"></div>
                    <div class="h-2.5 bg-white rounded-full w-28 mb-4 effect"></div>
                </div>
                <div @mouseover="onOffEffect('resume-div')" @mouseleave="onOffEffect('resume-div')" class="flex flex-col gap-1 border border-transparent hover:border-red-700 rounded-lg">
                    <div class="h-1 bg-white rounded-full effect w-56"></div>
                    <div class="h-1 bg-white rounded-full effect w-48"></div>
                    <div class="h-1 bg-white rounded-full effect w-36"></div>
                </div>
                <a class="text-xs flex items-center gap-2 font-semibold bg-no-repeat hover:underline text-white effect-1" href="#">Explorar -> <div class="w-5 h-5"/></a>
            </div>
            <div @mouseover="changeForm(3, 6)" class="shadow-lg shadow-transparent hover:shadow-red-600 transition duration-200 hover:text-black hover:bg-white flex flex-col gap-3 px-8 py-8 rounded-3xl border-2 border-white bg-maingreen">
                <div @mouseover="onOffEffect('image-div')" @mouseleave="onOffEffect('image-div')" class="flex justify-between items-center ">
                    <svg class="w-8 h-8 text-gray-200 effect-1 border border-transparent hover:border-red-700 rounded-lg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                    </svg>
                </div>
                <div @mouseover="onOffEffect('title-div')" @mouseleave="onOffEffect('title-div')" class="border border-transparent hover:border-red-700 rounded-lg">
                    <div class="h-2.5 bg-white rounded-full w-36 mb-1 effect"></div>
                    <div class="h-2.5 bg-white rounded-full w-28 mb-4 effect"></div>
                </div>
                <div @mouseover="onOffEffect('resume-div')" @mouseleave="onOffEffect('resume-div')" class="flex flex-col gap-1 border border-transparent hover:border-red-700 rounded-lg">
                    <div class="h-1 bg-white rounded-full effect w-56"></div>
                    <div class="h-1 bg-white rounded-full effect w-48"></div>
                    <div class="h-1 bg-white rounded-full effect w-36"></div>
                </div>
                <a class="text-xs flex items-center gap-2 font-semibold bg-no-repeat hover:underline text-white effect-1" href="#">Explorar -> <div class="w-5 h-5"/></a>
            </div>
            <div @mouseover="changeForm(4, 7)" class="shadow-lg shadow-transparent hover:shadow-red-600 transition duration-200 hover:text-black hover:bg-white flex flex-col gap-3 px-8 py-8 rounded-3xl border-2 border-white bg-maingreen">
                <div @mouseover="onOffEffect('image-div')" @mouseleave="onOffEffect('image-div')" class="flex justify-between items-center ">
                    <svg class="w-8 h-8 text-gray-200 effect-1 border border-transparent hover:border-red-700 rounded-lg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                    </svg>
                </div>
                <div @mouseover="onOffEffect('title-div')" @mouseleave="onOffEffect('title-div')" class="border border-transparent hover:border-red-700 rounded-lg">
                    <div class="h-2.5 bg-white rounded-full w-36 mb-1 effect"></div>
                    <div class="h-2.5 bg-white rounded-full w-28 mb-4 effect"></div>
                </div>
                <div @mouseover="onOffEffect('resume-div')" @mouseleave="onOffEffect('resume-div')" class="flex flex-col gap-1 border border-transparent hover:border-red-700 rounded-lg">
                    <div class="h-1 bg-white rounded-full effect w-56"></div>
                    <div class="h-1 bg-white rounded-full effect w-48"></div>
                    <div class="h-1 bg-white rounded-full effect w-36"></div>
                </div>
                <a class="text-xs flex items-center gap-2 font-semibold bg-no-repeat hover:underline text-white effect-1" href="#">Explorar -> <div class="w-5 h-5"/></a>
            </div>
        </div>

        <!-- Formulário -->
        <form class="bg-white flex flex-col p-10 rounded-lg">
            <div class="grid gap-6 mb-6 grid-cols-2">
                <div id="title-div" class="border-2 border-transparent p-2 rounded-lg">
                    <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Título Card {{ currentForm }}</label>
                    <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5" 
                        type="text" id="title" placeholder="John" v-model="capacitationCard.title" required />
                </div>
                <div id="resume-div" class="border-2 border-transparent p-2 rounded-lg">
                    <label for="resume" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Resumo Card {{ currentForm }}</label>
                    <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5"
                        type="text" id="resume" placeholder="Doe" v-model="capacitationCard.subtitle" required />
                </div>
                <div id="link-div" class="border-2 border-transparent p-2 rounded-lg">
                    <label for="lattes_link" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Link Card {{ currentForm }}</label>
                    <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5"
                        type="tel" id="lattes_link" placeholder="Link" required />
                </div>
                <div id="image-div" class="border-2 border-transparent p-2 rounded-lg">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Imagem do Ícone</label>
                    <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none"
                        aria-describedby="file_input_help" id="file_input" type="file" @change="onImageChange($event)" accept="image/*">
                    <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                </div>
            </div>
            <div class="w-full flex justify-center">
                <button class="text-white bg-maingreen hover:bg-govblue focus:ring-4 focus:outline-none focus:ring-main-700 font-medium rounded-lg text-sm w-2/5 px-5 py-2.5 text-center transition duration-200 mb-10"
                type="submit" @click.prevent="updateCard()">Salvar</button>
            </div>
        </form>
    </section>
</template>

<script>
import router from '@/router/index.js'
import { updateCapacitation } from '@/services/CapacitationService.js';

export default {
    name: 'EditCapacitation',
    data(){
        return {
            bool: false,
            currentForm: 1,
            capacitationCard:{
                id: 1,
                title: '',
                subtitle: '',
                img: {
                    id: 1,
                    code: ''
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
        changeForm(id, id_img){
            this.currentForm = this.capacitationCard.id = id
            this.capacitationCard.img.id = id_img
        },
        onImageChange(e){
            const image = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = e => {
                this.capacitationCard.img.code = e.target.result;
            };
        },
        updateCard(){
            if(this.capacitationCard.title !== '' && this.capacitationCard.subtitle !== ''){
                console.log(this.capacitationCard)
                updateCapacitation(this.capacitationCard).then((response) => {
                    console.log(response)
                }).finally(() => {
                    router.push('/').then(() => {
                        var element = document.getElementById("capacitation");
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
section:hover .effect{
    background-color:black;
}

section:hover .effect-1{
    color:rgb(47, 158, 64);
}
</style>