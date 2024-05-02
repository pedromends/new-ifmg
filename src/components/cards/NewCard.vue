<template lang="">
    <div class="flex flex-col justify-center gap-3 hover:bg-gray-200 rounded-xl transition duration-300 pb-3">
        <div class="w-full flex justify-center px-3">
            <img :src="img" alt="" class="mt-3"/>
        </div>
        <div class="px-8 flex flex-col justify-start gap-2">
            <div class="flex items-center self-start">
                <span class="border-2 border-maingreen rounded-lg text-start text-sm text-maingray px-10">{{ tip }}</span>
            </div>
            <h1 class="text-base font-semibold mt-2">{{ title }}</h1>
            <p class="text-sm">{{ date }} | {{ read }}</p>
            <div class="flex items-center justify-between">
                <a href="#" class="text-xs text-maingreen hover:underline">Ler Mais -></a>
                <button @click="editNewCard()" class="self-end">
                    <img :src="require('@/assets/icons/pencil-edit-maingreen.svg')" alt="#" class="h-8"/>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import router from '@/router/index.js'

export default {
    name: 'NewCard',
    components:{
    },
    props: {
        tip: String,
        title: String,
        date: String,
        read: String,
        img: String
    },
    methods:{
        editNewCard(){
            router.push('/edit/news-card').then(() => {
                var element = document.getElementById("navbar");
                element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
            }); 
        }
    }
}
</script>
<style lang="">
    
</style>