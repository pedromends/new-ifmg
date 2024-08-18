<template lang="">
    <div class="bg-white border-b-4 border-maingreen flex flex-col text-center items-center px-2 py-6 transition duration-400 relative z-20"
        :class="isAdmin ? 'edit' : 'user'">
        <button @click="editPresenterCard()">
            <img :src="require('@/assets/icons/pencil-edit.svg')" alt="#" class="h-10 mx-24 mt-5 z-20" />
        </button>
        <div class="absolute z-30">
            <div class="flex items-center text-maingreen font-bold text-4xl justify-center">
                <AnimatedCounter :value="parseInt(num)" :duration="800" class="py-1 xl:text-md"/>
                <p>+</p>
            </div>
            <p class="xl:text-sm">{{ text }}</p>
        </div>
    </div>
</template>

<script>
import router from '@/router/index.js'

export default {
    name: 'PresenterCard',
    data(){
        return {
            isAdmin: this.$store.getters.isAdmin
        }
    },
    props: {
        num: Number,
        text: String
    },
    methods:{
        editPresenterCard(){
            if(this.isAdmin){
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

.user > * {
    pointer-events: none;
}

.edit:hover{
    background-color: #4b5563 ;
    --tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
    --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}

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