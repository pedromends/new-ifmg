<template lang="">
    <section class="flex flex-col justify-center bg-lightgray gap-10">
        <div class="px-16">
            <div class="bg-white border-b-4 border-maingreen flex flex-col text-center items-center px-2 py-6 hover:shadow-2xl transition duration-400 relative z-20">
                <div role="status" class="max-w-sm animate-pulse flex flex-col pt-4 px-14">
                    <h1 class="h-8 bg-maingreen rounded-full dark:bg-gray-700 w-24 mb-4 self-center"></h1>
                    <p class="h-2 bg-black rounded-full dark:bg-gray-700 w-36 mb-2.5"></p>
                </div>
            </div>
        </div>
        <form class="bg-white p-10 rounded-lg">
            <div class="grid gap-6 mb-2 grid-cols-1">
                <div>
                    <label for="number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Número</label>
                    <input type="text" id="number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5" placeholder="45+, 10+, 20+ etc..." required />
                </div>
                <div>
                    <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Característica</label>
                    <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5" placeholder="Projetos Publicados, Alunos, Empresas Parceiras....." required />
                </div>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Salvar</button>
            </div>
        </form>
    </section>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>