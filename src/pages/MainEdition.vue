<template lang="">
    <main class="px-16">
        <div class="flex flex-col gap-4">
            <h1 class="text-3xl font-semibold">Edição de Componentes</h1>
            <div class="flex gap-5 w-full">
                <div class="flex flex-col">
                    <ul class="flex flex-col gap-3 justify-between">
                        <router-link to="/edit/presenter-card" class="hover:bg-lightgray px-3 py-2 rounded-lg text-maingreen">Cards de Apresentação</router-link>
                        <router-link to="/edit/event-card" class="hover:bg-lightgray px-3 py-2 rounded-lg text-maingreen">Cards de Eventos</router-link>
                        <router-link to="/edit/main-new" class="hover:bg-lightgray px-3 py-2 rounded-lg text-maingreen">Manchete</router-link>
                        <router-link to="/edit/news-card" class="hover:bg-lightgray px-3 py-2 rounded-lg text-maingreen">Notícias Secundárias</router-link>
                        <router-link to="/edit/researcher" class="hover:bg-lightgray px-3 py-2 rounded-lg text-maingreen">Editar Pesquisador</router-link>
                        <router-link to="/edit/talent-card" class="hover:bg-lightgray px-3 py-2 rounded-lg text-maingreen">Cards Linked-In</router-link>
                        <router-link to="/edit/advantages-card" class="hover:bg-lightgray px-3 py-2 rounded-lg text-maingreen">Cards de Vantagens</router-link>
                        <router-link to="/edit/company-modal" class="hover:bg-lightgray px-3 py-2 rounded-lg text-maingreen">Empresa Parceira</router-link>
                    </ul>
                </div>
                <router-view></router-view>
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