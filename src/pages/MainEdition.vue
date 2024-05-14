<template lang="">
    <main class="px-16 pt-6" id="main-edition">  
        <div class="flex flex-col gap-10 p-4">
            <h1 class="text-3xl font-semibold">Edição de Componentes</h1>
            <div class="flex gap-5 ssrounded-lg">
                <div class="flex flex-col">
                    <ul class="flex flex-col gap-3 justify-between">
                        <router-link to="/edit/presenter-card" class="hover:bg-maingreen px-3 py-1 rounded-lg text-maingreen hover:text-white">Cards de Apresentação</router-link>
                        <router-link to="/edit/about-us" class="hover:bg-maingreen px-3 py-1 rounded-lg text-maingreen hover:text-white">Sobre Nós</router-link>
                        <router-link to="/edit/advantages-card" class="hover:bg-maingreen px-3 py-1 rounded-lg text-maingreen hover:text-white">Cards de Vantagens</router-link>
                        <router-link to="/edit/main-new" class="hover:bg-maingreen px-3 py-1 rounded-lg text-maingreen hover:text-white">Manchete</router-link>
                        <router-link to="/edit/news-card" class="hover:bg-maingreen px-3 py-1 rounded-lg text-maingreen hover:text-white">Notícias Secundárias</router-link>
                        <router-link to="/edit/event-card" class="hover:bg-maingreen px-3 py-1 rounded-lg text-maingreen hover:text-white">Cards de Eventos</router-link>
                        <router-link to="/edit/company-modal" class="hover:bg-maingreen px-3 py-1 rounded-lg text-maingreen hover:text-white">Projeto</router-link>
                        <router-link to="/edit/capacitation-card" class="hover:bg-maingreen px-3 py-1 rounded-lg text-maingreen hover:text-white">Card de Capacitação</router-link>
                        <router-link to="/edit/talent-card" class="hover:bg-maingreen px-3 py-1 rounded-lg text-maingreen hover:text-white">Cards Linked-In</router-link>
                        <router-link to="/edit/researcher" class="hover:bg-maingreen px-3 py-1 rounded-lg text-maingreen hover:text-white">Editar Pesquisador</router-link>
                    </ul>
                </div>
                <div class="p-4 flex justify-center w-full bg-lightgray rounded-lg">
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