<template lang="">
    <section class="flex justify-center items-center bg-lightgray p-32">
        <div class="flex flex-col justify-center items-center gap-12">
            <div class="flex flex-col justify-center items-center gap-5">
                <h1 class="text-4xl font-semibold">Nossos Clientes</h1>
                <p class="text-sm text-maingray">
                    Empresas que fizeram ou fazem projetos com o Polo de Inovação IFMG.
                </p>
            </div>
            <div class="bg-whitecircle bg-no-repeat bg-center">
                <div class="grid max-lg:grid-rows-1 grid-rows-3 gap-5 items-center py-24">
                    <div class="flex max-lg:flex-col justify-center gap-3 items-center">
                        <!-- <img :src="require('@/assets/icons/reachr.svg')" class="px-8 py-5 rounded-xl bg-white shadow-lg" alt="Reachr"/> -->
                        <CompanyModal :img="'reachr'" :modalname="'modal-reacher'" :company="'Reachr'"/>
                        <CompanyModal :img="'prumo'" :modalname="'modal-prumo'" :company="'Prumo Engenharia'"/>
                        <CompanyModal :img="'isobloco'" :modalname="'modal-isobloco'" :company="'Isobloco'"/>
                    </div>
                    <div class="flex max-lg:flex-col justify-center gap-3 items-center">
                        <CompanyModal :img="'hf'" :modalname="'modal-hf'" :company="'HF'"/>
                        <CompanyModal :img="'avante'" :modalname="'modal-avante'" :company="'Avante Soluções Digitais'"/>
                        <CompanyModal :img="'iotew'" :modalname="'modal-iotew'" :company="'IoteW'"/>
                        <CompanyModal :img="'infinite'" :modalname="'modal-infinite'" :company="'Infinite'"/>
                    </div>
                    <div class="flex max-lg:flex-col justify-center gap-3 items-center">
                        <CompanyModal :img="'aiko'" :modalname="'modal-aiko'" :company="'Aiko'"/>
                        <CompanyModal :img="'google'" :modalname="'modal-google'" :company="'Google'"/>
                        <CompanyModal :img="'celulaweb'" :modalname="'modal-celulaweb'" :company="'Celula Web'"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import CompanyModal from '@/components/modal/CompanyModal.vue';

export default {
    name: 'PartnerCompanies',
    components:{
        CompanyModal
    },
    props: {
    }
}
</script>
<style lang="">
    
</style>