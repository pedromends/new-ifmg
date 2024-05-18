<template lang="">
    <section class="flex flex-col justify-center bg-lightgray gap-10">
        <div role="status" class="">
            <p class="font-bold text-2xl underline underline-offset-2 decoration-4 decoration-maingreen self-start mt-10 ml-36">Modal de Projetos</p>
            <section class="flex justify-center gap-10 items-center mt-5 animate-pulse">

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

        <!-- Formulário -->
        <form class="bg-white p-10  rounded-lg mb-10">
            <div class="flex flex-col gap-6 mb-6">
                <div class="grid grid-cols-4">

                    <!-- Projeto -->
                    <div id="project-name-div" class="border-2 border-transparent p-2 rounded-lg">
                        <div class="flex flex-col">
                            <label for="researchers" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Projeto:</label>
                            <button class="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-red-600 hover:text-white focus:border-red-600 block w-full p-2.5 hover:bg-maingreen transition duration-200" 
                                id="modalityButton" data-dropdown-toggle="dropdown5" type="button">
                                {{ editProject.name }}
                            </button>
                                
                            <div id="dropdown5" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow overflow-scroll h-72 overflow-x-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-maingreen">
                                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="modalityButton">
                                    <li @click="boolNewProject == true">
                                        <input href="#" class="w-84 block px-4 py-2 hover:bg-maingreen hover:text-white cursor-pointer"
                                            readonly="readonly" value="-- Novo --"/>
                                    </li>
                                    <li v-for="(project, i) in projects" :key="i" @click="setItem('project', project.id, project.name, project.company.img.id)">
                                        <input href="#" class="w-84 block px-4 py-2 hover:bg-maingreen hover:text-white cursor-pointer"
                                            readonly="readonly" :value="project.name "/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Nome -->
                    <div id="name-div" class="border-2 border-transparent p-2 rounded-lg">
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome</label>
                        <input class="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5"
                            v-model="newProject.name" id="name" placeholder="Nome do Projeto..." required />
                    </div>

                    <!-- Empresa-->
                    <div id="company-name-div" class="border-2 border-transparent p-2 rounded-lg">
                        <div class="flex flex-col">
                            <label for="researchers" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Empresa:</label>
                            <button class="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-red-600 hover:text-white focus:border-red-600 block w-full p-2.5 hover:bg-maingreen transition duration-200" 
                                id="modalityButton" data-dropdown-toggle="dropdown1" type="button">
                                {{ editCompany.name }}
                            </button>

                            <div id="dropdown1" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow overflow-scroll h-72 overflow-x-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-maingreen">
                                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="modalityButton">
                                    <li v-for="(company, i) in companies" :key="i" @click="setItem('company', company.id, company.name, company.image.id)">
                                        <input href="#" class="w-84 block px-4 py-2 hover:bg-maingreen hover:text-white cursor-pointer "
                                            readonly="readonly" :value="company.name"/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Coordenador -->
                    <div id="coor-name-div" class="border-2 border-transparent p-2 rounded-lg">
                        <div class="flex flex-col">
                            <label for="researchers" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Coordenador:</label>
                            <button class="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-red-600 hover:text-white focus:border-red-600 block w-full p-2.5 hover:bg-maingreen transition duration-200 " 
                                id="modalityButton" data-dropdown-toggle="dropdown2" type="button">
                                {{ editCoordinator.name }}
                            </button>
                                
                            <div id="dropdown2" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow overflow-scroll h-72 overflow-x-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-maingreen">
                                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="modalityButton">
                                    <li v-for="(researcher, i) in researchers" :key="i" @click="setItem('coordinator', researcher.id, researcher.firstName + ' ' + researcher.lastName, researcher.img.id)">
                                        <input href="#" class="w-84 block px-4 py-2 hover:bg-maingreen hover:text-white cursor-pointer" readonly="readonly" :value="researcher.firstName + ' ' + researcher.lastName "/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex">
                    <div class="grid grid-cols-2">

                        <!-- Situação -->
                        <div id="situation-div" class="border-2 border-transparent p-2 rounded-lg">
                            <label for="situation" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Situação</label>
                            <input class="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5"
                                v-model="newProject.situation" id="situation" placeholder="Em andamento/Em garantia/Concluído..." required />
                        </div>
    
                        <!-- Valor -->
                        <div id="value-div" class="border-2 border-transparent p-2 rounded-lg">
                            <label for="value" class="mb-2 text-sm font-medium text-gray-900 dark:text-white">Valor</label>
                            <input class="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 w-full p-2.5"
                                v-model="newProject.value" type="number" id="value"  placeholder="" required />
                        </div>
    
                        <!-- Pesquisadores -->
                        <div id="researchers-div" class="border-2 border-transparent p-2 rounded-lg">
                            <div class="flex flex-col">
                                <label for="researchers" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pesquisadores:</label>
                                <button class="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-red-600 hover:text-white focus:border-red-600 block w-full p-2.5 hover:bg-maingreen transition duration-200" 
                                    id="modalityButton" data-dropdown-toggle="dropdown3" type="button">
                                    {{ editResearchers.name }}
                                </button>
                                    
                                <div id="dropdown3" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow overflow-scroll h-72 overflow-x-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-maingreen">
                                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="modalityButton">
                                        <li v-for="(researcher, i) in researchers" :key="i" @click="setItem('researcher', researcher.id, researcher.firstName + ' ' + researcher.lastName, researcher.img.id)">
                                            <input href="#" class="w-84 block px-4 py-2 hover:bg-maingreen hover:text-white cursor-pointer" readonly="readonly" :value="researcher.firstName + ' ' + researcher.lastName "/>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
    
                        <!-- Alunos -->
                        <div id="students-div" class="border-2 border-transparent p-2 rounded-lg">
                            <div class="flex flex-col">
                                <label for="researchers" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Alunos:</label>
                                <button class="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-red-600 hover:text-white focus:border-red-600 block w-full p-2.5 hover:bg-maingreen transition duration-200" 
                                    id="modalityButton" data-dropdown-toggle="dropdown4" type="button">
                                    {{ editStudents.name }}
                                </button>
                                    
                                <div id="dropdown4" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow overflow-scroll overflow-x-hidden overflow-y-hidden">
                                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="modalityButton">
                                        <li v-for="(talent, i) in talents" :key="i" @click="setItem('talents', talent.id, talent.name, talent.img.id)">
                                            <input href="#" class="w-84 block px-4 py-2 hover:bg-maingreen hover:text-white cursor-pointer" readonly="readonly" :value="talent.name"/>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Sobre o Projeto -->
                    <div id="about-project-div" class="border-2 border-transparent p-2 rounded-lg col-span-2">
                        <label for="project_resume" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sobre o projeto</label>
                        <textarea id="project_resume" rows="10" cols="50" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border focus:ring-red-600 focus:border-red-600"
                            v-model="newProject.resume" placeholder="Escreva sobre o projeto aqui..."></textarea>
                    </div>
                </div>

                <div class="w-full flex justify-center">
                    <button class="text-white bg-maingreen hover:bg-govblue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center px-36 py-3 transition duration-200"
                        @click.prevent="updateCard()" type="submit">Salvar</button>
                </div> 
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
    name: 'EditProjectModal',
    data(){
        return {
            boolNewProject: false,
            bool: false,
            boolSaibaMais: true,
            companies: null,
            talents: null,
            modalities: null,
            researchers: null,
            projects: null,
            editCompany:{
                id: null,
                name: 'Selecione uma Empresa',
                id_img: null
            },
            editCoordinator:{
                id: null,
                name: 'Selecione um Coordenador',
                id_img: null
            },
            editResearchers:{
                id: null,
                name: 'Selecione os Pesquisadores',
                id_img: null
            },
            editStudents:{
                id: null,
                name: 'Selecione os Alunos',
                id_img: null
            },
            editProject:{
                id: null,
                name: 'Selecione o Projeto',
            },
            newProject: {
                modality:{
                    id: 1
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
                students: {
                    id: null
                },
                researchers: {
                    id: null
                },
                name: '',
                resume: '',
                situation: '',
                value: ''
            }
        }
    },
    created(){
        listCompanies().then((response) => {
            this.companies = response.data
            console.log(this.companies)
            
            listModalities().then((response) => {
                this.modalities = response.data
                console.log(this.modalities)

                listResearchers().then((response) => {
                    this.researchers = response.data
                    console.log(this.researchers)

                    listProjects().then((response) => {
                        this.projects = response.data
                        console.log(this.projects)

                        getTalents().then((response) => {
                            this.talents = response.data
                            console.log(this.talents)

                        }).catch((error) => {
                            console.log(error)
                        })
                    }).catch((error) => {
                        console.log(error)
                    })
                }).catch((error) => {
                    console.log(error)
                })
            }).catch((error) => {
                console.log(error)
            })
        }).catch((error) => {
            console.log(error)
        })
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
                this.newResearcher.img.code = e.target.result;
            };
        },
        setItem(item, id, name, id_img){

            if (item == 'researcher') {
                this.editResearchers.id = id
                this.editResearchers.name = name,
                this.editResearchers.id_img = id_img

                console.log(this.editResearchers)
            } else if (item == 'talents') {
                this.editStudents.id = id
                this.editStudents.name = name,
                this.editStudents.id_img = id_img

                console.log(this.editStudents)
            } else if (item == 'coordinator') {
                this.editCoordinator.id = id
                this.editCoordinator.name = name,
                this.editCoordinator.id_img = id_img

                console.log(this.editCoordinator)
            } else if(item == 'project') {
                this.editProject.id = id
                this.editProject.name = name,
                this.editProject.id_img = id_img

                console.log(this.editProject)
            } else {
                this.editCompany.id = id
                this.editCompany.name = name,
                this.editCompany.id_img = id_img

                console.log(this.editCompany)
            }
        },
        updateCard(){
            if(this.boolNewProject){
                // criar novo projeto
            } else {
                this.newProject.id = this.editProject.id
                this.newProject.company.id = this.editCompany.id
                this.newProject.company.img.id = this.editCompany.id_img
                this.newProject.coordinator.id = this.editCoordinator.id
                this.newProject.researchers.id = this.editResearchers.id
                this.newProject.students.id = this.editStudents.id
                this.newProject.name = this.editProject.name
                console.log(this.newProject)

                updateProject(this.newProject).then((response) => {
                    console.log(response)
                }).finally(() => {
                    router.push('/').then(() => {
                        var element = document.getElementById("ourclients");
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