<template lang="">
    <section id="ourclients" class="flex justify-center items-center bg-lightgray py-10">
        <div class="flex flex-col justify-center items-center gap-5 mt-5">
            <div class="flex flex-col justify-center items-center gap-5">
                <h1 class="text-4xl font-semibold max-lg:text-center underline underline-offset-2 decoration-4 decoration-maingreen">Portfólio de Projetos</h1>
                <p class="text-sm text-maingray max-lg:text-center">
                    Empresas que fizeram ou fazem projetos com o Polo de Inovação IFMG.
                </p>
                <div class="flex items-center gap-5 w-full">
                    <input type="text" placeholder="Pesquisar..." class="w-full rounded-lg"/>
                    <img class="bg-maingreen rounded-lg hover:bg-maingray w-20 h-11 transition duration-200"
                        alt="Laboratório de sistemas automotivos IFMG - Campus Formiga" :src="require('@/assets/icons/hand-glass.svg')"/>
                </div>
            </div>
            <div class="bg-whitecircle bg-no-repeat bg-center min-h-160 flex items-center">
                <div class="flex items-center justify-center h-132 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-maingreen mx-48">
                    <div v-if="projects != undefined" class="grid grid-cols-6 justify-center gap-3 items-center overflow-y-auto py-5">
                        <CompanyModal v-for="(project, i) in projects" :key="i"
                            :img="project.company.img.code"
                            :headName="project.headerName"
                            :headBody="project.headerBody"
                            :modalname="project.modalName"
                            :company="project.company.name"
                            :projName="project.name"
                            :coorName="project.coordinator.firstName + ' ' + project.coordinator.lastName"
                            :situ="project.situation"    
                            :accID="project.accordionId"
                            :value="project.value"
                            :resume="project.resume"
                            :extraClass="'h-24'"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import CompanyModal from '@/components/modal/CompanyModal.vue';
import { listProjects } from '@/services/ProjectService';

export default {
    name: 'PartnerCompanies',
    components: {
        CompanyModal
    },
    created(){
        listProjects().then((response) => {
            this.projects = response.data
        }).catch((error) => {
            console.log(error)
        })
    },
    data(){
        return {
            projects: undefined
        }
    }
}
</script>
<style lang="">
    
</style>