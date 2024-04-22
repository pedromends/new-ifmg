<template lang="">
    <section class="relative flex items-center">
        <div class="absolute flex w-full justify-between h-full">
            <button class="bg-maingreen/70 hover:bg-maingreen transition duration-200 z-30" @click="scrollLeft()">
                <svg class="w-10 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                </svg>
            </button>
            <button class="bg-maingreen/70 hover:bg-maingreen transition duration-200 z-30" @click="scrollRight()" >
                <svg class="w-10 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                </svg>
            </button>
        </div>
        <div id="carousel" class="flex gap-5 overflow-scroll overflow-x-hidden overflow-y-hidden px-12 py-2">
            <TalentCard :pic="'gabriel'" :name="'Gabriel Tomacheski'" :profession="'Estudante de Design'" :details="'Lorem ipsum dolor sit elit'"/>
            <TalentCard :pic="'renata'" :name="'Renata Jager'" :profession="'Estudante de Design'" :details="'Lorem ipsum dolor sit elit'"/>
            <TalentCard :pic="'joaopedro'" :name="'João Pedro'" :profession="'Estudante de TI'" :details="'Lorem ipsum dolor sit elit'"/>
            <TalentCard :pic="'martina'" :name="'Martina Lorena'" :profession="'Estudante de Publicidade'" :details="'Lorem ipsum dolor sit elit'"/>
            <TalentCard :pic="'marcos'" :name="'Marcos Lutre'" :profession="'Estudante de Publicidade'" :details="'Lorem ipsum dolor sit elit'"/>
            <TalentCard :pic="'gabriel'" :name="'Gabriel Tomacheski'" :profession="'Estudante de Design'" :details="'Lorem ipsum dolor sit elit'"/>
            <TalentCard :pic="'renata'" :name="'Renata Jager'" :profession="'Estudante de Design'" :details="'Lorem ipsum dolor sit elit'"/>
            <TalentCard :pic="'joaopedro'" :name="'João Pedro'" :profession="'Estudante de TI'" :details="'Lorem ipsum dolor sit elit'"/>
            <TalentCard :pic="'martina'" :name="'Martina Lorena'" :profession="'Estudante de Publicidade'" :details="'Lorem ipsum dolor sit elit'"/>
            <TalentCard :pic="'marcos'" :name="'Marcos Lutre'" :profession="'Estudante de Publicidade'" :details="'Lorem ipsum dolor sit elit'"/>
        </div>
    </section>
</template>

<script>
import TalentCard from '@/components/cards/TalentCard.vue'
import { listTalent } from '@/services/TalentService';

export default {
    name: 'CarouselOne',
    components:{
        TalentCard
    },
    data() {
        return {
            scrollPerClick: 450,
            scrollAmount: 0
        }
    },
    mounted(){
        listTalent().then((response) => {
            console.log(response.data)
        }).catch((error) => {
            console.log(error)
        })
        // .finally(() => {
        //     this.$router.push('/');
        // });
    },
    methods: {  
        scrollLeft(){
            let sliders = document.getElementById('carousel')
            sliders.scrollTo({
                top: 0,
                left: (this.scrollAmount -= this.scrollPerClick),
                behavior: 'smooth'
            })

            if(this.scrollAmount < 0) {
                this.scrollAmount = 0
            }
        },
        scrollRight(){
            let sliders = document.getElementById('carousel')
            if(this.scrollAmount <= sliders.scrollWidth - sliders.clientWidth) {
                sliders.scrollTo({
                    top:0,
                    left: (this.scrollAmount += this.scrollPerClick),
                    behavior: 'smooth'
                })
            }
        }
    }
}
</script>

<style lang="">
    
</style>