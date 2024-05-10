<template lang="">
    <section id="news" class="flex flex-col px-10 py-36 gap-16 max-lg:px-2">
        <h1 class="text-4xl font-semibold self-center">Notícias e Eventos</h1>
        <div v-if="mainnew">
            <MainNew :tip="mainnew.tip" :title="mainnew.title" :parag="mainnew.paragraph" :img="mainnew.image.code"/>
        </div>
        <div class="grid grid-cols-4 gap-2 max-lg:grid-cols-1 items-center">
            <NewCard v-for="(smallnew, i) in smallnews" :key="i" :tip="smallnew.tip" :title="smallnew.title" :date="smallnew.date" :read="smallnew.read" :img="smallnew.img.code" />
            <div class="flex flex-col gap-4">
                <EventCard v-for="(event, i) in events" :key="i" :month="event.month" :day="event.day" :title="event.title" :hour="event.hour" :local="event.local"/>
            </div>
        </div>
        <router-link class="px-5 py-2 bg-maingreen text-white mx-auto rounded-lg font-bold hover:bg-white hover:text-maingreen transition duration-300 border-2 border-maingreen"
            to="/news">
            Ver Notícias e Eventos
        </router-link>
    </section>
</template>

<script>
import { listMainNews } from '@/services/MainNewService';
import { listNewsCard } from '@/services/NewsCardService';
import { listEvents }  from '@/services/EventService';
import NewCard from '@/components/cards/NewCard.vue';
import EventCard from '@/components/cards/EventCard.vue';
import MainNew from '../cards/MainNew.vue';


export default {
    name: 'NewsSection',
    components:{
        NewCard,
        EventCard,
        MainNew
    },
    data() {
        return {
            mainnew: undefined,
            smallnews: undefined,
            events: undefined
        }
    },
    created(){
        listMainNews().then((response)=> {
            this.mainnew = response.data
        }).catch((error) => {
            console.log(error)
        })
    },  
    mounted(){
        listNewsCard().then((response) => {
            this.smallnews = response.data
        }).catch((error) => {
            console.log(error)
        })

        listEvents().then((response) => {
            console.log(response.data)
            this.events = response.data
        }).catch((error) => {
            console.log(error)
        })
    },
}
</script>
<style lang="">
    
</style>