<template lang="">
    <section class="flex flex-col justify-center bg-lightgray gap-10">
        <div role="status" class="animate-pulseq px-84">
            <div class="transition duration-300 shadow-lg bg-white flex flex-col gap-5 rounded-3xl border-2 border-white p-3 px-10 hover:shadow-md hover:shadow-govblue z-20">
                <div class="flex justify-between items-start gap-24">
                    <div @mouseover="onOffEffect('image-div')" @mouseleave="onOffEffect('image-div')" alt="Polo IFMG" class="h-16 rounded-lg border border-maingreen flex items-center px-5 border-transparent hover:border-red-700">
                        <svg class="w-8 h-8 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                        </svg>
                    </div>
                    <img :src="require('@/assets/icons/linkedin.svg')"  class="" alt="Linkedin"/>
                </div> 
                <div class="flex flex-col gap-1">
                    <div @mouseover="onOffEffect('name-div')" @mouseleave="onOffEffect('name-div')" class="h-2.5 bg-black rounded-full w-36 border border-transparent hover:border-red-700"></div>
                    <div @mouseover="onOffEffect('profession-div')" @mouseleave="onOffEffect('profession-div')" class="h-1.5 bg-black rounded-full w-32 border border-transparent hover:border-red-700"></div>
                </div>
                <div @mouseover="onOffEffect('phrase-div')" @mouseleave="onOffEffect('phrase-div')" class="h-1.5 bg-black rounded-full w-28 border border-transparent hover:border-red-700"></div>
            </div>
        </div>
        <form class="bg-white p-10 rounded-lg">
            <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div id="name-div" class="border-2 border-transparent p-2 rounded-lg">
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome</label>
                    <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Paloma..." required />
                </div>
                <div id="profession-div" class="border-2 border-transparent p-2 rounded-lg">
                    <label for="profession" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profissão</label>
                    <input type="text" id="profession" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Professora...." required />
                </div>
                <div id="phrase-div" class="border-2 border-transparent p-2 rounded-lg">
                    <label for="phrase" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Frase</label>
                    <input type="text" id="phrase" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Lorem ipsum...." required />
                </div>
                <div id="image-div" class="border-2 border-transparent p-2 rounded-lg">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Imagem de Perfil</label>
                    <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none" aria-describedby="file_input_help" id="file_input" type="file">
                    <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                </div>
            </div>
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Salvar</button>          
        </form>
    </section>
</template>

<script>
    export default {
        name: 'EditNewCard',
        data(){
            return {
                bool: false,
            }
        },
        methods: {
            onOffEffect(div){
                let target = document.getElementById(div);
                this.bool ? target.style.borderColor = 'transparent' : target.style.borderColor = 'red'
                this.bool = !this.bool
            },
        },
    }
    </script>

<style scoped>

</style>