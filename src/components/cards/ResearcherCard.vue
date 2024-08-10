<template lang="">
    <div class="hover:shadow-md shadow-md hover:shadow-maingreen shadow-transparent transition duration-300 rounded-lg border border-gray-200"
        >
        <div class="border-t border-maingreen bg-lightgray px-4 py-5 flex items-center justify-between">
            <h1 class="font-semibold">{{ name }}</h1>
            
            <div v-if="img != null" class="flex items-center gap-4">
                <button @click="editResearcher()" class="self-end" v-if="isAdmin">
                    <img :src="require('@/assets/icons/pencil-edit-maingreen.svg')" alt="#" class="h-8"/>
                </button>
                <img alt="Polo IFMG" class="h-16 rounded-lg border border-maingreen" :src="img.code"/>
            </div>
        </div>
        <div class="flex flex-col px-3 gap-3 py-3" @click.prevent="openResearcher()">
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
    </div>
</template>

<script>
import router from '@/router/index.js'

export default {
    name: 'CardResearcher',
    data(){
        return {
            isAdmin: this.$store.getters.isLoggedIn,
        }
    },
    props: {
        id: Number,
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
                window.location.reload()
            }); 
        },
        editResearcher(){
            router.push('/edit/researcher/' + this.id).then(() => {
                window.location.reload()
            }); 
        }
    },
}
</script>
<style lang="">
    
</style>