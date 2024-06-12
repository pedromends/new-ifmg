<template lang="">
    <main class="px-10 pt-6" id="main-edition">
        <div class="flex items-center gap-2 px-5">
            <img class="w-6" :src="require('@/assets/icons/house2.svg')" alt="">
            <router-link to="/news" class="text-maingreen hover:underline">Home</router-link>
            <p class="flex items-center">
                <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 9 4-4-4-4" />
                </svg>
                <span>Edição de Componentes</span>
            </p>
        </div>
        <div class="flex flex-col gap-10 p-4">
            <div class="flex items-center gap-2 mt-3">
                <img :src="require('@/assets/icons/components.svg')" class="w-10 h-10 mt-1" alt="">
                <h1 class="text-3xl font-semibold underline decoration-maingreen decoration-4">Edição de Componentes</h1>
            </div>
            <div class="flex gap-5 rounded-2xl">
                <div class="flex flex-col">
                    <ul class="flex flex-col gap-3 justify-between border-l-2 border-red-600 p-4">
                        <router-link to="/edit/presenter-card" :class="linkCss">Cards de Apresentação</router-link>
                        <router-link to="/edit/about-us" :class="linkCss">Sobre Nós</router-link>
                        <router-link to="/edit/advantages-card" :class="linkCss">Cards de Vantagens</router-link>
                        <router-link to="/edit/main-new" :class="linkCss">Notícia Principal</router-link>
                        <!-- <router-link to="/edit/news-card" :class="linkCss">Notícias Secundárias</router-link> -->
                        <router-link to="/edit/event-card" :class="linkCss">Cards de Eventos</router-link>
                        <router-link to="/edit/project-modal" :class="linkCss">Modal de Projetos</router-link>
                        <router-link to="/edit/capacitation-card" :class="linkCss">Cards de Capacitação</router-link>
                        <router-link to="/edit/talent-card" :class="linkCss">Cards de Talentos</router-link>
                        <router-link to="/edit/researcher" :class="linkCss">Editar Pesquisadores</router-link>
                        <router-link to="/edit/company" :class="linkCss">Empresa Parceira</router-link>
                    </ul>
                </div>
                <div class="p-2 flex justify-center w-full bg-lightgray rounded-lg">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import router from '@/router/index.js'

export default {
    name: 'MainEdition',
    beforeCreate() {
        if(!this.$store.getters.isLoggedIn){
            router.push('/').then(() => {
                window.location.reload();
            });
        }
    },
    data(){
        return {
            linkCss: 'transition duration-200 hover:bg-maingreen px-3 py-1 rounded-lg text-maingreen hover:text-white font-medium',
            isLoggedIn: this.$store.getters.isLoggedIn,
        }
    }
}
</script>

<style lang="">
    
</style>