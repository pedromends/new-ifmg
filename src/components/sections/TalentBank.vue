<template lang="">
    <section id="researchers" class="bg-lightgray flex flex-col px-16 py-36 gap-16 max-lg:px-6">
        <div class="flex flex-col self-center text-center max-lg:w-auto w-180 gap-5">
            <h1 class="text-4xl font-semibold">Conheça nossos Pesquisadores</h1>
            <div class="flex items-center gap-5">
                <input type="text" placeholder="Pesquisar..." class="w-full rounded-lg"/>
                <img alt="Laboratório de sistemas automotivos IFMG - Campus Formiga" class=" bg-maingreen px-4 rounded-lg" :src="require('@/assets/icons/hand-glass.svg')" />
            </div>
        </div>
        <TalentCarousel />
        <p class="mx-auto text-maingray">Nosso time de pesquisadores, mestre e doutores são especializados nas mais distintas áreas, conheça um pouco mais:</p>
        <a href="#" class="px-10 py-2 text-maingreen mx-auto rounded-lg font-bold border-2 border-maingreen hover:bg-maingreen hover:text-white transition duration-300">Ver Mais</a>
    </section>
</template>
<script>
import TalentCarousel from '@/components/carousel/TalentCarousel.vue';

export default {
    name: 'TalentBank',
    components:{
        TalentCarousel
    },
    props: {
    }
}
</script>
<style lang="">
    
</style>