<template lang="">
    <div class="flex items-center gap-5 hover:bg-gray-100 rounded-xl px-3 py-2">
        <div class="flex flex-col justify-center items-center">
            <span>{{ month }}</span>
            <p class="text-2xl">{{ day }}</p>
        </div>
        <div>
            <p class="text-maingreen font-bold">{{ title }}</p>
            <span class="text-xs italic">{{ hour }} | {{ local }}</span>
        </div>
    </div>
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