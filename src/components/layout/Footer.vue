<template lang="">
    <footer class="flex flex-col gap-5 p-20 max-lg:mt-80 max-lg:font-raleway">
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
                <FooterLink :href="'https://www.formiga.ifmg.edu.br/sobre-a-instituicao'" :text="'Sobre a instituição'"/>
                <FooterLink :href="'https://www.formiga.ifmg.edu.br/conselho-academico'" :text="'Conselho Acadêmico'"/>
                <FooterLink :href="'https://www.formiga.ifmg.edu.br/diretoria-de-ensino'" :text="'Diretoria de Ensino'"/>
                <FooterLink :href="'https://www.formiga.ifmg.edu.br/estagio'" :text="'Estágio'"/>
                <FooterLink :href="'https://www.formiga.ifmg.edu.br/oportunidades-de-estagio-e-emprego'" :text="'Oportunidades de Estágio e Emprego'"/>
                <FooterLink :href="'https://www.formiga.ifmg.edu.br/comissao-propria-de-avaliacao-cpa'" :text="'Comissão Própria de Avaliação (CPA)'"/>
                <FooterLink :href="'https://www.formiga.ifmg.edu.br/egressos'" :text="'Egressos'"/>
                <FooterLink :href="'https://www.formiga.ifmg.edu.br/plano-de-desenvolvimento-institucional-pdi'" :text="'Plano de Desenvolvimento Institucional (PDI)'"/>
            </div>

            <div class="flex flex-col gap-5">
                <div class="flex flex-col gap-2 text-ftlink max-lg:text-center">
                    <h1 class="text-fttitle">PROJETOS</h1>
                    <FooterLink :href="'https://www.formiga.ifmg.edu.br/institucional'" :text="'Institucional'"/>
                    <FooterLink :href="'https://www.formiga.ifmg.edu.br/acoes-e-programas'" :text="'Ações e Programas'"/>
                    <FooterLink :href="'https://www.formiga.ifmg.edu.br/auditoria'" :text="'Auditoria'"/>
                    <FooterLink :href="'https://www.formiga.ifmg.edu.br/convenios'" :text="'Convênios e transferências'"/>
                    <FooterLink :href="'https://www.formiga.ifmg.edu.br/despesas'" :text="'Receitas e despesas'"/>
                </div>
                <div class="flex flex-col gap-2 text-ftlink max-lg:text-center">
                    <h1 class="text-fttitle">ACESSO RÁPIDO</h1>
                    <FooterLink :href="''" :text="'Regimento Disciplinar'"/>
                    <FooterLink :href="''" :text="'Calendário 2024'"/>
                </div>
            </div>

            <div class="flex flex-col gap-2 text-ftlink max-lg:text-center">
                <h1 class="text-fttitle">NOSSAS UNIDADES</h1>
                <FooterLink :href="'https://www.bambui.ifmg.edu.br/portal/'" :text="'Bambuí'"/>
                <FooterLink :href="'https://www.ifmg.edu.br/betim'" :text="'Betim'"/>
                <FooterLink :href="'https://www.ifmg.edu.br/congonhas'" :text="'Congonhas'"/>
                <FooterLink :href="'https://www.formiga.ifmg.edu.br/'" :text="'Formiga'"/>
                <FooterLink :href="'https://www.ifmg.edu.br/conselheirolafaiete'" :text="'Conselheiro Lafaiete'"/> 
                <FooterLink :href="'https://www.ifmg.edu.br/ipatinga'" :text="'Ipatinga'"/>
                <FooterLink :href="'https://www.ifmg.edu.br/itabirito'" :text="'Itabirito'"/>
            </div>

            <div class="flex flex-col gap-2 text-ftlink max-lg:text-center">
                <h1 class="text-fttitle">NOSSOS CURSOS</h1>
                <FooterLink :href="'https://www.formiga.ifmg.edu.br/graduacao'" :text="'Graduação'"/>
                <FooterLink :href="'https://www.formiga.ifmg.edu.br/component/content/article/135-administracao?catid=2&Itemid=203'" :text="'Administração'"/>
                <FooterLink :href="'https://www.formiga.ifmg.edu.br/component/content/article/99-computacao?catid=2&Itemid=204'" :text="'Ciência da Computação'"/>
                <FooterLink :href="'https://www.formiga.ifmg.edu.br/component/content/article/119-engenharia-eletrica?catid=2&Itemid=205'" :text="'Engenharia Elétrica'"/>
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
import FooterLink from '@/components/links/FooterLink.vue';

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

