<template lang="">
    <section id="ourclients" class="flex justify-center items-center bg-lightgray py-10">
        <div class="flex flex-col justify-center items-center gap-5 mt-5">
            <div class="flex flex-col justify-center items-center gap-5">
                <h1 class="text-4xl font-semibold max-lg:text-center">Nossos Clientes</h1>
                <p class="text-sm text-maingray max-lg:text-center">
                    Empresas que fizeram ou fazem projetos com o Polo de Inovação IFMG.
                </p>
                <div class="flex items-center gap-5 w-full">
                <input type="text" placeholder="Pesquisar..." class="w-full rounded-lg"/>
                    <img alt="Laboratório de sistemas automotivos IFMG - Campus Formiga" class=" bg-maingreen px-4 rounded-lg" :src="require('@/assets/icons/hand-glass.svg')" />
                </div>
            </div>
            <div class="bg-whitecircle bg-no-repeat bg-center">
                <div class="h-112 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-maingreen">
                    <div class="grid max-lg:grid-rows-1 grid-rows-3 items-center py-6 mx-8">
                        <div class="flex max-lg:flex-col justify-center gap-3 items-center">
                            <CompanyModal :path="'images/negocIA.png'" :headName="'head-negocia'" :headBody="'heading-negocia'"
                            :modalname="'modal-negocia'" :company="'NegocIA'" :projName="'Sistema Inteligente de Negociação Algorítmica (SINAL)'"
                            :coorName="'Rodrigo Menezes Sobral Zacaroni (Campus Formiga)'" :situ="'Em andamento'"
                            :accID="'accordion-negocia'" :extraClass="'h-20'" :value="'502.000,00'"
                            :resume="'Desenvolvimento de um sistema inteligente para tomada de decisão automatizada em negociações no mercado financeiro em escala de maturidade tecnológica ' + 
                            'STRL 8 (Sistema totalmente completo, testado, qualificado e demonstrado), utilizando técnicas modernas de inteligência artificial, que leva em consideração dados ' +
                            'de fluxo de ordens com foco no Minicontrato Futuro de Índice Bovespa que é negociado sob código WIN na bolsa de valores brasileira B3.'"/>

                            <CompanyModal :path="'icons/prumo.svg'" :headName="'head-prumo'" :headBody="'heading-prumo'"
                            :modalname="'modal-prumo'" :company="'Prumo Engenharia'" :value="'1.220.000,000'"
                            :resume="'Construção de um sistema que permitirá que a empresa possa identificar oportunidades de negócio de forma automatizada, ' +
                            'que uma vez fechado um contrato, possa realizar toda a mobilização necessária para início da obra e que possa rastrear ' +
                            'equipamentos de interesse em campo.'" :accID="'accordion-prumo'" :extraClass="'h-20'"
                            :projName="'Plataforma Prumo de Inteligência Operacional'" :coorName="'Manoel Pereira Junior (Campus Formiga)'" :situ="'Em andamento'"/>

                            <CompanyModal :path="'icons/isobloco.svg'" :headName="'head-isobloco'" :headBody="'heading-isobloco'"
                            :modalname="'modal-isobloco'" :company="'Isobloco'" :accID="'accordion-isobloco'" :value="'450.000,00'" :extraClass="'h-20'"
                            :resume="'Controle da cadeia produtiva de kits pré-moldados e/ou concreto para construção civil da empresa Isobloco.'"
                            :projName="'Sistema de Controle de Produção Inteligente'" :coorName="'Manoel Pereira Junior (Campus Formiga)'" :situ="'Em garantia'" />

                            <CompanyModal :path="'icons/infinite.svg'" :headName="'head-infinite'" :headBody="'heading-infinite'"
                            :modalname="'modal-infinite'" :company="'Infinite Photon'" :accID="'accordion-infinite'" :extraClass="'h-20'"
                            :projName="'Desenvolvimento de Sistema de Controle, Automação e Configuração de um Rastreador Solar Fotovoltaico'"
                            :coorName="'Carlos Dias da Silva Júnior (Campus Ibirité)'" :situ="'Em garantia'" :value="' 235.000,00'"
                            :resume="'Desenvolvimento de hardware para controlador de tracker solar de um grau de liberdade, baseado em sensores ambientais e ' +
                            'posição do Sol relativa ao painel solar.'" />

                            <CompanyModal :path="'icons/reachr.svg'" :headName="'head-reachr'" :headBody="'heading-reachr'"
                            :modalname="'modal-reacher'" :company="'Reachr'" :accID="'accordion-reachr'" :value="'111.000,00'" :extraClass="'h-20'"
                            :projName="'Módulo para Geração de Job Description e de Resposta Negativa com Inteligência Artificial Generativa'"
                            :coorName="'Moisés Henrique Ramos Pereira (Campus Ribeirão das Neves)'" :situ="'Em andamento'"
                            :resume="'Desenvolvimento de uma ferramenta para geração automática de job description e de resposta negativa baseado em ' +
                            'inteligência artificial generativa para utilização em tempo real e de forma integrada sobre os campos de preenchimento dos ' +
                            'dados de um sistema de recrutamento e de seleção de pessoas candidatas às vagas de emprego disponibilizadas pela empresa REACHR.'"/>

                            <CompanyModal :path="'images/mauricio.png'" :headName="'head-mauricio'" :headBody="'heading-mauricio'" 
                            :modalname="'modal-mauricio'" :company="'Maurício Vilaça (Engenharia e Automação)'" :value="'105.000,00'"
                            :accID="'accordion-mauricio'" :extraClass="'h-20'" :projName="'Sistema microcontrolado para monitoramento e controle com comunicação sem fio aplicável em ambientes rurais'"
                            :coorName="'Patrick Santos de Oliveira (Campus Formiga)'" :situ="'Concluído'"
                            :resume="'Desenvolvimento de um sistema sem fio microcontrolado para monitoramento e controle de aplicações em ambiente rural de pequeno, médio e grande porte, para assim ' +
                            'prover maior segurança e controle sobre o ambiente, evitando perdas decorrentes da falta de automação dos sistemas atualmente empregados.'"/>
                        </div>

                        <div class="flex max-lg:flex-col justify-center gap-3 items-center">
                            <CompanyModal :path="'images/ecologica.jpg'" :headName="'head-ecologica'" :headBody="'heading-ecologica'" 
                            modalname="'modal-ecologica'" :company="'Ecológica Gestão Inteligente de Residuos'" :value="'327.000,00'"
                            :accID="'accordion-ecologica'" :projName="'ECOSMART'" :coorName="'Virgil Del Duca Almeida (Campus Betim)'" :situ="'Em andamento'"
                            :resume="'Desenvolvimento do sistema de cobrança pela prestação do serviço de manejo de resíduos.'" :extraClass="'h-20'"/>

                            <CompanyModal :path="'images/sema.png'" :headName="'head-sema'" :headBody="'heading-sema'" 
                            :modalname="'modal-sema'" :company="'SEMA-SEG Sinalização Viária'" :accID="'accordion-sema'"
                            :projName="'Semáforo Inteligente para Controle de Fluxo Mediante Detecção de Presença'" :coorName="'Niltom Vieira Junior (Campus Arcos)'"
                            :situ="'Concluído'" :extraClass="'h-32'" :value="'200.000,00'"
                            :resume="'Desenvolvimento um sistema inteligente para controle semafórico, para que na inexistência de veículos em rota de colisão, o controle de fluxo seja otimizado ' + 
                            'e sejam evitadas esperas desnecessárias.'"/>

                            <CompanyModal :path="'icons/avante.svg'" :headName="'head-avante'" :headBody="'heading-avante'" 
                            :modalname="'modal-avante'" :company="'Avante Soluções Digitais'" :accID="'accordion-avante'" 
                            :projName="'Sistema Inteligente para Controle Financeiro de Vendedores Itinerantes'" :extraClass="'h-16'"
                            :coorName="'Manoel Pereira Júnior (Campus Formiga)'" :situ="'Concluído'" :value="'1.044.000,00'"
                            :resume="'Desenvolvimento de uma ferramenta para auxiliar vendedores itinerantes em seu controle financeiro.'" />

                            <CompanyModal :path="'icons/celulaweb.svg'" :headName="'head-celula'" :headBody="'heading-celula'"
                            :modalname="'modal-celulaweb'" :company="'Celula Web'" :accID="'accordion-celula'" :extraClass="'h-20'"
                            :projName="'Sistema Inteligente de Ponto Eletrônico e Produção Integrado à Veículo Automotor para Ambientes de Baixa Conectividade'" 
                            :coorName="'Paloma Maira de Oliveira (Campus Formiga)'" :situ="'Concluído'" :value="'150.000,00'"
                            :resume="'Desenvolvimento de um sistema inteligente que possibilite o registro de ponto eletrônico em ambientes de baixa conectividade.'" />
                            
                            <CompanyModal :path="'images/engeoil.webp'" :headName="'head-engeoil'" :headBody="'heading-engeoil'"
                            :modalname="'modal-engeoil'" :company="'Engeoil'" :extraClass="'h-20'" 
                            :accID="'accordion-engeoil'" :value="'278.000,00'"
                            :projName="'Aplicação combinada de Modos e Efeitos de Falhas (FMEA) com Inteligência Artificial (IA) na Gestão da Manutenção'"
                            :coorName="'Diego Oliveira Miranda (Campus Sabará)'" :situ="'Em andamento'"
                            :resume="'Desenvolvimento de um protótipo de uma aplicação (software) que se baseia no histórico de laudos das análises de óleos para identificar tendências/anormalidades e, ' + 
                            'com isso, identificar mais precisamente os modos de falha, contribuindo para a construção de um plano eficiente de manutenção preditiva, tendo como base a técnica de gestão da manutenção ' + 
                            'denominada Modos e Efeitos de Falhas (Failure Modes and Effects Analysis [FMEA]).'"/>

                            <CompanyModal :path="'icons/hf.svg'" :headName="'head-hf'" :headBody="'heading-hf'" 
                            :modalname="'modal-hf'" :company="'Metalúrgica HF'" :value="'117.000,00'" :extraClass="'h-20'"
                            :accID="'accordion-hf'" :projName="'Sistema de Comunicação para Otimização de Processo de Produção de Concertina'"
                            :coorName="'Patrick Santos de Oliveira (Campus Formiga)'" :situ="'Concluído'"
                            :resume="'Desenvolvimento de um sistema de comunicação para otimizar o processo de produção de concertinas da empresa, a partir de um computador central.'" />
                        </div>

                        <div class="flex max-lg:flex-col justify-center gap-3 items-center">
                            <CompanyModal :path="'icons/iotew.svg'" :headName="'head-iotew'" :headBody="'heading-iotew'" :extraClass="'h-20'"
                            modalname="'modal-iotew'" :company="'IoteW'" :accID="'accordion-iotew'" :value="'185.000,00'" :situ="'Concluído'"
                            :projName="'Monitoramento Inteligente de Elevadores Prediais'" :coorName="'Manoel Pereira Júnior (Campus Formiga)'" 
                            :resume="'Desenvolvimento de componentes de uma solução tecnológica de software, destinada ao monitoramento remoto da operação de elevadores instalados em edifícios em geral.'" />
                            
                            <CompanyModal :path="'icons/aiko.svg'" :headName="'head-aiko'" :headBody="'heading-aiko'"
                            :modalname="'modal-aiko'" :company="'Aiko'" :accID="'accordion-aiko'" :value="'330.000,00'" :extraClass="'h-20'"
                            :projName="'Escalonador Inteligente para Veículos e Ativos Móveis'" :coorName="'Manoel Pereira Júnior (Campus Formiga)'" :situ="'Concluído'"
                            :resume="'Desenvolvimento de um escalonador de tarefas inteligente para processos operacionais genéricos.'" />

                            <CompanyModal :path="'images/idealize.png'" :headName="'head-idealize'" :headBody="'heading-idealize'" 
                            :modalname="'modal-idealize'" :company="'Idealize'" :accID="'accordion-idealize'" :extraClass="'h-16'"
                            :projName="'Carro Verde - Um Arcabouço de Coleta e Descoberta de Informação na Web - Uma Abordagem Semiautomática'"
                            :coorName="'Bruno Ferreira (Campus Formiga)'" :situ="'Concluído'" :value="'500.000,00'"
                            :resume="'Implementação de um sistema de coleta e descoberta de informação na Web, capaz de extrair de forma semiautomática informações relacionadas a veículos e peças automotivas.'" />

                            <CompanyModal :path="'images/prodoeste.jpeg'" :headName="'head-prodoeste'" :headBody="'heading-prodoeste'" 
                            :modalname="'modal-prodoeste'" :company="'Prodoeste'" :value="'0'"
                            :accID="'accordion-prodoeste'" :extraClass="'h-20'"
                            :projName="'Projeto Prodoeste'" :coorName="''" :situ="''"
                            :resume="'Texto Prodoeste.'" />

                            <CompanyModal :path="'images/aratu.png'" :headName="'head-aratu'" :headBody="'heading-aratu'" 
                            modalname="'modal-aratu'" :company="'Aratu'" :accID="'accordion-aratu'" :extraClass="'h-20'" 
                            :projName="'Sistema inteligente para análise de dados e tomada de decisão em modelagem Euleriana e Lagrangeana'"
                            :coorName="'Ivan Reinaldo Meneghini (Campus Ibirité)'" :situ="'Em andamento'" :value="'516.000,00'"
                            :resume="'Desenvolvimento de um sistema para análise de dados, previsão e tomada de decisão relativo a fator de emissão de material particulado.'" />

                            <CompanyModal :path="'images/totalapoio.png'" :headName="'head-totalapoio'" :headBody="'heading-totalapoio'"
                            :modalname="'modal-totalapoio'" :company="'AvanteTech e Total Apoio'" :accID="'accordion-totalapoio'" :extraClass="'h-20'"
                            :projName="'Sistema Inteligente de Recebíveis'" :coorName="'Manoel Pereira Junior (Campus Formiga)'" :situ="'Em andamento'"
                            :value="'400.000,00'"
                            :resume="'Desenvolvimento de uma tecnologia testada para ambiente real - (TRL 8 - Tecnologia testada e qualificada para ambiente real, estando pronta para ser implementada em um ' +
                            'sistema ou tecnologia já existente) de um sistema inteligente que permitirá que as empresas dos mais diferentes ramos emitam títulos bancários recebíveis.'" />
                        </div>

                        <div class="flex max-lg:flex-col justify-center gap-3 items-center">
                            <CompanyModal :path="'icons/google.svg'" :headName="'head-google'" :headBody="'heading-google'"
                            :modalname="'modal-google'" :company="'AvanteTech e Total Apoio'" :accID="'accordion-google'" :extraClass="'h-20'"
                            :projName="'Google'" :coorName="'João Pedro Souza'" :situ="'Em andamento'"
                            :value="'400.000,00'"
                            :resume="'Desenvolvimento de uma tecnologia testada para ambiente real - (TRL 8 - Tecnologia testada e qualificada para ambiente real, estando pronta para ser implementada em um ' +
                            'sistema ou tecnologia já existente) de um sistema inteligente que permitirá que as empresas dos mais diferentes ramos emitam títulos bancários recebíveis.'" />
                            
                            <CompanyModal :path="'icons/google.svg'" :headName="'head-google'" :headBody="'heading-google'"
                            :modalname="'modal-google'" :company="'AvanteTech e Total Apoio'" :accID="'accordion-google'" :extraClass="'h-20'"
                            :projName="'Google'" :coorName="'João Pedro Souza'" :situ="'Em andamento'"
                            :value="'400.000,00'"
                            :resume="'Desenvolvimento de uma tecnologia testada para ambiente real - (TRL 8 - Tecnologia testada e qualificada para ambiente real, estando pronta para ser implementada em um ' +
                            'sistema ou tecnologia já existente) de um sistema inteligente que permitirá que as empresas dos mais diferentes ramos emitam títulos bancários recebíveis.'" />
                            
                            <CompanyModal :path="'icons/google.svg'" :headName="'head-google'" :headBody="'heading-google'"
                            :modalname="'modal-google'" :company="'AvanteTech e Total Apoio'" :accID="'accordion-google'" :extraClass="'h-20'"
                            :projName="'Google'" :coorName="'João Pedro Souza'" :situ="'Em andamento'"
                            :value="'400.000,00'"
                            :resume="'Desenvolvimento de uma tecnologia testada para ambiente real - (TRL 8 - Tecnologia testada e qualificada para ambiente real, estando pronta para ser implementada em um ' +
                            'sistema ou tecnologia já existente) de um sistema inteligente que permitirá que as empresas dos mais diferentes ramos emitam títulos bancários recebíveis.'" />
                            
                            <CompanyModal :path="'icons/google.svg'" :headName="'head-google'" :headBody="'heading-google'"
                            :modalname="'modal-google'" :company="'AvanteTech e Total Apoio'" :accID="'accordion-google'" :extraClass="'h-20'"
                            :projName="'Google'" :coorName="'João Pedro Souza'" :situ="'Em andamento'"
                            :value="'400.000,00'"
                            :resume="'Desenvolvimento de uma tecnologia testada para ambiente real - (TRL 8 - Tecnologia testada e qualificada para ambiente real, estando pronta para ser implementada em um ' +
                            'sistema ou tecnologia já existente) de um sistema inteligente que permitirá que as empresas dos mais diferentes ramos emitam títulos bancários recebíveis.'" />
                            
                            <CompanyModal :path="'icons/google.svg'" :headName="'head-google'" :headBody="'heading-google'"
                            :modalname="'modal-google'" :company="'AvanteTech e Total Apoio'" :accID="'accordion-google'" :extraClass="'h-20'"
                            :projName="'Google'" :coorName="'João Pedro Souza'" :situ="'Em andamento'"
                            :value="'400.000,00'"
                            :resume="'Desenvolvimento de uma tecnologia testada para ambiente real - (TRL 8 - Tecnologia testada e qualificada para ambiente real, estando pronta para ser implementada em um ' +
                            'sistema ou tecnologia já existente) de um sistema inteligente que permitirá que as empresas dos mais diferentes ramos emitam títulos bancários recebíveis.'" />
                            
                            <CompanyModal :path="'icons/google.svg'" :headName="'head-google'" :headBody="'heading-google'"
                            :modalname="'modal-google'" :company="'AvanteTech e Total Apoio'" :accID="'accordion-google'" :extraClass="'h-20'"
                            :projName="'Google'" :coorName="'João Pedro Souza'" :situ="'Em andamento'"
                            :value="'400.000,00'"
                            :resume="'Desenvolvimento de uma tecnologia testada para ambiente real - (TRL 8 - Tecnologia testada e qualificada para ambiente real, estando pronta para ser implementada em um ' +
                            'sistema ou tecnologia já existente) de um sistema inteligente que permitirá que as empresas dos mais diferentes ramos emitam títulos bancários recebíveis.'" />
                        </div>
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