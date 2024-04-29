<template lang="">
    <section class="flex justify-center bg-lightgray">
        <div role="status" class="animate-pulse">
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