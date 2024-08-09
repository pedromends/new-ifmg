<template lang="">
    <section class="flex max-sm:flex-col justify-center items-center bg-lightgray gap-10 max-sm:w-3/4">
            <section role="status" class="flex flex-col justify-center gap-10 items-center mt-5 animate-pulse ">
                <p class="font-semibold text-3xl underline underline-offset-2 decoration-4 decoration-maingreen self-start mt-10 pl-10 max-sm:ml-24">Modal de Projetos</p>

                <!-- Modal -->
                <div class="relative p-4 w-full max-w-2xl max-h-full max-sm:w-3/4">
                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-maingreen">
                            <div class="h-8 bg-black rounded-full w-36 mr-72 border border-transparent hover:border-red-700"></div>
                            <button type="button" class="bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center hover:bg-gray-500/50 transition duration-200">
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="#E02424" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div class="p-4 md:p-5 space-y-4 flex flex-col">
                            <div>
                                <h2 id="headName" class="text-maingray border border-transparent hover:border-red-700">
                                    <button type="button" data-accordion-target="#headBody" aria-expanded="false" aria-controls="headBody"
                                        class="flex items-center justify-between w-full p-5 font-medium rtl:text-right border border-maingreen rounded-t-xl hover:bg-blue-100 gap-3 transition duration-200">
                                        <div class="h-3 bg-maingreen rounded-full w-48"></div>
                                        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="#2F9E40" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                                        </svg>
                                    </button>
                                </h2>
                                <div class="border border-transparent hover:border-red-700">
                                    <div class="p-5 border rounded-b-xl border-gray-200 gap-2 flex flex-col">
                                        <div class="h-1 bg-black rounded-full w-96 max-sm:w-14"></div>
                                        <div class="h-1 bg-black rounded-full w-96 max-sm:w-14"></div>
                                        <div class="h-1 bg-black rounded-full w-96 max-sm:w-14"></div>
                                        <div class="h-1 bg-black rounded-full w-96 max-sm:w-14"></div>
                                        <div class="h-1 bg-black rounded-full w-96 max-sm:w-14"></div>
                                        <div class="h-1 bg-black rounded-full w-96 max-sm:w-14"></div>
                                        <div class="h-1 bg-black rounded-full w-96 max-sm:w-14"></div>
                                        <div class="h-1 bg-black rounded-full w-96 max-sm:w-14"></div>
                                        <div class="h-1 bg-black rounded-full w-96 max-sm:w-14"></div>
                                    </div>
                                </div>
                            </div>
    
                            <div class="flex flex-col px-2 text-sm gap-1">
                                <div class="flex gap-2 items-center max-lg:text-sm border border-transparent hover:border-red-700">
                                    <p class="font-bold text-maingray">Coordenador: </p>
                                    <div class="h-2 bg-black rounded-full w-24"></div>
                                </div>
                                <div class="flex gap-2 items-center max-lg:text-sm border border-transparent hover:border-red-700">
                                    <p class="font-bold text-maingray">Pesquisador(es): </p>
                                    <div class="h-2 bg-black rounded-full w-24"></div>
                                </div>
                                <div  class="flex gap-2 items-center max-lg:text-sm border border-transparent hover:border-red-700">
                                    <p class="font-bold text-maingray">Aluno(s): </p>
                                    <div class="h-2 bg-black rounded-full w-24"></div>
                                </div>
                                <div class="flex gap-2 items-center max-lg:text-sm border border-transparent hover:border-red-700">
                                    <p class="font-bold text-maingray">Situação: </p>
                                    <p>Situação</p>
                                </div>
                                <div class="flex gap-2 items-center max-lg:text-sm border border-transparent hover:border-red-700">
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

        <!-- Formulário -->
        <form class="bg-white p-10 rounded-lg max-sm:p-2">
            <AlertSuccessDelete/>
            <div class="flex flex-col gap-6 mb-6">
                <div class="grid grid-cols-4 max-sm:grid-cols-1">

                    <!-- Projeto -->
                    <div id="project-name-div" class="border-2 border-transparent p-2 rounded-lg">
                        <div class="flex flex-col">
                            <label for="researchers" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Projeto:</label>
                            <select v-model="editProject.id" name="" id="" class="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 w-full p-2.5">
                                <option class="bg-white divide-y divide-gray-100 rounded-lg shadow overflow-scroll h-72 overflow-x-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-maingreen"
                                    selected disabled hidden value="0">Selecione um projeto</option>
                                <option class="bg-white divide-y divide-gray-100 rounded-lg shadow overflow-scroll h-72 overflow-x-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-maingreen"
                                    :value="project.id" v-for="(project, i) in projects" :key="i">{{ project.name }}</option>
                            </select>
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
                            <select v-model="editCompany.id" name="" id="" class="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 w-full p-2.5">
                                <option class="bg-white divide-y divide-gray-100 rounded-lg shadow overflow-scroll h-72 overflow-x-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-maingreen"
                                    selected disabled hidden>Selecione uma empresa</option>
                                <option class="bg-white divide-y divide-gray-100 rounded-lg shadow overflow-scroll h-72 overflow-x-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-maingreen"
                                    :value="company.id" v-for="(company, i) in companies" :key="i">{{ company.name }}</option>
                            </select>
                        </div>
                    </div>

                    <!-- Coordenador -->
                    <div id="coor-name-div" class="border-2 border-transparent p-2 rounded-lg">
                        <div class="flex flex-col">
                            <label for="researchers" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Coordenador:</label>
                            <select v-model="editCoordinator.id" name="" id="" class="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 w-full p-2.5">
                                <option class="bg-white divide-y divide-gray-100 rounded-lg shadow overflow-scroll h-72 overflow-x-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-maingreen"
                                    selected disabled hidden>Selecione um coordenador</option>
                                <option class="bg-white divide-y divide-gray-100 rounded-lg shadow overflow-scroll h-72 overflow-x-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-maingreen"
                                    :value="researcher.id" v-for="(researcher, i) in researchers" :key="i">{{ researcher.firstName + ' ' + researcher.lastName }}</option>
                            </select>
                        </div>
                    </div>

                    <!-- Situação -->
                    <div id="situation-div" class="border-2 border-transparent p-2 rounded-lg">
                        <label for="situation" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Situação</label>
                            <select class="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 w-full p-2.5"
                                name="situation" v-model="newProject.situation" id="situation">
                                <option value="" selected disabled hidden>Selecione uma opção</option>
                                <option value="Concluído">Concluído</option>
                                <option value="Em andamento">Em andamento</option>
                                <option value="Cancelado">Cancelado</option>
                            </select>
                    </div>

                    <!-- Valor -->
                    <div id="value-div" class="border-2 border-transparent p-2 rounded-lg">
                        <label for="value" class="mb-2 text-sm font-medium text-gray-900 dark:text-white">Valor</label>
                        <input class="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 w-full p-2.5"
                            v-model="newProject.value" type="number" id="value" min="0" placeholder="" required />
                    </div>

                    <!-- Pesquisadores -->
                    <div id="researchers-div" class="border-2 border-transparent p-2 rounded-lg">
                        <div class="flex flex-col">
                            <label for="researchers" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pesquisadores:</label>
                            <select v-model="editResearchers.id" name="" id="" class="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 w-full p-2.5">
                                <option class="bg-white divide-y divide-gray-100 rounded-lg shadow overflow-scroll h-72 overflow-x-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-maingreen"
                                    selected disabled hidden>Selecione os pesquisadores</option>
                                <option class="bg-white divide-y divide-gray-100 rounded-lg shadow overflow-scroll h-72 overflow-x-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-maingreen"
                                    :value="researcher.id" v-for="(researcher, i) in researchers" :key="i">{{ researcher.firstName + ' ' + researcher.lastName }}</option>
                            </select>
                        </div>
                    </div>

                    <!-- Alunos -->
                    <div id="students-div" class="border-2 border-transparent p-2 rounded-lg">
                        <div class="flex flex-col">
                            <label for="researchers" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Alunos:</label>
                            <select v-model="editStudents.id" name="" id="" class="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 w-full p-2.5">
                                <option class="bg-white divide-y divide-gray-100 rounded-lg shadow overflow-scroll h-72 overflow-x-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-maingreen"
                                    selected disabled hidden>Selecione os pesquisadores</option>
                                <option class="bg-white divide-y divide-gray-100 rounded-lg shadow overflow-scroll h-72 overflow-x-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-maingreen"
                                    value="" v-for="(talent, i) in talents" :key="i">{{ talent.name }}</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="flex">
                    <!-- Sobre o Projeto -->
                    <div id="about-project-div" class="border-2 border-transparent p-2 rounded-lg col-span-2 w-full">
                        <label for="project_resume" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sobre o projeto</label>
                        <textarea id="project_resume" rows="10" cols="50" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border focus:ring-red-600 focus:border-red-600"
                            required  v-model="newProject.resume" placeholder="Escreva sobre o projeto aqui..."></textarea>
                    </div>
                </div>
                <div class="w-full flex max-sm:flex-col justify-center gap-10">
                    <button class="text-white bg-maingreen hover:bg-govblue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center px-36 py-3 transition duration-200"
                        @click.prevent="updateCard()" type="submit">Salvar</button>
                    
                    <div class="flex items-center bg-red-600 hover:bg-maingray focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg transition duration-200"
                        @click.prevent="deleteProject()" type="submit">
                        <div class="flex w-full justify-start gap-3 items-center text-white px-32">
                            <img class="w-5" :src="require('@/assets/icons/trash.svg')" alt="">
                            <p class="font-medium">Excluir</p>
                        </div>
                    </div>
                </div> 
            </div>  
        </form>
    </section>
