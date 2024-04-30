<template lang="">
    <section class="flex flex-col justify-center bg-lightgray gap-10">
        <div role="status" class="animate-pulse px-96">
            <a class="text-black flex max-md:flex-col items-center px-16 py-6 gap-10 rounded-xl  hover:bg-maingreen transition duration-300 hover:text-white border-2 bg-white border-gray-100 max-lg:w-auto max-lg:px-0">
                <svg class="w-8 h-8 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                </svg>
                <div class="flex gap-1 edit items-center relative transition duration-500">
                    <div class="flex flex-col gap-2">
                        <div class="flex flex-col gap-1 mb-4">
                            <div class="ml-4 h-2.5 bg-black rounded-full w-56"></div>
                            <div class="ml-4 h-2.5 bg-black rounded-full w-48"></div>
                        </div>
                        <div class="ml-4 h-1 bg-black rounded-full w-48"></div>
                        <div class="ml-4 h-1 bg-black rounded-full w-36"></div>
                        <div class="ml-4 h-1 bg-black rounded-full w-40"></div>
                        <div class="ml-4 h-1 bg-black rounded-full w-44"></div>
                    </div>
                    <div class="absolute hidden target -right-8">
                        <img :src="require('@/assets/icons/pencil-edit.svg')" alt="#" class="h-10"/>
                    </div>
                </div>
            </a>
        </div>
        
        <form class="bg-white p-10 rounded-lg">
            <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Título</label>
                    <input type="text" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                </div>
                <div>
                    <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company</label>
                    <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required />
                </div>  
                <div>
                    <label for="parag" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Parágrafo</label>
                    <textarea id="parag" cols="20" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Escreva sobre a sua manchete aqui..."></textarea>
                </div>
                <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Imagem de Capa</label>
                    <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none" aria-describedby="file_input_help" id="file_input" type="file">
                    <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                </div>
            </div>  
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>

    </section>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>