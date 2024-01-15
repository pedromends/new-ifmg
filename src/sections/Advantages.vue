<template lang="">
    <section class="flex flex-col px-32 py-36 gap-32 max-lg:px-5 max-md:py-10">
        <div class="flex max-lg:flex-col justify-center items-center max-lg:gap-5">
            <h1 class="text-4xl w-128 max-lg:w-auto max-lg:text-2xl font-extrabold tracking-wide">
                Somos especialistas em projetos relacionados a Mobilidade e Sistemas Inteligentes
            </h1>
            <div class="w-1 border-2 border-maingreen bg-maingreen h-32 max-lg:hidden"/>
            <p class="text-base w-128 max-lg:w-auto ml-16 max-lg:ml-auto text-maingray">
                Venha inovar conosco, temos a solução que seu empreendimento precisa
            </p>
        </div>
        <div class="flex max-lg:flex-col gap-16 justify-center items-center">
            <img v-bind:src="require('@/assets/images/people-studying.svg')" class="w-128" alt="People Studying"/>
            <div class="flex flex-col gap-5">
                <div class="text-black flex max-md:flex-col px-16 py-6 gap-10 rounded-xl  hover:bg-maingreen transition duration-75 hover:text-white border-2 border-gray-100">
                    <img v-bind:src="require('@/assets/icons/lightbulb.svg')" alt="" class="w-16"/>
                    <div class="flex flex-col gap-1">
                        <h1 class="font-bold tracking-wide">DIFERENCIAL 01</h1>
                        <p class="text-sm w-72 max-lg:w-auto">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus tincidunt a libero non vestibulum.</p>
                    </div>
                </div>
                <div class="text-black flex max-md:flex-col px-16 py-6 gap-10 rounded-xl  hover:bg-maingreen transition duration-75 hover:text-white border-2 border-gray-100">
                    <img v-bind:src="require('@/assets/icons/piece.svg')" alt="" class="w-16"/>
                    <div class="flex flex-col gap-1">
                        <h1 class="font-bold tracking-wide">DIFERENCIAL 02</h1>
                        <p class="text-sm w-72 max-lg:w-auto">Praesent auctor, felis in finibus eleifend, mi placerat eros, ut efficitur elit arcu quis mauris. Mauris cursus eu magna sed varius. Etiam rutrum ut mi sed interdum</p>
                    </div>
                </div>
                <div class="text-black flex max-md:flex-col px-16 py-6 gap-10 rounded-xl  hover:bg-maingreen transition duration-75 hover:text-white border-2 border-gray-100">
                    <img v-bind:src="require('@/assets/icons/reload.svg')" alt="" class="w-16"/>
                    <div class="flex flex-col gap-1">
                        <h1 class="font-bold tracking-wide">DIFERENCIAL 03</h1>
                        <p class="text-sm w-72 max-lg:w-auto">Vivamus eu tincidunt lorem. Maecenas rhoncus porta tortor, a dictum metus tristique in. Mauris tincidunt ipsum sagittis, efficitur felis vitae, consectetur orci.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'AdvantagesSection',
    components:{
    },
    props: {
        msg: String
    }
}
</script>
<style lang="">
    
</style>