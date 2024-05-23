<template lang="">
    <main class="px-16 pt-6" id="main-edition">  
        <div class="flex flex-col gap-10 p-4">
            <h1 class="text-3xl font-semibold underline decoration-maingreen decoration-4">Modo de Edição</h1>
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
export default {
    name: 'MainEdition',
    data(){
        return {
            linkCss: 'transition duration-200 hover:bg-maingreen px-3 py-1 rounded-lg text-maingreen hover:text-white font-medium'
        }
    }
}
</script>

<style lang="">
    
</style>