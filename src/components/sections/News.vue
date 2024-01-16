<template lang="">
    <section class="flex flex-col px-10 py-36 gap-16 ">
        <h1 class="text-4xl font-semibold self-center">Notícias e Eventos</h1>
        
        <MainNew :tip="'Posse da Diretoria'" :title="'Em cerimônia simbólica, diretora do Polo IFMG toma posse'"
        :parag="'Na noite desta quinta-feira, dia 30 foi realizada uma cerimônia simbólica no IFMG Campus Formiga para celebrar a posse da diretora-geral do Polo de Inovação IFMG,' +
        'Paloma Maira de Oliveira Lima, e do diretor-geral do campus, Patrick Santos de Oliveira.'"
        :img="'paloma'"/>
        
        <div class="flex max-lg:flex-col justify-center gap-5">    
            <NewCard :tip="'Novidade'" :title="'Polo IFMG marca presença no Encontro Anual de Unidades Embrapii'" :date="'14 de Dezembro'" :read="'3 min'" :img="'meeting'"/>
            <NewCard :tip="'Nova Gestão'" :title="'Polo IFMG inicia processo de transição com nova diretora-geral'" :date="'14 de Dezembro'" :read="'3 min'" :img="'teachers'"/>
            <NewCard :tip="'Pesquisa Acadêmica'" :title="'PD&I promove pesquisa acadêmica e impulsiona o avanço tecnológico'" :date="'14 de Dezembro'" :read="'3 min'" :img="'lab'"/>
            <div class="flex flex-col gap-3">
                <EventCard :month="'Jan'" :day="'03'" :title="'Fórum de Desenvolvimento Humano Sustentável'" :hour="'16h30'" :local="'Auditório Auxiliar'" />
                <EventCard :month="'Jan'" :day="'05'" :title="'Posse Oficial da Diretoria'" :hour="'16h30'" :local="'Auditório Principal'" />
                <EventCard :month="'Jan'" :day="'14'" :title="'Abertura das Matrículas'" :hour="'16h30'" :local="'Atendimento ao Cliente'" />
                <EventCard :month="'Fev'" :day="'28'" :title="'Início das Aulas'" :hour="'16h30'" :local="'Campus Formiga'" />
            </div>
        </div>
        <button class="px-5 py-2 bg-maingreen text-white w-56 mx-auto rounded-lg font-bold hover:bg-white hover:text-maingreen transition duration-75 border-2 border-maingreen">Ver Notícias e Eventos</button>
    </section>
</template>

<script>
import MainNew from '@/components/cards/MainNew.vue';
import NewCard from '@/components/cards/NewCard.vue';
import EventCard from '@/components/cards/EventCard.vue';

export default {
    name: 'NewsSection',
    components:{
        MainNew,
        NewCard,
        EventCard
    },
    props: {
    }
}
</script>
<style lang="">
    
</style>