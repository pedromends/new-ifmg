<template lang="">
    <a :href="link" target="_blank" :class="exClass" class="hover:underline transition duration-200">{{ text }}</a>
</template>
<script>
export default {
    name: 'footerLink',
    components:{
    },
    props: {
        link: String,
        text: String,
        exClass: String
    }
}
</script>
<style lang="">
    
</style>