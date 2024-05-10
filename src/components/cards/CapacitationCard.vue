<template lang="">
    <div class="transition duration-200 hover:text-black hover:bg-white flex flex-col gap-3 px-8 py-8 rounded-3xl border-2 border-white effect">
        <div class="flex justify-between items-center">
            <img :src="icon" class="bg-white p-3 rounded-xl w-12" alt=""/>
            <button @click="editCapacitation()" class="self-end">
                <img :src="require('@/assets/icons/pencil-edit.svg')" alt="#" class="h-10"/>
            </button>
        </div>
        
        <h1 class="text-xl font-semibold w-40">{{ title }}</h1>
        <p class="text-sm text-lightgray">{{ subtitle }}</p>
        <a class="text-xs flex items-center gap-2 font-semibold bg-no-repeat hover:underline" href="#">Explorar <div class="w-5 h-5"/></a>
    </div>
</template>

<script>
import router from '@/router/index.js'

export default {
    name: 'CapacitationCard',
    components:{
    },
    props: {
        title: String,
        subtitle: String,
        icon: String
    },
    methods:{
        editCapacitation(){
            router.push('/edit/capacitation-card').then(() => {
                var element = document.getElementById("navbar");
                element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
            }); 
        }
    }
}
</script>

<style scoped>
    .effect:hover a {
        color:#2F9E40;
    }

    .effect:hover p {
        color: #4B5563;
    }

    .effect a div {
        background-image: url('@/assets/icons/right-arrow-white.svg');
    }

    .effect:hover a div {
        background-image: url('@/assets/icons/right-arrow.svg');
    }
</style>