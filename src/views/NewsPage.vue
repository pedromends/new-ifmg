<template lang="">
    <main class="flex justify-center items-center px-16 py-2 max-lg:p-2 max-lg:mt-20">
        <div class="flex flex-col px-20 max-lg:px-4">
            <div class="flex items-center gap-2">
                <img class="w-6" :src="require('@/assets/icons/house2.svg')" alt="">
                <router-link to="/news" class="text-maingreen hover:underline">Home</router-link>
                <p class="flex items-center">
                    <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 9 4-4-4-4" />
                    </svg>
                    <span>Notícias</span>
                </p>
            </div>
            <div class="flex flex-col gap-10 mb-10 pt-5">
                <div class="flex items-center justify-between">
                    <h1 class="text-4xl text-black font-semibold underline underline-offset-2 decoration-8 decoration-maingreen">Blog do Polo</h1>
                    <button v-if="isAdmin" class="text-white bg-maingreen hover:bg-govblue focus:ring-4 focus:outline-none focus:ring-red-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition duration-200 mb-10"
                        type="submit" @click.prevent="createNew()">Criar nova notícia</button>
                </div>
                <hr class="bg-red-600 h-1"/>
                <div class="flex items-center gap-5">
                    <input type="text" placeholder="Pesquisar..." class="w-full rounded-lg ring ring-transparent focus:ring-red-600"/>
                    <img alt="Laboratório de sistemas automotivos IFMG - Campus Formiga" class=" bg-maingreen px-4 rounded-lg" :src="require('@/assets/icons/hand-glass.svg')" />
                </div>
            </div>
            <div class="grid grid-cols-4 gap-5 text-maingray max-lg:grid-cols-1">
                <NewCard  v-for="(newNew, i) in news" :key="i"
                    :tip="'Novidade'" :title="newNew.title" :date="newNew.date" :read="'3 min de Leitura'" :img="newNew.img1.code" :newId="newNew.id"/>
            </div>
        </div>
        <BackToTop />
    </main>
</template>

<script>
import router from '@/router/index.js'    
import NewCard from '@/components/cards/NewCard.vue';
import BackToTop  from '@/components/buttons/BackToTop.vue';
import { listNews } from '@/services/NewService.js';

export default {
    name: 'NewsSection',
    components:{
        NewCard,
        BackToTop
    },
    data() {
        return {
            news: null,
            isAdmin: false
        }
    },
    created(){
        this.isAdmin = this.$store.getters.isLoggedIn
        listNews(this.newNew).then((response) => {
            this.news = response.data
            console.log(this.news)
        })
    },
    methods: {
        createNew(){
            router.push('/news/create')
            // .then(() => {
            //     var element = document.getElementById("news");
            //     element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
            // });
        },
        
        
    },
    props: {
    }
}
</script>

<style lang="">
    
</style>