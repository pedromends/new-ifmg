<template lang="">
    <footer class="flex flex-col gap-5 p-20 max-lg:mt-80">
        <div class="flex max-lg:flex-col justify-start gap-10 items-center">
            <img :src="require('@/assets/icons/ifmg.jpg')" alt="IFMG" class="w-40">
            <p class="text-sm text-maingray">Início</p>
            <p class="text-sm text-maingray">Institucional</p>
            <p class="text-sm text-maingray">Portfólio de Projetos</p>
            <router-link to="/embrapii" class="text-sm text-maingray">EMBRAPII</router-link>
            <p class="text-sm text-maingray">Capacitação</p>
        </div>
        <hr />
        <div class="grid grid-cols-4 max-lg:grid-cols-1 gap-12 text-sm">
            <div class="flex flex-col gap-2 text-ftlink max-lg:text-center">
                <h1 class="text-fttitle">A INSTITUIÇÃO</h1>
                <FooterLink :href="''" :text="'Sobre a instituição'"/>
                <FooterLink :href="''" :text="'Conselho Acadêmico'"/>
                <FooterLink :href="''" :text="'Diretoria de Ensino'"/>
                <FooterLink :href="''" :text="'Estágio'"/>
                <FooterLink :href="''" :text="'Oportunidades de Estágio e Emprego'"/>
                <FooterLink :href="''" :text="'Comissão Própria de Avaliação (CPA)'"/>
                <FooterLink :href="''" :text="'Egressos'"/>
                <FooterLink :href="''" :text="'Plano de Desenvolvimento Institucional (PDI)'"/>
                <FooterLink :href="''" :text="'Polo de Inovação Formiga'"/>
            </div>

            <div class="flex flex-col gap-5">
                <div class="flex flex-col gap-2 text-ftlink max-lg:text-center">
                    <h1 class="text-fttitle">PROJETOS</h1>
                    <FooterLink :href="''" :text="'Institucional'"/>
                    <FooterLink :href="''" :text="'Ações e Programas'"/>
                    <FooterLink :href="''" :text="'Auditoria'"/>
                    <FooterLink :href="''" :text="'Convênios e transferências'"/>
                    <FooterLink :href="''" :text="'Receitas e despesas'"/>
                </div>
                <div class="flex flex-col gap-2 text-ftlink max-lg:text-center">
                    <h1 class="text-fttitle">ACESSO RÁPIDO</h1>
                    <FooterLink :href="''" :text="'Regimento Disciplinar'"/>
                    <FooterLink :href="''" :text="'Calendário 2024'"/>
                </div>
            </div>

            <div class="flex flex-col gap-2 text-ftlink max-lg:text-center">
                <h1 class="text-fttitle">NOSSAS UNIDADES</h1>
                <FooterLink :href="''" :text="'Bambuí'"/>
                <FooterLink :href="''" :text="'Betim'"/>
                <FooterLink :href="''" :text="'Congonhas'"/>
                <FooterLink :href="''" :text="'Formiga'"/>
                <FooterLink :href="''" :text="'Conselheiro Lafaiete'"/> 
                <FooterLink :href="''" :text="'Ipatinga'"/>
                <FooterLink :href="''" :text="'Itabirito'"/>
            </div>

            <div class="flex flex-col gap-2 text-ftlink max-lg:text-center">
                <h1 class="text-fttitle">NOSSOS CURSOS</h1>
                <FooterLink :href="''" :text="'Graduação'"/>
                <FooterLink :href="''" :text="'Administração'"/>
                <FooterLink :href="''" :text="'Ciência da Computação'"/>
                <FooterLink :href="''" :text="'Engenharia Elétrica'"/>
            </div>
        </div>
        <div class="flex max-lg:text-xs gap-10 text-sm max-lg:gap-2 max-lg:justify-start">
            <p class="text-fttitle">Copyright © Instituto Federal | 2023</p>
            <p class="text-fttitle">Política de Privacidade</p>
            <p class="text-fttitle">Termos e Condições</p>
        </div>
    </footer>
</template>
<script>
import FooterLink from '@/components/html/FooterLink.vue';

export default {
    name: 'FooTer',
    components:{
        FooterLink
    },
    props: {
    }
}
</script>
<style lang="">
    
</style>

