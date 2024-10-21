<template lang="">
    <div v-if="newBody != null" class="relative flex flex-col justify-end">
        <div @click.prevent="goTo(1)" class="flex flex-col gap-4 justify-between hover:bg-gray-200 rounded-xl transition duration-300 pb-3 h-full max-sm:self-center pt-4">
            <div v-if="img1 != null"  class="w-full flex justify-center items-center px-3">
                <img :src="img1" alt="" class="mt-3 max-w-64 max-h-64"/>
            </div>
            <div class="px-8 flex flex-col justify-between gap-2">
                <div class="flex items-center self-start">
                    <span class="border-2 border-maingreen rounded-lg text-start text-sm text-maingray px-10">{{ tip }}</span>
                </div>
                <h1 class="text-base font-semibold mt-2 max-w-96 pointer-events-none">{{ title }}</h1>
                <div class="flex items-center justify-between">
                    <a href="#" class="text-xs text-maingreen hover:underline">Ler Mais -></a>
                </div>
            </div>
        </div>
        <button @click.prevent="goTo(2)" class="self-end z-30 absolute p-4" v-if="isAdmin">
            <img :src="require('@/assets/icons/pencil-edit-maingreen.svg')" alt="#" class="h-8"/>
        </button>
    </div>
</template>

<script>
import router from '@/router/index.js'
import { showOne } from '@/services/NewService.js';

export default {
    name: 'NewCard',
    beforeCreate() {
        showOne({id:this.newId}).then((response) => {
            let res = response.data
            this.newBody.title = res.title
            this.newBody.code = res.code
        })
    },
    data() {
        return {
            isAdmin: this.$store.getters.isAdmin,
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
        img1: String,
        date: String,
        code: String,
        newId: Number
    },
    methods:{
        editNewCard(){
            // levar para editar notícia
            router.push('/edit/edit-new/' + this.newId).then(() => {
                var element = document.getElementById("navbar");
                element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
            }); 
        },
        openNew(){
            router.push('/open-new/' + this.newId).then(() => {
                var element = document.getElementById("navbar");
                element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
            }); 
        },
        goTo(op){
            console.log(op)
            op == 1 ? this.openNew() : this.editNewCard()
        }
    }
}
</script>
<style lang="">
    
</style>