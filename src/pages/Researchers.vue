<template lang="">
   <main class="flex justify-center items-center p-10 max-lg:mt-20 max-lg:p-3">
        <section class="flex flex-col gap-10 px-20 w-full max-lg:px-5">
            <h1 class="text-4xl text-black font-semibold underline underline-offset-2 decoration-8 decoration-maingreen">Pesquisadores</h1>
            <hr class="bg-red-600 h-1"/>
            <div class="grid grid-cols-3 gap-7 max-lg:grid-cols-1">
                <ResearcherCard :position="'Desenvolvedor Front-End Sênior'" :link="'#'" :name="'João Pedro Souza'" :email="'jpsouza@ifmg.edu.br'"/>
                <ResearcherCard :position="'Desenvolvedor Front-End Sênior'" :link="'#'" :name="'João Pedro Souza'" :email="'jpsouza@ifmg.edu.br'"/>
                <ResearcherCard :position="'Desenvolvedor Front-End Sênior'" :link="'#'" :name="'João Pedro Souza'" :email="'jpsouza@ifmg.edu.br'"/>
                <ResearcherCard :position="'Desenvolvedor Front-End Sênior'" :link="'#'" :name="'João Pedro Souza'" :email="'jpsouza@ifmg.edu.br'"/>
                <ResearcherCard :position="'Desenvolvedor Front-End Sênior'" :link="'#'" :name="'João Pedro Souza'" :email="'jpsouza@ifmg.edu.br'"/>
                <ResearcherCard :position="'Desenvolvedor Front-End Sênior'" :link="'#'" :name="'João Pedro Souza'" :email="'jpsouza@ifmg.edu.br'"/>
                <ResearcherCard :position="'Desenvolvedor Front-End Sênior'" :link="'#'" :name="'João Pedro Souza'" :email="'jpsouza@ifmg.edu.br'"/>
                <ResearcherCard :position="'Desenvolvedor Front-End Sênior'" :link="'#'" :name="'João Pedro Souza'" :email="'jpsouza@ifmg.edu.br'"/>
                <ResearcherCard :position="'Desenvolvedor Front-End Sênior'" :link="'#'" :name="'João Pedro Souza'" :email="'jpsouza@ifmg.edu.br'"/>
            </div>
            <a href="#" class="px-10 py-2 text-maingreen mx-auto rounded-lg font-bold border-2 border-maingreen hover:bg-maingreen hover:text-white transition duration-300">Ver Mais</a>
        </section>
    </main>
</template>
<script>
import ResearcherCard from '@/components/cards/ResearcherCard.vue';
export default {
    name: 'ResearchersPage',
    components: {
        ResearcherCard
    }
}
</script>
<style lang="">
    
</style>