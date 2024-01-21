<template lang="">
    <section class="flex justify-center items-center p-16">
        <div class="flex flex-col gap-10 px-48">
            <div class="flex flex-col gap-5">
                <h1 class="text-4xl text-black font-semibold underline underline-offset-2 decoration-8 decoration-maingreen">Mobilidade e Sistemas Inteligentes</h1>
                <hr class="bg-red-600 h-1"/>
            </div>
            <div class="flex flex-col gap-5 text-maingray">
                <div class="flex gap-5">
                    <div class="flex flex-col gap-5">
                        <div class="flex items-center gap-5">
                            <div class="flex flex-col gap-3">
                                <p>Desde 2018, o Polo de Inovação IFMG atua como Unidade EMBRAPII no desenvolvimento de projetos relacionados à “Mobilidade e Sistemas Inteligentes”, com destaque nas sublinhas:
                                    “Otimização de Processos e Gestão de Ativos Móveis”, assim como “Sistemas Automotivos e Transportes”. 
                                </p>
                                <p>A ampliação da área de competência do Polo de Inovação IFMG, obtida em 2018,
                                    teve como objetivo favorecer a participação de microempresas, startups e indústrias nos setores de soft houses, transportadoras, agronegócio, mineração, sensores inteligentes,
                                    eletrônica embarcada, IoT, inteligência computacional, computação móvel, logística, análise de dados, otimização e computação móvel.
                                </p>
                            </div>
                            <img alt="Laboratório de sistemas automotivos IFMG - Campus Formiga" class="w-160 self-center" :src="require('@/assets/banners/mobilidades.jpg')" />
                        </div>
                        <div class="flex flex-col gap-2">
                            <h1 class="text-black font-semibold text-xl">Otimização de Processos e Gestão de Ativos Móveis</h1>
                            <p>Soluções de software e hardware direcionadas a <b>otimizar processos produtivos em diferentes setores da indústria</b>.
                                Oferece capacidade para construção de soluções de software para gestão de ativos móveis (tais como veículos, caminhões, empilhadeiras, equipamentos fora de estrada, escavadeiras,
                                colheitadeiras, tratores, dentre outros).
                            </p>
                            <p> Os projetos são desenvolvidos por meio da aplicação de técnicas computacionais avançadas para construir <b>soluções que busquem economia de
                                recursos e aumento de produtividade através de uma gestão mais eficiente de ativos móveis. </b></p>
                        </div>
                        <div class="flex flex-col gap-2">
                            <h1 class="text-black font-semibold text-xl">Sistemas Automotivos e Transportes</h1>
                            <p>Desenvolvimento de <b>tecnologias embarcadas em veículos</b>, incluindo carros, máquinas agrícolas e veículos utilizados em mineração, transportes e manejo florestal, visando segurança,
                                monitoramento, autonomia, entretenimento e conforto.
                            </p>
                            <p>Destaque também no desenvolvimento de <b>soluções de software e hardware para operações de transporte e trânsito, aplicáveis à
                                melhoria de sistemas de logística, desenvolvimento de cidades inteligentes</b>, implantação de novos modelos de negócio em transportes, monitoramento de veículos e cargas, manutenção
                                de frotas. Inclui ainda o desenvolvimento de soluções de software e hardware relacionados a infraestruturas de apoio à transporte, tais como semáforos, pedágios e vias.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name:'MobilitySmartSystems'
}
</script>
<style lang="">
    
</style>