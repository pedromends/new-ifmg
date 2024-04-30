<template lang="">
    <section class="flex flex-col justify-center bg-lightgray gap-10">
        <div role="status" class="animate-pulse px-48">
            <div class="transition duration-200 hover:text-black hover:bg-white flex flex-col gap-3 px-8 py-8 rounded-3xl border-2 border-white bg-maingreen">
                <div class="flex justify-between items-center ">
                    <svg class="w-8 h-8 text-gray-200 effect-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                    </svg>
                </div>
                
                <div class="h-2.5 bg-white rounded-full w-36 mb-1 effect"></div>
                <div class="h-2.5 bg-white rounded-full w-28 mb-4 effect"></div>
                <div class="flex flex-col gap-1">
                    <div class="h-1 bg-white rounded-full effect w-56"></div>
                    <div class="h-1 bg-white rounded-full effect w-48"></div>
                    <div class="h-1 bg-white rounded-full effect w-36"></div>
                </div>
                <a class="text-xs flex items-center gap-2 font-semibold bg-no-repeat hover:underline text-white effect-1" href="#">Explorar -> <div class="w-5 h-5"/></a>
            </div>
        </div>
        
        <form class="bg-white p-10 rounded-lg">
            <div class="grid gap-6 mb-6 grid-cols-2">
                <div>
                    <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Título</label>
                    <input type="text" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John" required />
                </div>
                <div>
                    <label for="desc" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descrição</label>
                    <input type="text" id="desc" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Doe" required />
                </div>
                <div>
                    <label for="lattes_link" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Link</label>
                    <input type="tel" id="lattes_link" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Link" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                </div>
                <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Imagem do Ícone</label>
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
section:hover .effect{
    background-color:black;
}

section:hover .effect-1{
    color:rgb(47, 158, 64);
}
</style>