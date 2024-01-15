<template lang="">
    <section class="flex justify-center items-center bg-lightgray p-32">
        <div class="flex flex-col justify-center items-center gap-12">
            <div class="flex flex-col justify-center items-center gap-5">
                <h1 class="text-4xl font-extrabold tracking-wide">Nossos Clientes</h1>
                <p class="text-sm">
                    Empresas que fizeram ou fazem projetos com o Polo de Inovação IFMG.
                </p>
            </div>
            <div class="bg-whitecircle bg-no-repeat bg-center">
                <div class="grid max-lg:grid-rows-1 grid-rows-3 gap-5 items-center py-24">
                    <div class="flex max-lg:flex-col justify-center gap-3">
                        <img v-bind:src="require('@/assets/icons/reachr.svg')" class="px-8 py-5 rounded-xl bg-white shadow-lg" alt="Reachr"/>
                        <img v-bind:src="require('@/assets/icons/prumo.svg')" class="px-8 py-5 rounded-xl bg-white shadow-lg" alt="Prumo"/>
                        <img v-bind:src="require('@/assets/icons/isobloco.svg')" class="px-8 py-5 rounded-xl bg-white shadow-lg" alt="Isobloco"/>
                    </div>
                    <div class="flex max-lg:flex-col justify-center gap-3">
                        <img v-bind:src="require('@/assets/icons/hf.svg')" class="px-8 py-5 rounded-xl bg-white shadow-lg" alt="Hf"/>
                        <img v-bind:src="require('@/assets/icons/avante.svg')" class="px-8 py-5 rounded-xl bg-white shadow-lg" alt="Avantet"/>
                        <img v-bind:src="require('@/assets/icons/iotew.svg')" class="px-8 py-5 rounded-xl bg-white shadow-lg" alt="IoteW"/>
                        <img v-bind:src="require('@/assets/icons/infinite.svg')" class="px-8 py-5 rounded-xl bg-white shadow-lg" alt="Infinite"/>
                    </div>
                    <div class="flex max-lg:flex-col justify-center gap-3">
                        <img v-bind:src="require('@/assets/icons/aiko.svg')" class="px-8 py-5 rounded-xl bg-white shadow-lg" alt="Infinite"/>
                        <img v-bind:src="require('@/assets/icons/google.svg')" class="px-8 py-5 rounded-xl bg-white shadow-lg" alt="Infinite"/>
                        <img v-bind:src="require('@/assets/icons/celulaweb.svg')" class="px-8 py-5 rounded-xl bg-white shadow-lg" alt="Infinite"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>