<template lang="">
    <main class="flex justify-center items-center p-16 max-lg:p-2 max-lg:mt-20">
        <div class="flex flex-col gap-10 px-20 max-lg:px-4">
            <div class="flex flex-col gap-5">
                <h1 class="text-4xl text-black font-semibold underline underline-offset-2 decoration-8 decoration-maingreen">Blog do Polo</h1>
                <hr class="bg-red-600 h-1"/>
                <div class="flex items-center gap-5">
                    <input type="text" placeholder="Pesquisar..." class="w-full rounded-lg"/>
                    <img alt="Laboratório de sistemas automotivos IFMG - Campus Formiga" class=" bg-maingreen px-4 rounded-lg" :src="require('@/assets/icons/hand-glass.svg')" />
                </div>
            </div>
            <div class="grid grid-cols-3 gap-5 text-maingray max-lg:grid-cols-1">
                <NewCard :tip="'Novidade'" :title="'Polo IFMG marca presença no Encontro Anual de Unidades Embrapii'" :date="'14 de Dezembro'" :read="'3 min'" :img="'meeting'"/>
                <NewCard :tip="'Nova Gestão'" :title="'Polo IFMG inicia processo de transição com nova diretora-geral'" :date="'14 de Dezembro'" :read="'3 min'" :img="'teachers'"/>
                <NewCard :tip="'Pesquisa Acadêmica'" :title="'PD&I promove pesquisa acadêmica e impulsiona o avanço tecnológico'" :date="'14 de Dezembro'" :read="'3 min'" :img="'lab'"/>
            </div>
        </div>
        <BackToTop />
    </main>
</template>

<script>
import NewCard from '@/components/cards/NewCard.vue';
import BackToTop  from '@/components/buttons/BackToTop.vue';

export default {
    name: 'NewsSection',
    components:{
        NewCard,
        BackToTop
    },
    props: {
    }
}
</script>

<style lang="">
    
</style>