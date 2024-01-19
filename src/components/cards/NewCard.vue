<template lang="">
    <div class="flex flex-col justify-center gap-3 hover:bg-gray-300 rounded-xl transition duration-300">
        <img :src="require(`@/assets/images/${ img }.svg`)" alt="" class="w-64 mx-auto mt-3"/>
        <div class="px-8 flex flex-col justify-start gap-2">
            <div class="flex items-center self-start">
                <span class="border-2 border-maingreen rounded-lg text-start text-sm text-maingray px-10">{{ tip }}</span>
            </div>
            <h1 class="text-base font-semibold mt-2">{{ title }}</h1>
            <p class="text-sm">{{ date }} | {{ read }} leitura</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'NewCard',
    components:{
    },
    props: {
        tip: String,
        title: String,
        date: String,
        read: String,
        img: String
    }
}
</script>
<style lang="">
    
</style>