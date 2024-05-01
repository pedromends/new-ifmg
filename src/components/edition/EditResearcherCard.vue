<template lang="">
    <section class="flex flex-col justify-center bg-lightgray gap-10">
        <div role="status" class="animate-pulse px-96">
            <section class="hover:shadow-lg transition duration-300 rounded-lg border border-gray-200 bg-white">
                <div class="border-t border-maingreen px-4 py-5 gap-48 flex items-center justify-between animate-pulse">
                    <div @mouseover="onOffEffect('name-div')" @mouseleave="onOffEffect('name-div')"  class="h-2.5 bg-black rounded-full w-48 border border-transparent hover:border-red-700"></div>
                    <div @mouseover="onOffEffect('image-div')" @mouseleave="onOffEffect('image-div')"  alt="Polo IFMG"
                        class="h-16 rounded-lg border border-maingreen flex items-center px-5 border-transparent hover:border-red-700">
                        <svg class="w-8 h-8 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                        </svg>
                    </div>
                </div>
                <div class="flex flex-col px-3 gap-3 py-3 animate-pulse">
                    <div @mouseover="onOffEffect('course-div')" @mouseleave="onOffEffect('course-div')" class="h-2 bg-black rounded-full w-40 border border-transparent hover:border-red-700"></div>
                    <a  @mouseover="onOffEffect('email-div')" @mouseleave="onOffEffect('email-div')"  :href="link" class="flex items-center gap-3 border border-transparent hover:border-red-700 rounded-lg p-1">
                        <img alt="Polo IFMG" class="h-4" :src="require('@/assets/icons/email-green.svg')"/>
                        <div class="h-1.5 bg-maingreen rounded-full w-40"></div>
                    </a>
                    <a  @mouseover="onOffEffect('lattes-div')" @mouseleave="onOffEffect('lattes-div')"  :href="link" class="flex items-center gap-3 border border-transparent hover:border-red-700 rounded-lg p-1">
                        <img alt="Polo IFMG" class="h-4" :src="require('@/assets/icons/book-green.svg')"/>
                        <div class="h-1.5 bg-maingreen rounded-full w-40"></div>
                    </a>
                </div>
            </section>
        </div>
        <form class="bg-white p-10 rounded-lg">
            <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div id="name-div" class="border-2 border-transparent p-2 rounded-lg">
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome</label>
                    <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John" required />
                </div>
                <div id="course-div" class="border-2 border-transparent p-2 rounded-lg">
                    <label for="course" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Curso</label>
                    <input type="text" id="course" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Doe" required />
                </div>
                <div id="email-div" class="border-2 border-transparent p-2 rounded-lg">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Flowbite" required />
                </div>  
                <div id="lattes-div" class="border-2 border-transparent p-2 rounded-lg">
                    <label for="lattes_link" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Portfólio</label>
                    <input type="tel" id="lattes_link" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Portfólio" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                </div>
                <div id="image-div" class="border-2 border-transparent p-2 rounded-lg">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Imagem de Perfil</label>
                    <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none" aria-describedby="file_input_help" id="file_input" type="file">
                    <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                </div>
            </div>
            <button type="submit" class="text-white bg-maingreen hover:bg-red-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Salvar</button>            
        </form>
    </section>
</template>

<script>
    export default {
        name: 'EditResearcherCard',
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