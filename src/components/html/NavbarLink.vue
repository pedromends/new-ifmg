<template lang="">
    <router-link @click="func" :to="link" class="hover:text-red-600 hover:underline hover:decoration-red-600">{{ text }}</router-link>
</template>
<script>
export default {
    name: 'NavbarLink',
    components:{
    },
    props: {
        link: String,
        text: String,
        func: Function
    }
}
</script>
<style lang="">
    
</style>