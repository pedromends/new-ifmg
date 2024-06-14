<template lang="">
    <div v-if="newBody != null" @click.prevent="openNew()" class="flex flex-col justify-center gap-3 hover:bg-gray-200 rounded-xl transition duration-300 pb-3 h-full">
        <div class="w-full flex justify-center px-3">
            <img :src="img" alt="" class="mt-3 max-w-72 max-h-72"/>
        </div>
        <div class="px-8 flex flex-col justify-between gap-2">
            <div class="flex items-center self-start">
                <span class="border-2 border-maingreen rounded-lg text-start text-sm text-maingray px-10">{{ tip }}</span>
            </div>
            <h1 class="text-base font-semibold mt-2 max-w-96">{{ title }}</h1>
            <p class="text-sm">{{ date }} | {{ read }}</p>
            <div class="flex items-center justify-between">
                <a href="#" class="text-xs text-maingreen hover:underline">Ler Mais -></a>
                <button @click="editNewCard()" class="self-end" v-if="isAdmin">
                    <img :src="require('@/assets/icons/pencil-edit-maingreen.svg')" alt="#" class="h-8"/>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import router from '@/router/index.js'
import { listMainNews } from '@/services/MainNewService.js';

export default {
    name: 'NewCard',
    beforeCreate() {
        listMainNews().then((response) => {
            let res = response.data
            this.newBody.title = res.title
            this.newBody.img1.code = res.image.code
            this.newBody.paragraph1 = res.paragraph
        })
    },
    components:{
    },
    data() {
        return {
            isAdmin: this.$store.getters.isLoggedIn,
            newBody: {
                title:null,
                paragraph1: '',
                img1:{
                    code: ''
                }
            }
        }
    },
    props: {
        tip: String,
        title: String,
        date: String,
        read: String,
        img: String,
        newId: Number
    },
    methods:{
        editNewCard(){
            // levar para editar notícia
        },
        openNew(){
            router.push('/open-new/' + this.newId).then(() => {
                var element = document.getElementById("navbar");
                element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
            }); 
        }
    }
}
</script>
<style lang="">
    
</style>