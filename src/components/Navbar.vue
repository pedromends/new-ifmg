<template lang="">
    <nav class="w-full relative font-opensans">
        <div class="bg-white absolute right-1/2 transform translate-x-1/2 rounded-b-2xl">
            <img alt="" class="h-44 w-40 px-8 my-1" v-bind:src="require('@/assets/icons/main-logo.svg')"/>
        </div>

        <div class="flex justify-between bg-maingreen">
            <div class="flex justify-between items-center gap-8 px-20">
                <a class="text-white text-sm">INGRESSO</a>
                <a class="text-white text-sm">NOSSOS CURSOS</a>
                <a class="text-white text-sm">ACESSO À INFORMAÇÃO</a>
            </div>

            <div class="flex justify-between items-center gap-5">
                <div class="flex items-center gap-3 px-5">
                    <img alt="Instagram" class="h-8" v-bind:src="require('@/assets/icons/insta.svg')"/>
                    <img alt="Twitter" class="h-8" v-bind:src="require('@/assets/icons/twitter.svg')"/>
                    <img alt="Youtube" class="h-8" v-bind:src="require('@/assets/icons/youtube.svg')"/>
                </div>
                <input type="text" class="bg-handglass bg-maingreen bg-no-repeat pl-10 w-28 rounded-xl"/>
                <button class="bg-white mr-16 p-4 text-maingreen tracking-wide">ENTRAR EM CONTATO</button>
            </div>        
        </div>
        
        <div class="flex justify-between items-center">
            <div class="flex  text-maingray gap-6 p-2 ml-20">
                <a class="p-5 text-maingray ">INÍCIO</a>
                <a class="p-5 text-maingray ">SOBRE NÓS</a>
                <a class="p-5">VANTAGENS</a>
            </div>
            <div class="flex  text-maingray gap-6 p-2 mr-20">
                <a class="p-5 text-maingray ">CAPACITAÇÃO</a>
                <a class="p-5 text-maingray ">TALENTOS</a>
                <a class="p-5">NOTÍCIAS</a>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    
}
</script>

<style lang="">
    
</style>