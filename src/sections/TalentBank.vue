<template lang="">
    <section class="flex flex-col px-16 py-36 gap-16 bg-lightgray">
        <div class="flex flex-col self-center text-center max-lg:w-auto w-180 gap-5">
            <h1 class="text-4xl font-bold tracking-wide">Conheça nosso banco de talentos</h1>
            <p>Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.</p>
        </div>
        
        <div class="flex max-lg:flex-col overflow-auto justify-center gap-5 text-black relative">

            <!-- 1 -->
            <div class="transition duration-75 shadow-lg bg-white flex flex-col gap-1 rounded-3xl border-2 border-white p-3 px-5">
                <div class="flex justify-between items-start">
                    <img v-bind:src="require('@/assets/avatar/gabriel.svg')"  alt="Profile Pic"/>
                    <img v-bind:src="require('@/assets/icons/linkedin.svg')"  class="" alt="Linkedin"/>
                </div> 
                <div class="flex flex-col">
                    <p class="font-bold">Gabriel Tomacheski</p>
                    <span class="text-sm tracking-wide">Estudante de Design</span>
                </div>
                <p class="mt-2 w-52 text-sm">Lorem ipsum dolor sit elit.</p>
            </div>

            <!-- 2 -->
            <div class="transition duration-75 shadow-lg bg-white flex flex-col gap-1 rounded-3xl border-2 border-white p-3 px-5">
                <div class="flex justify-between items-start">
                    <img v-bind:src="require('@/assets/avatar/renata.svg')"  alt="Profile Pic"/>
                    <img v-bind:src="require('@/assets/icons/linkedin.svg')"  class="" alt="Linkedin"/>
                </div>
                <div class="flex flex-col">
                    <p class="font-bold">Renata Jager</p>
                    <span class="text-sm tracking-wide">Estudante de Design</span>
                </div>
                <p class="mt-2 w-52 text-sm">Lorem ipsum dolor sit elit.</p>
            </div>

            <!-- 3 -->
            <div class="transition duration-75 shadow-lg bg-white flex flex-col gap-1 rounded-3xl border-2 border-white p-3 px-5">
                <div class="flex justify-between items-start">
                    <img v-bind:src="require('@/assets/avatar/joaopedro.svg')"  alt="Profile Pic"/>
                    <img v-bind:src="require('@/assets/icons/linkedin.svg')"  class="" alt="Linkedin"/>
                </div>
                <div class="flex flex-col">
                    <p class="font-bold">João Pedro</p>
                    <span class="text-sm tracking-wide">Estudante de TI</span>
                </div>
                <p class="mt-2 w-52 text-sm">Lorem ipsum dolor sit elit.</p>
            </div>

            <!-- 4 -->
            <div class="transition duration-75 shadow-lg bg-white flex flex-col gap-1 rounded-3xl border-2 border-white p-3 px-5">
                <div class="flex justify-between items-start">
                    <img v-bind:src="require('@/assets/avatar/martina.svg')"  alt="Profile Pic"/>
                    <img v-bind:src="require('@/assets/icons/linkedin.svg')"  class="" alt="Linkedin"/>
                </div>
                <div class="flex flex-col">
                    <p class="font-bold">Martina Lorena</p>
                    <span class="text-sm tracking-wide">Estudante de Publicidade</span>
                </div>
                <p class="mt-2 w-52 text-sm">Lorem ipsum dolor sit elit.</p>
            </div>

            <!-- 5 -->
            <div class="transition duration-75 shadow-lg bg-white flex flex-col gap-1 rounded-3xl border-2 border-white p-3 px-5">
                <div class="flex justify-between items-start">
                    <img v-bind:src="require('@/assets/avatar/marcos.svg')"  alt="Profile Pic"/>
                    <img v-bind:src="require('@/assets/icons/linkedin.svg')"  class="" alt="Linkedin"/>
                </div>
                <div class="flex flex-col">
                    <p class="font-bold">Marcos Lutre</p>
                    <span class="text-sm tracking-wide">Estudante de Publicidade</span>
                </div>
                <p class="mt-2 w-52 text-sm">Lorem ipsum dolor sit elit.</p>
            </div>

            <!-- Criar uma setas decente -->
            <div class="flex justify-between items-center absolute w-full top-2/4">
                <p class="rounded-full px-4 py-2 bg-white border-2 border-black"></p>
                <p class="rounded-full px-4 py-2 bg-white border-2 border-black"></p>
            </div>
        </div>
        <button class="px-5 py-2 bg-white text-maingreen w-28 mx-auto rounded-lg font-bold hover:bg-maingreen hover:text-white transition duration-75">Ver Mais</button>
    </section>
</template>
<script>
export default {
    name: 'TalentBank',
      components:{
    },
    props: {
    }
}
</script>
<style lang="">
    
</style>