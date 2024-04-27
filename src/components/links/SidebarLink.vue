<template lang="">
    <router-link :to="link" class="flex items-center p-2 text-gray-900 rounded-lg">
        <img class="w-5" :src="require(`@/assets/icons/${icon}.svg`)" alt="Icon">
        <span class="ms-3 text-white">{{ text }}</span>
    </router-link>
</template>
<script>
export default {
    name: 'SidebarLink',
    components:{
    },
    props: {
        link: String,
        text: String,
        icon: String
    }
}
</script>
<style lang="">
    
</style>