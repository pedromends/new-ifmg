<template lang="">
    <section class="relative flex items-center">
        <div class="absolute flex w-full justify-between h-full">
            <button title="left" class="bg-maingreen/70 hover:bg-maingreen transition duration-200 z-30" @click="scrollLeft()">
                <svg class="w-10 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                </svg>
            </button>
            <button title="right" class="bg-maingreen/70 hover:bg-maingreen transition duration-200 z-30" @click="scrollRight()" >
                <svg class="w-10 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                </svg>
            </button>
        </div>
        <div id="carousel" class="flex gap-5 overflow-scroll overflow-x-hidden overflow-y-hidden px-12 py-2 pt-10">
            <div v-if="talents" class="flex gap-4">    
                <TalentCard  v-for="(talent, i) in talents" :key="i" :image="talent.img.code" :name="talent.name" :profession="talent.profession" :details="talent.details" :id="i"/>
                <TalentCard  v-for="(talent, i) in talents" :key="i" :image="talent.img.code" :name="talent.name" :profession="talent.profession" :details="talent.details" :id="i"/>
            </div>
        </div>
    </section>
</template>

<script>
import TalentCard from '@/components/cards/TalentCard.vue'
import { getTalents } from '@/services/TalentService';

export default {
    name: 'CarouselOne',
    components:{
        TalentCard
    },
    data() {
        return {
            talents: undefined,
            scrollPerClick: 450,
            scrollAmount: 0
        }
    },
    mounted(){
        getTalents().then((response) => {
            this.talents = response.data
        }).catch((error) => {
            console.log(error)
        })
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