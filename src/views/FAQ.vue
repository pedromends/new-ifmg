<!--TIRAR FOTO DO SETUP-->
<template lang="">
    <main class="flex flex-col gap-10 justify-center items-center p-16 max-lg:p-2 max-lg:mt-24">
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
            />
        </div>
    </main>
</template>

<script>
    //import router from '@/router/index.js'
    import {  listFAQs } from '@/services/FAQService.js';
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
                console.log(this.FAQs)
            })
        },
        data(){
            return {
                FAQs: null,
                isAdmin: this.$store.getters.isLoggedIn,
            }
        },
        methods: {
            createNewQuestion(){
                console.log('chamou')
            }
        },
    }
    </script>
<style lang="">
    
</style>