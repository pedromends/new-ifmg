<template lang="">
    <router-link :to="link" class="hover:text-red-600 hover:underline hover:decoration-red-600">{{ text }}</router-link>
</template>
<script>
export default {
    name: 'NavbarLink',
    components:{
    },
    props: {
        link: String,
        text: String,
    }
}
</script>
<style lang="">
    
</style>