<template lang="">
    <section class="flex justify-center items-center p-10">
        <div class="flex flex-col gap-10 px-20">
            <h1 class="text-4xl text-black font-semibold underline underline-offset-2 decoration-8 decoration-maingreen">Editais</h1>
            <hr class="bg-red-600 h-1"/>
            <div class="flex flex-col gap-5 text-maingray">
                <div>
                    <h1>Abertos</h1>
                </div>
                <div>
                    <h1>Fechados</h1>
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
    </section>
</template>
<script>
export default {
    name: 'EdictsPage',
    components:{
    },
    props: {
    }
}
</script>
<style lang="">
    
</style>