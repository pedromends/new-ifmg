<!--TIRAR FOTO DO SETUP-->
<template lang="">
    <main class="flex justify-start items-center px-10 ">
        <div class="flex flex-col gap-10 px-20 w-full">
            <div class="flex items-center gap-2">
                <img class="w-6" :src="require('@/assets/icons/house2.svg')" alt="">
                <router-link to="/news" class="text-maingreen hover:underline">Home</router-link>
                <p class="flex items-center">
                    <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 9 4-4-4-4" />
                    </svg>
                    <span>Pesquisas Frequentes</span>
                </p>
            </div>
            <div class="flex justify-between w-full">
                <h1 class="text-4xl text-black self-start font-semibold underline underline-offset-2 decoration-8 decoration-maingreen">FAQ</h1>
                <button v-if="isAdmin" class="text-white bg-maingreen hover:bg-govblue focus:ring-4 focus:outline-none focus:ring-red-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition duration-200"
                        type="submit" @click.prevent="createNewQuestion()">Criar Questão</button>
            </div>
            <div id="accordion-collapse" data-accordion="collapse" class="flex flex-col gap-10">
                <FAQCard v-for="(FAQ, i) in FAQs" :key="i"
                    :accordionId="FAQ.idHeading"
                    :bodyId="FAQ.idBody"
                    :answer="FAQ.answer"
                    :question="FAQ.question"
                    :id="FAQ.id"
                />
            </div>
        </div>
    </main>
</template>

<script>
    import router from '@/router/index.js'
    import { listFAQs } from '@/services/FAQService.js';
    //import ResearcherCard from '@/components/cards/ResearcherCard.vue'; 
    //import BackToTop  from '@/components/buttons/BackToTop.vue';
    import FAQCard from '@/components/cards/FAQCard.vue'

    export default {
        name: 'ResearchersPage',
        components:{
            FAQCard
        },
        created(){
            listFAQs().then((response) => {
                this.FAQs = response.data
            })
        },
        data(){
            return {
                FAQs: null,
                isAdmin: this.$store.getters.isAdmin,
            }
        },
        methods: {
            createNewQuestion(){
                router.push('/create-faq').then(() => {
                    var element = document.getElementById("navbar");
                    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                });
            }
        },
    }
</script>

<style lang="">
    
</style>