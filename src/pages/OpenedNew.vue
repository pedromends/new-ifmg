<template lang="">
    <section v-if="newBody" class="px-48 flex flex-col gap-10 py-10">
        <div class="flex items-center gap-5">
            <img class="w-6" :src="require('@/assets/icons/house2.svg')" alt="">
            <p class="text-maingreen">> Notícias ></p>
            <p class="">{{ newBody.title }}</p>
        </div>
        <p class="font-semibold text-4xl">{{ newBody.title }}</p>
        <div class="flex flex-col gap-10">
            <img :src="newBody.img1.code" alt=""/>
            <p class="break-all text-lg">{{ newBody.paragraph1 }}</p>
            <img :src="newBody.img2.code" alt=""/>
            <p class="break-all text-lg">{{ newBody.paragraph2 }}</p>
        </div>
    </section>
</template>

<script>
import { useRoute } from "vue-router";
import { showOne } from '@/services/NewService.js';

export default {
    name:'OpenedNew',
    data(){
        return {
            id: null,
            newBody: null
        }
    },
    beforeCreate() {
        const route = useRoute();
        const id = route.params.id;

        showOne({ id:id }).then((response) => {
            this.newBody = response.data
            console.log(this.newBody)
        })
    }
}
</script>
<style lang="">
    
</style>