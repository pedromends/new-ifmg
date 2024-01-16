<template lang="">
    <section class="flex flex-col px-16 py-36 gap-16 bg-lightgray">
        <div class="flex flex-col self-center text-center max-lg:w-auto w-180 gap-5">
            <h1 class="text-4xl font-semibold">Conheça nossos Pesquisadores</h1>
            <p>Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.</p>
        </div>
        
        <div class="flex max-lg:flex-col overflow-auto justify-center gap-5 text-black relative">
            
            <!-- Inserir opção de busca -->
            <!-- Filtrar: <input>, nome, área, curso, campus -->
            <TalentCard :pic="'gabriel'" :name="'Gabriel Tomacheski'" :profession="'Estudante de Design'" :details="'Lorem ipsum dolor sit elit'"/>
            <TalentCard :pic="'renata'" :name="'Renata Jager'" :profession="'Estudante de Design'" :details="'Lorem ipsum dolor sit elit'"/>
            <TalentCard :pic="'joaopedro'" :name="'João Pedro'" :profession="'Estudante de TI'" :details="'Lorem ipsum dolor sit elit'"/>
            <TalentCard :pic="'martina'" :name="'Martina Lorena'" :profession="'Estudante de Publicidade'" :details="'Lorem ipsum dolor sit elit'"/>
            <TalentCard :pic="'marcos'" :name="'Marcos Lutre'" :profession="'Estudante de Publicidade'" :details="'Lorem ipsum dolor sit elit'"/>

            <!-- Criar uma setas decente -->
            <div class="flex justify-between items-center absolute w-full top-2/4">
                <p class="rounded-full px-4 py-2 bg-white border-2 border-black"></p>
                <p class="rounded-full px-4 py-2 bg-white border-2 border-black"></p>
            </div>
        </div>
        <p class="mx-auto text-maingray">Nosso time de pesquisadores, mestre e doutores são especializados nas mais distintas áreas, conheça um pouco mais:</p>
        <button class="px-5 py-2 bg-white text-maingreen w-36 mx-auto rounded-lg font-bold border-2 border-maingreen hover:bg-maingreen hover:text-white transition duration-75">Ver Mais</button>
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