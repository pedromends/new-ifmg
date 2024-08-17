<template lang="">
    <section id="aboutus" class="px-12 py-24 mt-16 max-sm:px-4 ">
        <div class="flex justify-center px-12 max-sm:px-8 max-sm:mt-96">
            <div class="flex max-sm:flex-col gap-24">
                <div v-if="maintext" class="flex flex-col w-140 max-sm:w-auto gap-8 max-sm:mt-10">
                    <div class="flex items-center w-full justify-between edit transition duration-300 h-10">
                        <span class="text-maingreen font-semibold text-sm underline decoration-red-600 decoration-2">QUEM SOMOS</span>
                        <button @click="editAboutUs()" v-if="isAdmin">
                            <img :src="require('@/assets/icons/pencil-edit-maingreen.svg')" alt="#" class="h-10 hidden"/>
                        </button>
                    </div>
                    <div class="flex flex-col gap-3">
                        <h1 class="font-semibold text-4xl w-96 max-sm:w-auto">{{ maintext.title }}</h1>
                        <p class="w-full text-maingray">{{ maintext.parag }}</p>
                    </div>
                    <!-- Ir para página explicando tudo sobre o polo -->
                    <router-link class="bg-maingreen text-white w-40 py-3 rounded-lg border-2 border-white font-semibold hover:border-maingreen hover:bg-white hover:text-maingreen transition duration-300 text-center"
                        to="/institutional">
                        Saiba Mais
                    </router-link>
                </div>
                <div class="flex items-center">
                    <img v-if="maintext" :src="image.code" class="w-160" alt="Class with Virtual Glasses"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import router from '@/router/index.js'
import { getWhoWeAre } from '@/services/WhoWeAreService'
import { getOneImage } from '@/services/ImageService';

export default {
    name: 'AboutUs',
    props: {
        num: Number,
        text: String
    },
    data(){
        return {
            maintext: undefined,
            image: '',
            isAdmin: this.$store.getters.isAdmin
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
        getOneImage(36).then((response) => {
            this.image = response.data
        })
        getWhoWeAre().then((response) => {
            this.maintext = response.data
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