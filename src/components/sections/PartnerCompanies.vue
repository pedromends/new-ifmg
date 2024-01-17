<template lang="">
    <section class="flex justify-center items-center bg-lightgray p-32">
        <div class="flex flex-col justify-center items-center gap-12">
            <div class="flex flex-col justify-center items-center gap-5">
                <h1 class="text-4xl font-semibold max-lg:text-center">Nossos Clientes</h1>
                <p class="text-sm text-maingray max-lg:text-center">
                    Empresas que fizeram ou fazem projetos com o Polo de Inovação IFMG.
                </p>
            </div>
            <div class="bg-whitecircle bg-no-repeat bg-center">
                <div class="grid max-lg:grid-rows-1 grid-rows-3 gap-5 items-center py-24">
                    <div class="flex max-lg:flex-col justify-center gap-3 items-center">
                        <CompanyModal :img="'reachr'" :headName="'head-reachr'" :headBody="'heading-reachr'"
                        :modalname="'modal-reacher'" :company="'Reachr'"
                        :resume="'Desenvolvimento de uma ferramenta para geração automática de job description e de resposta negativa baseado em ' +
                        'inteligência artificial generativa para utilização em tempo real e de forma integrada sobre os campos de preenchimento dos ' +
                        'dados de um sistema de recrutamento e de seleção de pessoas candidatas às vagas de emprego disponibilizadas pela empresa REACHR.'" :accID="'accordion-reachr'" />

                        <CompanyModal :img="'prumo'" :headName="'head-prumo'" :headBody="'heading-prumo'"
                        :modalname="'modal-prumo'" :company="'Prumo Engenharia'"
                        :resume="'Construção de um sistema que permitirá que a empresa possa identificar oportunidades de negócio de forma automatizada,' +
                        'que uma vez fechado um contrato, possa realizar toda a mobilização necessária para início da obra e que possa rastrear' +
                        'equipamentos de interesse em campo.'" :accID="'accordion-prumo'" />

                        <CompanyModal :img="'isobloco'" :headName="'head-isobloco'" :headBody="'heading-isobloco'"
                        :modalname="'modal-isobloco'" :company="'Isobloco'"
                        :resume="'Informação do projeto'" :accID="'accordion-isobloco'" />
                    </div>

                    <div class="flex max-lg:flex-col justify-center gap-3 items-center">
                        <CompanyModal :img="'hf'" :headName="'head-hf'" :headBody="'heading-hf'" 
                        :modalname="'modal-hf'" :company="'Metalúrgica HF'"
                        :accID="'accordion-hf'"
                        :resume="'Desenvolvimento de um sistema de comunicação para otimizar o processo de produção de concertinas da empresa, a partir de um computador central.'" />

                        <CompanyModal :img="'avante'" :headName="'head-avante'" :headBody="'heading-avante'" 
                        :modalname="'modal-avante'" :company="'Avante Soluções Digitais'"
                        :accID="'accordion-avante'"
                        :resume="'Desenvolvimento de uma ferramenta para auxiliar vendedores itinerantes em seu controle financeiro.'" />

                        <CompanyModal :img="'iotew'" :headName="'head-iotew'" :headBody="'heading-iotew'" 
                        modalname="'modal-iotew'" :company="'IoteW'"
                        :accID="'accordion-iotew'"
                        :resume="'Desenvolvimento de componentes de uma solução tecnológica de software, destinada ao monitoramento remoto da operação de elevadores instalados em edifícios em geral.'" />

                        <CompanyModal :img="'infinite'" :headName="'head-infinite'" :headBody="'heading-infinite'"
                        :modalname="'modal-infinite'" :company="'Infinite'"
                        :accID="'accordion-infinite'"
                        :resume="'Desenvolvimento de hardware para controlador de tracker solar de um grau de liberdade, baseado em sensores ambientais e posição do Sol relativa ao painel solar.'" />
                    </div>

                    <div class="flex max-lg:flex-col justify-center gap-3 items-center">
                        <CompanyModal :img="'aiko'" :headName="'head-aiko'" :headBody="'heading-aiko'"
                        :modalname="'modal-aiko'" :company="'Aiko'"
                        :accID="'accordion-aiko'"
                        :resume="'Desenvolvimento de um escalonador de tarefas inteligente para processos operacionais genéricos.'" />

                        <CompanyModal :img="'google'" :headName="'head-google'" :headBody="'heading-google'"
                        :modalname="'modal-google'" :company="'Google'"
                        :accID="'accordion-google'"
                        :resume="'Informação do projeto'"  />

                        <CompanyModal :img="'celulaweb'" :headName="'head-celula'" :headBody="'heading-celula'"
                        :modalname="'modal-celulaweb'" :company="'Celula Web'"
                        :accID="'accordion-celula'"
                        :resume="'Desenvolvimento de um sistema inteligente que possibilite o registro de ponto eletrônico em ambientes de baixa conectividade.'" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import CompanyModal from '@/components/modal/CompanyModal.vue';

export default {
    name: 'PartnerCompanies',
    components: {
        CompanyModal
    },
    props: {
    }
}
</script>
<style lang="">
    
</style>