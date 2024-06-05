<template lang="">
    <section class="flex flex-col justify-center bg-lightgray gap-10">
        <div class="flex flex-col items-center gap-5 pt-10">
            <p class="font-bold text-2xl underline underline-offset-2 decoration-4 decoration-maingreen self-start ml-6 mb-5">Cards de Apresentação</p>

            <!-- Box dos Cards -->
            <div class="flex gap-5">
                <div @mouseover="setCard(1)" class="bg-white border-b-4 border-maingreen flex flex-col text-center items-center px-2 py-6 shadow-lg shadow-transparent hover:shadow-red-600 transition duration-400 relative z-20">
                    <div role="status" class="max-w-sm animate-pulse flex flex-col pt-4 px-14 gap-4">
                        <h1 @mouseover="onOffEffect('number-div')" @mouseleave="onOffEffect('number-div')" class="h-8 bg-maingreen rounded-full w-24 self-center border-4 border-transparent hover:border-red-700"></h1>
                        <p  @mouseover="onOffEffect('name-div')" @mouseleave="onOffEffect('name-div')" class="h-2 bg-black rounded-full w-36 mb-2.5 border-2 border-transparent hover:border-red-700"></p>
                    </div>
                </div>
            
                <div @mouseover="setCard(2)" class="bg-white border-b-4 border-maingreen flex flex-col text-center items-center px-2 py-6 shadow-lg shadow-transparent hover:shadow-red-600 transition duration-400 relative z-20">
                    <div role="status" class="max-w-sm animate-pulse flex flex-col pt-4 px-14 gap-4">
                        <h1 @mouseover="onOffEffect('number-div')" @mouseleave="onOffEffect('number-div')" class="h-8 bg-maingreen rounded-full w-24 self-center border-4 border-transparent hover:border-red-700"></h1>
                        <p  @mouseover="onOffEffect('name-div')" @mouseleave="onOffEffect('name-div')" class="h-2 bg-black rounded-full w-36 mb-2.5 border-2 border-transparent hover:border-red-700"></p>
                    </div>
                </div>
            
                <div @mouseover="setCard(3)" class="bg-white border-b-4 border-maingreen flex flex-col text-center items-center px-2 py-6 shadow-lg shadow-transparent hover:shadow-red-600 transition duration-400 relative z-20">
                    <div role="status" class="max-w-sm animate-pulse flex flex-col pt-4 px-14 gap-4">
                        <h1 @mouseover="onOffEffect('number-div')" @mouseleave="onOffEffect('number-div')" class="h-8 bg-maingreen rounded-full w-24 self-center border-4 border-transparent hover:border-red-700"></h1>
                        <p  @mouseover="onOffEffect('name-div')" @mouseleave="onOffEffect('name-div')" class="h-2 bg-black rounded-full w-36 mb-2.5 border-2 border-transparent hover:border-red-700"></p>
                    </div>
                </div>
            
                <div @mouseover="setCard(4)" class="bg-white border-b-4 border-maingreen flex flex-col text-center items-center px-2 py-6 shadow-lg shadow-transparent hover:shadow-red-600 transition duration-400 relative z-20">
                    <div role="status" class="max-w-sm animate-pulse flex flex-col pt-4 px-14 gap-4">
                        <h1 @mouseover="onOffEffect('number-div')" @mouseleave="onOffEffect('number-div')" class="h-8 bg-maingreen rounded-full w-24 self-center border-4 border-transparent hover:border-red-700"></h1>
                        <p  @mouseover="onOffEffect('name-div')" @mouseleave="onOffEffect('name-div')" class="h-2 bg-black rounded-full w-36 mb-2.5 border-2 border-transparent hover:border-red-700"></p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Formulário -->
        <form class="bg-white p-10 rounded-lg mb-10">
            <div class="flex flex-col gap-6 mb-2 justify-center">
                <div>
                    <div id="number-div" class="flex flex-col gap-3 border border-transparent rounded-lg p-2">
                        <label for="number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Número Card {{ cardToUpdate }}</label>
                        <input class="bg-gray-50 border border-gray-300 text-gray-900 focus:ring-red-600 focus:ring-2 text-sm rounded-lg w-full p-2.5" 
                            type="number" id="number" placeholder="45+, 10+, 20+ etc..." required v-model="newCard.num"/>
                    </div>
                    <div id="name-div" class="border border-transparent rounded-lg p-2">
                        <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Texto Card {{ cardToUpdate }}</label>
                        <input class="bg-gray-50 border border-gray-300 text-gray-900 focus:ring-red-600 focus:ring-2 text-sm rounded-lg w-full p-2.5"
                            type="text" id="last_name" placeholder="Projetos Publicados, Empresas Parceiras....." required v-model="newCard.text"/>
                    </div>
                </div>
                <div class="w-full flex justify-center">
                    <button class="text-white bg-maingreen hover:bg-govblue focus:ring-2 focus:outline-none focus:ring-red-600 font-medium rounded-lg text-sm px-20 py-2.5 text-center transition duration-200"
                        type="submit" @click.prevent="updateCard()">Salvar</button>
                </div>
            </div>
        </form>
    </section>
</template>

<script>
 import router from '@/router/index.js'
import { updateCard } from '@/services/PresenterCardService.js'

export default {
    name: 'EditPresenterCard',
    created(){
        console.log(this.$store.getters.isLoggedIn)
        console.log(this.$store.getters.getUser)
        console.log(this.$store.getters.getToken)
    },
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
            updateCard(this.newCard).then((response) => {
                console.log(response)
            }).finally(() => {
                router.push('/').then(() => {
                    var element = document.getElementById("navbar");
                    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                }); 
            })
        },
        setCard(card){
            this.cardToUpdate = card
        }
    },
}
</script>

<style scoped>
</style>