<template lang="">
    <section class="flex flex-col justify-center bg-lightgray gap-10">
        <div role="status" class="pt-5 animate-pulse">
            <section class="max-lg:px-5 px-96">
                <div href="#" target="_blank" class="flex flex-col-reverse bg-white justify-between items-center border-2 rounded-3xl border-gray-100 hover:shadow-2xl transition duration-300">           
                    <div class="flex flex-col gap-3 mt-3 max-lg:px-3 pb-5">
                        <span class="border-2 border-maingreen rounded-lg w-40 justify-center px-2 py-1 max-lg:mt-6 4xl:mx-auto flex items-center">
                            <div class="h-1 bg-black rounded-full w-24 self-center"></div>
                        </span>
                        <h1 class="w-80 max-lg:w-auto text-2xl font-bold mt-2 flex flex-col gap-4 justify-start">
                            <div class="h-2.5 bg-black rounded-full w-64"></div>
                            <div class="h-2.5 bg-black rounded-full w-72"></div>
                        </h1>
                        <div class="w-80 max-lg:w-auto text-2xl font-bold mt-2 flex gap-1 items-center">
                            <div class="h-1 bg-gray-200 rounded-full w-80"></div> |
                            <div class="h-1 bg-gray-200 rounded-full w-96"></div>
                        </div>
                        <a href="#" class="text-xs text-maingreen hover:underline">Ler Mais -></a>
                    </div>
                    <!-- <img class="h-80" :src="require('@/assets/images/paloma.svg')"/> -->
                    <div class="flex items-center justify-center w-full h-48 bg-maingreen sm:w-96 rounded-t-lg">
                        <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                        </svg>
                    </div>
                </div>
            </section>
        </div>
        <form class="bg-white p-10 rounded-lg">
            <div class="grid gap-6 mb-6 grid-cols-3">
                <div>
                    <label for="tip" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Dica</label>
                    <input type="text" id="tip" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Ex: Posse da Diretoria..." required />
                </div>
                <div>
                    <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Título</label>
                    <input type="text" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Ex: Polo IFMG inicia nova direção..." required />
                </div>
                <div>
                    <label for="date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Data</label>
                    <input type="text" id="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="14 de Dezembro..." required />
                </div>  
                <div>
                    <label for="read_time" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tempo de Leitura</label>
                    <input type="tel" id="read_time" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="3 minutos..." pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                </div>
                <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Imagem de Capa</label>
                    <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none" aria-describedby="file_input_help" id="file_input" type="file">
                    <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                </div>
            </div>
            <button type="submit" class="text-white bg-maingreen hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Salvar</button>        
        </form>
    </section>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>