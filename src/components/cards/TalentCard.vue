<template lang="">
    <section class="flex justify-center items-start relative">
        <button title="edit" :id="`popover-${id}`" class="absolute p-3 rounded-lg bg-gray-200 -top-16 hidden z-50" @mouseleave="showHidPopover()" @click="editTalent()">
            <img :src="require('@/assets/icons/pencil-edit-maingreen.svg')" alt="#" class="h-10"/>
        </button>

        <div @mouseover="showHidPopover()" class="transition duration-300 shadow-lg bg-white flex flex-col gap-3 rounded-3xl border-2 border-white p-3 px-5 hover:shadow-md hover:shadow-govblue z-20">
            <div class="flex justify-between items-start">
                <img :src="image" class="w-1/3" alt="Profile Pic"/>
                <img :src="require('@/assets/icons/linkedin.svg')"  class="" alt="Linkedin"/>
            </div> 
            <div class="flex flex-col">
                <p class="font-bold">{{ name }}</p>
                <span class="text-sm tracking-wide">{{ profession }}</span>
            </div>
            <p class="mt-2 w-52 text-sm">{{ details }}</p>
        </div>
    </section>
</template>

<script>
import router from "@/router/index.js"

export default {
    name: 'TalentCard',
    props: {
        image: String,
        name: String,
        profession: String,
        details: String,
        id:Number
    },
    data(){
        return {
            activePopover: false
        }
    },
    methods: {
        showHidPopover(){
            let popover = document.getElementById(`popover-${this.id}`)
            if(this.activePopover){
                popover.style.display = 'none'
            }else{
                popover.style.display = 'inline'
            }
            this.activePopover = !this.activePopover
        },
        editTalent(){
            router.push('/edit/talent-card').then(() => {
                var element = document.getElementById("navbar");
                window.location.reload();
                element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });4
            }); 
        }
    },
}
</script>
<style lang="">
    
</style>