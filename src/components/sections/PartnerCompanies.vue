<template lang="">
    <section id="ourclients" class="flex justify-center items-center bg-lightgray py-10">
        <div class="flex flex-col justify-center items-center gap-5 mt-5">
            <div class="flex flex-col justify-center items-center gap-5">
                <h1 class="text-4xl font-semibold max-lg:text-center">Portfólio de Projetos</h1>
                <p class="text-sm text-maingray max-lg:text-center">
                    Empresas que fizeram ou fazem projetos com o Polo de Inovação IFMG.
                </p>
                <div class="flex items-center gap-5 w-full">
                <input type="text" placeholder="Pesquisar..." class="w-full rounded-lg"/>
                    <img alt="Laboratório de sistemas automotivos IFMG - Campus Formiga" class=" bg-maingreen px-4 rounded-lg" :src="require('@/assets/icons/hand-glass.svg')" />
                </div>
            </div>
            <div class="bg-whitecircle bg-no-repeat bg-center">
                <div class="flex items-center justify-center h-132 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-maingreen mx-48">
                    <div class="grid grid-cols-6 justify-center gap-3 items-center overflow-y-auto">
                        <CompanyModal v-for="(company, i) in companies" :key="i"
                            :img="company.image"
                            :headName="company.headerName"
                            :headBody="company.headerBody"
                            :modalname="company.modalName"
                            :company="company.companyName"
                            :projName="company.projName"
                            :coorName="company.coorName"
                            :situ="company.situation"    
                            :accID="company.accordionId"
                            :value="company.value"
                            :resume="company.resume"
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
import { listCompanies } from '@/services/CompanyService';

export default {
    name: 'PartnerCompanies',
    components: {
        CompanyModal
    },
    data(){
        return {
            companies: undefined
        }
    },
    props: {
    },
    created(){
        listCompanies().then((response) => {
            this.companies = response.data
        }).catch((error) => {
            console.log(error)
        })
        // .finally(() => {
        //     this.$router.push('/');
        // });
    }
}
</script>
<style lang="">
    
</style>