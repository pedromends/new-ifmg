<template lang="">
    <div class="px-20">
        <a href="#" target="_blank" class="flex max-lg:flex-col justify-between items-center gap-1 border-2 rounded-3xl border-gray-100 hover:shadow-2xl transition duration-300">           
        <div class="flex flex-col gap-3 pl-10 max-lg:px-3">
            <span class="border-2 border-maingreen rounded-lg w-40 text-center text-sm px-2 py-1 max-lg:mt-6">{{ tip }}</span>
            <h1 class="w-80 max-lg:w-auto text-2xl font-bold mt-2">{{ title }}</h1>
            <p class="w-116 max-lg:w-auto text-maingray text-sm">{{ parag }}</p>
            <a href="#" class="text-xs text-maingreen hover:underline">Ler Mais -></a>
        </div>
        <img class="h-80" :src="require(`@/assets/images/${ img }.svg`)"/>
    </a>
    </div>
</template>
<script>
export default {
    name: 'MainNew',
    components:{
    },
    props: {
        tip: String,
        title: String,
        parag: String,
        img: String
    }
}
</script>
<style lang="">
    
</style>