<template lang="">
    <section id="ourclients" class="flex justify-center items-center bg-lightgray p-5">
        <div class="flex flex-col justify-center items-center gap-5 mt-5">
            <div class="flex flex-col justify-center items-center gap-5">
                <h1 class="text-4xl font-semibold max-lg:text-center">Nossos Clientes</h1>
                <p class="text-sm text-maingray max-lg:text-center">
                    Empresas que fizeram ou fazem projetos com o Polo de Inovação IFMG.
                </p>
            </div>
            <div class="bg-whitecircle bg-no-repeat bg-center">
                <div class="grid max-lg:grid-rows-1 grid-rows-3 items-center py-6">
                    <div class="flex max-lg:flex-col justify-center gap-3 items-center">
                        <CompanyModal :path="'images/negocIA.png'" :headName="'head-negocia'" :headBody="'heading-negocia'"
                        :modalname="'modal-negocia'" :company="'NegocIA'"
                        :accID="'accordion-negocia'"
                        :resume="'Informação do projeto negocia'" :extraClass="'h-20'" />

                        <CompanyModal :path="'icons/prumo.svg'" :headName="'head-prumo'" :headBody="'heading-prumo'"
                        :modalname="'modal-prumo'" :company="'Prumo Engenharia'"
                        :resume="'Construção de um sistema que permitirá que a empresa possa identificar oportunidades de negócio de forma automatizada,' +
                        'que uma vez fechado um contrato, possa realizar toda a mobilização necessária para início da obra e que possa rastrear' +
                        'equipamentos de interesse em campo.'" :accID="'accordion-prumo'" />

                        <CompanyModal :path="'icons/isobloco.svg'" :headName="'head-isobloco'" :headBody="'heading-isobloco'"
                        :modalname="'modal-isobloco'" :company="'Isobloco'"
                        :resume="'Informação do projeto'" :accID="'accordion-isobloco'" />

                        <CompanyModal :path="'icons/infinite.svg'" :headName="'head-infinite'" :headBody="'heading-infinite'"
                        :modalname="'modal-infinite'" :company="'Infinite'"
                        :accID="'accordion-infinite'"
                        :resume="'Desenvolvimento de hardware para controlador de tracker solar de um grau de liberdade, baseado em sensores ambientais e posição do Sol relativa ao painel solar.'" />
                    </div>

                    <div class="flex max-lg:flex-col justify-center gap-3 items-center">
                        <CompanyModal :path="'icons/reachr.svg'" :headName="'head-reachr'" :headBody="'heading-reachr'"
                        :modalname="'modal-reacher'" :company="'Reachr'"
                        :resume="'Desenvolvimento de uma ferramenta para geração automática de job description e de resposta negativa baseado em ' +
                        'inteligência artificial generativa para utilização em tempo real e de forma integrada sobre os campos de preenchimento dos ' +
                        'dados de um sistema de recrutamento e de seleção de pessoas candidatas às vagas de emprego disponibilizadas pela empresa REACHR.'" :accID="'accordion-reachr'" />

                        <CompanyModal :path="'images/mauricio.png'" :headName="'head-mauricio'" :headBody="'heading-mauricio'" 
                        :modalname="'modal-mauricio'" :company="'Maurício Vilaça (Engenharia e Automação)'"
                        :accID="'accordion-mauricio'" :extraClass="'h-20'"/>
                        
                        <CompanyModal :path="'images/ecologica.jpg'" :headName="'head-ecologica'" :headBody="'heading-ecologica'" 
                        modalname="'modal-ecologica'" :company="'Ecológica Gestão Inteligente de Residuos'"
                        :accID="'accordion-ecologica'"
                        :resume="'Texto ecologica.'" :extraClass="'h-20'"/>
                    </div>

                    <div class="flex max-lg:flex-col justify-center gap-3 items-center">
                        <CompanyModal :path="'images/sema.png'" :headName="'head-sema'" :headBody="'heading-sema'" 
                        :modalname="'modal-sema'" :company="'SEMA-SEG Sinalização Viária'"
                        :accID="'accordion-sema'"
                        :resume="'Texto Sema.'" :extraClass="'h-32'"/>

                        <CompanyModal :path="'icons/avante.svg'" :headName="'head-avante'" :headBody="'heading-avante'" 
                        :modalname="'modal-avante'" :company="'Avante Soluções Digitais'"
                        :accID="'accordion-avante'"
                        :resume="'Desenvolvimento de uma ferramenta para auxiliar vendedores itinerantes em seu controle financeiro.'" />

                        <CompanyModal :path="'icons/celulaweb.svg'" :headName="'head-celula'" :headBody="'heading-celula'"
                        :modalname="'modal-celulaweb'" :company="'Celula Web'"
                        :accID="'accordion-celula'"
                        :resume="'Desenvolvimento de um sistema inteligente que possibilite o registro de ponto eletrônico em ambientes de baixa conectividade.'" />
                        
                        <CompanyModal :path="'images/engeoil.webp'" :headName="'head-engeoil'" :headBody="'heading-engeoil'"
                        :modalname="'modal-engeoil'" :company="'Engeoil'" :extraClass="'h-20'"
                        :accID="'accordion-engeoil'"  :resume="'Texto engeoil.'" />     
                    </div>

                    <div class="flex max-lg:flex-col justify-center gap-3 items-center">
                        <CompanyModal :path="'icons/hf.svg'" :headName="'head-hf'" :headBody="'heading-hf'" 
                        :modalname="'modal-hf'" :company="'Metalúrgica HF'"
                        :accID="'accordion-hf'"
                        :resume="'Desenvolvimento de um sistema de comunicação para otimizar o processo de produção de concertinas da empresa, a partir de um computador central.'" />

                        <CompanyModal :path="'icons/iotew.svg'" :headName="'head-iotew'" :headBody="'heading-iotew'" 
                        modalname="'modal-iotew'" :company="'IoteW'"
                        :accID="'accordion-iotew'"
                        :resume="'Desenvolvimento de componentes de uma solução tecnológica de software, destinada ao monitoramento remoto da operação de elevadores instalados em edifícios em geral.'" />
                        
                        <CompanyModal :path="'icons/aiko.svg'" :headName="'head-aiko'" :headBody="'heading-aiko'"
                        :modalname="'modal-aiko'" :company="'Aiko'"
                        :accID="'accordion-aiko'"
                        :resume="'Desenvolvimento de um escalonador de tarefas inteligente para processos operacionais genéricos.'" />
                    </div>

                    <div class="flex max-lg:flex-col justify-center gap-3 items-center">
                        <CompanyModal :path="'images/idealize.png'" :headName="'head-idealize'" :headBody="'heading-idealize'" 
                        :modalname="'modal-idealize'" :company="'Idealize'"
                        :accID="'accordion-idealize'" :extraClass="'h-16'"
                        :resume="'Desenvolvimento de um sistema de comunicação para otimizar o processo de produção de concertinas da empresa, a partir de um computador central.'" />

                        <CompanyModal :path="'images/prodoeste.jpeg'" :headName="'head-prodoeste'" :headBody="'heading-prodoeste'" 
                        :modalname="'modal-prodoeste'" :company="'Avante Soluções Digitais'"
                        :accID="'accordion-prodoeste'" :extraClass="'h-24'"
                        :resume="'Desenvolvimento de uma ferramenta para auxiliar vendedores itinerantes em seu controle financeiro.'" />

                        <CompanyModal :path="'images/aratu.png'" :headName="'head-aratu'" :headBody="'heading-aratu'" 
                        modalname="'modal-aratu'" :company="'Aratu'"
                        :accID="'accordion-aratu'" :extraClass="'h-24'"
                        :resume="'Desenvolvimento de componentes de uma solução tecnológica de software, destinada ao monitoramento remoto da operação de elevadores instalados em edifícios em geral.'" />

                        <CompanyModal :path="'images/totalapoio.png'" :headName="'head-totalapoio'" :headBody="'heading-totalapoio'"
                        :modalname="'modal-totalapoio'" :company="'AvanteTech e Total Apoio'"
                        :accID="'accordion-totalapoio'" :extraClass="'h-20'"
                        :resume="'Desenvolvimento de hardware para controlador de tracker solar de um grau de liberdade, baseado em sensores ambientais e posição do Sol relativa ao painel solar.'" />
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