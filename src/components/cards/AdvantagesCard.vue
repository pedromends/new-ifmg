<template lang="">
    <router-link to="/mobility-smart-systems" class="text-black flex max-md:flex-col px-16 py-6 gap-10 rounded-xl  hover:bg-maingreen transition duration-300 hover:text-white border-2 border-gray-100 max-lg:w-auto max-lg:px-0">
        <img v-bind:src="icon" alt="" class="w-16 max-lg:self-center"/>
        <div class="flex flex-col gap-1">
            <h1 class="font-bold tracking-wide px-4 w-72">{{ dif }}</h1>
            <p class="text-xs w-80 px-4">{{ text }}</p>
        </div>
    </router-link>
</template>
<script>
export default {
    name: 'AdvantagesCard',
    components:{
    },
    props: {
        dif: String,
        text: String,
        icon: String
    }
}
</script>
<style lang="">
    
</style>