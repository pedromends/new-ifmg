<template lang="">
   <main class="px-10 py-2 max-sm:mt-20 max-sm:p-3">
        <section class="flex flex-col gap-10 px-20 w-full max-sm:px-5">
            <div class="flex items-center gap-2">
                <img class="w-6" :src="require('@/assets/icons/house2.svg')" alt="">
                <router-link to="/news" class="text-maingreen hover:underline">Home</router-link>
                <p class="flex items-center">
                    <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 9 4-4-4-4" />
                    </svg>
                    <span>Pesquisadores</span>
                </p>
            </div>
            <div class="flex items-center justify-between max-sm:gap-4">
                <h1 class="text-2xl text-black font-semibold underline underline-offset-2 decoration-8 decoration-maingreen max-sm:self-start">Pesquisadores</h1>
                <button v-if="isAdmin" class="text-white bg-maingreen hover:bg-govblue focus:ring-4 focus:outline-none focus:ring-red-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition duration-200 max-sm:self-start"
                    type="submit" @click.prevent="createNewResearcher()">Gerenciar Pesquisadores</button>
            </div>
            <hr class="bg-red-600 h-1"/>
            <div class="flex items-center rounded-lg border-maingreen border-1">
                <div class="flex items-center w-full">
                    <input id="search-bar" v-model="searchQuery" type="text" placeholder="Pesquisar..." class="focus:ring-0 border-none w-full rounded-lg"/>
                    <button v-if="searchQuery.length > 1" @click="searchQuery = ''; listResearchers()" class="rounded-xl hover:bg-gray-200">
                        <img :src="require('@/assets/icons/X.svg')" alt="" class="w-6 h-6 m-1">
                    </button>
                </div>
                <div class="h-full flex items-center">
                    <button @click="searchItems()" class="h-full border bg-maingreen px-4 rounded-lg hover:bg-lightgray transition duration-200">
                        <img alt="Laboratório de sistemas automotivos IFMG - Campus Formiga" :src="require('@/assets/icons/hand-glass.svg')" 
                        class="" />
                    </button>
                </div>
            </div>  
            <div class="grid grid-cols-3 gap-7 max-sm:grid-cols-1">
                <ResearcherCard v-for="(researcher, i) in researchers" :key="i"
                    :img="researcher.img" :course="researcher.course" :link="'#'" :name="researcher.firstName + ' ' + researcher.lastName" 
                        :email="researcher.email" :id="researcher.id"/>
            </div>
        </section>
        <BackToTop />
    </main>
</template>

<script>
import router from '@/router/index.js'
import { listResearchers, searchResearcher } from '@/services/ResearcherService.js';
import ResearcherCard from '@/components/cards/ResearcherCard.vue'; 
import BackToTop  from '@/components/buttons/BackToTop.vue';

export default {
    name: 'ResearchersPage',
    created(){
        this.listResearchers()
    },
    components: {
        ResearcherCard,
        BackToTop
    },
   
    data(){
        return {
            researchers: null,
            isAdmin: this.$store.getters.isAdmin,
            searchQuery: ''
        }
    },
    methods: {
        createNewResearcher(){
            router.push('/edit/researcher/0').then(() => {
                window.location.reload()
                var element = document.getElementById("navbar");
                element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
            }); 
        },
        searchItems() {
            if (this.searchQuery.length > 2) {
                searchResearcher(this.searchQuery).then((response) => {
                    this.researchers = response.data
                }).catch(error => {
                    console.error("Erro ao buscar itens:", error);
                });
            }
        },
        listResearchers(){
            listResearchers().then((response) => {
                this.researchers = response.data
            })
        }
    }
}
</script>

<style lang="">
    
</style>