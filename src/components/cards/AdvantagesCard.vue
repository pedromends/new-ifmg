<template lang="">
    <section class="flex  hover:bg-maingreen border-2 border-gray-100 rounded-xl z-10 px-6 transition duration-200">
        <button @click="goTo()" to="/mobility-smart-systems" class="text-black text-start flex max-md:flex-col items-center py-6 gap-10 transition duration-300 max-lg:w-auto max-lg:px-0">
            <img v-bind:src="icon" alt="" class="w-16 max-lg:self-center"/>
            <div class="flex gap-1 edit items-center relative transition duration-500">
                <div class="flex flex-col">
                    <h1 class="font-bold go-white tracking-wide px-4 w-72">{{ dif }}</h1>
                    <p class="text-xs w-80 px-4 go-white">{{ text }}</p>
                </div>
            </div>
        </button>
        <button @click="editAdvantages()" class="hover:bg-white" v-if="isAdmin">
            <img :src="require('@/assets/icons/pencil-edit-maingreen.svg')" alt="#" class="h-10 fill-white"/>
        </button>
    </section>
</template>

<script>
// Mobilidade e Sistemas Inteligentes
// O Polo de Inovação IFMG atua como Unidade EMBRAPII no desenvolvimento de projetos relacionados à Otimização de Processos e Gestão de Ativos Móveis e Sistemas Automotivos e Transportes.
import router from '@/router/index.js'

export default {
    name: 'AdvantagesCard',
    components:{
    },
    data(){
        return {
            isAdmin: this.$store.getters.isLoggedIn
        }
    },
    props: {
        dif: String,
        text: String,
        icon: String
    },
    methods:{
        editAdvantages(){
            router.push('/edit/advantages-card').then(() => {
                var element = document.getElementById("navbar");
                element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
            }); 
        },
        goTo(){
            router.push('/mobility-smart-systems').then(() => {
                var element = document.getElementById("navbar");
                element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
            });
        }
    }
}
</script>

<style scoped>

    section:hover > .go-white{
        color:white;
    }
    
    .edit:hover > .target{
        display: inline;
    }
</style>