<template lang="">
    <section class="flex flex-col px-16 py-36 gap-16 bg-maingreen">
        <div class="flex flex-col self-center text-center text-white w-160 gap-5">
            <span class="text-xs">CAPACITAÇÃO CREDENCIADA PELA EMBRAPII</span>
            <h1 class="text-4xl font-bold tracking-wide">A inovação está ao seu alcance!</h1>
            <p>Contamos com um modelo ágil para projetos de fomento à inovação sem burocracia e com custos reduzidos que podem chegar a até 50% do valor do projeto.</p>
        </div>
        <div class="flex justify-center gap-5 text-white">
            <div class="transition duration-75 hover:text-black hover:bg-white flex flex-col gap-3 px-8 py-8 rounded-3xl border-2 border-white">
                <img v-bind:src="require('@/assets/icons/monitor.svg')" class="bg-white p-3 rounded-xl w-12" alt=""/>
                <h1 class="text-xl font-bold w-40">Sistemas de Monitoramento</h1>
                <p class="text-sm">Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.</p>
                <a class="text-sm">Explorar -></a>
            </div>
            <div class="transition duration-75 hover:text-black hover:bg-white flex flex-col gap-3 px-8 py-8 rounded-3xl border-2 border-white">
                <img v-bind:src="require('@/assets/icons/rocket.svg')" class="bg-white p-3 rounded-xl w-12" alt=""/>
                <h1 class="text-xl font-bold w-40">Agilidade e Inovação</h1>
                <p class="text-sm">Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.</p>
                <a class="text-sm">Explorar -></a>
            </div>
            <div class="transition duration-75 hover:text-black hover:bg-white flex flex-col gap-3 px-8 py-8 rounded-3xl border-2 border-white">
                <img v-bind:src="require('@/assets/icons/plug.svg')" class="bg-white p-3 rounded-xl w-12" alt=""/>
                <h1 class="text-xl font-bold w-40">Medição de Grandezas</h1>
                <p class="text-sm">Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.</p>
                <a class="text-sm">Explorar -></a>
            </div>
            <div class="transition duration-75 hover:text-black hover:bg-white flex flex-col gap-3 px-8 py-8 rounded-3xl border-2 border-white">
                <img v-bind:src="require('@/assets/icons/house.svg')" class="bg-white p-3 rounded-xl w-12" alt=""/>
                <h1 class="text-xl font-bold w-40">Desenvolvimento de Automação</h1>
                <p class="text-sm">Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.</p>
                <a class="text-sm">Explorar -></a>
            </div>
        </div>
        <button class="px-5 py-2 bg-white text-maingreen w-28 mx-auto rounded-lg font-bold">Ver Mais</button>
    </section>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>