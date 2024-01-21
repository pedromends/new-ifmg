<template lang="">
    <section id="capacitation" class="flex flex-col px-16 py-36 gap-16 bg-maingreen">
        <div class="flex flex-col max-lg:w-auto self-center text-center text-white w-160 gap-5">
            <span class="text-xs font-semibold">CAPACITAÇÃO CREDENCIADA PELA EMBRAPII</span>
            <h1 class="text-4xl max-lg:text-xl font-semibold">A inovação está ao seu alcance!</h1>
            <p class="text-lightgray">Contamos com um modelo ágil para projetos de fomento à inovação sem burocracia e com custos reduzidos que podem chegar a até 50% do valor do projeto.</p>
        </div>
        <div class="flex max-lg:flex-col justify-center gap-7 text-white">
            <CapacitationCard :title="'Sistemas de Monitoramento'" :subtitle="'Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.'" :icon="'monitor'" />
            <CapacitationCard :title="'Agilidade e Inovação'" :subtitle="'Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.'" :icon="'rocket'" />
            <CapacitationCard :title="'Medição de Grandezas'" :subtitle="'Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.'" :icon="'plug'" />
            <CapacitationCard :title="'Desenvolvimento de Automação'" :subtitle="'Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.'" :icon="'house'" />
        </div>
        <router-link to="/how-it-works" class="px-5 py-2 bg-white text-center border-2 border-white text-maingreen w-36 mx-auto rounded-lg font-bold hover:bg-govblue hover:text-white transition duration-300">Ver Mais</router-link>
    </section>
</template>
<script>
import CapacitationCard from '../cards/CapacitationCard.vue';

export default {
    name: 'CapacitationSection',
    components:{
        CapacitationCard
    },
    props: {
    }
}
</script>
<style lang="">
    
</style>