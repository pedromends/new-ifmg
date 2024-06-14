<template lang="">
    <button class="hover:shadow-md shadow-md hover:shadow-maingreen shadow-transparent transition duration-300 rounded-lg border border-gray-200"
        @click.prevent="openResearcher()" href="https://lattes.cnpq.br/" target="_blank">
        <div class="border-t border-maingreen bg-lightgray px-4 py-5 flex items-center justify-between">
            <h1 class="font-semibold">{{ name }}</h1>
            <div v-if="img != null">
                <img alt="Polo IFMG" class="h-16 rounded-lg border border-maingreen" :src="img.code"/>
            </div>
        </div>
        <div class="flex flex-col px-3 gap-3 py-3">
            <p class="font-semibold text-start">{{ course }}</p>
            <a :href="link" class="flex items-center gap-3">
                <img alt="Polo IFMG" class="h-4" :src="require('@/assets/icons/email-green.svg')"/>
                <p class="text-sm text-maingreen">{{ email }}</p>
            </a>
            <a :href="link" class="flex items-center gap-3">
                <img alt="Polo IFMG" class="h-4" :src="require('@/assets/icons/book-green.svg')"/>
                <p class="text-sm text-maingreen">Portfólio</p>
            </a>
        </div>
    </button>
</template>

<script>
import router from '@/router/index.js'

export default {
    name: 'CardResearcher',
    props: {
        position: String,
        name: String,
        email: String,
        link: String,
        course: String,
        img: Object
    },
    methods: {
        openResearcher(){
            router.push('/researchers/' + this.email).then(() => {
                var element = document.getElementById("navbar");
                element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
            }); 
        }
    },
}
</script>
<style lang="">
    
</style>