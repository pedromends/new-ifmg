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
            <p v-if="newBody.title != ''" class="pointer-events-none">{{ newBody.title.substring(0, 40) + '...' }}</p>
        </div>
        <h1 class="font-bold text-4xl text-center self-center w-4/5">{{ newBody.title }}</h1>
        <div class="px-48 flex flex-col gap-10 editor-render max-sm:px-4" v-html="newBody.code"></div>
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
            },
            res: null
        }
    },
    beforeMount() {
        const route = useRoute();
        const id = route.params.id;

        if(id != 0){
            showOne({ id:id }).then((response) => {
                let res = response.data

                this.newBody.title = res.title
                this.newBody.code = res.code
            })
        }else{
            listMainNews().then((response) => {
                this.res = response.data
                this.newBody.title = this.res.title.substring(0, 25) + '...'
                this.newBody.code = this.res.code

            })
        }
    }
}
</script>
<style>
    .editor-render a{
        color: blue;
        text-decoration: none;
    }
    
    .editor-render a:hover{
        text-decoration: underline;
    }
</style>