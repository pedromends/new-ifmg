<template lang="">
   <main class="flex justify-center items-center p-10 max-lg:mt-20 max-lg:p-3">
        <section class="flex flex-col gap-10 px-20 w-full max-lg:px-5">
            <div class="flex items-center justify-between">
                <h1 class="text-4xl text-black font-semibold underline underline-offset-2 decoration-8 decoration-maingreen">Pesquisadores</h1>
                <button class="text-white bg-maingreen hover:bg-govblue focus:ring-4 focus:outline-none focus:ring-red-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition duration-200"
                    type="submit" @click.prevent="createNewResearcher()">Criar novo pesquisador</button>
            </div>
            <hr class="bg-red-600 h-1"/>
            <div class="flex items-center gap-5">
                <input type="text" placeholder="Pesquisar..." class="w-full rounded-lg"/>
                <img alt="Laboratório de sistemas automotivos IFMG - Campus Formiga" class=" bg-maingreen px-4 rounded-lg" :src="require('@/assets/icons/hand-glass.svg')" />
            </div>
            <div class="grid grid-cols-3 gap-7 max-lg:grid-cols-1">
                <ResearcherCard v-for="(researcher, i) in researchers" :key="i"
                    :img="researcher.img" :course="researcher.course" :link="'#'" :name="researcher.firstName + ' ' + researcher.lastName" :email="researcher.email"/>
            </div>
            <a href="#" class="px-10 py-2 text-maingreen mx-auto rounded-lg font-bold border-2 border-maingreen hover:bg-maingreen hover:text-white transition duration-300">Ver Mais</a>
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
    data(){
        return {
            researchers: null,
        }
    },
    components: {
        ResearcherCard,
        BackToTop
    },
    created(){
        listResearchers().then((response) => {
            this.researchers = response.data
        })
    },
    methods: {
        createNewResearcher(){
            router.push('/edit/researcher').then(() => {
                var element = document.getElementById("navbar");
                element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
            }); 
        }
    }
}
</script>

<style lang="">
    
</style>