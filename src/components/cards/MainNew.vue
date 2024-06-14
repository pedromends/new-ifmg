<template lang="">
    <section class="bg-gradient-to-r from-maingreen to-transparent pt-1 pb-1 pl-1 border rounded-3xl hover:shadow-lg shadow-transparent hover:shadow-maingreen transition duration-300">
        <div class="bg-white rounded-3xl">
            <div @click.prevent="openNew()" class="flex max-lg:flex-col justify-between items-center gap-2">           
                <div class="flex flex-col gap-3 pl-20 px-3">
                    <span class="border-2 border-maingreen rounded-lg w-40 text-center text-sm px-2 py-1 max-lg:mt-6">{{ tip }}</span>
                    <h1 class="w-3/4 text-4xl font-semibold mt-2">{{ title }}</h1>
                    <p class="w-3/4 text-maingray">{{ parag }}</p>
                    <button @click="editMainNew()" class="w-3/4"  v-if="isAdmin">
                        <img :src="require('@/assets/icons/pencil-edit-maingreen.svg')" alt="#" class="h-8"/>
                    </button>
                    <div class="flex items-center justify-between">
                        <a href="#" class="text-xs text-maingreen hover:underline">Ler Mais -></a>
                    </div>
                </div>
                <img class="h-116" :src="img"/>
            </div>
        </div>
    </section>
</template>

<script>
import router from '@/router/index.js'

export default {
    name: 'MainNew',
    components:{
    },
    data() {
        return {
            mainnew: undefined,
            isAdmin: this.$store.getters.isLoggedIn
        }
    },
    props: {
        tip: String,
        title: String,
        parag: String,
        img: String
    },
    methods:{
        editMainNew(){
            router.push('/edit/main-new').then(() => {
                var element = document.getElementById("navbar");
                element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
            }); 
        },
        openNew(){
            router.push('/open-new/' + 0).then(() => {
                var element = document.getElementById("navbar");
                element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
            }); 
        }
    }
}
</script>
<style lang="">
    
</style>