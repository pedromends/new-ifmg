<template lang="">
    <section id="news" class="flex flex-col px-10 py-36 gap-16 max-lg:px-2">
        <h1 class="text-4xl font-semibold self-center">Notícias e Eventos</h1>
        
        <MainNew :tip="'Posse da Diretoria'" :title="'Em cerimônia simbólica, diretora do Polo IFMG toma posse'"
        :parag="'Na noite desta quinta-feira, dia 30 foi realizada uma cerimônia simbólica no IFMG Campus Formiga para celebrar a posse da diretora-geral do Polo de Inovação IFMG,' +
        'Paloma Maira de Oliveira Lima, e do diretor-geral do campus, Patrick Santos de Oliveira.'"
        :img="'paloma'"/>
        
        <div class="grid grid-cols-4 gap-2 max-lg:grid-cols-1">
            <NewCard v-for="(smallnew, i) in smallnews" :key="i" :tip="smallnew.tip" :title="smallnew.title" :date="smallnew.date" :read="smallnew.read" :img="'meeting'" />
            <div>
                <EventCard v-for="(event, i) in events" :key="i" :month="event.month" :day="event.day" :title="event.title" :hour="event.hour" :local="event.local" :img="''"/>
            </div>
        </div>
        <router-link class="px-5 py-2 bg-maingreen text-white mx-auto rounded-lg font-bold hover:bg-white hover:text-maingreen transition duration-300 border-2 border-maingreen"
            to="/news">
            Ver Notícias e Eventos
        </router-link>
    </section>
</template>

<script>
import MainNew from '@/components/cards/MainNew.vue';
import NewCard from '@/components/cards/NewCard.vue';
import EventCard from '@/components/cards/EventCard.vue';
import { listMainNews } from '@/services/MainNewService';
import { listNewsCard } from '@/services/NewsCardService';
import { listEvents }  from '@/services/EventService';


export default {
    name: 'NewsSection',
    components:{
        MainNew,
        NewCard,
        EventCard
    },
    data() {
        return {
            mainnew: undefined,
            smallnews: undefined,
            events: undefined
        }
    },
    props: {
    },
    mounted(){
        listMainNews().then((response) => {
            this.mainnew = response.data[0]
            console.log(response.data)
        }).catch((error) => {
            console.log(error)
        })

        listNewsCard().then((response) => {
            this.smallnews = response.data
            console.log(response.data)
        }).catch((error) => {
            console.log(error)
        })

        listEvents().then((response) => {
            this.events = response.data
            console.log(response.data)
        }).catch((error) => {
            console.log(error)
        })
    },
}
</script>
<style lang="">
    
</style>