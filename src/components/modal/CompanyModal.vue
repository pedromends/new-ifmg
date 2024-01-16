<template lang="">
    <div>
         <button :data-modal-target="modalname" :data-modal-toggle="modalname" type="button">
            <img :src="require(`@/assets/icons/${img}.svg`)" class="px-8 py-5 rounded-xl bg-white shadow-lg" alt="Prumo"/>
        </button>

        <section :id="modalname" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative p-4 w-full max-w-2xl max-h-full">
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-maingreen">
                        <h3 class="text-xl font-semibold text-gray-900">
                            {{ company }}
                        </h3>
                        <button type="button" class="bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" :data-modal-hide="modalname">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div class="p-4 md:p-5 space-y-4">
                        <p class="text-base leading-relaxed text-maingray dark:text-gray-400">
                            With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                        </p>
                        <p class="text-base leading-relaxed text-maingray dark:text-gray-400">
                            The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                        </p>
                    </div>
                    <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b">
                        <button :data-modal-hide="modalname" type="button" class="text-white bg-maingreen border-2 border-maingreen hover:bg-white hover:text-maingreen font-medium rounded-lg text-sm px-5 py-2.5 text-center">Saiba Mais!</button>
                        <button :data-modal-hide="modalname" type="button" class="ms-3 text-maingray bg-white hover:bg-gray-100 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 ">Fechar</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    name: 'CompanyModal',
    components:{
    },
    props: {
        img: String,
        company: String,
        modalname: String,
    }
}
</script>
<style lang="">
    
</style>