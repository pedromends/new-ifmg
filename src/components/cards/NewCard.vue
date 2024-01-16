<template lang="">
    <div class="flex flex-col gap-3 hover:bg-lightgray rounded-xl">
        <img :src="require(`@/assets/images/${ img }.svg`)" alt="" class="h-52 self-start"/>
        <div class="px-2 flex flex-col gap-2">
            <span class="border-2 border-maingreen rounded-lg w-48 text-center text-sm text-maingray">{{ tip }}</span>
            <h1 class="w-72 text-base font-semibold mt-2">{{ title }}</h1>
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