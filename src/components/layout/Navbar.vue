<template lang="">
    <nav class="w-full relative font-opensans max-lg:hidden">
        <section class="bg-white absolute right-1/2 transform translate-x-1/2 rounded-b-2xl">
            <img alt="" class="h-40 w-32 px-5 py-4" :src="require('@/assets/icons/main-logo.jpg')"/>
        </section>

        <section class="bg-govblue flex justify-between items-center py-1 text-lightgray font-raleway font-bold uppercase">
            <div class="flex justify-end items-center w-124 gap-10 text-xs">
                <img :src="require('@/assets/icons/govbr.svg')" alt=""/>
                <a class="border-r-2 border-white pr-2 hover:text-red-600" href="">COMUNICA BR</a>
                <a class="border-r-2 border-white pr-2 hover:text-red-600" href="">LEGISLAÇÃO</a>
            </div>
            <div class="flex justify-center items-center gap-3 text-xs pr-20">
                <a class="border-l-2 border-white pl-3 hover:text-red-600" href="">PARTICIPE</a>
                <a class="border-l-2 border-white pl-3 hover:text-red-600" href=""> ACESSO À INFORMAÇÃO</a>
                <a class="border-l-2 border-white pl-3 hover:text-red-600" href="">ÓRGÃOS DO GOVERNO</a>
            </div>
        </section>

        <section class="flex justify-between bg-maingreen">
            <div class="flex justify-between items-center gap-8 px-20 text-lightgray text-sm">
                <a class="hover:underline" href="#">INGRESSO</a>
                <a class="hover:underline" href="#">NOSSOS CURSOS</a>
                <a class="hover:underline" href="#">ACESSO À INFORMAÇÃO</a>
            </div>

            <div class="flex justify-between items-center gap-5">
                <div class="flex items-center gap-3 px-5">
                    <a href="https://www.instagram.com/poloifmg/" class="hover:bg-govblue rounded-2xl transition duration-200" target="_blank">
                        <img alt="Instagram" class="h-8" :src="require('@/assets/icons/insta.svg')"/>
                    </a>
                    <a href="" class="hover:bg-govblue rounded-2xl transition duration-200" target="_blank">
                        <img alt="Twitter" class="h-8" :src="require('@/assets/icons/twitter.svg')"/>
                    </a>
                    <a href="" class="hover:bg-govblue rounded-2xl transition duration-200" target="_blank">
                        <img alt="Youtube" class="h-8" :src="require('@/assets/icons/youtube.svg')"/>
                    </a>
                </div>
                <input type="text" class="bg-handglass hover:bg-handglass-blue bg-maingreen bg-no-repeat bg-contain pl-10 h-8 w-44 rounded-xl border-white text-white hover:border-govblue transition duration-200"/>
                <button class="bg-white mr-16 p-4 text-maingreen tracking-wide text-sm hover:underline hover:text-govblue">ACESSO P/ADM</button>
            </div>        
        </section>
        
        <section class="flex justify-between items-center">
            <div class="flex text-sm text-maingray gap-5 p-4 ml-14 max-lg:p-0">
                <a class="hover:text-black" href="#">INÍCIO</a>
                <a class="hover:text-black" href="#">QUEM SOMOS</a>
                <a class="hover:text-black" href="#">VANTAGENS</a>
                <a class="hover:text-black" href="#">NOTÍCIAS</a>
                <a class="hover:text-black" href="#">NOSSOS CURSOS</a>
            </div>
            <div class="flex text-sm text-maingray gap-5 p-2 mr-14 max-lg:p-0">
                <a class="hover:text-black" href="#">PESQUISADORES</a>
                <a class="hover:text-black" href="#">EDITAIS</a>
                <a class="hover:text-black" href="#">DOCUMENTOS</a>
                <a class="hover:text-black" href="#">CAPACITAÇÃO</a>
                <a class="hover:text-black" href="#">CONTATO</a>
            </div>
        </section>
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