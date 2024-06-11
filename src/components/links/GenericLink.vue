<template lang="">
    <a @click="func" :class="classEx">{{ text }}</a>
</template>
<script>
export default {
    name: 'NavbarLink',
    components:{
    },
    props: {
        link: String,
        text: String,
        classEx: String,
        func: Function
    }
}
</script>
<style lang="">
    
</style>
