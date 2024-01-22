<template lang="">
    <section id="researchers" class="flex flex-col px-16 py-36 gap-16 bg-lightgray">
        <div class="flex flex-col self-center text-center max-lg:w-auto w-180 gap-5">
            <h1 class="text-4xl font-semibold">Conheça nossos Pesquisadores</h1>
            <div class="flex items-center gap-5">
                <input type="text" placeholder="Pesquisar..." class="w-full rounded-lg"/>
                <img alt="Laboratório de sistemas automotivos IFMG - Campus Formiga" class=" bg-maingreen px-4 rounded-lg" :src="require('@/assets/icons/hand-glass.svg')" />
            </div>
        </div>
        
        <div id="indicators-carousel" class="relative w-full rounded-lg" data-carousel="static">

            <!-- Carousel wrapper -->
            <div class="relative h-96 overflow-hidden rounded-lg">

                <!-- Item 1 -->
                <div class="hidden duration-700 ease-in-out " data-carousel-item="active">
                    <div class="flex justify-center items-center gap-10 h-full">
                        <TalentCard :pic="'gabriel'" :name="'Gabriel Tomacheski'" :profession="'Estudante de Design'" :details="'Lorem ipsum dolor sit elit'"/>
                        <TalentCard :pic="'renata'" :name="'Renata Jager'" :profession="'Estudante de Design'" :details="'Lorem ipsum dolor sit elit'"/>
                        <TalentCard :pic="'joaopedro'" :name="'João Pedro'" :profession="'Estudante de TI'" :details="'Lorem ipsum dolor sit elit'"/>
                    </div>
                </div>
                
                <!-- Item 2 -->
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <div class="flex justify-center items-center gap-10 h-full">
                        <TalentCard :pic="'martina'" :name="'Martina Lorena'" :profession="'Estudante de Publicidade'" :details="'Lorem ipsum dolor sit elit'"/>
                        <TalentCard :pic="'marcos'" :name="'Marcos Lutre'" :profession="'Estudante de Publicidade'" :details="'Lorem ipsum dolor sit elit'"/>
                    </div>
                </div>
            </div>
            
            <!-- Slider indicators -->
            <div class="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
                <button type="button" class="w-3 h-3 rounded-full " aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" class="w-3 h-3 rounded-full bg-maingreen" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
            </div>

            <!-- Slider controls -->
            <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-maingreen dark:bg-gray-800/30 group-hover:bg-govblue dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-maingreen dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                    </svg>
                </span>
            </button>
            
            <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-maingreen dark:bg-gray-800/30 group-hover:bg-govblue dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-maingreen dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                </span>
            </button>
        </div>
        <p class="mx-auto text-maingray">Nosso time de pesquisadores, mestre e doutores são especializados nas mais distintas áreas, conheça um pouco mais:</p>
        <a href="#" class="px-10 py-2 text-maingreen mx-auto rounded-lg font-bold border-2 border-maingreen hover:bg-maingreen hover:text-white transition duration-300">Ver Mais</a>
    </section>
</template>
<script>
import TalentCard from '@/components/cards/TalentCard.vue';

export default {
    name: 'TalentBank',
    components:{
        TalentCard
    },
    props: {
    }
}
</script>
<style lang="">
    
</style>