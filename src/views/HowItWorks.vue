<template lang="">
    <main class="flex justify-center items-center p-16">
        <div class="flex flex-col gap-10 px-20">
            <h1 class="text-4xl text-black font-semibold underline underline-offset-2 decoration-8 decoration-maingreen">Como funciona ?</h1>
            <hr class="bg-red-600 h-1"/>
            <div class="flex flex-col gap-5 text-maingray">
                <div class="flex gap-10">
                    <div class="flex flex-col gap-10">
                        <p>A EMBRAPII disponibiliza recursos financeiros não-reembolsáveis para o desenvolvimento de projetos de PD&I (Pesquisa,
                            Desenvolvimento e Inovação) a serem desenvolvidos por unidades credenciadas. O modelo de negócios oferecido é compartilhado
                            entre a empresa, o Polo de Inovação IFMG e a própria EMBRAPII. Assim, a empresa consegue aumentar a sua competitividade por
                            meio de investimentos em projetos inovadores, com custos e riscos reduzidos.
                        </p>
                    </div>
                    <img alt="Laboratório de sistemas automotivos IFMG - Campus Formiga" class="w-124 self-start" :src="require('@/assets/banners/participacao.jpg')" />
                </div>

                <p>Para que a empresa consiga contratar um projeto pelo modelo de negócios EMBRAPII, algumas características e requisitos devem ser atendidos:</p>

                <ul>
                    <p class="font-semibold">Características</p>
                    <li class="list-disc">Execução por equipe de pesquisadores do IFMG;</li>
                    <li class="list-disc">Execução sob acordo de confidencialidade;</li>
                    <li class="list-disc">Negociação direta com o Polo de Inovação IFMG, sem editais ou autorizações governamentais;</li>
                    <li class="list-disc">Gestão dos recursos financeiros feita pela FUNARBE;</li>
                    <li class="list-disc">Propriedade intelectual definida em contrato, com o auxílio do NIT.</li>
                </ul>

                <ul>
                    <p class="font-semibold">Requisitos</p>
                    <li class="list-disc">A empresa parceira deve possuir CNAE industrial nas faixas 5 a 33, 62.01-5 e 62.03-1 (ou adequá-lo no decorrer do desenvolvimento do projeto).</li>
                </ul>

                <div>
                    <h1 class="font-semibold">Como participar?</h1>
                    <p>Entre em contato com a equipe do Polo de Inovação IFMG:</p>
                    <p>prospeccao.polo@ifmg.edu.br</p>
                    <p>37 3322-8529</p>
                </div>
            </div>
        </div>
        <BackToTop />
    </main>
</template>

<script>
import BackToTop  from '@/components/buttons/BackToTop.vue';
export default {
    name:'HowItWorks',
    components:{
        BackToTop
    }
}
</script>
<style lang="">
    
</style>