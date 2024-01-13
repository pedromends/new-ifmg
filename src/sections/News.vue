<template lang="">
    <section class="flex flex-col px-14 py-36 gap-16 ">
        <h1 class="text-4xl font-bold tracking-wide self-center">Notícias e Eventos</h1>
        <div class="flex justify-center items-center gap-10 border-2 rounded-3xl border-gray-100">
           <div class="">
                <div class="flex flex-col gap-3 px-10">
                    <span class="border-2 border-maingreen rounded-lg w-40 text-center text-sm px-2 py-1">Posse da Diretoria</span>
                    <h1 class="w-80 text-2xl font-bold mt-2">Em cerimônia simbólica, diretora do Polo IFMG toma posse</h1>
                    <p class="w-116 text-maingray text-sm">Na noite desta quinta-feira, dia 30, foi realizada uma cerimônia simbólica no IFMG Campus Formiga para celebrar a posse da diretora-geral do Polo de Inovação IFMG, Paloma Maira de Oliveira Lima,
                        e do diretor-geral do campus, Patrick Santos de Oliveira.</p>
                    <a href="" class="text-maingreen">Ler Mais -></a>
                </div>
           </div>
            <img class="h-80" :src="require('@/assets/images/paloma.svg')"/>
        </div>
        <div class="flex justify-center gap-5">
            <div class="flex flex-col gap-3">
                <img :src="require('@/assets/images/meeting.svg')" alt="" class="h-52 self-start"/>
                <span class="border-2 border-maingreen rounded-lg w-40 text-center text-sm text-maingray">Novidade</span>
                <h1 class="w-72 text-base font-bold mt-2">Polo IFMG marca presença no Encontro Anual de Unidades Embrapii</h1>
                <p>14 de Dezembro | 3 min leitura</p>
            </div>
            <div class="flex flex-col gap-3">
                <img :src="require('@/assets/images/teachers.svg')" alt="" class="h-52 self-start"/>
                <span class="border-2 border-maingreen rounded-lg w-40 text-center text-sm text-maingray">Nova Gestão</span>
                <h1 class="w-64 text-base font-bold mt-2">Polo IFMG inicia processo de transição com nova diretora-geral</h1>
                <p>14 de Dezembro | 3 min leitura</p>
            </div>
            <div class="flex flex-col gap-3">
                <img :src="require('@/assets/images/lab.svg')" alt="" class="h-52 self-start"/>
                <span class="border-2 border-maingreen rounded-lg w-40 text-center text-sm text-maingray">Pesquisa Acadêmica</span>
                <h1 class="w-72 text-base font-bold mt-2">PD&I promove pesquisa acadêmica e impulsiona o avanço tecnológico</h1>
                <p>14 de Dezembro | 3 min leitura</p>
            </div>
            <div class="flex flex-col gap-3">
                <div class="flex items-center gap-5 hover:bg-gray-100 rounded-xl px-3 py-2">
                    <div class="flex flex-col justify-center items-center">
                        <span>Jan</span>
                        <p class="text-2xl">03</p>
                    </div>
                    <div>
                        <p class="text-maingreen font-bold">Fórum de Desenvolvimento Humano Sustentável</p>
                        <span class="text-xs italic">16h30 | Auditório Auxiliar</span>
                    </div>
                </div>
                <div class="flex items-center gap-5 hover:bg-gray-100 rounded-xl px-3 py-2">
                    <div class="flex flex-col justify-center items-center">
                        <span>Jan</span>
                        <p class="text-2xl">05</p>
                    </div>
                    <div>
                        <p class="text-maingreen font-bold">Posse Oficial da Diretoria</p>
                        <span class="text-xs italic">16h30 | Auditório Principal</span>
                    </div>
                </div>
                <div class="flex items-center gap-5 hover:bg-gray-100 rounded-xl px-3 py-2">
                    <div class="flex flex-col justify-center items-center">
                        <span>Jan</span>
                        <p class="text-2xl">14</p>
                    </div>
                    <div>
                        <p class="text-maingreen font-bold">Abertura das Matrículas</p>
                        <span class="text-xs italic">16h30 | Atendimento ao Cliente</span>
                    </div>
                </div>
                <div class="flex items-center gap-5 hover:bg-gray-100 rounded-xl px-3 py-2">
                    <div class="flex flex-col justify-center items-center">
                        <span>Fev</span>
                        <p class="text-2xl">28</p>
                    </div>
                    <div>
                        <p class="text-maingreen font-bold">Início das Aulas</p>
                        <span class="text-xs italic">16h30 | Campus Formiga</span>
                    </div>
                </div>
            </div>
        </div>
        <button class="px-5 py-2 bg-maingreen text-white w-56 mx-auto rounded-lg font-bold hover:bg-white hover:text-maingreen transition duration-75 border-2 border-maingreen">Ver Notícias e Eventos</button>
    </section>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>