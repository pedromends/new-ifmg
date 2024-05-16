<template lang="">
    <section class="flex flex-col justify-center bg-lightgray gap-10">
        <div role="status" class="animate-pulse">
            <section class="flex justify-center gap-10 items-center">

                <!-- Modal -->
                <div class="relative p-4 w-full max-w-2xl max-h-full">
                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-maingreen">
                            <div @mouseover="onOffEffect('company-name-div')" @mouseleave="onOffEffect('company-name-div')" class="h-8 bg-black rounded-full w-36 mr-72 border border-transparent hover:border-red-700"></div>
                            <button type="button" class="bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center hover:bg-gray-500/50 transition duration-200">
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="#E02424" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div class="p-4 md:p-5 space-y-4 flex flex-col">
                            <div>
                                <h2 @mouseover="onOffEffect('project-name-div')" @mouseleave="onOffEffect('project-name-div')" id="headName" class="text-maingray border border-transparent hover:border-red-700">
                                    <button type="button" data-accordion-target="#headBody" aria-expanded="false" aria-controls="headBody"
                                        class="flex items-center justify-between w-full p-5 font-medium rtl:text-right border border-maingreen rounded-t-xl hover:bg-blue-100 gap-3 transition duration-200">
                                        <div class="h-3 bg-maingreen rounded-full w-48"></div>
                                        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="#2F9E40" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                                        </svg>
                                    </button>
                                </h2>
                                <div @mouseover="onOffEffect('about-project-div')" @mouseleave="onOffEffect('about-project-div')" class="border border-transparent hover:border-red-700">
                                    <div class="p-5 border rounded-b-xl border-gray-200 gap-2 flex flex-col">
                                        <div class="h-1 bg-black rounded-full w-96"></div>
                                        <div class="h-1 bg-black rounded-full w-96"></div>
                                        <div class="h-1 bg-black rounded-full w-96"></div>
                                        <div class="h-1 bg-black rounded-full w-96"></div>
                                        <div class="h-1 bg-black rounded-full w-96"></div>
                                        <div class="h-1 bg-black rounded-full w-96"></div>
                                        <div class="h-1 bg-black rounded-full w-96"></div>
                                        <div class="h-1 bg-black rounded-full w-96"></div>
                                        <div class="h-1 bg-black rounded-full w-96"></div>
                                    </div>
                                </div>
                            </div>
    
                            <div class="flex flex-col px-2 text-sm gap-1">
                                <div @mouseover="onOffEffect('coor-name-div')" @mouseleave="onOffEffect('coor-name-div')" class="flex gap-2 items-center max-lg:text-sm border border-transparent hover:border-red-700">
                                    <p class="font-bold text-maingray">Coordenador: </p>
                                    <div class="h-2 bg-black rounded-full w-24"></div>
                                </div>
                                <div @mouseover="onOffEffect('researchers-div')" @mouseleave="onOffEffect('researchers-div')" class="flex gap-2 items-center max-lg:text-sm border border-transparent hover:border-red-700">
                                    <p class="font-bold text-maingray">Pesquisador(es): </p>
                                    <div class="h-2 bg-black rounded-full w-24"></div>
                                </div>
                                <div @mouseover="onOffEffect('students-div')" @mouseleave="onOffEffect('students-div')"  class="flex gap-2 items-center max-lg:text-sm border border-transparent hover:border-red-700">
                                    <p class="font-bold text-maingray">Aluno(s): </p>
                                    <div class="h-2 bg-black rounded-full w-24"></div>
                                </div>
                                <div @mouseover="onOffEffect('situation-div')" @mouseleave="onOffEffect('situation-div')" class="flex gap-2 items-center max-lg:text-sm border border-transparent hover:border-red-700">
                                    <p class="font-bold text-maingray">Situação: </p>
                                    <p>Situação</p>
                                </div>
                                <div @mouseover="onOffEffect('value-div')" @mouseleave="onOffEffect('value-div')" class="flex gap-2 items-center max-lg:text-sm border border-transparent hover:border-red-700">
                                    <p class="font-bold text-maingray">Valor:</p>
                                    <div class="flex items-center gap-3">R$ <div class="h-2 bg-black rounded-full w-10"></div></div>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b">
                            <button v-if="boolSaibaMais" class="text-white bg-maingreen border-2 border-maingreen hover:bg-white hover:text-maingray transition duration-300 rounded-lg text-sm px-5 py-2.5"
                                type="button">
                                Saiba Mais!
                            </button>
                            <button class="ms-3 text-maingray bg-white rounded-lg border border-gray-200 text-sm transition duration-300 px-5 py-2.5 hover:bg-maingray hover:text-white"
                                type="button">
                                Fechar
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <form class="bg-white p-10 rounded-lg">
            <div class="grid gap-6 mb-6 grid-cols-3">
                <div id="company-name-div" class="border-2 border-transparent p-2 rounded-lg">
                    <div class="flex flex-col">
                        <label for="researchers" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Empresa:</label>
                        <button class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 hover:text-white focus:border-red-600 block w-full p-2.5 hover:bg-maingreen" 
                            id="modalityButton" data-dropdown-toggle="dropdown1" type="button">
                            {{ inEditionCompany.name }}
                        </button>
                            
                        <!-- Dropdown menu -->
                        <div id="dropdown1" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
                            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="modalityButton">
                                <li v-for="(company, i) in companies" :key="i" @click="setCompany(company.id, company.name, company.image.id)">
                                    <input href="#" class="block px-4 py-2 hover:bg-maingreen hover:text-white cursor-pointer "
                                    readonly="readonly" :value="company.name"/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="project-name-div" class="border-2 border-transparent p-2 rounded-lg">
                    <label for="project_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome do Projeto</label>
                    <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 hover:text-white focus:border-red-600 block w-full p-2.5"
                        v-model="newProject.name" type="text" id="project_name" placeholder="Doe" required />
                </div>  
                <div id="coor-name-div" class="border-2 border-transparent p-2 rounded-lg">
                    <div class="flex flex-col">
                        <label for="researchers" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Coordenador:</label>
                        <button class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 hover:text-white focus:border-red-600 block w-full p-2.5 hover:bg-maingreen" 
                            id="modalityButton" data-dropdown-toggle="dropdown2" type="button">
                            {{ inEditionCoordinator.name }}
                        </button>
                            
                        <!-- Dropdown menu -->
                        <div id="dropdown2" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
                            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="modalityButton">
                                <li v-for="(researcher, i) in researchers" :key="i" @click="setCurrentCoordinator(researcher.id, researcher.firstName + ' ' + researcher.lastName, researcher.img.id)">
                                    <input href="#" class="block px-4 py-2 hover:bg-maingreen hover:text-white cursor-pointer" readonly="readonly" :value="researcher.firstName + ' ' + researcher.lastName "/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="situation-div" class="border-2 border-transparent p-2 rounded-lg">
                    <label for="situation" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Situação</label>
                    <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 hover:text-white focus:border-red-600 block w-full p-2.5 hover:bg-maingreen"
                        v-model="newProject.situation" id="situation" placeholder="flowbite.com" required />
                </div>
                <div id="value-div" class="border-2 border-transparent p-2 rounded-lg">
                    <label for="value" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Valor</label>
                    <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 hover:text-white focus:border-red-600 block w-full p-2.5"
                        v-model="newProject.value" type="number" id="value"  placeholder="" required />
                </div>
                <!-- <div id="link-div" class="border-2 border-transparent p-2 rounded-lg">
                    <label for="link" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Link</label>
                    <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 hover:text-white focus:border-red-600 block w-full p-2.5 hover:bg-maingreen"
                        v-model="newProject.link" type="number" id="link" placeholder="" required />
                </div> -->
                <div id="researchers-div" class="border-2 border-transparent p-2 rounded-lg">
                    <div class="flex flex-col">
                        <label for="researchers" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pesquisadores:</label>
                        <button class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 hover:text-white focus:border-red-600 block w-full p-2.5 hover:bg-maingreen" 
                            id="modalityButton" data-dropdown-toggle="dropdown3" type="button">
                            {{ inEditionResearchers.name }}
                        </button>
                            
                        <!-- Dropdown menu -->
                        <div id="dropdown3" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
                            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="modalityButton">
                                <li v-for="(researcher, i) in researchers" :key="i" @click="setCurrentResearchers(researcher.id, researcher.firstName + ' ' + researcher.lastName, researcher.img.id)">
                                    <input href="#" class="block px-4 py-2 hover:bg-maingreen hover:text-white cursor-pointer" readonly="readonly" :value="researcher.firstName + ' ' + researcher.lastName "/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="students-div" class="border-2 border-transparent p-2 rounded-lg">
                    <div class="flex flex-col">
                        <label for="researchers" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Alunos:</label>
                        <button class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 hover:text-white focus:border-red-600 block w-full p-2.5 hover:bg-maingreen" 
                            id="modalityButton" data-dropdown-toggle="dropdown4" type="button">
                            {{ inEditionStudents.name }}
                        </button>
                            
                        <!-- Dropdown menu -->
                        <div id="dropdown4" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
                            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="modalityButton">
                                <li v-for="(talent, i) in talents" :key="i" @click="setTalents(talent.id, talent.name, talent.img.id)">
                                    <input href="#" class="block px-4 py-2 hover:bg-maingreen hover:text-white cursor-pointer" readonly="readonly" :value="talent.name"/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- <label class="inline-flex items-center cursor-pointer">
                    <input v-model="boolSaibaMais" type="checkbox" value="" class="sr-only peer">
                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Liga/Desliga 'Saiba Mais'</span>
                </label> -->
                <div id="about-project-div" class="border-2 border-transparent p-2 rounded-lg">
                    <label for="project_resume" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sobre o projeto</label>
                    <textarea id="project_resume" rows="10" cols="50" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-red-600"
                        v-model="newProject.resume" placeholder="Escreva sobre o projeto aqui..."></textarea>
                </div>
                <label class="flex flex-col gap-5 items-center cursor-pointer">
                    <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Novo Projeto ?</span>
                    <input v-model="newProjectBool" type="checkbox" value="" class="sr-only peer">
                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-maingray rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                </label>              
            </div>
            <div class="w-full flex justify-center">
                <button class="text-white bg-maingreen hover:bg-govblue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm m:w-auto w-2/5 py-2.5 text-center"
                    @click.prevent="updateCard()" type="submit" >Salvar</button>
            </div>    
        </form>
    </section>
