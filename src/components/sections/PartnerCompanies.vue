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
                        <CompanyModal :img="'reachr'" :headName="'head-reachr'" :headBody="'heading-reachr'"
                        :modalname="'modal-reacher'" :company="'Reachr'"
                        :resume="'reachr'" :accID="'accordion-reachr'" />

                        <CompanyModal :img="'prumo'" :headName="'head-prumo'" :headBody="'heading-prumo'"
                        :modalname="'modal-prumo'" :company="'Prumo Engenharia'"
                        :resume="'prumo'" :accID="'accordion-prumo'" />

                        <CompanyModal :img="'isobloco'" :headName="'head-isobloco'" :headBody="'heading-isobloco'"
                        :modalname="'modal-isobloco'" :company="'Isobloco'"
                        :resume="'teste'" :accID="'accordion-isobloco'" />
                    </div>

                    <div class="flex max-lg:flex-col justify-center gap-3 items-center">
                        <CompanyModal :img="'hf'" :headName="'head-hf'" :headBody="'heading-hf'" 
                        :modalname="'modal-hf'" :company="'HF'" :resume="'hf'"
                        :accID="'accordion-hf'" />

                        <CompanyModal :img="'avante'" :headName="'head-avante'" :headBody="'heading-avante'" 
                        :modalname="'modal-avante'" :company="'Avante Soluções Digitais'"
                        :resume="'avante'" :accID="'accordion-avante'" />

                        <CompanyModal :img="'iotew'" :headName="'head-iotew'" :headBody="'heading-iotew'" 
                        modalname="'modal-iotew'" :company="'IoteW'" :resume="'iotew'"
                        :accID="'accordion-iotew'" />

                        <CompanyModal :img="'infinite'" :headName="'head-infinite'" :headBody="'heading-infinite'"
                        :modalname="'modal-infinite'" :company="'Infinite'"
                        :resume="'teste'" :accID="'accordion-infinite'" />
                    </div>

                    <div class="flex max-lg:flex-col justify-center gap-3 items-center">
                        <CompanyModal :img="'aiko'" :headName="'head-aiko'" :headBody="'heading-aiko'"
                        :modalname="'modal-aiko'" :company="'Aiko'"
                        :resume="'aiko'" :accID="'accordion-aiko'" />

                        <CompanyModal :img="'google'" :headName="'head-google'" :headBody="'heading-google'"
                        :modalname="'modal-google'" :company="'Google'"
                        :resume="'google'" :accID="'accordion-google'" />

                        <CompanyModal :img="'celulaweb'" :headName="'head-celula'" :headBody="'heading-celula'"
                        :modalname="'modal-celulaweb'" :company="'Celula Web'"
                        :resume="'celula'" :accID="'accordion-celula'" />
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
    components: {
        CompanyModal
    },
    props: {
    }
}
</script>
<style lang="">
    
</style>