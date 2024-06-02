<template lang="">
    <main class="flex justify-center items-center p-16 max-lg:p-2 max-lg:mt-20">
        <div class="flex flex-col gap-10 px-20 max-lg:px-4">
            <div class="flex flex-col gap-5">
                <div class="flex items-center justify-between">
                    <h1 class="text-4xl text-black font-semibold underline underline-offset-2 decoration-8 decoration-maingreen">Blog do Polo</h1>
                    <button class="text-white bg-maingreen hover:bg-govblue focus:ring-4 focus:outline-none focus:ring-red-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition duration-200 mb-10"
                    type="submit" @click.prevent="createNew()">Criar nova notícia</button>
                </div>
                <hr class="bg-red-600 h-1"/>
                <div class="flex items-center gap-5">
                    <input type="text" placeholder="Pesquisar..." class="w-full rounded-lg ring ring-transparent focus:ring-red-600"/>
                    <img alt="Laboratório de sistemas automotivos IFMG - Campus Formiga" class=" bg-maingreen px-4 rounded-lg" :src="require('@/assets/icons/hand-glass.svg')" />
                </div>
            </div>
            <div class="grid grid-cols-3 gap-5 text-maingray max-lg:grid-cols-1">
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
            news: null
        }
    },
    created(){
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