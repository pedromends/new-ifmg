<template lang="">
    <main class="flex justify-center items-center p-10 max-lg:mt-10">
        <div class="flex flex-col gap-10 px-20 max-lg:px-5">
            <h1 class="text-4xl text-black font-semibold underline underline-offset-2 decoration-8 decoration-maingreen">Institucional</h1>
            <hr class="bg-red-600 h-1"/>
            <div class="flex flex-col gap-5 text-maingray">
                <div class="flex gap-5 max-lg:flex-col-reverse">
                    <div class="flex flex-col gap-10 max-lg:text-sm">
                        <p>Em 2014 o IFMG firmou convênio de cooperação com a hoje, Fiat Chrysler Automobiles para desenvolvimento de projeto de pesquisa e desenvolvimento de soluções
                            técnicas para sistemas embarcados e softwares de autodiagnóstico e rede. Um dos resultados desta parceria foi o laboratório de sistemas automotivos localizado
                            no IFMG Campus Formiga, que pode após desenvolvimento do projeto ser empregado em outras pesquisas, assim como aulas.
                        </p>
                        <p>A experiência com diversos projetos de pesquisa, mas em especial com este citado, assim como o know-how adquirido pelos docentes/pesquisadores do IFMG produziu
                            o ambiente necessário para o credenciamento do Polo de Inovação IFMG no âmbito da chamada pública 02/2014 da EMBRAPII (Empresa Brasileira de Pesquisa e Inovação Industrial),
                            inicialmente com área de atuação em "Sistemas Automotivos Inteligentes".
                        </p>
                    </div>
                    <img alt="Laboratório de sistemas automotivos IFMG - Campus Formiga" class="w-116 self-start" :src="require('@/assets/banners/laboratorio-fiat.jpeg')" />
                </div>
                <p class="max-lg:text-sm">
                    Já no final de 2018, o Polo de Inovação IFMG adequou sua área de atuação para "Mobilidade e Sistemas Inteligentes", passando a atuar em diversas sublinhas, mas com destaque
                    para: “Gestão de Ativos Móveis”, "Sistemas Automotivos e Transportes", assim como "Otimização de processos".
                </p>
                <p class="max-lg:text-sm">
                    Credenciado pela EMBRAPII o Polo de Inovação IFMG é um centro de Pesquisa, Desenvolvimento e Inovação (PD&I). Com o principal objetivo de desenvolver projetos que explorem
                    a união entre o meio acadêmico e o setor produtivo. Criando soluções inovadoras capazes de solucionar problemas e aumentar a competitividade das empresas nacionais. Importante
                    citar que o Polo de Inovação IFMG está presente em todos os 18 campis do Instituto Federal de Minas Gerais, sendo assim um ente institucional e capaz de ramificar sua atuação
                    em diversas macro regiões do estado.
                </p>
                <img alt="Relação dos Campi do Instituto Federal de Minas Gerais" class="self-center" :src="require('@/assets/banners/mapa.jpeg')" />
            </div>
        </div>
        <BackToTop />
    </main>
</template>

<script>
import BackToTop  from '@/components/buttons/BackToTop.vue';

export default {
    name:'InstituTional',
    components:{
        BackToTop
    }
}
</script>
<style lang="">
    
</style>