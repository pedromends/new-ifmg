<template lang="">
    <section class="flex flex-col px-32 py-36 gap-32">
        <div class="flex justify-center items-center">
            <h1 class="text-4xl w-128 font-extrabold tracking-wide">
                Desenvolvemos projetos relacionados Mobilidade e Sistemas Inteligentes
            </h1>
            <div class="w-1 border-2 border-maingreen bg-maingreen h-32"/>
            <p class="text-base w-128 ml-16 text-maingray">
                Creating detailed andqqq insightful questions takes a lot of time. Especially in the case of ever-popular, choice question-based online and on-site assessments. Could there be.
            </p>
        </div>
        <div class="flex gap-16 justify-center items-center">
            <img v-bind:src="require('@/assets/images/people-studying.svg')" class="w-128" alt="People Studying"/>
            <div class="flex flex-col gap-5">
                <div class="text-black flex px-16 py-6 gap-10 rounded-xl  hover:bg-maingreen transition duration-75 hover:text-white border-2 border-gray-100">
                    <img v-bind:src="require('@/assets/icons/lightbulb.svg')" alt="" class="w-16"/>
                    <div class="flex flex-col gap-1">
                        <h1 class="font-bold tracking-wide">DIFERENCIAL 01</h1>
                        <p class="text-sm w-72">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus tincidunt a libero non vestibulum.</p>
                    </div>
                </div>
                <div class="text-black flex px-16 py-6 gap-10 rounded-xl  hover:bg-maingreen transition duration-75 hover:text-white border-2 border-gray-100">
                    <img v-bind:src="require('@/assets/icons/piece.svg')" alt="" class="w-16"/>
                    <div class="flex flex-col gap-1">
                        <h1 class="font-bold tracking-wide">DIFERENCIAL 02</h1>
                        <p class="text-sm w-72">Praesent auctor, felis in finibus eleifend, mi placerat eros, ut efficitur elit arcu quis mauris. Mauris cursus eu magna sed varius. Etiam rutrum ut mi sed interdum</p>
                    </div>
                </div>
                <div class="text-black flex px-16 py-6 gap-10 rounded-xl  hover:bg-maingreen transition duration-75 hover:text-white border-2 border-gray-100">
                    <img v-bind:src="require('@/assets/icons/reload.svg')" alt="" class="w-16"/>
                    <div class="flex flex-col gap-1">
                        <h1 class="font-bold tracking-wide">DIFERENCIAL 03</h1>
                        <p class="text-sm w-72">Vivamus eu tincidunt lorem. Maecenas rhoncus porta tortor, a dictum metus tristique in. Mauris tincidunt ipsum sagittis, efficitur felis vitae, consectetur orci.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>