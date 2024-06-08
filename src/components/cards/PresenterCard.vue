<template lang="">
    <div class="bg-white border-b-4 border-maingreen flex flex-col text-center items-center px-2 py-6 hover:shadow-2xl transition duration-400 relative hover:bg-maingray edit z-20">
        <button @click="editPresenterCard()">
            <img :src="require('@/assets/icons/pencil-edit.svg')" alt="#" class="h-10 mx-24 mt-5 z-20" />
        </button>
        <div class="absolute z-30">
            <div class="flex items-center text-maingreen font-bold text-4xl justify-center">
                <AnimatedCounter :value="parseInt(num)" :duration="800" class="py-1"/>
                <p>+</p>
            </div>
            <p class="">{{ text }}</p>
        </div>
    </div>
</template>

<script>
import router from '@/router/index.js'

export default {
    name: 'PresenterCard',
    data(){
        return {
            loggedIn: this.$store.getters.isLoggedIn
        }
    },
    props: {
        num: Number,
        text: String
    },
    methods:{
        editPresenterCard(){
            if(this.loggedIn){
                router.push('/edit/presenter-card').then(() => {
                    var element = document.getElementById("navbar");
                    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                }); 
            }
        }
    }
}
</script>

<style scoped>
.edit:hover > div {
    color: rgb(75,85,99);
    z-index: 10;
    pointer-events: none;
}

.edit:hover > button {
    z-index: 40;
}

.edit:hover > div > div {
    color: rgb(75,85,99);
}
</style>