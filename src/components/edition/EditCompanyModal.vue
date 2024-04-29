<template lang="">
    <section class="flex justify-center bg-lightgray">
        <div role="status" class="animate-pulse">
            <section class="flex justify-center items-center gap-20">
                <div data-modal-target="modalname" data-modal-toggle="modalname" type="button" class="hover:shadow-md rounded-xl hover:shadow-maingray transition duration-300">
                    <div alt="Polo IFMG" class=" rounded-lg border bg-white flex items-center px-10 py-4">
                        <svg class="w-20 h-20 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                        </svg>
                    </div>
                </div>
                <section class="flex justify-center items-center w-full max-h-full">
                    <div class="relative p-4 w-full max-w-2xl max-h-full">
                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-maingreen">
                                <div class="h-8 bg-black rounded-full w-36 mr-72"></div>
                                <button type="button" class="bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center hover:bg-gray-500/50 transition duration-200" data-modal-hide="modalname">
                                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="#E02424" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                    </svg>
                                    <span class="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div class="p-4 md:p-5 space-y-4 flex flex-col">
                                <div>
                                    <h2 id="headName" class="text-maingray ">
                                        <button type="button" data-accordion-target="#headBody" aria-expanded="false" aria-controls="headBody"
                                            class="flex items-center justify-between w-full p-5 font-medium rtl:text-right border border-maingreen rounded-t-xl hover:bg-blue-100 gap-3 transition duration-200">
                                            <div class="h-3 bg-maingreen rounded-full w-48"></div>
                                            <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="#2F9E40" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                                            </svg>
                                        </button>
                                    </h2>
                                    <div class="">
                                        <div class="p-5 border rounded-b-xl border-gray-200 gap-2 flex flex-col">
                                            <div class="h-1 bg-black rounded-full w-96"></div>
                                            <div class="h-1 bg-black rounded-full w-96"></div>
                                            <div class="h-1 bg-black rounded-full w-96"></div>
                                            <div class="h-1 bg-black rounded-full w-96"></div>
                                            <div class="h-1 bg-black rounded-full w-96"></div>
                                            <div class="h-1 bg-black rounded-full w-96"></div>
                                            <div class="h-1 bg-black rounded-full w-96"></div>
                                            <div class="h-1 bg-black rounded-full w-96"></div>
                                            <div class="h-1 bg-black rounded-full w-96"></div>
                                        </div>
                                    </div>
                                </div>
        
                                <div class="flex flex-col px-2 text-sm gap-1">
                                    <div class="flex gap-2 items-center max-lg:text-sm">
                                        <p class="font-bold text-maingray">Coordenador: </p>
                                        <div class="h-2 bg-black rounded-full w-24"></div>
                                    </div>
                                    <div class="flex gap-2 items-center max-lg:text-sm">
                                        <p class="font-bold text-maingray">Situação: </p>
                                        <div class="h-2 bg-black rounded-full w-24"></div>
                                    </div>
                                    <div class="flex gap-2 items-center max-lg:text-sm">
                                        <p class="font-bold text-maingray">Valor:</p>
                                        <div class="flex items-center gap-3">R$ <div class="h-2 bg-black rounded-full w-10"></div></div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b">
                                <button class="text-white bg-maingreen border-2 border-maingreen hover:bg-white hover:text-maingray transition duration-300 rounded-lg text-sm px-5 py-2.5"
                                    data-modal-hide="modalname" type="button">
                                    Saiba Mais!
                                </button>
                                <button class="ms-3 text-maingray bg-white rounded-lg border border-gray-200 text-sm transition duration-300 px-5 py-2.5 hover:bg-maingray hover:text-white"
                                    data-modal-hide="modalname" type="button">
                                    Fechar
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    </section>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>