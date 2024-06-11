<template lang="">
    <main class="flex justify-center items-center px-10">
        <div class="flex flex-col gap-10 px-20 w-full">
            <div class="flex items-center gap-2">
                <img class="w-6" :src="require('@/assets/icons/house2.svg')" alt="">
                <router-link to="/news" class="text-maingreen hover:underline">Home</router-link>
                <p class="flex items-center">
                    <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 9 4-4-4-4" />
                    </svg>
                    <span>Documentos</span>
                </p>
            </div>
            <h1 class="text-4xl text-black font-semibold underline underline-offset-2 decoration-8 decoration-maingreen">Documentos</h1>
            <hr class="bg-red-600 h-1"/>
            <div class="flex flex-col gap-5 text-maingray">
                <div>
                </div>
                <div>
                </div>
                <!-- Título do Documento -->
                <!-- Objetivo - Ano -->
                <!-- Arquivo Modelo -->
            </div>
        </div>
        <BackToTop />
    </main>
</template>

<script>
import BackToTop  from '@/components/buttons/BackToTop.vue';

export default {
    name: 'DocumentsPage',
    components:{
        BackToTop
    },
    props: {
    }
}
</script>
<style lang="">
    
</style>