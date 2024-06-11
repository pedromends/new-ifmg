<template lang="">
    <router-link @click="func" :class="classEx">{{ text }}</router-link>
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
