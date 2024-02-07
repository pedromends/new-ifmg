<template lang="">
    <main class="flex justify-start items-center p-10 ">
        <div class="flex flex-col gap-10 px-20 w-full">
            <h1 class="text-4xl text-black font-semibold underline underline-offset-2 decoration-8 decoration-maingreen">Editais</h1>
            <hr class="bg-red-600 h-1"/>
            <div class="flex flex-col gap-5 text-maingray">
                <div>
                    <h1 class="font-semibold">Abertos</h1>
                    <ul class="flex flex-col gap-1 text-blue-700">
                        <a href="" class="hover:underline">Edital de Fluxo Contínuo para Cadastro de Pesquisadores</a>
                        <a href="" class="hover:underline">Edital 2</a>
                        <a href="" class="hover:underline">Edital 3</a>
                        <a href="" class="hover:underline">Edital 4</a>
                        <a href="" class="hover:underline">Edital 5</a>
                    </ul>
                </div>
                <div>
                    <h1 class="font-semibold">Fechados</h1>
                    <ul class="flex flex-col gap-1 text-blue-700">
                        <a href="" class="hover:underline">Edital 6</a>
                        <a href="" class="hover:underline">Edital 7</a>
                        <a href="" class="hover:underline">Edital 8</a>
                        <a href="" class="hover:underline">Edital 9 </a>
                        <a href="" class="hover:underline">Edital 10</a>
                    </ul>
                </div>
                <!-- TODO: Criar CRUD de editais com as seguintes informações -->
                <!-- Título do Edital -->
                <!-- Número - Ano -->
                <!-- Breve Descrição -->
                <!-- Link p inscrição -->
                <!-- Arquivo em PDF-->
                <!-- Imagem p/ divulgação -->
            </div>
        </div>
        <BackToTop />
    </main>
</template>

<script>
import BackToTop  from '@/components/buttons/BackToTop.vue';

export default {
    name: 'EdictsPage',
    components:{
        BackToTop
    },
    props: {
    }
}
</script>
<style lang="">
    
</style>