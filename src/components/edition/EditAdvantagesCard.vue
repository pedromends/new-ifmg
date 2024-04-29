<template lang="">
    <section class="flex justify-center bg-lightgray">
        <div role="status" class="animate-pulse">
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
    </section>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>