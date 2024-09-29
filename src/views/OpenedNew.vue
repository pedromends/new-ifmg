<template lang="">
    <section v-if="newBody" class="px-16 flex flex-col gap-10 ">
        <div class="flex items-center gap-2">
            <img class="w-6" :src="require('@/assets/icons/house2.svg')" alt="">
            <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 9 4-4-4-4" />
            </svg>
            <router-link to="/news" class="text-maingreen hover:underline">Notícias</router-link>
            <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 9 4-4-4-4" />
            </svg>
            <p class="pointer-events-none">{{ newBody.title }}</p>
        </div>
        <div class="px-48 flex flex-col gap-10" v-html="newBody.code"></div>
    </section>
</template>

<script>
import { useRoute } from "vue-router";
import { showOne } from '@/services/NewService.js';
import { listMainNews } from '@/services/MainNewService.js';

export default {
    name:'OpenedNew',
    data(){
        return {
            id: null,
            newBody: {
                id: undefined,
                title: '',
                code: null
            }
        }
    },
    beforeCreate() {
        const route = useRoute();
        const id = route.params.id;

        if(id != 0){
            showOne({ id:id }).then((response) => {
                this.newBody = response.data
                console.log(this.newBody)
            })
        }else{
            listMainNews().then((response) => {
                console.log(response.data)
                let res = response.data
                this.newBody.title = res.title
                this.newBody.code = res.code

            })
        }
        
    }
}
</script>
<style lang="">
    
</style>