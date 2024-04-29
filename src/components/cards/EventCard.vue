<template lang="">
    <section class="flex items-center justify-between hover:bg-gray-100 rounded-lg p-2 transition duration-30">
        <a href="#" target="_blank" class="flex items-center gap-5">
            <div class="flex flex-col justify-center items-center">
                <span>{{ month }}</span>
                <p class="text-xl">{{ day }}</p>
            </div>
            <div>
                <p class="text-maingreen text-sm font-bold">{{ title }}</p>
                <span class="text-xs italic">{{ hour }} | {{ local }}</span>
            </div>
        </a>
        <button @click="editAdvantages()" class="self-end">
            <img :src="require('@/assets/icons/pencil-edit-maingreen.svg')" alt="#" class="h-10"/>
        </button>
    </section>
</template>

<script>
import router from '@/router/index.js'

export default {
    name: 'EventCard',
    components:{
    },
    props: {
        month: String,
        day: String,
        title: String,
        hour: String,
        local: String
    },
    methods:{
        editAdvantages(){
            router.push('/edit/event-card').then(() => {
                var element = document.getElementById("navbar");
                element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
            }); 
        }
    }
}
</script>
<style lang="">
    
</style>