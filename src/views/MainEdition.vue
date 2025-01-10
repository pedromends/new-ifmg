<template lang="">
    <section class="px-10 max-sm:mt-20 max-sm:px-0" id="main-edition">


        <div class="flex items-center gap-2 px-5">
            <img class="w-6" :src="require('@/assets/icons/house2.svg')" alt="">
            <router-link to="/blog" class="text-maingreen hover:underline">Home</router-link>
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
                <h1 class="text-3xl max-sm:text-xl font-semibold underline decoration-maingreen decoration-4">Edição de
                    Componentes</h1>
            </div>
            <div class="flex max-sm:flex-col gap-5 rounded-2xl">
                <div class="flex flex-col">
                    <ul class="flex flex-col gap-3 justify-between border-l-2 border-red-600 p-4">
                        <a href="/editar/card-apresentacao" :class="linkCss">Sessão de Apresentação</a>
                        <a href="/editar/sobre-nos" :class="linkCss">Sobre Nós</a>
                        <a href="/editar/card-vantagens" :class="linkCss">Cards de Vantagens</a>
                        <a href="/editar/card-eventos" :class="linkCss">Cards de Eventos</a>
                        <a href="/editar/modal-projetos" :class="linkCss">Modal de Projetos</a>
                        <a href="/editar/card-capacitacao" :class="linkCss">Cards de Capacitação</a>
                        <a href="/editar/card-talentos" :class="linkCss">Cards de Talentos</a>
                        <a href="/editar/pesquisador/0" :class="linkCss">Editar Pesquisadores</a>
                        <a href="/editar/empresa" :class="linkCss">Empresa Parceira</a>
                    </ul>
                </div>
                <div class="px-10 flex justify-center w-full bg-lightgray rounded-lg max-sm:inline-block">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import router from '@/router/index.js'

    export default {
        name: 'MainEdition',
        beforeCreate() {
            if (!this.$store.getters.isAdmin) {
                router.push('/').then(() => {
                    window.location.reload();
                });
            }
        },
        data() {
            return {
                linkCss: 'transition duration-200 hover:bg-maingreen px-3 py-1 rounded-lg text-maingreen hover:text-white font-medium',
                isAdmin: this.$store.getters.isAdmin,

            }
        },
        methods: {

        }
    }
</script>

<style>

</style>