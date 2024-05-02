<template lang="">
    <a href="https://lattes.cnpq.br/" target="_blank" class="hover:shadow-lg transition duration-300 rounded-lg border border-gray-200">
        <div class="border-t border-maingreen bg-lightgray px-4 py-5 flex items-center justify-between">
            <h1 class="font-semibold">{{ name }}</h1>
            <img alt="Polo IFMG" class="h-16 rounded-lg border border-maingreen" :src="require('@/assets/images/joaopedro.png')"/>
        </div>
        <div class="flex flex-col px-3 gap-3 py-3">
            <p class="font-semibold">{{ course }}</p>
            <a :href="link" class="flex items-center gap-3">
                <img alt="Polo IFMG" class="h-4" :src="require('@/assets/icons/email-green.svg')"/>
                <p class="text-sm text-maingreen">{{ email }}</p>
            </a>
            <a :href="link" class="flex items-center gap-3">
                <img alt="Polo IFMG" class="h-4" :src="require('@/assets/icons/book-green.svg')"/>
                <p class="text-sm text-maingreen">Portfólio</p>
            </a>
        </div>
    </a>
</template>
<script>
export default {
    name: 'CardResearcher',
    props: {
        position: String,
        name: String,
        email: String,
        link: String,
        course: String
    }
}
</script>
<style lang="">
    
</style>