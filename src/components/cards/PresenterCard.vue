<template lang="">
    <div class="bg-white border-b-4 border-maingreen flex flex-col text-center px-2 py-6 hover:shadow-2xl transition duration-200">
        <h1 class="text-maingreen font-bold text-4xl px-20 py-2">{{ num }}+</h1>
        <p>{{ text }}</p>
    </div>
</template>
<script>
export default {
    name: 'PresenterCard',
    props: {
        num: Number,
        text: String
    }
}
</script>
<style lang="">
    
</style>