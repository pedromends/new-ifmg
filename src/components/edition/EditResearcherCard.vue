<template lang="">
    <section class="flex justify-center bg-">
        <div role="status" class="animate-pulse">
            <section class="hover:shadow-lg transition duration-300 rounded-lg border border-gray-200 bg-white">
                <div class="border-t border-maingreen px-4 py-5 gap-48 flex items-center justify-between animate-pulse">
                    <div class="h-2.5 bg-black rounded-full w-40"></div>
                    <div alt="Polo IFMG" class="h-16 rounded-lg border border-maingreen flex items-center px-5">
                        <svg class="w-8 h-8 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                        </svg>
                    </div>
                </div>
                <div class="flex flex-col px-3 gap-3 py-3 animate-pulse">
                    <div class="h-2.5 bg-black rounded-full w-48"></div>
                    <a :href="link" class="flex items-center gap-3">
                        <img alt="Polo IFMG" class="h-4" :src="require('@/assets/icons/email-green.svg')"/>
                        <div class="h-1.5 bg-maingreen rounded-full w-40"></div>
                    </a>
                    <a :href="link" class="flex items-center gap-3">
                        <img alt="Polo IFMG" class="h-4" :src="require('@/assets/icons/book-green.svg')"/>
                        <div class="h-1.5 bg-maingreen rounded-full w-40"></div>
                    </a>
                </div>
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