<template lang="">
   <main class="flex justify-center items-center px-10 py-2 max-lg:mt-20 max-lg:p-3">
        <section class="flex flex-col gap-10 px-20 w-full max-lg:px-5">
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
            <div class="flex items-center justify-between">
                <h1 class="text-4xl text-black font-semibold underline underline-offset-2 decoration-8 decoration-maingreen">Pesquisadores</h1>
                <button v-if="isAdmin" class="text-white bg-maingreen hover:bg-govblue focus:ring-4 focus:outline-none focus:ring-red-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition duration-200"
                    type="submit" @click.prevent="createNewResearcher()">Gerenciar Pesquisadores</button>
            </div>
            <hr class="bg-red-600 h-1"/>
            <div class="flex items-center gap-5">
                <input type="text" placeholder="Pesquisar..." class="w-full rounded-lg"/>
                <button class="">
                    <img alt="Laboratório de sistemas automotivos IFMG - Campus Formiga" :src="require('@/assets/icons/hand-glass.svg')" 
                    class="border border-maingreen bg-maingreen px-4 rounded-lg hover:bg-lightgray transition duration-200" />
                </button>
            </div>  
            <div class="grid grid-cols-3 gap-7 max-lg:grid-cols-1">
                <ResearcherCard v-for="(researcher, i) in researchers" :key="i"
                    :img="researcher.img" :course="researcher.course" :link="'#'" :name="researcher.firstName + ' ' + researcher.lastName" :email="researcher.email"/>
            </div>
        </section>
        <BackToTop />
    </main>
</template>

<script>
import router from '@/router/index.js'
import { listResearchers } from '@/services/ResearcherService.js';
import ResearcherCard from '@/components/cards/ResearcherCard.vue'; 
import BackToTop  from '@/components/buttons/BackToTop.vue';

export default {
    name: 'ResearchersPage',
    created(){
        listResearchers().then((response) => {
            this.researchers = response.data
        })
    },
    components: {
        ResearcherCard,
        BackToTop
    },
    data(){
        return {
            researchers: null,
            isAdmin: this.$store.getters.isLoggedIn,
        }
    },
    methods: {
        createNewResearcher(){
            router.push('/edit/researcher').then(() => {
                window.location.reload()
                var element = document.getElementById("navbar");
                element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
            }); 
        }
    }
}
</script>

<style lang="">
    
</style>