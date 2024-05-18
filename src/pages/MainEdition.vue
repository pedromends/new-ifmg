<template lang="">
    <main class="px-16 pt-6" id="main-edition">  
        <div class="flex flex-col gap-10 p-4">
            <h1 class="text-3xl font-semibold underline decoration-maingreen decoration-4">Modo de Edição</h1>
            <div class="flex gap-5 rounded-lg">
                <div class="flex flex-col">
                    <ul class="flex flex-col gap-3 justify-between border-l-2 border-red-600 px-4">
                        <router-link to="/edit/presenter-card" class="transition duration-200 hover:bg-maingreen px-3 py-1 rounded-lg text-maingreen hover:text-white">Cards de Apresentação</router-link>
                        <router-link to="/edit/about-us" class="transition duration-200 hover:bg-maingreen px-3 py-1 rounded-lg text-maingreen hover:text-white">Sobre Nós</router-link>
                        <router-link to="/edit/advantages-card" class="transition duration-200 hover:bg-maingreen px-3 py-1 rounded-lg text-maingreen hover:text-white">Cards de Vantagens</router-link>
                        <router-link to="/edit/main-new" class="transition duration-200 hover:bg-maingreen px-3 py-1 rounded-lg text-maingreen hover:text-white">Notícia Principal</router-link>
                        <router-link to="/edit/news-card" class="transition duration-200 hover:bg-maingreen px-3 py-1 rounded-lg text-maingreen hover:text-white">Notícias Secundárias</router-link>
                        <router-link to="/edit/event-card" class="transition duration-200 hover:bg-maingreen px-3 py-1 rounded-lg text-maingreen hover:text-white">Cards de Eventos</router-link>
                        <router-link to="/edit/project-modal" class="transition duration-200 hover:bg-maingreen px-3 py-1 rounded-lg text-maingreen hover:text-white">Projetos</router-link>
                        <router-link to="/edit/capacitation-card" class="transition duration-200 hover:bg-maingreen px-3 py-1 rounded-lg text-maingreen hover:text-white">Cards de Capacitação</router-link>
                        <router-link to="/edit/talent-card" class="transition duration-200 hover:bg-maingreen px-3 py-1 rounded-lg text-maingreen hover:text-white">Cards Talentos</router-link>
                        <router-link to="/edit/researcher" class="transition duration-200 hover:bg-maingreen px-3 py-1 rounded-lg text-maingreen hover:text-white">Editar Pesquisador</router-link>
                        <router-link to="/edit/company" class="transition duration-200 hover:bg-maingreen px-3 py-1 rounded-lg text-maingreen hover:text-white">Editar Empresa</router-link>
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
    
}
</script>

<style lang="">
    
</style>