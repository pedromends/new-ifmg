<template lang="">
    <section class="flex flex-col justify-center bg-lightgray gap-10">
        <div role="status" class="max-w-sm animate-pulse self-center ">
            <a href="#" target="_blank" class="flex justify-between items-center gap-5 rounded-lg px-3 py-2 transition duration-300 bg-white pt-5">
                <div class="flex flex-col justify-center items-center">
                    <div class="h-2.5 bg-gray-200 rounded-full w-10 mb-4"></div>
                    <div class="h-2.5 bg-gray-200 rounded-full w-10 mb-4"></div>
                </div>
                <div>
                    <div class="h-2.5 bg-maingreen rounded-full w-48 mb-4"></div>
                    <div class="flex gap-3 items-center">
                        <div class="h-2.5 bg-gray-200 rounded-full w-10 mb-4"></div>|
                        <div class="h-2.5 bg-gray-200 rounded-full w-24 mb-4"></div>
                    </div>
                </div>
            </a>
        </div>
        <form class="bg-white p-10 rounded-lg">
            <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label for="month" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mês:</label>
                    <input type="text" id="month" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Jan, Fev..." required />
                </div>
                <div>
                    <label for="day" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Dia:</label>
                    <input type="text" id="day" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="1,2,3..." required />
                </div>
                <div>
                    <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Título</label>
                    <input type="text" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Fórum de Desenvolvimento Humano" required />
                </div>  
                <div>
                    <label for="hour" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Horário</label>
                    <input type="tel" id="hour" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="16h30..." pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                </div>
                <div>
                    <label for="local" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Local</label>
                    <input type="url" id="local" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Auditório Principal..." required />
                </div>
            </div>
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Salvar</button>
        </form>
    </section>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>