</template>

<script>
import router from '@/router/index.js'

import { listModalities } from '@/services/ModalityService.js';
import { listCompanies } from '@/services/CompanyService.js';
import { listResearchers } from '@/services/ResearcherService.js';
import { listProjects, updateProject } from '@/services/ProjectService';
import { getTalents } from '@/services/TalentService.js'

export default {
    name: 'EditNewCard',
    data(){
        return {
            newProjectBool: false,
            bool: false,
            boolSaibaMais: true,
            companies: null,
            talents: null,
            modalities: null,
            researchers: null,
            projects: null,
            newProject: {
                modality:{
                    id:1
                },
                coordinator: {
                    id: null
                },
                company: {
                    id: null,
                    img: {
                        id: null
                    }
                },
                name: '',
                resume: '',
                situation: '',
                value: '',
                researchers: {
                    id: null
                }
            },
            inEditionCompany:{
                id: null,
                name: 'Selecione uma Empresa',
                id_img: null
            },
            inEditionCoordinator:{
                id: null,
                name: 'Selecione um Coordenador',
                id_img: null
            },
            inEditionResearchers:{
                id: null,
                name: 'Selecione os Pesquisadores',
                id_img: null
            },
            inEditionStudents:{
                id: null,
                name: 'Selecione os Alunos',
                id_img: null
            },
        }
    },
    created(){
        listCompanies().then((response) => {
            this.companies = response.data
            listModalities().then((response)=>{
                this.modalities = response.data
            }).then(() => {
                listResearchers().then((response)=>{
                    this.researchers = response.data
                    console.log(this.researchers)
                    listProjects().then((response) => {
                        this.projects = response.data
                        getTalents().then((response) => {
                            this.talents = response.data
                            console.log(this.talents)
                        }).catch((error) => {
                            console.log(error)
                        })
                    }).catch((error) => {
                        console.log(error)
                    })
                })
            })
        })
    },
    methods: {
        onOffEffect(div){
            let target = document.getElementById(div);
            this.bool ? target.style.borderColor = 'transparent' : target.style.borderColor = 'red'
            this.bool = !this.bool
        },
        setCurrentCoordinator(id, name, id_img){
            this.inEditionCoordinator.id = id
            this.inEditionCoordinator.name = name,
            this.inEditionCoordinator.id_img = id_img
            console.log(this.inEditionCoordinator)
        },
        onImageChange(e){
            const image = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = e => {
                this.newResearcher.img.code = e.target.result;
            };
        },
        setCurrentResearchers(id, name, id_img){
            this.inEditionResearchers.id = id
            this.inEditionResearchers.name = name,
            this.inEditionResearchers.id_img = id_img
            console.log(this.inEditionResearchers)
        },
        setTalents(id, name, id_img){
            this.inEditionStudents.id = id
            this.inEditionStudents.name = name,
            this.inEditionStudents.id_img = id_img
            console.log(this.inEditionStudents)
        },
        setCompany(id, name, id_img){
            this.inEditionCompany.id = id
            this.inEditionCompany.name = name,
            this.inEditionCompany.id_img = id_img
            console.log(this.inEditionCompany)
        },
        updateCard(){
            this.newProject.id = this.inEditionCompany.id
            this.newProject.company.id = this.inEditionCompany.id
            this.newProject.company.img.id = this.inEditionCompany.id_img

            this.newProject.coordinator.id = this.inEditionCoordinator.id

            console.log(this.newProject)
            updateProject(this.newProject).then((response) => {
                console.log(response)
            })
            .finally(() => {
                router.push('/').then(() => {
                    var element = document.getElementById("ourclients");
                    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                }); 
            })
        },
    },
}
</script>

<style scoped>

</style>