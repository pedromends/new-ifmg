<template lang="">
    <footer class="flex flex-col gap-5 p-20 max-lg:mt-80 max-lg:font-raleway">
        <div class="flex max-lg:flex-col justify-start gap-10 items-center">
            <img :src="require('@/assets/icons/ifmg.jpg')" alt="IFMG" class="w-40">
            <button @click.prevent="goHome" class="text-sm text-maingreen">Início</button>
            <button @click.prevent="institutional" class="text-sm text-maingreen">Institucional</button>
            <button @click.prevent="partnerCompanies" to="/" class="text-sm text-maingreen">Portfólio de Projetos</button>
            <button @click.prevent="embrapii" to="/embrapii" class="text-sm text-maingreen">EMBRAPII</button>
            <button @click.prevent="capacitation" class="text-sm text-maingreen">Capacitação</button>
        </div>
        <hr />
        <div class="grid grid-cols-4 max-lg:grid-cols-1 gap-12 text-sm">
            <div class="flex flex-col gap-2 text-ftlink max-lg:text-center">
                <h1 class="text-maingreen">A INSTITUIÇÃO</h1>
                <FooterLink :exClass="'hover:text-red-600'" :href="'https://www.formiga.ifmg.edu.br/sobre-a-instituicao'" :text="'Sobre a instituição'"/>
                <FooterLink :exClass="'hover:text-red-600'" :href="'https://www.formiga.ifmg.edu.br/conselho-academico'" :text="'Conselho Acadêmico'"/>
                <FooterLink :exClass="'hover:text-red-600'" :href="'https://www.formiga.ifmg.edu.br/diretoria-de-ensino'" :text="'Diretoria de Ensino'"/>
                <FooterLink :exClass="'hover:text-red-600'" :href="'https://www.formiga.ifmg.edu.br/estagio'" :text="'Estágio'"/>
                <FooterLink :exClass="'hover:text-red-600'" :href="'https://www.formiga.ifmg.edu.br/oportunidades-de-estagio-e-emprego'" :text="'Oportunidades de Estágio e Emprego'"/>
                <FooterLink :exClass="'hover:text-red-600'" :href="'https://www.formiga.ifmg.edu.br/comissao-propria-de-avaliacao-cpa'" :text="'Comissão Própria de Avaliação (CPA)'"/>
                <FooterLink :exClass="'hover:text-red-600'" :href="'https://www.formiga.ifmg.edu.br/egressos'" :text="'Egressos'"/>
                <FooterLink :exClass="'hover:text-red-600'" :href="'https://www.formiga.ifmg.edu.br/plano-de-desenvolvimento-institucional-pdi'" :text="'Plano de Desenvolvimento Institucional (PDI)'"/>
            </div>

            <div class="flex flex-col gap-5">
                <div class="flex flex-col gap-2 text-ftlink max-lg:text-center">
                    <h1 class="text-maingreen">PROJETOS</h1>
                    <FooterLink :exClass="'hover:text-red-600'" :href="'https://www.formiga.ifmg.edu.br/institucional'" :text="'Institucional'"/>
                    <FooterLink :exClass="'hover:text-red-600'" :href="'https://www.formiga.ifmg.edu.br/acoes-e-programas'" :text="'Ações e Programas'"/>
                    <FooterLink :exClass="'hover:text-red-600'" :href="'https://www.formiga.ifmg.edu.br/auditoria'" :text="'Auditoria'"/>
                    <FooterLink :exClass="'hover:text-red-600'" :href="'https://www.formiga.ifmg.edu.br/convenios'" :text="'Convênios e transferências'"/>
                    <FooterLink :exClass="'hover:text-red-600'" :href="'https://www.formiga.ifmg.edu.br/despesas'" :text="'Receitas e despesas'"/>
                </div>
                <div class="flex flex-col gap-2 text-ftlink max-lg:text-center">
                    <h1 class="text-maingreen">ACESSO RÁPIDO</h1>
                    <FooterLink :exClass="'hover:text-red-600'" :href="''" :text="'Regimento Disciplinar'"/>
                    <FooterLink :exClass="'hover:text-red-600'" :href="''" :text="'Calendário 2024'"/>
                </div>
            </div>

            <div class="flex flex-col gap-2 text-ftlink max-lg:text-center">
                <h1 class="text-maingreen">NOSSAS UNIDADES</h1>
                <FooterLink :exClass="'hover:text-red-600'" :href="'https://www.bambui.ifmg.edu.br/portal/'" :text="'Bambuí'"/>
                <FooterLink :exClass="'hover:text-red-600'" :href="'https://www.ifmg.edu.br/betim'" :text="'Betim'"/>
                <FooterLink :exClass="'hover:text-red-600'" :href="'https://www.ifmg.edu.br/congonhas'" :text="'Congonhas'"/>
                <FooterLink :exClass="'hover:text-red-600'" :href="'https://www.formiga.ifmg.edu.br/'" :text="'Formiga'"/>
                <FooterLink :exClass="'hover:text-red-600'" :href="'https://www.ifmg.edu.br/conselheirolafaiete'" :text="'Conselheiro Lafaiete'"/> 
                <FooterLink :exClass="'hover:text-red-600'" :href="'https://www.ifmg.edu.br/ipatinga'" :text="'Ipatinga'"/>
                <FooterLink :exClass="'hover:text-red-600'" :href="'https://www.ifmg.edu.br/itabirito'" :text="'Itabirito'"/>
            </div>

            <div class="flex flex-col gap-2 text-ftlink max-lg:text-center">
                <h1 class="text-maingreen">NOSSOS CURSOS</h1>
                <FooterLink :exClass="'hover:text-red-600'" :href="'https://www.formiga.ifmg.edu.br/graduacao'" :text="'Graduação'"/>
                <FooterLink :exClass="'hover:text-red-600'" :href="'https://www.formiga.ifmg.edu.br/component/content/article/135-administracao?catid=2&Itemid=203'" :text="'Administração'"/>
                <FooterLink :exClass="'hover:text-red-600'" :href="'https://www.formiga.ifmg.edu.br/component/content/article/99-computacao?catid=2&Itemid=204'" :text="'Ciência da Computação'"/>
                <FooterLink :exClass="'hover:text-red-600'" :href="'https://www.formiga.ifmg.edu.br/component/content/article/119-engenharia-eletrica?catid=2&Itemid=205'" :text="'Engenharia Elétrica'"/>
            </div>
        </div>
        <div class="flex max-lg:text-xs gap-48 text-sm max-lg:gap-2 max-sm:justify-center">
            <div class="flex flex-col gap-2">
                <div class="text-fttitle max-sm:text-center">Copyright ©
                    <a href="https://www.ifmg.edu.br/portal" target="_blank" class="text-maingreen hover:underline decoration-maingreen">IFMG | 2024</a>
                </div>
                <p class="text-fttitle max-sm:text-center hover:underline decoration-maingreen">Política de Privacidade</p>
                <p class="text-fttitle max-sm:text-center hover:underline decoration-maingreen">Termos e Condições</p>
                <p class="text-fttitle max-sm:text-center">Desenvolvido por
                    <span><a class="text-maingreen hover:underline decoration-maingreen" href="https://pedromends.github.io/" target="_blank">João Pedro Souza</a></span>
                </p>
            </div>
        </div>
    </footer>
</template>

<script>
import router from '@/router/index.js';
import FooterLink from '@/components/links/FooterLink.vue';

export default {
    name: 'FooTer',
    components:{
        FooterLink
    },
    data() {
        return {
            institutional: () => {
                router.push({ path: '/institutional' }).then(() => {
                    var element = document.getElementById("navbar");
                    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                })
            },
            partnerCompanies: () => {
                router.push({ path: '/' }).then(() => {
                    var element = document.getElementById("ourclients");
                    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                })
            },
            embrapii: () => {
                router.push({ path: '/embrapii' }).then(() => {
                    var element = document.getElementById("navbar");
                    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                })
            },
            capacitation: () => {
                router.push({ path: '/' }).then(() => {
                    var element = document.getElementById("navbar");
                    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                })
            },
            goHome: () => {
                router.push({ path: '/' }).then(() => {
                    var element = document.getElementById("navbar");
                    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                })
            },
        }  
    },
}
</script>
<style lang="">
    
</style>

