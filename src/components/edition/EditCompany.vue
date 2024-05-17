<template lang="">
    <section class="bg-lightgray gap-10 w-full flex flex-col pt-5 px-10">
        <div role="status" class="">
            <section class="flex justify-center gap-10 items-center">

                <!-- Empresa -->
                <div id="company-name-div" class="border-2 border-transparent p-2 rounded-lg">
                    <div class="flex flex-col">
                        <label for="researchers" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Empresa:</label>
                        <button class="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 hover:text-white focus:border-red-600 block w-full p-2.5 hover:bg-maingreen" 
                            id="modalityButton" data-dropdown-toggle="dropdown1" type="button">
                            {{ inEditionCompany.name }}
                        </button>

                        <div id="dropdown1" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow overflow-scroll h-72 overflow-x-hidden">
                            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="modalityButton">
                                <li @click="boolNewProject == true">
                                    <input href="#" class="w-84 block px-4 py-2 hover:bg-maingreen hover:text-white cursor-pointer"
                                        readonly="readonly" value="-- Novo --"/>
                                </li>
                                <li v-for="(company, i) in companies" :key="i" @click="setItem('company', company.id, company.name, company.image.id)">
                                    <input href="#" class="w-84 block px-4 py-2 hover:bg-maingreen hover:text-white cursor-pointer "
                                        readonly="readonly" :value="company.name"/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div alt="Polo IFMG" class="border-transparent animate-pulse shadow-lg transition duration-200 hover:shadow-red-600 p-2 rounded-xl border bg-white flex items-center px-10 py-4">
                    <svg class="w-40 h-20 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                    </svg>
                </div>       
            </section>
        </div>

        <!-- Formulário -->
        <form class="bg-white w-full px-24 py-10">
            <div class="grid grid-cols-2 rounded-lg pt-10 mb-10">
                <div id="name-div" class="border-2 border-transparent py-2 rounded-lg px-6">
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome</label>
                    <input class="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5"
                        v-model="company.name" id="name" placeholder="Digite o nome..." required />
                </div>
                <div id="classification-div" class="border-2 border-transparent py-2 rounded-lg px-6">
                    <label for="classification" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Classificação</label>
                    <input class="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5"
                        v-model="company.classification" id="classification" placeholder="Digite a classificação..." required />
                </div>
                <div id="cnpj-div" class="border-2 border-transparent py-2 rounded-lg px-6">
                    <label for="cnpj" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">CNPJ</label>
                    <input class="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5"
                        v-model="company.cnpj" id="cnpj" placeholder="Digite o CNPJ..." required />
                </div>
                <div id="logo-div" class="border-2 border-transparent py-2 rounded-lg px-6">
                    <label for="logo" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Logomarca</label>
                    <input class="bg-gray-50 border text-gray-900 text-sm focus:ring-red-600 focus:border-red-600 block w-full rounded-xl"
                        type="file" id="logo" @change="onFileChanged($event)" accept="image/*" required />
                </div>
            </div>
            <div class="w-full flex justify-center">
                <button class="text-white bg-maingreen hover:bg-govblue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm m:w-auto w-2/5 py-2.5 text-center"
                    @click.prevent="updateCompany()" type="submit">Salvar</button>
            </div>  
        </form>
    </section>
</template>

<script>
import router from '@/router/index.js'
import { listCompanies, updateCompanies } from '@/services/CompanyService.js';

export default {
    name: 'EditCompany',
    data(){
        return {
            companies: null,
            company: {
                id: 1,
                image: {
                    id: null,
                    name: '',
                    code: ''
                },
                name: '',
                classification: '',
                cnpj: ''
            },
            inEditionCompany:{
                id: null,
                name: 'Selecione uma Empresa',
                id_img: null
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
        updateCompany(){
            this.company.id = this.inEditionCompany.id
            this.company.image.id = this.inEditionCompany.id_img
            console.log(this.company)

            updateCompanies(this.company).then((response) => {
                console.log(response)
            }).finally(() => {
                router.push('/').then(() => {
                    var element = document.getElementById("ourclients");
                    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                }); 
            })
        },
        onFileChanged(e){
            const image = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = e => {
                this.company.image.code = e.target.result;
            };
        },
        setItem(item, id, name, id_img){
            this.inEditionCompany.id = id
            this.inEditionCompany.name = name,
            this.inEditionCompany.id_img = id_img

            console.log(this.inEditionCompany)
        },
    },
}
</script>

<style scoped>

</style>