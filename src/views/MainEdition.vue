<template lang="">
    <main class="px-10 pt-6 max-sm:mt-20 max-sm:px-0" id="main-edition">
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
                <h1 class="text-3xl max-sm:text-xl font-semibold underline decoration-maingreen decoration-4">Edição de Componentes</h1>
            </div>
            <div class="flex max-sm:flex-col gap-5 rounded-2xl">
                <div class="flex flex-col">
                    <ul class="flex flex-col gap-3 justify-between border-l-2 border-red-600 p-4">
                        <button class="text-start" @click="goPresenter" to="/edit/presenter-card" :class="linkCss">Sessão de Apresentação</button>
                        <button class="text-start" @click="goAboutUs" to="/edit/about-us" :class="linkCss">Sobre Nós</button>
                        <button class="text-start" @click="goAdvantages" to="/edit/advantages-card" :class="linkCss">Cards de Vantagens</button>
                        <button class="text-start" @click="goEvents" to="/edit/event-card" :class="linkCss">Cards de Eventos</button>
                        <button class="text-start" @click="goProjects" to="/edit/project-modal" :class="linkCss">Modal de Projetos</button>
                        <button class="text-start" @click="goCapacitation" to="/edit/capacitation-card" :class="linkCss">Cards de Capacitação</button>
                        <button class="text-start" @click="goTalents" to="/edit/talent-card" :class="linkCss">Cards de Talentos</button>
                        <button class="text-start" @click="goResearchers" to="/edit/researcher" :class="linkCss">Editar Pesquisadores</button>
                        <button class="text-start" @click="goCompany" to="/edit/company" :class="linkCss">Empresa Parceira</button>
                    </ul>
                </div>
                <div class="p-2 flex justify-center w-full bg-lightgray rounded-lg max-sm:inline-block">
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
        if(!this.$store.getters.isAdmin){
            router.push('/').then(() => {
                window.location.reload();
            });
        }
    },
    data() {
        return {
            linkCss: 'transition duration-200 hover:bg-maingreen px-3 py-1 rounded-lg text-maingreen hover:text-white font-medium',
            isAdmin: this.$store.getters.isAdmin,
            goPresenter: () => {
                router.push({ path: '/edit/presenter-card' }).then(() => {
                    var element = document.getElementById("navbar");
                    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                    window.location.reload()
                })
            },
            goEvents: () => {
                router.push({ path: '/edit/event-card' }).then(() => {
                    var element = document.getElementById("navbar");
                    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                    window.location.reload()
                })
            },
            goNewsCard: () => {
                router.push({ path: '/edit/news-card' }).then(() => {
                    var element = document.getElementById("navbar");
                    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                    window.location.reload()
                })
            },
            goResearchers: () => {
                router.push({ path: '/edit/researcher/0' }).then(() => {
                    var element = document.getElementById("navbar");
                    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                    window.location.reload()
                })
            },
            goTalents: () => {
                router.push({ path: '/edit/talent-card' }).then(() => {
                    var element = document.getElementById("navbar");
                    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                    window.location.reload()
                })
            },
            goProjects: () => {
                router.push({ path: '/edit/project-modal' }).then(() => {
                    var element = document.getElementById("navbar");
                    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                    window.location.reload()
                })
            },
            goCapacitation: () => {
                router.push({ path: '/edit/capacitation-card' }).then(() => {
                    var element = document.getElementById("navbar");
                    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                    window.location.reload()
                })
            },
            goAboutUs: () => {
                router.push({ path: '/edit/about-us' }).then(() => {
                    var element = document.getElementById("navbar");
                    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                    window.location.reload()
                })
            },
            goCompany: () => {
                router.push({ path: '/edit/company' }).then(() => {
                    var element = document.getElementById("navbar");
                    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                    window.location.reload()
                })
            },
            goAdvantages: () => {
                router.push({ path: '/edit/advantages-card' }).then(() => {
                    var element = document.getElementById("navbar");
                    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                    window.location.reload()
                })
            },
        }  
    },
}
</script>

<style>
    
</style>