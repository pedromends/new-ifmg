<template lang="">
    <section title="Abrir Modal" :data-modal-target="modalname" :data-modal-toggle="modalname"
        class="flex justify-center">
        <button class="bg-gradient-to-r from-maingreen to-transparent p-0.5 rounded-xl flex items-center shadow-md shadow-transparent hover:shadow-md hover:shadow-maingreen transition duration-200"
            type="button">
            <img :src="img" class="py-5 rounded-xl bg-white shadow-lg self-center px-10 eauto" alt="#" :class="extraClass"/>
        </button>
    </section>
    

    <section :id="modalname" tabindex="-1" aria-hidden="true" 
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full ">
        <div class="relative p-4 w-full max-w-2xl max-h-full">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">

                <!-- Tìtulo do Modal -->
                <div class="relative flex justify-center items-center text-center p-4 md:p-5 border-b rounded-t border-maingreen w-full">
                    <img :src="img" alt="" class="ml-6 w-auto h-auto max-h-12 absolute self-start left-0">
                    <h3 class="text-xl font-bold font-raleway text-maingray self-center tracking-wide pt-2">
                        {{ company }}
                    </h3>
                    <button type="button" class="flex justify-center items-center w-6 h-6 rounded-lg hover:bg-gray-500/50 transition duration-200 mr-6 absolute self-end right-0 top-X" :data-modal-hide="modalname">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="#E02424" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                    </button>
                </div>

                <!-- Accordion -->
                <div class="p-4 md:p-5 space-y-4 flex flex-col">
                    <div :id="accID" data-accordion="collapse" data-active-classes="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white">

                        <!-- Accordion Fechado -->
                        <h2 :id="headName" class="text-maingray ">
                            <button type="button" :data-accordion-target="`#${headBody}`" aria-expanded="false" :aria-controls="headBody"
                                class="flex items-center justify-between w-full p-5 font-medium rtl:text-right border border-maingreen rounded-t-xl hover:bg-blue-100 gap-3 transition duration-200">
                                <span class="text-maingreen">{{ projName }}</span> <!-- "resumo" -->
                                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="#2F9E40" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                                </svg>
                            </button>
                        </h2>

                        <!-- Accordion aberto e informação sobre o projeto -->
                        <div :id="headBody" class="hidden" :aria-labelledby="headName">
                            <div class="p-5 border rounded-b-xl border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                <p class="mb-2 text-gray-500 dark:text-gray-400">{{ resume }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col px-2 text-sm gap-1">
                        <div class="flex gap-2 items-center max-lg:text-sm">
                            <p class="font-bold text-maingray">Coordenador: </p>
                            <p>{{ coorName }}</p>
                        </div>
                        <!-- <div class="flex gap-2 items-center max-lg:text-sm">
                            <p class="font-bold text-maingray">Pesquisador(es): </p>
                            <p>Nome e Campus</p>
                        </div>
                        <div class="flex gap-2 items-center max-lg:text-sm">
                            <p class="font-bold text-maingray">Aluno(s): </p>
                            <p>Nome e Curso</p>
                        </div> -->
                        <div class="flex gap-2 items-center max-lg:text-sm">
                            <p class="font-bold text-maingray">Situação: </p>
                            <p>{{ situ }}</p>
                        </div>
                        <div class="flex gap-2 items-center max-lg:text-sm">
                            <p class="font-bold text-maingray">Valor:</p>
                            <p>R$ {{ value }}</p>
                        </div>
                    </div>
                </div>
                <div class="flex justify-between items-center p-4 md:p-5 border-t border-gray-200 rounded-b">
                    <div class="flex gap-5">
                        <button class="text-white bg-maingreen border-2 border-maingreen hover:bg-white hover:text-maingray transition duration-300 rounded-lg text-sm px-5 py-2.5"
                            :data-modal-hide="modalname" type="button">
                            Saiba Mais!
                        </button>
                        <button class="ms-3 text-maingray bg-white rounded-lg border border-gray-200 text-sm transition duration-300 px-5 py-2.5 hover:bg-maingray hover:text-white"
                            :data-modal-hide="modalname" type="button">
                            Fechar
                        </button>
                    </div>
                    <button @click="editModal()" class="" v-if="isAdmin">
                        <img :src="require('@/assets/icons/pencil-edit-maingreen.svg')" alt="#" class="h-10"/>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import router from '@/router/index.js'

export default {
    name: 'CompanyModal',
    components:{
    },
    data() {
        return {
            isAdmin: this.$store.getters.isAdmin
        }
    },
    props: {
        img: String, //imagem a ser utilizada
        company: String, // nome da empresa
        modalname: String, // nome do modal
        accID: String, // nome do accordion
        headName: String, // heading do accordion
        headBody: String, // corpo do accordion
        resume: String, // texto resumo do projeto
        extraClass: String, // CSS extra
        coorName: String, // NOme do Coordenador do projeto
        situ: String, // Situação do Projeto
        projName: String, // Nome do projeto
        value: String // Valor do projeto
    },
    methods: {
        editModal(){
            router.push('/edit/project-modal').then(() => {
                window.location.reload();
            }).finally(()=>{
                var element = document.getElementById("navbar");
                element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
            })
        }
    },
}
</script>

<style lang="">
    
</style>