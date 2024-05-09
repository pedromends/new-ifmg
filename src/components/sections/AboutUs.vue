<template lang="">
    <section id="aboutus" class="px-12 py-24 mt-16 max-lg:px-4 ">
        <div class="flex justify-center px-12 max-lg:px-8">
            <div class="flex max-lg:flex-col gap-24">
                <div v-if="maintext" class="flex flex-col w-140 max-lg:w-auto gap-8 max-lg:mt-10">
                    <div class="flex items-center w-full justify-between edit transition duration-300 h-10">
                        <span class="text-maingreen font-bold text-sm underline decoration-red-600 decoration-2">QUEM SOMOS</span>
                        <button @click="editAboutUs()">
                            <img :src="require('@/assets/icons/pencil-edit-maingreen.svg')" alt="#" class="h-10 hidden"/>
                        </button>
                    </div>
                    <div class="flex flex-col gap-3">
                        <h1 class="font-bold text-4xl w-96 max-lg:w-auto">{{ maintext.title }}</h1>
                        <p class="w-full text-maingray">{{ maintext.parag }}</p>
                    </div>
                    <!-- Ir para página explicando tudo sobre o polo -->
                    <router-link class="bg-maingreen text-white w-40 py-3 rounded-lg border-2 border-white font-semibold hover:border-maingreen hover:bg-white hover:text-maingreen transition duration-300 text-center"
                        to="/institutional">
                        Saiba Mais
                    </router-link>
                </div>
                <div class="flex items-center">
                    <img v-if="maintext" :src="maintext.image.code" class="w-160" alt="Class with Virtual Glasses"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import router from '@/router/index.js'
import { getWhoWeAre } from '@/services/WhoWeAreService'

export default {
    name: 'AboutUs',
    props: {
        image: String,
        num: Number,
        text: String
    },
    data(){
        return {
            maintext: undefined
        }
    },
    methods:{
        editAboutUs(){
            router.push('/edit/about-us').then(() => {
                var element = document.getElementById("navbar");
                element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
            }); 
        }
    },
    created(){
        getWhoWeAre().then((response) => {
            this.maintext = response.data
            console.log(response.data)
        }).catch((error) => {
            console.log(error)
        })
    },

}
</script>

<style scoped>
    .edit:hover > button > img{
        display: inline;
    }
</style>