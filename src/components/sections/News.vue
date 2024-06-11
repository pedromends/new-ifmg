<template lang="">
    <section id="news" class="flex flex-col px-10 py-36 gap-16 max-lg:px-2">
        <h1 class="text-4xl font-semibold self-center underline underline-offset-2 decoration-4 decoration-maingreen">Notícias e Eventos</h1>
        <div v-if="mainnew">
            <MainNew :tip="mainnew.tip" :title="mainnew.title" :parag="mainnew.paragraph" :img="mainnew.image.code"/>
        </div>
        <div class="flex gap-5 items-center justify-between pl-10">
            <div class="flex flex-col w-3/4 gap-5">
                <p class="font-bold text-3xl underline underline-offset-2 decoration-4 decoration-maingreen self-start ml-6">Últimas Notícias</p>
                <div class="flex gap-3 items-end">
                    <NewCard  v-for="(newNew, i) in news" :key="i"
                        :tip="'Novidade'" :title="newNew.title" :date="newNew.date" :read="'3 min de Leitura'" :img="newNew.img1.code" :newId="newNew.id"/>
                </div>
            </div>
            <div class="flex flex-col gap-4">
                <EventCard v-for="(event, i) in events" :key="i" :month="event.month" :day="event.day" :title="event.title" :hour="event.hour" :local="event.local"/>
            </div>
        </div>
        <!-- <GenericLink :classEx="'px-5 py-2 bg-maingreen text-white mx-auto rounded-lg font-bold hover:bg-white hover:text-maingreen transition duration-300 border-2 border-maingreen'"
            :text="'Ver Notícias e Eventos'" :func="goTo">
        </GenericLink> -->
    </section>
</template>

<script>
//import router from '@/router/index.js'
import { listMainNews } from '@/services/MainNewService';
import { listNewsCard } from '@/services/NewsCardService';
import { listEvents }  from '@/services/EventService';
import { listThreeNews }  from '@/services/NewService';
import NewCard from '@/components/cards/NewCard.vue';
import EventCard from '@/components/cards/EventCard.vue';
import MainNew from '../cards/MainNew.vue';
//import GenericLink from '@/components/links/GenericLink';


export default {
    name: 'NewsSection',
    components:{
        NewCard,
        EventCard,
        MainNew,
        //GenericLink
    },
    data() {
        return {
            mainnew: undefined,
            smallnews: undefined,
            events: undefined,
            news: undefined,
            // goTo: () => {
            //     router.push('/news').then(() => {
            //         window.location.reload()
            //         var element = document.getElementById("navbar");
            //         element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
            //     });
            // }
        }
    },
    created(){
        listMainNews().then((response)=> {
            this.mainnew = response.data
        }).catch((error) => {
            console.log(error)
        })

        listThreeNews(this.newNew).then((response) => {
            this.news = response.data
        })
    },  
    mounted(){
        listNewsCard().then((response) => {
            this.smallnews = response.data
        }).catch((error) => {
            console.log(error)
        })

        listEvents().then((response) => {
            this.events = response.data
        }).catch((error) => {
            console.log(error)
        })
    },
}
</script>
<style lang="">
    
</style>