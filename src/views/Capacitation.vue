<template lang="">
    <main class="flex justify-center items-center px-10">
        <div class="flex flex-col gap-10 px-20 w-full">
            <div class="flex items-center gap-2">
                <img class="w-6" :src="require('@/assets/icons/house2.svg')" alt="">
                <router-link to="/news" class="text-maingreen hover:underline">Home</router-link>
                <p class="flex items-center">
                    <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 9 4-4-4-4" />
                    </svg>
                    <span>Capacitação</span>
                </p>
            </div>
            <div class="flex justify-between">
                <h1 class="text-4xl text-black font-semibold underline underline-offset-2 decoration-8 decoration-maingreen">Capacitação</h1>
                <button v-if="isAdmin"
                    class="text-white bg-maingreen hover:bg-govblue focus:ring-4 focus:outline-none focus:ring-red-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition duration-200"
                    type="submit" @click.prevent="createNew()">Editar</button>
            </div>
            <hr class="bg-red-600 h-1"/>
            <div class="flex flex-col gap-5 text-maingray">
                <div class="flex gap-10 max-lg:flex-col">
                    <div class="w-3/4 flex flex-col gap-10 max-lg:w-auto">
                        <p>O Polo do Instituto Federal de Minas Gerais (IFMG) se destaca por sua excelência em promover o
                            desenvolvimento contínuo de habilidades técnicas e profissionais, alinhadas às demandas do mercado. Com uma infraestrutura
                            moderna e equipada com tecnologias de ponta, o Polo oferece treinamentos especializados nas mais diversas áreas, como inovação
                            tecnológica, gestão de projetos e sustentabilidade. Além disso, o programa de capacitação é estruturado para atender tanto os
                            estudantes quanto os profissionais da comunidade local, reforçando o compromisso do IFMG em impulsionar o crescimento educacional
                            e econômico da região. Por meio de oficinas práticas, palestras com especialistas renomados e cursos certificados, o Polo se
                            consolida como um centro de referência para aqueles que buscam aperfeiçoamento e atualização nas suas respectivas áreas de atuação.
                        </p>
                    </div>
                </div>
                <BackToTop />
            </div>
        </div>
        <BackToTop />
    </main>
</template>

<script>
import BackToTop  from '@/components/buttons/BackToTop.vue';

export default {
    name: 'CapacitationPage',
    components: {
        BackToTop
    },
    data() {
        return {
            news: null,
            isAdmin: false,
            page: 0,
            totalPages: 0,
            totalElements: 0
        }
    },
    created() {
        this.isAdmin = this.$store.getters.isAdmin
    },
    props: {
    }
}
</script>
<style lang="">
    
</style>