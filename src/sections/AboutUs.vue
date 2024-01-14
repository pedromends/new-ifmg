<template lang="">
    <section class="px-12 py-24 mt-48 max-md:px-4">
        <div class="flex justify-center px-12 max-md:px-8">
            <div class="flex max-lg:flex-col gap-20">
                <div class="flex flex-col w-128 max-lg:w-auto gap-8">
                    <span class="text-maingreen font-bold">SOBRE O POLO</span>
                    <h1 class="font-extrabold tracking-wide text-4xl w-96 max-lg:w-auto">Somos um centro de inovação e pesquisa</h1>
                    <p class="w-full text-maingray">O Polo de Inovação IFMG é um centro de Pesquisa, Desenvolvimento e Inovação (PD&I), credenciado pela EMBRAPII (Empresa Brasileira de Pesquisa e Inovação Industrial) que valoriza e incentiva o desenvolvimento de projetos inovadores sob demanda das empresas.</p>
                    <p class="w-full text-maingray">O modelo de negócios EMBRAPII oferece a oportunidade de compartilhamento financeiro para projetos de PD&I. O valor do projeto é dividido entre a EMBRAPII (recursos não-reembolsáveis), a empresa e o Polo de Inovação IFMG, reduzindo assim os recursos a serem aportados pelas empresas parceiras.</p>
                    <button class="bg-maingreen text-white w-52 py-3 rounded-lg">Conheça o Projeto</button>
                </div>
                <div>
                    <img v-bind:src="require('@/assets/images/virtualglass.svg')" alt="Class with Virtual Glasses"/>
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