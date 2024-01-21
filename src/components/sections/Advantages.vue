<template lang="">
    <section id="advantages" class="flex flex-col px-32 py-36 gap-32 max-lg:px-5 max-md:py-10">
        <div class="flex max-lg:flex-col justify-center items-center max-lg:gap-5">
            <h1 class="text-3xl w-128 max-lg:px-6 max-lg:w-auto max-lg:text-2xl font-semibold">
                Somos especialistas em projetos relacionados a Mobilidade e Sistemas Inteligentes
            </h1>
            <div class="w-1 border-2 border-maingreen bg-maingreen h-32 max-lg:hidden"/>
            <p class="text-base w-112 max-lg:px-6 max-lg:w-auto ml-16 max-lg:ml-auto text-maingray">
                Venha inovar conosco, temos a solução que seu empreendimento precisa
            </p>
        </div>
        <div class="flex max-lg:flex-col gap-5 justify-center items-center">
            <img v-bind:src="require('@/assets/images/people-studying.svg')" class="w-140 max-lg:px-6 max-lg:w-auto ml-16 max-lg:ml-auto" alt="People Studying"/>
            <div class="flex flex-col gap-5 max-lg:px-7">
                <AdvantagesCard :dif="'Otimização de Processos e Gestão de Ativos Móveis'" :text="'Oferece capacidade para construção de soluções de software para gestão de ativos móveis (tais como veículos, caminhões, empilhadeiras, equipamentos fora de estrada, escavadeiras, colheitadeiras, tratores, dentre outros).'"/>
                <AdvantagesCard :dif="'Sistemas Automotivos e Transportes'" :text="'Desenvolvimento de tecnologias embarcadas em veículos, incluindo carros, máquinas agrícolas e veículos utilizados em mineração, transportes e manejo florestal, visando segurança, monitoramento, autonomia, entretenimento e conforto.'"/>
                <AdvantagesCard :dif="'DIFERENCIAL 03'" :text="'Vivamus eu tincidunt lorem. Maecenas rhoncus porta tortor, a dictum metus tristique in. Mauris tincidunt ipsum sagittis, efficitur felis vitae, consectetur orci.'"/>
            </div>
        </div>
    </section>
</template>

<script>
import AdvantagesCard from '../cards/AdvantagesCard.vue';

export default {
    name: 'AdvantagesSection',
    components:{
        AdvantagesCard
    },
    props: {
        msg: String
    }
}
</script>
<style lang="">
    
</style>