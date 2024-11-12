<template lang="">
    <section class="flex max-sm:flex-col justify-between w-full items-center bg-lightgray gap-4 max-sm:w-3/4">
        <div role="status" class="flex flex-col justify-center gap-10 items-center mt-5 animate-pulse ">
            <p
                class="font-semibold text-3xl underline underline-offset-2 decoration-4 decoration-maingreen self-start mt-10 pl-10 max-sm:ml-24">
                Modal de Projetos</p>

            <!-- Desenho do Modal -->
            <div class="relative p-4 w-full max-w-2xl max-h-full max-sm:w-3/4">
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-maingreen">
                        <div
                            class="h-8 bg-black rounded-full w-36 mr-72 border border-transparent hover:border-red-700">
                        </div>
                        <button type="button"
                            class="bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center hover:bg-gray-500/50 transition duration-200">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 14 14">
                                <path stroke="#E02424" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div class="p-4 md:p-5 space-y-4 flex flex-col">
                        <div>
                            <h2 id="headName" class="text-maingray border border-transparent hover:border-red-700 rounded-t-xl">
                                <button type="button" data-accordion-target="#headBody" aria-expanded="false"
                                    aria-controls="headBody"
                                    class="flex items-center justify-between w-full p-5 font-medium rtl:text-right border border-maingreen rounded-t-xl hover:bg-blue-100 gap-3 transition duration-200">
                                    <div class="h-3 bg-maingreen rounded-full w-48"></div>
                                    <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="#2F9E40" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="M9 5 5 1 1 5" />
                                    </svg>
                                </button>
                            </h2>
                            <div class="border border-transparent hover:border-red-700 rounded-b-xl">
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
                            <div
                                class="flex gap-2 items-center max-lg:text-sm">
                                <p class="font-bold text-maingray">Coordenador: </p>
                                <div class="h-2 bg-black rounded-full w-24"></div>
                            </div>
                            <!-- <div
                                class="flex gap-2 items-center max-lg:text-sm">
                                <p class="font-bold text-maingray">Pesquisador(es): </p>
                                <div class="h-2 bg-black rounded-full w-24"></div>
                            </div>
                            <div
                                class="flex gap-2 items-center max-lg:text-sm">
                                <p class="font-bold text-maingray">Aluno(s): </p>
                                <div class="h-2 bg-black rounded-full w-24"></div>
                            </div> -->
                            <div
                                class="flex gap-2 items-center max-lg:text-sm">
                                <p class="font-bold text-maingray">Situação: </p>
                                <p>Situação</p>
                            </div>
                            <div
                                class="flex gap-2 items-center max-lg:text-sm">
                                <p class="font-bold text-maingray">Valor:</p>
                                <div class="flex items-center gap-3">R$ <div class="h-2 bg-black rounded-full w-10">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b">
                        <button v-if="boolSaibaMais"
                            class="text-white bg-maingreen border-2 border-maingreen hover:bg-white hover:text-maingray transition duration-300 rounded-lg text-sm px-5 py-2.5"
                            type="button">
                            Saiba Mais!
                        </button>
                        <button
                            class="ms-3 text-maingray bg-white rounded-lg border border-gray-200 text-sm transition duration-300 px-5 py-2.5 hover:bg-maingray hover:text-white"
                            type="button">
                            Fechar
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Formulário -->
         <div class="w-full">
             <v-form ref="form" class="bg-white p-10 rounded-lg max-sm:p-2">
                 <AlertSuccessDelete />
                 <div class="flex flex-col gap-6 mb-6">
                     <div class="grid grid-cols-3 max-sm:grid-cols-1 gap-4">
                         <v-select v-if="projects" v-model="inEditProject.id" :items="mappedProjects" item-text="name"
                             item-value="id" :rules="[v => !!v || 'Item Necessário']" required color="#2F9E40"
                             label="Nome do Projeto"></v-select>
     
                         <v-text-field v-model="newProject.name" :rules="[rules.name]" label="Nome" required />
     
                         <v-select v-if="companies" v-model="selectCompany.id" :items="mappedCompanies" label="Empresa"
                             item-text="name" item-value="id" :rules="[v => !!v || 'Item Necessário']" required color="#2F9E40" />
     
                         <v-select v-if="researchers" v-model="selectCoordinator.id" :items="mappedResearchers"
                             label="Coordenador" item-text="name" item-value="id" :rules="[v => !!v || 'Item Necessário']"
                             required color="#2F9E40" />
     
                         <v-select v-model="newProject.situation" :items="['Concluído', 'Em andamento', 'Cancelado']"
                             :rules="[v => !!v || 'Item Necessário']" label="Situação" required color="#2F9E40"></v-select>
     
                         <v-text-field v-model="newProject.value" :rules="[rules.num]" label="Valor" required color="#2F9E40" />
     
                         <v-select v-if="researchers" v-model="selectResearchers.id" :items="mappedResearchers"
                             label="Pesquisador" item-text="name" item-value="id" :rules="[v => !!v || 'Item Necessário']"
                             required color="#2F9E40" />
     
                         <v-select v-if="talents" v-model="selectStudents.id" :items="mappedStudents"
                             :rules="[v => !!v || 'Item Necessário']" label="Alunos" required color="#2F9E40"></v-select>
                     </div>
     
     
                     <div class="flex flex-col">
                         <!-- Sobre o Projeto -->
                         <div id="about-project-div" class="border-2 border-transparent p-2 rounded-lg col-span-2 w-full">
                             <v-textarea v-model="newProject.resume" :counter="7" :rules="[rules.text]"
                                 class="text-maingreen" color="#2F9E40" label="Parágrafo"></v-textarea>
                         </div>
                         <div class="w-full flex max-sm:flex-col justify-center gap-10">
                             <v-btn color="#2F9E40" dark @click.prevent="updateProject()" type="submit">Salvar</v-btn>
                             <v-btn color="error" dark @click.prevent="deleteProject()" type="submit">Deletar</v-btn>
                         </div>
                     </div>
                 </div>
             </v-form>
         </div>
    </section>
