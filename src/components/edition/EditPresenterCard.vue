<template lang="">
    <section class="flex flex-col justify-center bg-lightgray gap-10">
        
        <div class="flex items-center">
            <div class="px-5">
                <div @mouseover="setCard(1)" class="bg-white border-b-4 border-maingreen flex flex-col text-center items-center px-2 py-6 hover:shadow-2xl transition duration-400 relative z-20">
                    <div role="status" class="max-w-sm animate-pulse flex flex-col pt-4 px-14 gap-4">
                        <h1 @mouseover="onOffEffect('number-div')" @mouseleave="onOffEffect('number-div')" class="h-8 bg-maingreen rounded-full w-24 self-center border-4 border-transparent hover:border-red-700"></h1>
                        <p  @mouseover="onOffEffect('name-div')" @mouseleave="onOffEffect('name-div')" class="h-2 bg-black rounded-full w-36 mb-2.5 border-2 border-transparent hover:border-red-700"></p>
                    </div>
                </div>
            </div>
            <div class="px-5">
                <div @mouseover="setCard(2)" class="bg-white border-b-4 border-maingreen flex flex-col text-center items-center px-2 py-6 hover:shadow-2xl transition duration-400 relative z-20">
                    <div role="status" class="max-w-sm animate-pulse flex flex-col pt-4 px-14 gap-4">
                        <h1 @mouseover="onOffEffect('number-div')" @mouseleave="onOffEffect('number-div')" class="h-8 bg-maingreen rounded-full w-24 self-center border-4 border-transparent hover:border-red-700"></h1>
                        <p  @mouseover="onOffEffect('name-div')" @mouseleave="onOffEffect('name-div')" class="h-2 bg-black rounded-full w-36 mb-2.5 border-2 border-transparent hover:border-red-700"></p>
                    </div>
                </div>
            </div>
            <div class="px-5">
                <div @mouseover="setCard(3)" class="bg-white border-b-4 border-maingreen flex flex-col text-center items-center px-2 py-6 hover:shadow-2xl transition duration-400 relative z-20">
                    <div role="status" class="max-w-sm animate-pulse flex flex-col pt-4 px-14 gap-4">
                        <h1 @mouseover="onOffEffect('number-div')" @mouseleave="onOffEffect('number-div')" class="h-8 bg-maingreen rounded-full w-24 self-center border-4 border-transparent hover:border-red-700"></h1>
                        <p  @mouseover="onOffEffect('name-div')" @mouseleave="onOffEffect('name-div')" class="h-2 bg-black rounded-full w-36 mb-2.5 border-2 border-transparent hover:border-red-700"></p>
                    </div>
                </div>
            </div>
            <div class="px-5">
                <div @mouseover="setCard(4)" class="bg-white border-b-4 border-maingreen flex flex-col text-center items-center px-2 py-6 hover:shadow-2xl transition duration-400 relative z-20">
                    <div role="status" class="max-w-sm animate-pulse flex flex-col pt-4 px-14 gap-4">
                        <h1 @mouseover="onOffEffect('number-div')" @mouseleave="onOffEffect('number-div')" class="h-8 bg-maingreen rounded-full w-24 self-center border-4 border-transparent hover:border-red-700"></h1>
                        <p  @mouseover="onOffEffect('name-div')" @mouseleave="onOffEffect('name-div')" class="h-2 bg-black rounded-full w-36 mb-2.5 border-2 border-transparent hover:border-red-700"></p>
                    </div>
                </div>
            </div>
        </div>
        <form class="bg-white p-10 rounded-lg" >
            <div class="grid gap-6 mb-2 grid-cols-1">
                <div>
                    <div id="number-div" class="flex flex-col gap-3 border border-transparent rounded-lg p-2">
                        <p class="font-bold text-lg">Card {{ cardToUpdate }}</p>
                        <label for="number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Número</label>
                        <input class="bg-gray-50 border border-gray-300 text-gray-900 focus:ring-red-600 focus:ring-2 text-sm rounded-lg w-full p-2.5" 
                            type="number" id="number" placeholder="45+, 10+, 20+ etc..." required v-model="newCard.num"/>
                    </div>
                    <div id="name-div" class="border border-transparent rounded-lg p-2">
                        <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Característica</label>
                        <input class="bg-gray-50 border border-gray-300 text-gray-900 focus:ring-red-600 focus:ring-2 text-sm rounded-lg w-full p-2.5"
                            type="text" id="last_name" placeholder="Projetos Publicados, Empresas Parceiras....." required v-model="newCard.text"/>
                    </div>
                </div>
                <button type="submit" @click.prevent="updateCard()" class="text-white bg-maingreen hover:bg-govblue focus:ring-2 focus:outline-none focus:ring-red-600 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Salvar</button>
            </div>
        </form>
    </section>
</template>

<script>
import router from '@/router/index.js'
import { createCard } from '@/services/PresenterCardService.js'

export default {
    name: 'EditPresenterCard',
    data(){
        return {
            bool: false,
            cardToUpdate: 1,
            newCard:{
                num: null,
                text: '',
            }
        }
    },
    methods: {
        onOffEffect(div){
            let target = document.getElementById(div);
            this.bool ? target.style.borderColor = 'transparent' : target.style.borderColor = 'red'
            this.bool = !this.bool
        },
        updateCard(){
            this.newCard.id = this.cardToUpdate
            createCard(this.newCard).then((response) => {
                console.log(response)
            }).finally(() => {
                router.push('/').then(() => {
                    var element = document.getElementById("navbar");
                    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                }); 
            })
        },
        setCard(form){
            this.cardToUpdate = form
        }
    },
}
</script>

<style scoped>
</style>