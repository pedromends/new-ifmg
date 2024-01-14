<template lang="">
    <footer class="flex flex-col gap-5 p-20">
        <div class="flex max-lg:flex-col justify-start gap-10 items-center">
            <img :src="require('@/assets/icons/ifmg.svg')" alt="">
            <p class="text-sm text-maingray">Início</p>
            <p class="text-sm text-maingray">Institucional</p>
            <p class="text-sm text-maingray">Portfólio de Projetos</p>
            <p class="text-sm text-maingray">EMBRAPII</p>
            <p class="text-sm text-maingray">Capacitação</p>
        </div>
        <hr />
        <div class="grid grid-cols-4 max-lg:grid-cols-1 gap-12 text-sm">
            <div class="flex flex-col gap-2 text-ftlink">
                <h1 class="text-fttitle">A INSTITUIÇÃO</h1>
                <a class="hover:text-black hover:underline transition duration-75">Sobre a instituição</a>
                <a class="hover:text-black hover:underline transition duration-75">Conselho Acadêmico</a>
                <a class="hover:text-black hover:underline transition duration-75">Diretoria de Ensino</a>
                <a class="hover:text-black hover:underline transition duration-75">Estágio</a>
                <a class="hover:text-black hover:underline transition duration-75">Oportunidades de Estágio e Emprego</a>
                <a class="hover:text-black hover:underline transition duration-75">Comissão Própria de Avaliação (CPA)</a>
                <a class="hover:text-black hover:underline transition duration-75">Egressos</a>
                <a class="hover:text-black hover:underline transition duration-75">Plano de Desenvolvimento Institucional (PDI)</a>
                <a class="hover:text-black hover:underline transition duration-75">Polo de Inovação Formiga</a>
            </div>

            <div class="flex flex-col gap-5">
                <div class="flex flex-col gap-2 text-ftlink">
                    <h1 class="text-fttitle">PROJETOS</h1>
                    <a class="hover:text-black hover:underline transition duration-75">Institucional</a>
                    <a class="hover:text-black hover:underline transition duration-75">Ações e Programas</a>
                    <a class="hover:text-black hover:underline transition duration-75">Auditoria</a>
                    <a class="hover:text-black hover:underline transition duration-75">Convênios e transferências</a>
                    <a class="hover:text-black hover:underline transition duration-75">Receitas e despesas</a>
                </div>
                <div class="flex flex-col gap-2 text-ftlink">
                    <h1 class="text-fttitle">ACESSO RÁPIDO</h1>
                    <a class="hover:text-black hover:underline transition duration-75">Regimento Disciplinar</a>
                    <a class="hover:text-black hover:underline transition duration-75">Calendário 2024</a>
                </div>
            </div>

            <div class="flex flex-col gap-2 text-ftlink">
                <h1 class="text-fttitle">NOSSAS UNIDADES</h1>
                <a class="hover:text-black hover:underline transition duration-75">Bambuí</a>
                <a class="hover:text-black hover:underline transition duration-75">Betim</a>
                <a class="hover:text-black hover:underline transition duration-75">Congonhas</a>
                <a class="hover:text-black hover:underline transition duration-75">Formiga</a>
                <a class="hover:text-black hover:underline transition duration-75">Conselheiro Lafaiete</a>
                <a class="hover:text-black hover:underline transition duration-75">Ipatinga</a>
                <a class="hover:text-black hover:underline transition duration-75">Itabirito</a>
            </div>

            <div class="flex flex-col gap-2 text-ftlink">
                <h1 class="text-fttitle">NOSSOS CURSOS</h1>
                <a class="hover:text-black hover:underline transition duration-75">Graduação</a>
                <a class="hover:text-black hover:underline transition duration-75">Administração</a>
                <a class="hover:text-black hover:underline transition duration-75">Ciência da Computação</a>
                <a class="hover:text-black hover:underline transition duration-75">Engenharia Elétrica</a>
            </div>
        </div>
        <div class="flex max-lg:text-xs gap-10 text-sm">
            <p class="text-fttitle">Copyright © Instituto Federal | 2023</p>
            <p class="text-fttitle">Política de Privacidade</p>
            <p class="text-fttitle">Termos e Condições</p>
        </div>
    </footer>
</template>
<script>
export default {
    name: 'FooTer',
    components:{
    },
    props: {
    }
}
</script>
<style lang="">
    
</style>

