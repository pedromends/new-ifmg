<template lang="">
    <section class="flex flex-col justify-center bg-lightgray gap-10">
        <div role="status" class="flex gap-24 relative justify-center items-center mt-10">
            <div class="absolute left-4 flex flex-col gap-5">
                <p class="font-bold text-2xl underline underline-offset-2 decoration-4 decoration-maingreen self-start mt-5 mb-10">Em edição:</p>
                <button class="text-maingray bg-white hover:bg-maingreen hover:text-white focus:ring-4 focus:outline-none focus:ring-red-600 font-medium rounded-lg text-sm text-center flex items-center p-4 transition duration-200" 
                    id="dropdownDefaultButton" data-dropdown-toggle="dropdown" type="button">
                    {{ inEdition.name }}
                </button>
                    
                <!-- Dropdown menu -->
                <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                        <li v-for="(talent, i) in talents" :key="i" @click="setCurrentTalent(talent.id, talent.name, talent.img.id)">
                            <input href="#" class="block px-4 py-2 hover:bg-maingreen hover:text-white cursor-pointer" readonly="readonly" :value="talent.name"/>
                        </li>
                    </ul>
                </div>
            </div>
    
            <div class="transition duration-300 shadow-lg bg-white flex flex-col gap-5 rounded-3xl border-2 border-white p-3 px-10 hover:shadow-md hover:shadow-red-600 z-20 animate-pulse">
                <div class="flex justify-between items-start gap-24">
                    <div @mouseover="onOffEffect('image-div')" @mouseleave="onOffEffect('image-div')" alt="Polo IFMG" class="h-16 rounded-lg border border-maingreen flex items-center px-5 border-transparent hover:border-red-700">
                        <svg class="w-8 h-8 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                        </svg>
                    </div>
                    <img :src="require('@/assets/icons/linkedin.svg')"  class="" alt="Linkedin"/>
                </div> 
                <div class="flex flex-col gap-1">
                    <div @mouseover="onOffEffect('name-div')" @mouseleave="onOffEffect('name-div')" class="h-2.5 bg-black rounded-full w-36 border border-transparent hover:border-red-700"></div>
                    <div @mouseover="onOffEffect('profession-div')" @mouseleave="onOffEffect('profession-div')" class="h-1.5 bg-black rounded-full w-32 border border-transparent hover:border-red-700"></div>
                </div>
                <div @mouseover="onOffEffect('phrase-div')" @mouseleave="onOffEffect('phrase-div')" class="h-1.5 bg-black rounded-full w-28 border border-transparent hover:border-red-700"></div>
            </div>
        </div>

        <!-- Formulário -->
        <form class="bg-white p-10 rounded-lg mb-10">
            <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div id="name-div" class="border-2 border-transparent p-2 rounded-lg">
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome</label>
                    <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                        v-model="newTalent.name" type="text" id="name" placeholder="Paloma..." required />
                </div>
                <div id="profession-div" class="border-2 border-transparent p-2 rounded-lg">
                    <label for="profession" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profissão</label>
                    <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                        v-model="newTalent.profession" type="text" id="profession" placeholder="Professora...." required />
                </div>
                <div id="phrase-div" class="border-2 border-transparent p-2 rounded-lg">
                    <label for="phrase" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Detalhes</label>
                    <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        v-model="newTalent.details" type="text" id="phrase" placeholder="Lorem ipsum...." required />
                </div>
                <div id="image-div" class="border-2 border-transparent p-2 rounded-lg">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Imagem de Perfil</label>
                    <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                        @change="onImageChange($event)" aria-describedby="file_input_help" id="file_input" type="file"/>
                    <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                </div>
            </div>
            <button class="text-white bg-maingreen hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-36 py-2.5 text-center"
                @click.prevent="updateCard()" type="submit">Salvar</button>       
        </form>
    </section>
</template>

<script>
import router from '@/router/index.js'
import { updateTalent, getTalents } from '@/services/TalentService.js';

export default {
    name: 'EditnewTalent',
    data(){
        return {
            bool: false,
            talents: null,
            inEdition:{
                id: null,
                name: 'Selecione um aluno',
                id_img: null
            },
            newTalent: {
                id: 1,
                name: '',
                profession: '',
                details: '',
                img: {
                    id: null,
                    code: null
                }
            },
        }
    },
    created(){
        getTalents().then((response) => {
            this.talents = response.data
        })
    },
    methods: {
        onOffEffect(div){
            let target = document.getElementById(div);
            this.bool ? target.style.borderColor = 'transparent' : target.style.borderColor = 'red'
            this.bool = !this.bool
        },
        setCurrentTalent(id, name, id_img){
            this.inEdition.id = id
            this.inEdition.name = name,
            this.inEdition.id_img = id_img
            console.log(this.inEdition)
        },
        onImageChange(e){
            const image = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = e => {
                this.newTalent.img.code = e.target.result;
            };
        },
        updateCard(){
            if(this.newTalent.name !== '' && this.newTalent.profession !== ''){

                this.newTalent.id = this.inEdition.id
                this.newTalent.img.id = this.inEdition.id_img
                console.log(this.newTalent)

                updateTalent(this.newTalent).then((response) => {
                    console.log(response)
                }).finally(() => {
                    router.push('/').then(() => {
                        var element = document.getElementById("talents");
                        window.location.reload();
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