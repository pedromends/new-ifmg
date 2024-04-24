<template lang="">
    <div class="transition duration-300 shadow-lg bg-white flex flex-col gap-3 rounded-3xl border-2 border-white p-3 px-5 hover:shadow-md hover:shadow-govblue z-20">
        <div class="flex justify-between items-start">
            <img :src="image" class="w-1/3" alt="Profile Pic"/>
            <img :src="require('@/assets/icons/linkedin.svg')"  class="" alt="Linkedin"/>
        </div> 
        <div class="flex flex-col">
            <p class="font-bold">{{ name }}</p>
            <span class="text-sm tracking-wide">{{ profession }}</span>
        </div>
        <p class="mt-2 w-52 text-sm">{{ details }}</p>
    </div>
</template>
<script>
export default {
    name: 'TalentCard',
    props: {
        image: String,
        name: String,
        profession: String,
        details: String
    }
}
</script>
<style lang="">
    
</style>