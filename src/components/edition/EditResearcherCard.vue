<template lang="">
    <section class="flex justify-center bg-lightgray gap-10 my-10 mx-5">
        <div role="status" class="flex flex-col items-center gap-10">
            <p class="font-semibold text-2xl underline underline-offset-2 decoration-4 decoration-maingreen self-start mt-5 mb-10">Criar/Editar Pesquisadores</p>
            
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
                <select v-model="inEditionResearcher.id" name="" id="" class="bg-gray-50 border border-maingreen text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 w-full p-2.5">
                    <option class="bg-white divide-y divide-gray-100 rounded-lg text-center shadow overflow-scroll h-72 overflow-x-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-maingreen"
                        value="0">Selecione um Pesquisador</option>
                    <option class="bg-white divide-y divide-gray-100 text-start rounded-lg shadow overflow-scroll h-72 overflow-x-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-maingreen"
                        :value="researcher.id" v-for="(researcher, i) in researchers" :key="i">{{ researcher.firstName + ' ' + researcher.lastName }}</option>
                </select>
            </div>
        </div>
        <form class="bg-white p-10 rounded-2xl">
            <AlertSuccessDelete/>
            <div class="grid gap-6 mb-6 md:grid-cols-2">
                <!-- Nome -->
                <div id="name-div" class="border-2 border-transparent p-2 rounded-lg">
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome</label>
                    <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5"
                        v-model="inEditionResearcher.firstName" type="text" id="lastname" required />
                </div>

                <!-- Sobrenome -->
                <div id="lastname-div" class="border-2 border-transparent p-2 rounded-lg">
                    <label for="lastname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sobrenome</label>
                    <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5"
                        v-model="inEditionResearcher.lastName" type="text" id="lastname" required />
                </div>

                
                <!-- Endereço -->
                <div id="lastname-div" class="border-2 border-transparent p-2 rounded-lg">
                    <label for="lastname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Endereço</label>
                    <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5"
                        v-model="inEditionResearcher.address" type="text" id="lastname" required />
                </div>

                
                <!-- Cidade -->
                <div id="lastname-div" class="border-2 border-transparent p-2 rounded-lg">
                    <label for="lastname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cidade</label>
                    <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5"
                        v-model="inEditionResearcher.city" type="text" id="lastname" required />
                </div>

                
                <!-- Departamento -->
                <div id="lastname-div" class="border-2 border-transparent p-2 rounded-lg">
                    <label for="lastname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Departamento</label>
                    <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5"
                        v-model="inEditionResearcher.department" type="text" id="lastname" required />
                </div>

                
                <!-- Titulação -->
                <div id="lastname-div" class="border-2 border-transparent p-2 rounded-lg">
                    <label for="lastname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Titulação</label>
                    <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5"
                        v-model="inEditionResearcher.level" type="text" id="lastname" required />
                </div>

                
                <!-- Telefone -->
                <div id="lastname-div" class="border-2 border-transparent p-2 rounded-lg">
                    <label for="lastname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telefone</label>
                    <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5"
                        v-model="inEditionResearcher.phone" type="text" id="lastname" required />
                </div>

                <!-- Curso -->
                <div id="course-div" class="border-2 border-transparent p-2 rounded-lg">
                    <label for="course" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Curso</label>
                    <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5" required
                        v-model="inEditionResearcher.course" type="text" id="course" />
                </div>

                <!-- Email -->
                <div id="email-div" class="border-2 border-transparent p-2 rounded-lg">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5"
                        v-model="inEditionResearcher.email" type="text" id="email" required />
                </div>

                <!-- Campus -->
                <div id="campus-div" class="border-2 border-transparent p-2 rounded-lg">
                    <label for="campus" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Campus</label>
                    <select v-model="inEditionResearcher.campus.id" name="" id="" class="bg-gray-50 border border-maingreen text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 w-full p-2.5">
                        <option class="bg-white divide-y divide-gray-100 rounded-lg text-center shadow overflow-scroll h-72 overflow-x-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-maingreen"
                            value="0" disabled>Selecione um Campus</option>
                        <option class="bg-white divide-y divide-gray-100 text-start rounded-lg shadow overflow-scroll h-72 overflow-x-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-maingreen"
                            :value="campus.id"  v-for="(campus, i) in campuses" :key="i">{{ campus.name }}</option>
                    </select>
                </div>
                
                <!-- Gênero -->
                <div id="sex-div" class="border-2 border-transparent p-2 rounded-lg">
                    <label for="sex_link" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gênero</label>
                    <select v-model="inEditionResearcher.sex" name="" id="" class="bg-gray-50 border border-maingreen text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 w-full p-2.5">
                        <option class="bg-white divide-y divide-gray-100 rounded-lg text-center shadow overflow-scroll h-72 overflow-x-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-maingreen"
                            value="0" disabled>Selecione</option>
                        <option class="bg-white divide-y divide-gray-100 rounded-lg text-center shadow overflow-scroll h-72 overflow-x-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-maingreen"
                            value="F">Feminino</option>
                        <option class="bg-white divide-y divide-gray-100 rounded-lg text-center shadow overflow-scroll h-72 overflow-x-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-maingreen"
                            value="M">Masculino</option>
                    </select>
                </div>

                <!-- Portfólio -->
                <!-- <div id="lattes-div" class="border-2 border-transparent p-2 rounded-lg">
                    <label for="lattes_link" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Portfólio</label>
                    <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5" 
                        v-model="inEditionResearcher.name" type="tel" id="lattes_link" required />
                </div> -->

                <!-- Imagem -->
                <div id="image-div" class="border-2 border-transparent p-2 rounded-lg col-span-2">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Imagem de Perfil</label>
                    <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none"
                        aria-describedby="file_input_help" id="file_input" type="file" @change="onImageChange($event)">
                    <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                </div>
            </div>
            <div class="w-full flex justify-center gap-10">
                <button class="text-white bg-maingreen hover:bg-govblue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center px-36 py-3 transition duration-200"
                    @click.prevent="updateResearcher()" type="submit">Salvar</button>
                
                <div class="flex items-center bg-red-600 hover:bg-maingray focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg transition duration-200"
                    @click.prevent="deleteResearcher()" type="submit">
                    <div class="flex w-full justify-start gap-3 items-center text-white px-32">
                        <img class="w-5" :src="require('@/assets/icons/trash.svg')" alt="">
                        <p class="font-medium">Excluir</p>
                    </div>
                </div>
            </div> 
        </form>
    </section>
