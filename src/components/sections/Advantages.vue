<template lang="">
    <section id="advantages" class="flex flex-col px-16 py-10 gap-32 max-lg:px-5 max-md:py-10">
        <div class="flex max-lg:flex-col justify-center items-center max-lg:gap-5">
            <h1 class="text-3xl w-128 max-lg:px-6 max-lg:w-auto max-lg:text-2xl font-semibold">
                Somos especialistas em projetos relacionados a Mobilidade e Sistemas Inteligentes
            </h1>
            <div class="w-1 border-2 border-maingreen bg-maingreen h-32 max-lg:hidden"/>
            <p class="text-base w-112 max-lg:px-6 max-lg:w-auto ml-16 max-lg:ml-auto text-maingray">
                Venha inovar conosco, temos a solução que seu empreendimento precisa
            </p>
        </div>
        <div class="flex max-lg:flex-col gap-16 justify-center items-center">
            <img v-bind:src="require('@/assets/images/people-studying.svg')" class="w-132 max-lg:px-6 max-lg:w-auto ml-16 max-lg:ml-auto" alt="People Studying"/>
            <div class="flex flex-col gap-5">
                <AdvantagesCard  v-for="(advantage, i) in advantages" :key="i" :dif="advantage.differential" :text="advantage.description" :icon="advantage.img.code"/>
            </div>
        </div>
    </section>
</template>

<script>
import AdvantagesCard from '../cards/AdvantagesCard.vue';
import { listAdvantages } from '@/services/AdvantagesService';

export default {
    name: 'AdvantagesSection',
    components:{
        AdvantagesCard
    },
    data(){
        return {
            advantages: undefined
        }
    },
    props: {
        msg: String
    },
    mounted(){
        listAdvantages().then((response) => {
            this.advantages = response.data
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