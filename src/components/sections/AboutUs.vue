<template lang="">
    <section id="aboutus" class="px-12 py-24 mt-16 max-lg:px-4 ">
        <div class="flex justify-center px-12 max-lg:px-8">
            <div class="flex max-lg:flex-col gap-24">
                <div class="flex flex-col w-140 max-lg:w-auto gap-8 max-lg:mt-10">
                    <span class="text-maingreen font-bold text-sm underline decoration-red-600 decoration-2">QUEM SOMOS</span>
                    <h1 class="font-bold text-4xl w-96 max-lg:w-auto">Somos um centro de inovação e pesquisa</h1>
                    <p class="w-full text-maingray">O Polo de Inovação IFMG é um centro de Pesquisa, Desenvolvimento e Inovação (PD&I), credenciado pela EMBRAPII (Empresa Brasileira de Pesquisa e Inovação Industrial)
                        que valoriza e incentiva o desenvolvimento de projetos inovadores sob demanda das empresas.
                    </p>
                    <p class="w-full text-maingray">O modelo de negócios EMBRAPII oferece a oportunidade de compartilhamento financeiro para projetos de PD&I. O valor do projeto é dividido entre a EMBRAPII
                        (recursos não-reembolsáveis), a empresa e o Polo de Inovação IFMG, reduzindo assim os recursos a serem aportados pelas empresas parceiras.
                    </p>
                    <p class="w-full text-maingray">O Polo de Inovação IFMG atua na aproximação das empresas com o setor acadêmico, desenvolvendo projetos relacionados a área de Mobilidade e Sistemas Inteligentes,
                        assim como em diversas subáreas, sendo algumas delas: gestão de ativos móveis, otimização de processos, transporte e sistemas automotivos.
                    </p>
                    <!-- Ir para página explicando tudo sobre o polo -->
                    <router-link class="bg-maingreen text-white w-40 py-3 rounded-lg border-2 border-white font-semibold hover:border-maingreen hover:bg-white hover:text-maingreen transition duration-300 text-center"
                        to="/institutional">
                        Saiba Mais
                    </router-link>
                </div>
                <div class="flex items-center">
                    <img v-bind:src="require('@/assets/images/virtualglass.svg')" class="w-160" alt="Class with Virtual Glasses"/>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'AboutUs',
    props: {
        num: Number,
        text: String
    }
}
</script>
<style lang="">
    
</style>