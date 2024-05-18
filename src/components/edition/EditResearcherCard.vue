<template lang="">
    <section class="flex justify-center bg-lightgray gap-10 my-10 mx-5">
        <div role="status" class="flex flex-col items-center gap-10">
            <p class="font-bold text-2xl underline underline-offset-2 decoration-4 decoration-maingreen self-start mt-5 mb-10">Editar Pesquisador</p>

            <!-- Card Modelo -->
            <section class="hover:shadow-lg transition duration-300 rounded-lg border border-gray-200 bg-white">
                <div class="border-t border-maingreen px-4 py-5 gap-48 flex items-center justify-between animate-pulse">
                    <div class="h-2.5 bg-black rounded-full w-48 border border-transparent hover:border-red-700"></div>
                    <div alt="Polo IFMG"
                        class="h-16 rounded-lg border border-maingreen flex items-center px-5 border-transparent hover:border-red-700">
                        <svg class="w-8 h-8 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                        </svg>
                    </div>
                </div>
                <div class="flex flex-col px-3 gap-3 py-3 animate-pulse">
                    <div class="h-2 bg-black rounded-full w-40 border border-transparent hover:border-red-700"></div>
                    <a class="flex items-center gap-3 border border-transparent hover:border-red-700 rounded-lg p-1">
                        <img alt="Polo IFMG" class="h-4" :src="require('@/assets/icons/email-green.svg')"/>
                        <div class="h-1.5 bg-maingreen rounded-full w-40"></div>
                    </a>
                    <a class="flex items-center gap-3 border border-transparent hover:border-red-700 rounded-lg p-1">
                        <img alt="Polo IFMG" class="h-4" :src="require('@/assets/icons/book-green.svg')"/>
                        <div class="h-1.5 bg-maingreen rounded-full w-40"></div>
                    </a>
                </div>
            </section>

            <!-- Pesquisador-->
            <div>
                <button class="text-maingray bg-white hover:bg-maingreen hover:text-white focus:ring-4 focus:outline-none focus:ring-red-600 font-medium rounded-lg text-sm text-center flex items-center p-4 transition duration-200 border-2 border-maingreen"
                    id="dropdownDefaultButton" data-dropdown-toggle="dropdown" type="button">
                    {{ inEditionResearcher.name }}
                </button>

                <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow">
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                        <li v-for="(researcher, i) in researchers" :key="i" @click="setItem('researcher', researcher.id, researcher.firstName + ' ' + researcher.lastName, researcher.img.id)">
                            <input href="#" class="block px-4 py-2 hover:bg-maingreen hover:text-white cursor-pointer w-80" readonly="readonly" :value="researcher.firstName + ' ' + researcher.lastName"/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <form class="bg-white p-10 rounded-lg">
            <div class="grid gap-6 mb-6 md:grid-cols-2">

                <!-- Nome -->
                <div id="name-div" class="border-2 border-transparent p-2 rounded-lg">
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome</label>
                    <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        v-model="newResearcher.firstName" type="text" id="name" required />
                </div>

                <!-- Sobrenome -->
                <div id="lastname-div" class="border-2 border-transparent p-2 rounded-lg">
                    <label for="lastname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sobrenome</label>
                    <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        v-model="newResearcher.lastName" type="text" id="lastname" required />
                </div>

                <!-- Curso -->
                <div id="course-div" class="border-2 border-transparent p-2 rounded-lg">
                    <label for="course" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Curso</label>
                    <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required
                        v-model="newResearcher.course" type="text" id="course" />
                </div>

                <!-- Email -->
                <div id="email-div" class="border-2 border-transparent p-2 rounded-lg">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        v-model="newResearcher.email" type="text" id="email" required />
                </div>

                <!-- Campus -->
                <div id="campus-div" class="border-2 border-transparent p-2 rounded-lg">
                    <button class="text-maingray bg-white hover:bg-maingreen hover:text-white focus:ring-4 focus:outline-none focus:ring-red-600 font-medium rounded-lg text-sm text-center flex items-center p-4 transition duration-200 border-2 border-maingreen"
                        id="dropdownDefaultButton" data-dropdown-toggle="campuses" type="button">
                        {{ inEditionCampus.name }}
                    </button>

                    <div id="campuses" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow">
                        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                            <li v-for="(campus, i) in campuses" :key="i" @click="setItem('campus', campus.id, campus.name)">
                                <input class="block px-4 py-2 hover:bg-maingreen hover:text-white cursor-pointer w-80" readonly="readonly" :value="campus.name"/>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <!-- Titulação -->
                <div id="level-div" class="border-2 border-transparent p-2 rounded-lg">
                    <label for="level" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Titulação</label>
                    <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                        v-model="newResearcher.level" type="text" id="level" required />
                </div>

                <!-- Sexo -->
                <div id="sex-div" class="border-2 border-transparent p-2 rounded-lg">
                    <label for="sex_link" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sexo:</label>
                    <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        v-model="newResearcher.sex" type="tel" id="sex_link" required />
                </div>

                <!-- Portfólio -->
                <div id="lattes-div" class="border-2 border-transparent p-2 rounded-lg">
                    <label for="lattes_link" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Portfólio</label>
                    <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                        v-model="newResearcher.name" type="tel" id="lattes_link" required />
                </div>

                <!-- Imagem -->
                <div id="image-div" class="border-2 border-transparent p-2 rounded-lg col-span-2">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Imagem de Perfil</label>
                    <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none"
                        aria-describedby="file_input_help" id="file_input" type="file" @change="onImageChange($event)">
                    <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                </div>
            </div>
            <button class="text-white bg-maingreen hover:bg-red-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                type="submit" @click.prevent="updateResearcher()">Salvar</button>
        </form>
    </section>
