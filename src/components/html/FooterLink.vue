<template lang="">
    <div>
        <a :href="link" target="_blank" class="hover:text-black hover:underline transition duration-75">{{ text }}</a>
    </div>
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