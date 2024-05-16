<template lang="">
    <section class="px-5 border-2 rounded-3xl border-r-maingreen hover:shadow-2xl transition duration-300">
        <a href="#" target="_blank" class="flex max-lg:flex-col justify-between items-center gap-2">           
            <div class="flex flex-col gap-3 pl-10 px-3">
                <span class="border-2 border-maingreen rounded-lg w-40 text-center text-sm px-2 py-1 max-lg:mt-6">{{ tip }}</span>
                <h1 class="w-3/4 text-4xl font-bold mt-2">{{ title }}</h1>
                <p class="w-3/4 text-maingray">{{ parag }}</p>
                <button @click="editMainNew()" class="w-3/4">
                    <img :src="require('@/assets/icons/pencil-edit-maingreen.svg')" alt="#" class="h-8"/>
                </button>
                <div class="flex items-center justify-between">
                    <a href="#" class="text-xs text-maingreen hover:underline">Ler Mais -></a>
                </div>
            </div>
            <img class="h-116" :src="img"/>
        </a>
    </section>
</template>

<script>
import router from '@/router/index.js'

export default {
    name: 'MainNew',
    components:{
    },
    data() {
        return {
            mainnew: undefined,
        }
    },
    props: {
        tip: String,
        title: String,
        parag: String,
        img: String
    },
    methods:{
        editMainNew(){
            router.push('/edit/main-new').then(() => {
                var element = document.getElementById("navbar");
                element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
            }); 
        }
    }
}
</script>
<style lang="">
    
</style>