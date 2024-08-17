<template lang="">
    <section class="bg-gradient-to-r from-maingreen to-transparent p-0.5 rounded-xl sectionc">
        <div class="flex hover:bg-maingreen bg-white rounded-xl z-10 px-6 transition duration-200">
            <button @click="goTo()" to="/mobility-smart-systems" class="text-black text-start flex max-md:flex-col items-center py-6 gap-10 transition duration-300 max-lg:w-auto max-lg:px-0">
                <img v-bind:src="icon" alt="" class="w-16 max-lg:self-center border border-maingreen rounded-lg"/>
                <div class="flex gap-1 edit items-center relative transition duration-500">
                    <div class="flex flex-col gap-2">
                        <h1 class="font-semibold tracking-wide px-4 w-72 text-maingreen text-card transition duration-200">{{ dif }}</h1>
                        <p class="text-xs w-80 px-4 text-card transition duration-200">{{ text }}</p>
                    </div>
                </div>
            </button>
            <div class="flex items-center  ">
                <button @click="editAdvantages()" class="hover:bg-white rounded-lg transition duration-200 p-1" v-if="isAdmin">
                    <img :src="require('@/assets/icons/pencil-edit-maingreen.svg')" alt="#" class="h-10 fill-white"/>
                </button>
            </div>
        </div>
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
            isAdmin: this.$store.getters.isAdmin
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

    .sectionc:hover >>> .text-card {
        color: white 
    }
</style>