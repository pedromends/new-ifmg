<template lang="">
    <div class="text-black flex max-md:flex-col px-16 py-6 gap-10 rounded-xl  hover:bg-maingreen transition duration-300 hover:text-white border-2 border-gray-100 max-lg:w-auto ml-16 max-lg:ml-auto">
        <img v-bind:src="require('@/assets/icons/lightbulb.svg')" alt="" class="w-16"/>
        <div class="flex flex-col gap-1">
            <h1 class="font-bold tracking-wide">{{ dif }}</h1>
            <p class="text-sm w-72 max-lg:w-auto">{{ text }}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'AdvantagesCard',
    components:{
    },
    props: {
        dif: String,
        text: String
    }
}
</script>
<style lang="">
    
</style>