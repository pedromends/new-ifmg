<template lang="">
    <section class="bg-lightgray gap-10 w-full flex flex-col py-5 px-10">
        <div role="status" class="">
            <section class="flex max-sm:flex-col justify-center gap-10 items-center">
                <div class="flex flex-col ">
                    <p class="font-semibold text-2xl underline underline-offset-2 decoration-4 decoration-maingreen self-center my-5">Empresa Parceira</p>
                
                    <!-- Empresa -->
                    <div id="company-name-div" class="border-2 border-transparent p-2 rounded-lg">
                        <div class="flex flex-col">
                            <label for="researchers" class="mb-2 text-sm font-medium text-gray-900 dark:text-white">Empresa:</label>
                            <select @change="showEditCompany($event)" v-model="company.id" name="" id="" class="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 w-full p-2.5">
                                <option class="bg-white divide-y divide-gray-100 rounded-lg shadow overflow-scroll h-72 overflow-x-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-maingreen"
                                    :value="company.id" v-for="(company, i) in companies" :key="i">{{ company.name }}</option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- Logo -->
                <div class="h-full">
                    <div alt="Polo IFMG" class="w-48 h-36 border-transparent animate-pulse shadow-lg transition duration-200 hover:shadow-red-600 p-2 rounded-2xl border bg-white flex items-center px-10 py-4">
                        <svg class=" text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                        </svg>
                    </div> 
                </div>
            </section>
        </div>

        <AlertSuccessDelete/>
        <AlertSuccessCompany/>
        
        <!-- Formulário -->
        <form class="bg-white w-full px-24 max-sm:px-4 py-10 rounded-xl">
            <div class="grid grid-cols-2 max-sm:grid-cols-1 rounded-lg pt-10 mb-10">
                <div id="name-div" class="border-2 border-transparent py-2 rounded-lg px-6">
                    <label for="name" class="mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome</label>
                    <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 w-full p-2.5"
                        v-model="company.name" id="name" placeholder="Digite o nome..." required />
                </div>
                <div id="classification-div" class="border-2 border-transparent py-2 rounded-lg px-6">
                    <label for="classification" class="mb-2 text-sm font-medium text-gray-900 dark:text-white">Classificação</label>
                    <input class="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 w-full p-2.5"
                        v-model="company.classification" id="classification" placeholder="Digite a classificação..." required />
                </div>
                <div id="cnpj-div" class="border-2 border-transparent py-2 rounded-lg px-6">
                    <label for="cnpj" class="mb-2 text-sm font-medium text-gray-900 dark:text-white">CNPJ</label>
                    <input class="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 w-full p-2.5"
                        v-model="company.cnpj" id="cnpj" placeholder="Digite o CNPJ..." required />
                </div>
                <div id="logo-div" class="border-2 border-transparent py-2 rounded-lg px-6">
                    <label for="logo" class="mb-2 text-sm font-medium text-gray-900 dark:text-white">Logomarca</label>
                    <input class="bg-gray-50 border text-gray-900 text-sm focus:ring-red-600 focus:border-red-600 w-full rounded-xl"
                        type="file" id="logo" @change="onFileChanged($event)" accept="image/*" required />
                </div>
            </div>
            <div class="w-full flex max-sm:flex-col justify-center gap-10">
                <button class="text-white bg-maingreen hover:bg-govblue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center px-36 py-3 transition duration-200"
                    @click.prevent="updateCompany()" type="submit">Salvar</button>
                <div class="flex items-center bg-red-600 hover:bg-maingray focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg transition duration-200"
                    @click.prevent="deleteCompany()" type="submit">
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
import { createCompany, listCompanies, updateCompany, deleteCompany } from '@/services/CompanyService.js';
import AlertSuccessDelete from "@/components/alert/AlertSuccessDelete.vue";
import AlertSuccessCompany from "@/components/alert/AlertSuccessCompany.vue";

export default {
    name: 'EditCompany',
    components: {
        AlertSuccessDelete
    },
    data(){
        return {
            companies: null,
            company: {
                id: 0,
                image: {
                    id: null,
                    name: 'debug',
                    code: ''
                },
                name: '',
                classification: '',
                cnpj: '',
                active: 1
            },
        }
    },
    created(){
        listCompanies().then((response) => {
            this.companies = response.data
            console.log(this.companies)
        })
    },
    methods: {
        showEditCompany(){
            console.log(this.company)
        },
        onFileChanged(e){
            const image = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = e => {
                this.company.image.code = e.target.result;
            };
        },
        showCompanySuccess(){
            let div = document.getElementById("success-alert-company")
            div.style.display = "flex"
        },
        showDeleteSuccess(){
            let div = document.getElementById("success-delete-alert")
            div.style.display = "flex"
        },
        updateCompany(){ // TODO: trocar pra submit data
            console.log(this.company)
            if(this.company.name != '' && this.company.classification != '' && this.company.cnpj != ''){
                if(this.company.id == 0){
                    this.company.id = null
                    createCompany(this.company).then((response) => {
                        console.log(response)
                    })
                    .finally(() => {
                        setInterval(() => {
                            router.push('/').then(() => {
                                window.location.reload();
                            });
                        }, 2500)
                    })
                } else {
                    updateCompany(this.company).then((response) => {
                        console.log(response)
                    }).finally(() => {
                        setInterval(() => {
                            router.push('/').then(() => {
                                window.location.reload();
                            });
                        }, 2500)
                    })
                }
            } else {
                alert('preencha todos os campos')
            }
            
        },
        deleteCompany(){
            deleteCompany(this.company.id).then((response) => {
                console.log(response)
            }).finally(() => {
                this.showDeleteSuccess()
                setInterval(() => {
                    router.push('/').then(() => {1
                       window.location.reload()
                    }); 
                }, 2000)
            })
        }
    },
}
</script>

<style scoped>

</style>