</template>

<script>
import router from '@/router/index.js'
import { createResearcher, listResearchers, updateResearcher, deleteResearcher } from '@/services/ResearcherService.js';
import { listCampus } from '@/services/CampusService.js';
import AlertSuccessDelete from "@/components/alert/AlertSuccessDelete.vue";

export default {
    name: 'EditResearcherCard',
    components: {
        AlertSuccessDelete
    },
    data(){
        return {
            bool: false,
            researchers: null,
            campuses: null,
            inEditionResearcher:{
                id: 0,
                campus: {
                    id: 0,
                    name: ''
                },
                firstName: null,
                lastName: '',
                img: {
                    id: null,
                    code: null
                },
                about: '',
                address: '',
                city: '',
                course: '',
                department: '',
                email: '',
                level: '',
                phone: '',
                sex: 0
            },
            inEditionCampus:{
                id: null,
                name: 'Selecione um Campus',
            },
        }
    },
    created(){
        listResearchers().then((response) => {
            this.researchers = response.data
        })

        listCampus().then((response) => {
            this.campuses = response.data
        })
    },
    methods: {
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
                this.inEditionResearcher.img.code = e.target.result;
            };
        },
        showDeleteSuccess(){
            let div = document.getElementById("success-delete-alert")
            div.style.display = "flex"
        },
        setImgId(img_id){
            console.log(this.inEditionResearcher)
            this.inEditionResearcher.img.id = img_id
        },
        updateResearcher() {
            if(this.inEditionResearcher.firstName !== '' && this.inEditionResearcher.campus !== ''){                
                if(this.inEditionResearcher.id == 0){
                    createResearcher(this.inEditionResearcher).then((response) => {
                        console.log(response)
                    }).finally(() => {
                        router.push('/researchers').then(() => {
                            window.location.reload();
                        }); 
                    })
                } else {
                    // console.log(this.researchers)
                    let objId = this.researchers.filter((researcher) => {
                        if(researcher.id == this.inEditionResearcher.id)
                            return researcher
                    })
                    console.log(objId)
                    this.inEditionResearcher.img.id = objId[0].img.id
                    console.log(this.inEditionResearcher)
                    updateResearcher(this.inEditionResearcher).then((response) => {
                        console.log(response)
                    }).finally(() => {
                        router.push('/researchers').then(() => {
                            window.location.reload();
                        }); 
                    })
                }
            } else {
                // criar alert de erro
            }
        },
        deleteResearcher(){
            if(this.inEditionResearcher.id == 0){
                alert('selecione um aluno primeiro')
            }else{
                deleteResearcher(this.inEditionResearcher.id).then((response) => {
                    console.log(response)
                })
                .finally(() => {
                    this.showDeleteSuccess()
                    setInterval(() => {
                        router.push('/').then(() => {1
                            var element = document.getElementById("ourclients");
                            element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                        }); 
                    }, 2000)
                })
            }
        }
    },
}
</script>

<style scoped>

</style>