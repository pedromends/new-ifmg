<template lang="">
    <a href="#" target="_blank" class="flex items-center gap-5 hover:bg-gray-100 rounded-lg px-3 py-2 transition duration-300">
        <div class="flex flex-col justify-center items-center">
            <span>{{ month }}</span>
            <p class="text-xl">{{ day }}</p>
        </div>
        <div>
            <p class="text-maingreen text-sm font-bold">{{ title }}</p>
            <span class="text-xs italic">{{ hour }} | {{ local }}</span>
        </div>
    </a>
</template>
<script>
export default {
    name: 'EventCard',
    components:{
    },
    props: {
        month: String,
        day: Number,
        title: String,
        hour: String,
        local: String
    }
}
</script>
<style lang="">
    
</style>