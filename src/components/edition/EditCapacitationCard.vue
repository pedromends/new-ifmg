<template lang="">
    <section class="flex flex-col justify-center bg-lightgray gap-10">
        <div role="status" class="animate-pulse flex gap-5">
            <div @mouseover="changeForm(1)"  class="transition duration-200 hover:text-black hover:bg-white flex flex-col gap-3 px-8 py-8 rounded-3xl border-2 border-white bg-maingreen">
                <div @mouseover="onOffEffect('image-div')" @mouseleave="onOffEffect('image-div')" class="flex justify-between items-center ">
                    <svg class="w-8 h-8 text-gray-200 effect-1 border border-transparent hover:border-red-700 rounded-lg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                    </svg>
                </div>
                <div @mouseover="onOffEffect('title-div')" @mouseleave="onOffEffect('title-div')" class="border border-transparent hover:border-red-700 rounded-lg">
                    <div class="h-2.5 bg-white rounded-full w-36 mb-1 effect"></div>
                    <div class="h-2.5 bg-white rounded-full w-28 mb-4 effect"></div>
                </div>
                <div @mouseover="onOffEffect('resume-div')" @mouseleave="onOffEffect('resume-div')" class="flex flex-col gap-1 border border-transparent hover:border-red-700 rounded-lg">
                    <div class="h-1 bg-white rounded-full effect w-56"></div>
                    <div class="h-1 bg-white rounded-full effect w-48"></div>
                    <div class="h-1 bg-white rounded-full effect w-36"></div>
                </div>
                <a class="text-xs flex items-center gap-2 font-semibold bg-no-repeat hover:underline text-white effect-1" href="#">Explorar -> <div class="w-5 h-5"/></a>
            </div>
            <div @mouseover="changeForm(2)"  class="transition duration-200 hover:text-black hover:bg-white flex flex-col gap-3 px-8 py-8 rounded-3xl border-2 border-white bg-maingreen">
                <div @mouseover="onOffEffect('image-div')" @mouseleave="onOffEffect('image-div')" class="flex justify-between items-center ">
                    <svg class="w-8 h-8 text-gray-200 effect-1 border border-transparent hover:border-red-700 rounded-lg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                    </svg>
                </div>
                <div @mouseover="onOffEffect('title-div')" @mouseleave="onOffEffect('title-div')" class="border border-transparent hover:border-red-700 rounded-lg">
                    <div class="h-2.5 bg-white rounded-full w-36 mb-1 effect"></div>
                    <div class="h-2.5 bg-white rounded-full w-28 mb-4 effect"></div>
                </div>
                <div @mouseover="onOffEffect('resume-div')" @mouseleave="onOffEffect('resume-div')" class="flex flex-col gap-1 border border-transparent hover:border-red-700 rounded-lg">
                    <div class="h-1 bg-white rounded-full effect w-56"></div>
                    <div class="h-1 bg-white rounded-full effect w-48"></div>
                    <div class="h-1 bg-white rounded-full effect w-36"></div>
                </div>
                <a class="text-xs flex items-center gap-2 font-semibold bg-no-repeat hover:underline text-white effect-1" href="#">Explorar -> <div class="w-5 h-5"/></a>
            </div>
            <div @mouseover="changeForm(3)"  class="transition duration-200 hover:text-black hover:bg-white flex flex-col gap-3 px-8 py-8 rounded-3xl border-2 border-white bg-maingreen">
                <div @mouseover="onOffEffect('image-div')" @mouseleave="onOffEffect('image-div')" class="flex justify-between items-center ">
                    <svg class="w-8 h-8 text-gray-200 effect-1 border border-transparent hover:border-red-700 rounded-lg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                    </svg>
                </div>
                <div @mouseover="onOffEffect('title-div')" @mouseleave="onOffEffect('title-div')" class="border border-transparent hover:border-red-700 rounded-lg">
                    <div class="h-2.5 bg-white rounded-full w-36 mb-1 effect"></div>
                    <div class="h-2.5 bg-white rounded-full w-28 mb-4 effect"></div>
                </div>
                <div @mouseover="onOffEffect('resume-div')" @mouseleave="onOffEffect('resume-div')" class="flex flex-col gap-1 border border-transparent hover:border-red-700 rounded-lg">
                    <div class="h-1 bg-white rounded-full effect w-56"></div>
                    <div class="h-1 bg-white rounded-full effect w-48"></div>
                    <div class="h-1 bg-white rounded-full effect w-36"></div>
                </div>
                <a class="text-xs flex items-center gap-2 font-semibold bg-no-repeat hover:underline text-white effect-1" href="#">Explorar -> <div class="w-5 h-5"/></a>
            </div>
            <div @mouseover="changeForm(4)"  class="transition duration-200 hover:text-black hover:bg-white flex flex-col gap-3 px-8 py-8 rounded-3xl border-2 border-white bg-maingreen">
                <div @mouseover="onOffEffect('image-div')" @mouseleave="onOffEffect('image-div')" class="flex justify-between items-center ">
                    <svg class="w-8 h-8 text-gray-200 effect-1 border border-transparent hover:border-red-700 rounded-lg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                    </svg>
                </div>
                <div @mouseover="onOffEffect('title-div')" @mouseleave="onOffEffect('title-div')" class="border border-transparent hover:border-red-700 rounded-lg">
                    <div class="h-2.5 bg-white rounded-full w-36 mb-1 effect"></div>
                    <div class="h-2.5 bg-white rounded-full w-28 mb-4 effect"></div>
                </div>
                <div @mouseover="onOffEffect('resume-div')" @mouseleave="onOffEffect('resume-div')" class="flex flex-col gap-1 border border-transparent hover:border-red-700 rounded-lg">
                    <div class="h-1 bg-white rounded-full effect w-56"></div>
                    <div class="h-1 bg-white rounded-full effect w-48"></div>
                    <div class="h-1 bg-white rounded-full effect w-36"></div>
                </div>
                <a class="text-xs flex items-center gap-2 font-semibold bg-no-repeat hover:underline text-white effect-1" href="#">Explorar -> <div class="w-5 h-5"/></a>
            </div>
        </div>
        <form v-if="currentForm == 1" class="bg-white p-10 rounded-lg">
            <p class="font-bold text-lg">Card 1</p>
            <div class="grid gap-6 mb-6 grid-cols-2">
                <div id="title-div" class="border-2 border-transparent p-2 rounded-lg">
                    <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Título</label>
                    <input type="text" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John" required />
                </div>
                <div id="resume-div" class="border-2 border-transparent p-2 rounded-lg">
                    <label for="resume" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Resumo</label>
                    <input type="text" id="resume" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Doe" required />
                </div>
                <div id="link-div" class="border-2 border-transparent p-2 rounded-lg">
                    <label for="lattes_link" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Link</label>
                    <input type="tel" id="lattes_link" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Link" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                </div>
                <div id="image-div" class="border-2 border-transparent p-2 rounded-lg">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Imagem do Ícone</label>
                    <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none" aria-describedby="file_input_help" id="file_input" type="file">
                    <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                </div>
            </div>
            <button type="submit" class="text-white bg-maingreen hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Salvar</button>
        </form>
        <form v-if="currentForm == 2" class="bg-white p-10 rounded-lg">
            <p class="font-bold text-lg">Card 2</p>
            <div class="grid gap-6 mb-6 grid-cols-2">
                <div id="title-div" class="border-2 border-transparent p-2 rounded-lg">
                    <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Título</label>
                    <input type="text" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John" required />
                </div>
                <div id="resume-div" class="border-2 border-transparent p-2 rounded-lg">
                    <label for="resume" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Resumo</label>
                    <input type="text" id="resume" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Doe" required />
                </div>
                <div id="link-div" class="border-2 border-transparent p-2 rounded-lg">
                    <label for="lattes_link" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Link</label>
                    <input type="tel" id="lattes_link" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Link" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                </div>
                <div id="image-div" class="border-2 border-transparent p-2 rounded-lg">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Imagem do Ícone</label>
                    <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none" aria-describedby="file_input_help" id="file_input" type="file">
                    <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                </div>
            </div>
            <button type="submit" class="text-white bg-maingreen hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Salvar</button>
        </form>
        <form v-if="currentForm == 3" class="bg-white p-10 rounded-lg">
            <p class="font-bold text-lg">Card 3</p>
            <div class="grid gap-6 mb-6 grid-cols-2">
                <div id="title-div" class="border-2 border-transparent p-2 rounded-lg">
                    <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Título</label>
                    <input type="text" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John" required />
                </div>
                <div id="resume-div" class="border-2 border-transparent p-2 rounded-lg">
                    <label for="resume" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Resumo</label>
                    <input type="text" id="resume" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Doe" required />
                </div>
                <div id="link-div" class="border-2 border-transparent p-2 rounded-lg">
                    <label for="lattes_link" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Link</label>
                    <input type="tel" id="lattes_link" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Link" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                </div>
                <div id="image-div" class="border-2 border-transparent p-2 rounded-lg">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Imagem do Ícone</label>
                    <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none" aria-describedby="file_input_help" id="file_input" type="file">
                    <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                </div>
            </div>
            <button type="submit" class="text-white bg-maingreen hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Salvar</button>
        </form>
        <form v-if="currentForm == 4" class="bg-white p-10 rounded-lg">
            <p class="font-bold text-lg">Card 4</p>
            <div class="grid gap-6 mb-6 grid-cols-2">
                <div id="title-div" class="border-2 border-transparent p-2 rounded-lg">
                    <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Título</label>
                    <input type="text" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John" required />
                </div>
                <div id="resume-div" class="border-2 border-transparent p-2 rounded-lg">
                    <label for="resume" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Resumo</label>
                    <input type="text" id="resume" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Doe" required />
                </div>
                <div id="link-div" class="border-2 border-transparent p-2 rounded-lg">
                    <label for="lattes_link" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Link</label>
                    <input type="tel" id="lattes_link" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Link" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                </div>
                <div id="image-div" class="border-2 border-transparent p-2 rounded-lg">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Imagem do Ícone</label>
                    <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none" aria-describedby="file_input_help" id="file_input" type="file">
                    <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                </div>
            </div>
            <button type="submit" class="text-white bg-maingreen hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Salvar</button>
        </form>
    </section>
</template>

<script>
    export default {
        name: 'EditCapacitation',
        data(){
            return {
                bool: false,
                currentForm: 1
            }
        },
        methods: {
            onOffEffect(div){
                let target = document.getElementById(div);
                this.bool ? target.style.borderColor = 'transparent' : target.style.borderColor = 'red'
                this.bool = !this.bool
            },
            changeForm(form){
            this.currentForm = form
        }
        },
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