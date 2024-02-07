<template lang="">
    <main class="flex justify-center items-center p-10">
        <div class="flex flex-col gap-10 px-20 w-full">
            <h1 class="text-4xl text-black font-semibold underline underline-offset-2 decoration-8 decoration-maingreen">Capacitação</h1>
            <hr class="bg-red-600 h-1"/>
            <div class="flex flex-col gap-5 text-maingray">
                <!-- Seção p/ divulgar nossas capacitações de RH -->
            </div>
        </div>
        <BackToTop />
    </main>
</template>

<script>
import BackToTop  from '@/components/buttons/BackToTop.vue';

export default {
    name: 'CapacitationPage',
    components: {
        BackToTop
    },
    props: {
    }
}
</script>
<style lang="">
    
</style>