</template>

<script>
import router from '@/router/index.js'
import { updateResearcher, listResearchers } from '@/services/ResearcherService.js';
import { listCampus } from '@/services/CampusService.js';

export default {
    name: 'EditResearcherCard',
    data(){
        return {
            bool: false,
            researchers: null,
            campuses: null,
            inEditionResearcher:{
                id: null,
                name: 'Selecione um Pesquisador',
                id_img: null
            },
            inEditionCampus:{
                id: null,
                name: 'Selecione um Campus',
            },
            newResearcher: {
                id: 1,
                name: '',
                campus: {
                    id: 0,
                    name: ''
                },
                firstName: '',
                lastName: '',
                level: '',
                sex: '',
                img: {
                    id: null,
                    code: null
                }
            },
        }
    },
    created(){
        listResearchers().then((response) => {
            console.log(response.data)
            this.researchers = response.data
        })

        listCampus().then((response)=>{
            console.log(response.data)
            this.campuses = response.data
        })
    },
    methods: {
        onOffEffect(div){
            let target = document.getElementById(div);
            this.bool ? target.style.borderColor = 'transparent' : target.style.borderColor = 'red'
            this.bool = !this.bool
        },
        setItem(item, id, name, id_img){
            if(item == 'researcher'){
                this.inEditionResearcher.id = id
                this.inEditionResearcher.name = name,
                this.inEditionResearcher.id_img = id_img
                
            }else if(item == 'campus'){
                this.inEditionCampus.id = id
                this.inEditionCampus.name = name,
                console.log(this.inEditionCampus)
            }
        },
        onImageChange(e){
            const image = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = e => {
                this.newResearcher.img.code = e.target.result;
            };
        },
        updateResearcher(){
            if(this.newResearcher.firstName !== '' && this.newResearcher.lastName !== ''){

                this.newResearcher.id = this.inEditionResearcher.id
                this.newResearcher.img.id = this.inEditionResearcher.id_img
                this.newResearcher.campus.id = this.inEditionCampus.id

                console.log(this.newResearcher)

                updateResearcher(this.newResearcher).then((response) => {
                    console.log(response)
                })
                .finally(() => {
                    router.push('/').then(() => {
                        var element = document.getElementById("researcher");
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