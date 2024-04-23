<template lang="">
    <section id="capacitation" class="flex flex-col px-16 py-36 gap-16 bg-maingreen">
        <div class="flex flex-col max-lg:w-auto self-center text-center text-white w-160 gap-5">
            <span class="text-xs font-semibold">CAPACITAÇÃO CREDENCIADA PELA EMBRAPII</span>
            <h1 class="text-4xl max-lg:text-xl font-semibold">A inovação está ao seu alcance!</h1>
            <p class="text-lightgray">Contamos com um modelo ágil para projetos de fomento à inovação sem burocracia e com custos reduzidos que podem chegar a até 50% do valor do projeto.</p>
        </div>
        <div class="flex max-lg:flex-col justify-center gap-7 text-white">
            <CapacitationCard  v-for="(capacitationInfo, i) in capacitationInfos" :key="i" :title="capacitationInfo.title" :subtitle="capacitationInfo.subtitle" :icon="'monitor'"/>
        </div>
        <router-link class="px-5 py-2 bg-white text-center border-2 border-white text-maingreen w-36 mx-auto rounded-lg font-bold hover:bg-govblue hover:text-white transition duration-300"
            to="/how-it-works">
            Ver Mais
        </router-link>
    </section>
</template>

<script>
import CapacitationCard from '../cards/CapacitationCard.vue';
import { listCapacitation } from '@/services/CapacitationService';

export default {
    name: 'CapacitationSection',
    components:{
        CapacitationCard
    },
    data(){
        return {
            capacitationInfos: undefined
        }
    },
    props: {
    },
    mounted(){
        listCapacitation().then((response) => {
            this.capacitationInfos = response.data
        }).catch((error) => {
            console.log(error)
        })
        // .finally(() => {
        //     this.$router.push('/');
        // });
    }
}
</script>
<style lang="">
    
</style>