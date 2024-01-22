<template lang="">
    <section class="hover:shadow-lg transition duration-300 rounded-lg border border-gray-200">
        <div class="border-t border-maingreen bg-lightgray px-3 py-5">
            <h1 class="font-semibold">{{ position }}</h1>
        </div>
        <div class="flex flex-col px-3 gap-3 py-3">
            <p class="font-semibold">{{ name }}</p>
            <a :href="link" class="flex items-center gap-3">
                <img alt="Polo IFMG" class="h-4" :src="require('@/assets/icons/email-green.svg')"/>
                <p class="text-sm text-maingreen">{{ email }}</p>
            </a>
            <a :href="link" class="flex items-center gap-3">
                <img alt="Polo IFMG" class="h-4" :src="require('@/assets/icons/book-green.svg')"/>
                <p class="text-sm text-maingreen">Portfólio</p>
            </a>
        </div>
    </section>
</template>
<script>
export default {
    name: 'CardResearcher',
    props: {
        position: String,
        name: String,
        email: String,
        link: String
    }
}
</script>
<style lang="">
    
</style>