</template>

<script>
//import router from '@/router/index.js'

import { listModalities } from '@/services/ModalityService.js';
import { listCompanies } from '@/services/CompanyService.js';
import { listResearchers } from '@/services/ResearcherService.js';
import { createProject, listProjects, updateProject, deleteProject } from '@/services/ProjectService';
import { getTalents } from '@/services/TalentService.js'
import AlertSuccessDelete from "@/components/alert/AlertSuccessDelete.vue";

export default {
    name: 'EditProjectModal',
    components: {
        AlertSuccessDelete
    },
    data(){
        return {
            boolNewProject: false,
            bool: false,
            boolSaibaMais: true,
            companies: null,
            talents: null,
            modalities: 1,
            researchers: null,
            projects: null,
            editCompany:{
                id: 'Selecione uma empresa',
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
                id: 0,
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
                value: '',
                active: 1
            }
        }
    },
    created(){
        listCompanies().then((response) => {
            this.companies = response.data
        
            listModalities().then((response) => {
                this.modalities = response.data

                listResearchers().then((response) => {
                    this.researchers = response.data

                    listProjects().then((response) => {
                        this.projects = response.data

                        getTalents().then((response) => {
                            this.talents = response.data
                        }).catch((error) => console.log(error))
                    }).catch((error) => console.log(error))
                }).catch((error) => console.log(error))
            }).catch((error) => console.log(error))
        }).catch((error) => console.log(error))
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
        showDeleteSuccess(){
            let div = document.getElementById("success-delete-alert")
            div.style.display = "flex"
        },
        updateCard(){
            if(this.editProject.id == 0){
                this.newProject.company.id = this.editCompany.id
                this.newProject.coordinator.id = this.editCoordinator.id
                this.newProject.researchers.id = this.editResearchers.id
                
                console.log(this.newProject)
                createProject(this.newProject).then((response) => {
                    console.log(response)
                })
                .finally(() => {
                     router.push('/').then(() => {
                         var element = document.getElementById("ourclients");
                         element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                     }); 
                 })
            } else {
                this.newProject.id = this.editProject.id
                this.newProject.company.id = this.editCompany.id
                this.newProject.company.img.id = this.editCompany.id_img
                this.newProject.coordinator.id = this.editCoordinator.id
                this.newProject.researchers.id = this.editResearchers.id
                this.newProject.students.id = this.editStudents.id
                console.log(this.newProject)

                updateProject(this.newProject).then((response) => {
                    console.log(response)
                })
                .finally(() => {
                     router.push('/').then(() => {
                         window.location.reload()
                         var element = document.getElementById("ourclients");
                         element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                     }); 
                })
            }
        },
        deleteProject(){
            if(this.editProject.id != 0){
                deleteProject(this.editProject.id).then((response) => {
                console.log(response)
            })
            .finally(() => {
                setInterval(() => {
                    this.showDeleteSuccess()
                    setInterval(() => {
                        router.push('/').then(() => {
                            window.location.reload()
                            var element = document.getElementById("ourclients");
                            element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                        }); 
                    }, 2000)
                })
            })     
            }else{
                alert('Selecione primeiro uma empresa pra deletar')
            }
        }
    },
}
</script>

<style scoped>

</style>