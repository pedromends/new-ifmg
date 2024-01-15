<template lang="">
    <nav class="w-full relative font-opensans max-lg:hidden">
        <div class="bg-white absolute right-1/2 transform translate-x-1/2 rounded-b-2xl">
            <img alt="" class="h-40 w-32 px-6" v-bind:src="require('@/assets/icons/main-logo.svg')"/>
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
                <button class="bg-white mr-16 p-4 text-maingreen tracking-wide text-sm">ACESSO P/ADM</button>
            </div>        
        </div>
        
        <div class="flex justify-between items-center">
            <div class="flex text-sm text-maingray gap-14 p-4 ml-20 max-lg:p-0">
                <a class="">INÍCIO</a>
                <a class="">QUEM SOMOS</a>
                <a class="">VANTAGENS</a>
                <a class="">NOTÍCIAS</a>
                <a class="">NOSSOS CURSOS</a>
            </div>
            <div class="flex text-sm text-maingray gap-14 p-2 mr-20 max-lg:p-0">
                <a class="">PESQUISADORES</a>
                <a class="">EDITAIS</a>
                <a class="">DOCUMENTOS</a>
                <a class="">CAPACITAÇÃO</a>
                <a class="">CONTATO</a>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
    components:{
    },
    props: {

    }
}
</script>

<style lang="">
    
</style>