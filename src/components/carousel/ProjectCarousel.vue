<template lang="">
    <section class="flex items-center justify-center px-96">
        <div class="flex h-full">
            <button title="left" class="bg-maingreen/70 hover:bg-maingreen transition duration-200" @click="scrollLeft()">
                <svg class="w-10 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                </svg>
            </button>
            <div class="flex justify-between gap-5 py-2 pt-10">
                <div id="carousel" v-if="companies" class="h-48 flex gap-4 overflow-y-scroll ">
                    <CompanyModal v-for="(company, i) in companies" :key="i"
                    :img="company.image"
                    :headName="company.headerName"
                    :headBody="company.headerBody"
                    :modalname="company.modalName"
                    :company="company.companyName"
                    :projName="company.projName"
                    :coorName="company.coorName"
                    :situ="company.situation"    
                    :accID="company.accordionId"
                    :value="company.value"
                    :resume="company.resume"
                    :extraClass="'w-full'"
                    />
                </div>
            </div>
            <button title="right" class="bg-maingreen/70 hover:bg-maingreen transition duration-200" @click="scrollRight()" >
                <svg class="w-10 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                </svg>
            </button>
        </div>
    </section>
</template>

<script>
import CompanyModal from '@/components/modal/CompanyModal.vue';
import { listCompanies } from '@/services/CompanyService';

export default {
    name: 'CarouselOne',
    components:{
        CompanyModal
    },
    data() {
        return {
            companies: undefined,
            scrollPerClick: 450,
            scrollAmount: 0
        }
    },
    beforeMount(){
        listCompanies().then((response) => {
            this.companies = response.data
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