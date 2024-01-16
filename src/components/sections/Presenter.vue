<template lang="">
    <!-- TODO: Atualizar papel de parede via ADM -->
    <section class="bg-campus bg-cover bg-no-repeat bg-center h-[65rem]">
        <div class=" flex flex-col justify-center items-center p-10 gap-96 rounded-b-3xl relative">
            <div class="flex flex-col justify-center gap-10 py-24">
                <h1 class="text-5xl text-center text-white w-196 mx-auto font-semibold max-lg:w-auto max-lg:text-2xl">Bem-vindo ao Polo de Inovação IFMG do Campus Formiga</h1>
                <p class="text-center text-white text-xl w-192 max-lg:w-auto max-lg:text-sm">O Polo de Inovação IFMG atua na aproximação das empresas com o setor acadêmico,
                    desenvolvendo projetos relacionados à diversas áreas do mercado.</p>
                <div class="flex justify-center gap-10 max-lg:gap-3 text-white"> 
                    <button class="bg-white text-maingreen px-6 py-3 rounded-md max-lg:px-3 font-semibold">Começar Projeto</button>
                    <div class="flex justify-center items-center gap-1">
                        <img alt="Play" :src="require('@/assets/icons/play.svg')"/>
                        <button>Vídeo Institucional</button>
                    </div>
                </div>
            </div>

            <div class="flex max-lg:flex-col gap-10 px-16 py-20 bg-gray-200 border-16 border-white rounded-3xl absolute top-[57rem] max-lg:top-[32rem]">
                <PresenterCard :num="40" :text="'Empresas Parceiras'"/>
                <PresenterCard :num="540" :text="'Projetos Completos'" />
                <PresenterCard :num="300" :text="'Alunos'" />
                <PresenterCard :num="25" :text="'Alunos'" />
            </div>
        </div>
    </section>
   
</template>
<script>
import PresenterCard from '@/components/cards/PresenterCard.vue';

export default {
    name: 'MainPresenter',
    components:{
        PresenterCard
    },
    props: {
    }
}
</script>
<style lang="">
    
</style>