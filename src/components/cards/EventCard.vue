<template lang="">
    <section class="flex items-center justify-between hover:bg-gray-100 rounded-lg py-2 px-8 transition duration-30 cursor-pointer">
        <div class="flex items-center gap-5">
            <div class="flex flex-col justify-center text-lg items-center">
                <span>{{ month }}</span>
                <p class="text-xl">{{ day }}</p>
            </div>
            <div>
                <p class="text-maingreen  font-bold">{{ title }}</p>
                <span class="italic">{{ hour }} | {{ local }}</span>
            </div>
        </div>
        <button @click="editAdvantages()" class="" v-if="isAdmin">
            <img :src="require('@/assets/icons/pencil-edit-maingreen.svg')" alt="#" class="h-10"/>
        </button>
    </section>
</template>

<script>
import router from '@/router/index.js'

export default {
    name: 'EventCard',
    components:{
    },
    data() {
        return {
            isAdmin: this.$store.getters.isAdmin
        }
    },
    props: {
        month: String,
        day: String,
        title: String,
        hour: String,
        local: String
    },
    methods:{
        editAdvantages(){
            router.push('/edit/event-card').then(() => {
                var element = document.getElementById("navbar");
                element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
            });
        }
    }
}
</script>
<style lang="">
    
</style>