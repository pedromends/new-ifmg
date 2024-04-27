<template lang="">
    <div class="bg-white border-b-4 border-maingreen flex flex-col text-center items-center px-2 py-6 hover:shadow-2xl transition duration-400 relative hover:bg-maingray edit z-20">
        <img :src="require('@/assets/icons/pencil-edit.svg')" alt="#" class="h-10 mx-24 mt-5 z-20"/>
        <button @click="editPresenterCard()" class="absolute z-20">
            <h1 class="text-maingreen font-bold text-4xl px-20 py-1 ">{{ num }}</h1>
            <p class="">{{ text }}</p>
        </button>
    </div>
</template>
<script>
import router from '@/router/index.js'

export default {
    name: 'PresenterCard',
    props: {
        num: String,
        text: String
    },
    methods:{
        editPresenterCard(){
            console.log('vatomanocu')
            router.push('/edit/presenter-card')
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

.edit:hover > img {
    z-index: 20;
}

.edit:hover > div > h1 {
    color: rgb(75,85,99);
}
</style>