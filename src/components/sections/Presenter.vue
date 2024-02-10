<template lang="">
    <!-- TODO: Atualizar papel de parede via ADM -->
    <section id="home" class="bg-campus bg-cover bg-no-repeat bg-center">
        <div class=" flex flex-col justify-center items-center p-10 gap-96 rounded-b-3xl relative">
            <div class="flex flex-col justify-center gap-10 py-10 pb-28">
                <h1 class="text-5xl text-center text-white w-216 mx-auto font-semibold max-lg:w-auto max-lg:text-3xl">Bem-vindo ao Polo de Inovação IFMG</h1>
                <p class="text-center text-white text-xl w-192 max-lg:w-auto max-lg:text-sm">
                    O Polo de Inovação IFMG atua na aproximação das empresas com o setor acadêmico,
                    desenvolvendo projetos relacionados à diversas áreas do mercado.
                </p>
                <div class="flex justify-center gap-5 max-lg:gap-3 text-white max-lg:flex-col"> 
                    <button class="bg-white text-maingreen px-6 py-3 rounded-3xl max-lg:px-3 font-semibold hover:bg-maingreen hover:text-white border hover:border-white transition duration-200">Começar Projeto</button>
                    <div class="flex justify-center items-center gap-1 hover:bg-maingray hover:text-white border border-white px-2 rounded-3xl transition duration-200 max-lg:py-2">
                        <img alt="Play" :src="require('@/assets/icons/play.svg')"/>
                        <a class="pr-1" href="https://www.youtube.com/watch?v=tCPe3D92C_E&ab_channel=IFMGPlay" target="_blank">Vídeo Institucional</a>
                    </div>
                </div>
            </div>
            <div class="flex max-lg:flex-col gap-4 p-10 bg-gray-200 border-16 max-lg:border-0 border-white rounded-3xl absolute top-84 max-lg:top-[33rem] max-lg:px-10">
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