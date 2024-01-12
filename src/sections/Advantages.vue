<template lang="">
    <section class="flex flex-col px-32 py-36 gap-32">
        <div class="flex items-center">
            <h1 class="text-4xl w-128 font-extrabold tracking-wide">
                Desenvolvemos projetos relacionados Mobilidade e Sistemas Inteligentes
            </h1>
            <div class="w-1 border-2 border-maingreen bg-maingreen h-32"/>
            <p class="text-base w-128 ml-16 text-maingray">
                Creating detailed and insightful questions takes a lot of time. Especially in the case of ever-popular, choice question-based online and on-site assessments. Could there be.
            </p>
        </div>
        <div class="flex gap-16 items-center">
            <img v-bind:src="require('@/assets/images/people-studying.svg')" class="w-1/2" alt="People Studying"/>
            <div class="flex flex-col gap-3">
                <div class="text-black flex px-10 py-10 rounded-xl  hover:bg-maingreen hover:text-white border-2 border-gray-100">
                    <img />
                    <div class="flex flex-col gap-3">
                        <h1 class="font-bold tracking-wide">DIFERENCIAL 01</h1>
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus tincidunt a libero non vestibulum.</p>
                    </div>
                </div>
                <div class="text-black flex px-10 py-10 rounded-xl  hover:bg-maingreen hover:text-white border-2 border-gray-100">
                    <img />
                    <div class="flex flex-col gap-3">
                        <h1 class="font-bold tracking-wide">DIFERENCIAL 02</h1>
                        <p>Praesent auctor, felis in finibus eleifend, mi placerat eros, ut efficitur elit arcu quis mauris. Mauris cursus eu magna sed varius. Etiam rutrum ut mi sed interdum</p>
                    </div>
                </div>
                <div class="text-black flex px-10 py-10 rounded-xl  hover:bg-maingreen hover:text-white border-2 border-gray-100">
                    <img />
                    <div class="flex flex-col gap-3">
                        <h1 class="font-bold tracking-wide">DIFERENCIAL 03</h1>
                        <p>Vivamus eu tincidunt lorem. Maecenas rhoncus porta tortor, a dictum metus tristique in. Mauris tincidunt ipsum sagittis, efficitur felis vitae, consectetur orci.</p>
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