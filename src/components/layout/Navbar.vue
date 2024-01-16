<template lang="">
    <nav class="w-full relative font-opensans max-lg:hidden">
        <div class="bg-white absolute right-1/2 transform translate-x-1/2 rounded-b-2xl">
            <img alt="" class="h-40 w-32 px-5 py-4" :src="require('@/assets/icons/main-logo.jpg')"/>
        </div>

        <div class="bg-govblue flex justify-between items-center py-1 text-lightgray font-raleway font-bold uppercase">
            <div class="flex justify-end items-center w-124 gap-10 text-xs">
                <img :src="require('@/assets/icons/govbr.svg')" alt=""/>
                <a class="border-r-2 border-white pr-2" href="">COMUNICA BR</a>
                <a class="border-r-2 border-white pr-2" href="">LEGISLAÇÃO</a>
            </div>
            <div class="flex justify-center items-center gap-3 text-xs pr-20">
                <a class="border-l-2 border-white pl-3" href="">PARTICIPE</a>
                <a class="border-l-2 border-white pl-3" href=""> ACESSO À INFORMAÇÃO</a>
                <a class="border-l-2 border-white pl-3" href="">ÓRGÃOS DO GOVERNO</a>
            </div>
        </div>

        <div class="flex justify-between bg-maingreen">
            <div class="flex justify-between items-center gap-8 px-20">
                <a class="text-white text-sm">INGRESSO</a>
                <a class="text-white text-sm">NOSSOS CURSOS</a>
                <a class="text-white text-sm">ACESSO À INFORMAÇÃO</a>
            </div>

            <div class="flex justify-between items-center gap-5">
                <div class="flex items-center gap-3 px-5">
                    <a href="https://www.instagram.com/poloifmg/" target="_blank">
                        <img alt="Instagram" class="h-8" :src="require('@/assets/icons/insta.svg')"/>
                    </a>
                    <a href="" target="_blank">
                        <img alt="Twitter" class="h-8" :src="require('@/assets/icons/twitter.svg')"/>
                    </a>
                    <a href="" target="_blank">
                        <img alt="Youtube" class="h-8" :src="require('@/assets/icons/youtube.svg')"/>
                    </a>
                </div>
                <input type="text" class="bg-handglass bg-maingreen bg-no-repeat pl-10 w-44 rounded-xl border-white"/>
                <button class="bg-white mr-16 p-4 text-maingreen tracking-wide text-sm">ACESSO P/ADM</button>
            </div>        
        </div>
        
        <div class="flex justify-between items-center">
            <div class="flex text-sm text-maingray gap-5 p-4 ml-14 max-lg:p-0">
                <a href="#">INÍCIO</a>
                <a href="#">QUEM SOMOS</a>
                <a href="#">VANTAGENS</a>
                <a href="#">NOTÍCIAS</a>
                <a href="#">NOSSOS CURSOS</a>
            </div>
            <div class="flex text-sm text-maingray gap-5 p-2 mr-14 max-lg:p-0">
                <a href="#">PESQUISADORES</a>
                <a href="#">EDITAIS</a>
                <a href="#">DOCUMENTOS</a>
                <a href="#">CAPACITAÇÃO</a>
                <a href="#">CONTATO</a>
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