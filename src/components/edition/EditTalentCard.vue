<template lang="">
    <section class="flex justify-center bg-lightgray">
        <div role="status" class="animate-pulse">
            <div class="transition duration-300 shadow-lg bg-white flex flex-col gap-5 rounded-3xl border-2 border-white p-3 px-10 hover:shadow-md hover:shadow-govblue z-20">
                <div class="flex justify-between items-start gap-24">
                    <div alt="Polo IFMG" class="h-16 rounded-lg border border-maingreen flex items-center px-5">
                        <svg class="w-8 h-8 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                        </svg>
                    </div>
                    <img :src="require('@/assets/icons/linkedin.svg')"  class="" alt="Linkedin"/>
                </div> 
                <div class="flex flex-col gap-1">
                    <div class="h-2.5 bg-black rounded-full w-36"></div>
                    <div class="h-1.5 bg-black rounded-full w-32"></div>
                </div>
                <div class="h-1.5 bg-black rounded-full w-28"></div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>