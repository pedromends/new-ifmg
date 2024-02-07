<template lang="">
   <main class="flex flex-col justify-center items-center p-10">
        <section class="flex flex-col gap-10 px-20 w-full">
            <h1 class="text-4xl text-black font-semibold underline underline-offset-2 decoration-8 decoration-maingreen">Contato</h1>
            <hr class="bg-red-600 h-1"/>
        </section>
        <Contact />
        <BackToTop />
    </main>
</template>
<script>
import Contact from '@/components/sections/Contact.vue';
import BackToTop  from '@/components/buttons/BackToTop.vue';

export default {
    name: 'ContactPage',
    components: {
        Contact,
        BackToTop
    }
}
</script>
<style lang="">
    
</style>