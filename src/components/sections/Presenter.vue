<template lang="">
    <!-- TODO: Atualizar papel de parede via ADM -->
     <!-- bg-campus bg-bottom -->
    <section id="home" class="bg-cover bg-no-repeat bg-center">
        <div class=" flex flex-col justify-center items-center pt-12 gap-96 rounded-b-3xl relative">
            <div class="flex flex-col gap-12 pb-28">
                <div class="flex flex-col gap-10 pt-16">
                    <h1 class="text-5xl text-center text-govblue w-216 mx-auto font-semibold max-lg:w-auto max-lg:text-3xl">
                        Seja bem-vindo ao <br/>
                        <span class="mx-2">
                            <span class="underline decoration-maingreen decoration-4">Polo de Inovação IFMG</span>
                        </span>
                    </h1>
                    <p class="text-center text-gray-900 text-xl max-w-192 max-lg:w-auto max-lg:text-sm">
                        O Polo de Inovação IFMG atua na aproximação das empresas com o setor acadêmico,
                        desenvolvendo projetos relacionados à diversas áreas do mercado.
                    </p>
                </div>
                <div class="flex justify-center gap-5 max-lg:gap-3 text-white max-lg:flex-col mb-12 max-sm:px-10"> 
                    <button class="bg-white text-maingreen px-6 py-3 rounded-3xl max-lg:px-3 font-semibold hover:bg-maingreen hover:text-white border hover:border-white transition duration-200"
                        @click.prevent="goToContact()">Começar Projeto</button>
                    <div class="flex justify-center items-center gap-1 bg-maingreen hover:bg-maingray text-white border border-white px-2 rounded-3xl transition duration-200 max-lg:py-2">
                        <img alt="Play" :src="require('@/assets/icons/play.svg')"/>
                        <a class="pr-1" href="https://www.youtube.com/watch?v=tCPe3D92C_E&ab_channel=IFMGPlay" target="_blank">Vídeo Institucional</a>
                    </div>
                </div>
            </div>
            <div class="flex gap-4 p-10 bg-gray-200 border-16 max-lg:border-0 border-white rounded-3xl absolute top-112 max-lg:top-[33rem] max-lg:px-10">
                <div v-if="presenters" class="flex gap-4 max-sm:flex-col">
                    <PresenterCard v-for="(presenter, i) in presenters" :key="i" :num="presenter.num" :text="presenter.text" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import router from '@/router/index.js'
import PresenterCard from '@/components/cards/PresenterCard.vue';
import { listCards } from '@/services/PresenterCardService';
import { getOneImage } from '@/services/ImageService';

export default {
    name: 'MainPresenter',
    mounted() {
        getOneImage(145).then((response) => {
            this.img_obj = response.data

            let div = document.getElementById("home")
            div.style.backgroundImage = `url(${this.img_obj.code})`
        })
    },
    components:{
        PresenterCard
    },
    data(){
        return {
            presenters: undefined,
            img_obj: ''
        }
    },
    methods:{
        goToContact() {
            router.push({ path: '/' }).then(() => {
                var element = document.getElementById("contact");
                element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
            })
        },
    },
    beforeMount(){
       listCards().then((response) => {
            this.presenters = response.data
        }).catch((error) => {
            console.log(error)
        })
    }
}
</script>
<style lang="">
    
</style>