</template>

<script>
    import router from '@/router/index.js'

    import { listModalities } from '@/services/ModalityService.js';
    import { listCompanies } from '@/services/CompanyService.js';
    import { listResearchers } from '@/services/ResearcherService.js';
    import { createProject, listProjects, updateProject, deleteProject } from '@/services/ProjectService';
    import { getTalents } from '@/services/TalentService.js'
    import AlertSuccessDelete from "@/components/alert/AlertSuccessDelete.vue";

    import { mapMutations, mapActions } from "vuex";

    export default {
        name: 'inEditProjectModal',
        components: {
            AlertSuccessDelete
        },
        data() {
            return {
                newProject: {
                    modality: {
                        id: 1
                    },
                    coordinator: {
                        id: null
                    },
                    company: {
                        id: null,
                    },
                    students: {
                        id: null
                    },
                    researchers: {
                        id: null
                    },
                    name: '',
                    resume: '',
                    situation: null,
                    value: null,
                    active: 1
                },
                rules: {
                    text(value) {
                        if (value?.length >= 0) return true;
                        return 'Texto obrigatório';
                    },
                    num(value) {
                        if (/[^0-9]/.test(value)) return true

                        return 'Last name can not contain digits.'
                    }
                },
                selectCompany: {
                    id: null,
                    name: 'Selecione uma Empresa',
                    id_img: null
                },
                selectCoordinator: {
                    id: null,
                    name: 'Selecione um Coordenador',
                    id_img: null
                },
                selectResearchers: {
                    id: null,
                    name: 'Selecione os Pesquisadores',
                    id_img: null
                },
                selectStudents: {
                    id: null,
                    name: 'Selecione os Alunos',
                    id_img: null
                },
                inEditProject: {
                    name: 'Selecione o Projeto',
                },
                bool: false,
                boolSaibaMais: true,
                companies: null,
                talents: null,
                modalities: 1,
                researchers: null,
                projects: null
            }
        },
        computed: {
            mappedProjects() {
                return this.projects.map(project => {
                    return project.name;
                });
            },
            mappedCompanies() {
                return this.companies.map(company => {
                    return company.name;
                });
            },
            mappedCoordinators() {
                return this.researchers.map(project => {
                    return project.name;
                });
            },
            mappedSituations() {
                return this.projects.map(project => {
                    return project.name;
                });
            },
            mappedValues() {
                return this.projects.map(project => {
                    return project.name;
                });
            },
            mappedResearchers() {
                return this.researchers.map(researcher => {

                    return researcher.firstName + ' ' + researcher.lastName;
                });
            },
            mappedStudents() {
                return this.talents.map(talent => {
                    console.log(talent)
                    return talent.name;
                });
            }
        },
        beforeCreate() {
            listCompanies().then((response) => {
                this.companies = response.data

                listModalities().then((response) => {
                    this.modalities = response.data

                    listResearchers().then((response) => {
                        this.researchers = response.data

                        listProjects().then((response) => {
                            this.projects = response.data
                            console.log(this.projects)
                            getTalents().then((response) => {
                                this.talents = response.data
                            }).catch((error) => console.log(error))
                        }).catch((error) => console.log(error))
                    }).catch((error) => console.log(error))
                }).catch((error) => console.log(error))
            }).catch((error) => console.log(error))
        },
        methods: {
            ...mapMutations([
                "setAlert"
            ]),
            ...mapActions([
                "isAlertFired"
            ]),
            onOffEffect(div) {
                let target = document.getElementById(div);
                this.bool ? target.style.borderColor = 'transparent' : target.style.borderColor = 'red'
                this.bool = !this.bool
            },
            onImageChange(e) {
                const image = e.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(image);
                reader.onload = e => {
                    this.newResearcher.img.code = e.target.result;
                };
            },
            showDeleteSuccess() {
                let div = document.getElementById("success-delete-alert")
                div.style.display = "flex"
                this.$store.commit('setAlert', false)
            },
            updateProject() {
                if (this.inEditProject.id == 0) {
                    if (this.newProject.name !== '' && this.selectCompany.id !== null && this.selectCoordinator.id !== null
                        && this.newProject.situation !== null && this.newProject.value !== null && this.newProject.resume !== '') {
                        this.newProject.company.id = this.selectCompany.id
                        this.newProject.coordinator.id = this.selectCoordinator.id
                        this.newProject.researchers.id = this.selectResearchers.id

                        createProject(this.newProject).then((response) => {
                            console.log(response)
                        }).finally(() => {
                            router.push('/').then(() => {
                                var element = document.getElementById("ourclients");
                                element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                            });
                        })
                    }
                } else {
                    if (this.newProject.name !== '' && this.selectCompany.id !== null && this.selectCoordinator.id !== null
                        && this.newProject.situation !== null && this.newProject.value !== null && this.newProject.resume !== null) {

                        this.newProject.id = this.inEditProject.id
                        this.newProject.company.id = this.selectCompany.id
                        this.newProject.company.img.id = this.selectCompany.id_img
                        this.newProject.coordinator.id = this.selectCoordinator.id
                        this.newProject.researchers.id = this.selectResearchers.id
                        this.newProject.students.id = this.selectStudents.id

                        updateProject(this.newProject).then((response) => {
                            console.log(response)
                        }).finally(() => {
                            router.push('/').then(() => {
                                window.location.reload()
                                var element = document.getElementById("ourclients");
                                element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                            });
                        })
                    }
                }
            },
            deleteProject() {
                if (this.inEditProject.id != 0) {
                    deleteProject(this.inEditProject.id).then((response) => {
                        console.log(response)
                    }).finally(() => {
                        this.$store.commit('setAlert', true)
                        this.$nextTick(() => {
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
                } else {
                    alert('Selecione primeiro uma empresa pra deletar')
                }
            }
        },
    }
</script>

<style scoped>

</style>