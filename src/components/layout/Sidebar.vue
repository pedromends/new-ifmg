<template lang="">
    <nav class="flex flex-col justify-between">
        <section class="bg-lightgray w-full hidden max-lg:inline max-lg:fixed z-10">
            <button class="rounded-lg text-sm px-5 py-2.5 flex justify-start" type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation">
                <img :src="require('@/assets/icons/if.png')" class="w-10" alt="logo"/>
            </button>
        </section>

        <section id="drawer-navigation" class="h-full hidden max-lg:inline fixed font-raleway top-0 left-0 z-40 w-64 p-4 overflow-y-auto transition-transform -translate-x-full bg-maingreen dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-navigation-label">
            <div class="flex items-center gap-3 mt-3">
                <img :src="require('@/assets/icons/if.png')" class="w-12 p-1 rounded-lg bg-white " alt="logo"/>
                <h5 id="drawer-navigation-label" class="font-semibold  text-white">Polo de Inovação IFMG</h5>
                <button type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" class="text-maingray bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                    <svg aria-hidden="true" class="w-5 h-5" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
            
            <div class="py-4 overflow-y-auto">
                <ul class="space-y-2 font-base">
                    <li class="flex flex-col gap-3">
                        <div class="flex items-center gap-1">
                            <input type="text" placeholder="Pesquisar..." class="w-full rounded-xl text-xs h-8"/>
                            <img alt="Pesquisar" class=" bg-white w-10 h-7 px-3 py-1 rounded-xl" :src="require('@/assets/icons/hand-glass-green.svg')" />
                        </div>
                        <SidebarLink :link="'/'" :text="'Início'" :icon="'homepage'"/>
                        <SidebarLink :link="''" :text="'Quem somos'" :icon="'people'"/>
                        <SidebarLink :link="''" :text="'Vantagens'" :icon="'up-arrow'"/>
                        <SidebarLink :link="'/news'" :text="'Notícias'" :icon="'news'"/>
                        <SidebarLink :link="''" :text="'Nossos Cursos'" :icon="'book-search'"/>
                        <SidebarLink :link="'/researchers'" :text="'Pesquisadores'" :icon="'research'"/>
                        <SidebarLink :link="'/edicts'" :text="'Editais'" :icon="'annotate'"/>
                        <SidebarLink :link="'/docs'" :text="'Documentos'" :icon="'doc'"/>
                        <SidebarLink :link="'/capacitation'" :text="'Capacitação'" :icon="'book'"/>
                        <SidebarLink :link="'/contact'" :text="'Contato'" :icon="'phone'"/>
                    </li>
                </ul>
            </div>
        </section>
    </nav>
</template>

<script>
import SidebarLink from '@/components/links/SidebarLink.vue';
export default {
    name: 'SideBar',
    components:{
        SidebarLink
    },
    props: {
        link: String,
        text: String
    }
}
</script>
<style lang="">
    
</style>