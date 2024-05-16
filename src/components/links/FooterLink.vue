<template lang="">
    <a :href="link" target="_blank" class="hover:text-black hover:underline transition duration-300">{{ text }}</a>
</template>
<script>
export default {
    name: 'footerLink',
    components:{
    },
    props: {
        link: String,
        text: String
    }
}
</script>
<style lang="">
    
</style>