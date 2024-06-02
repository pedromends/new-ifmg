<template lang="">
    <section class="flex justify-center items-center p-10">
        <div class="p-18">
            <div class="flex items-center gap-10">
                <img class="animate-pulse h-96 rounded-lg" :src="require('@/assets/images/ifmg.jpeg')" alt="">
                <div class="flex flex-col gap-36 justify-between">
                    <form v-if="boolForm" class="flex flex-col gap-5 rounded-lg border-2 border-maingreen pt-10">
                        <div class="flex justify-center">
                            <img class="w-72 h-18" :src="require('@/assets/icons/ifmg.jpg')" alt="">
                        </div>
                        <p class="px-10 font-bold text-2xl underline underline-offset-2 decoration-4 decoration-maingreen">Bem-vindo de volta!</p>
                        <div class="w-full px-10" >
                            <label class="text-maingray font-medium">Email:</label>
                            <input class="rounded-lg border border-maingreen w-full focus:border-red-600"
                                v-model="newUser.email" type="text"/>
                        </div>
                        <div class="w-full px-10" >
                            <label class="text-maingray font-medium">Senha:</label>
                            <input class="rounded-lg border border-maingreen w-full focus:border-red-600"
                                v-model="newUser.password" type="text"/>
                        </div>
                        <div class="w-full px-10 flex justify-center gap-10">
                            <button class="text-white bg-maingreen hover:bg-govblue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center px-36 py-3 transition duration-200"
                                @click.prevent="requestLogin()" type="submit">Salvar</button>
                        </div> 
                        <div class="flex justify-center items-center gap-3 w-full">
                            <hr class="h-1 bg-red-600 w-36"/>
                            <p>OU</p>
                            <hr class="h-1 bg-red-600 w-36"/>
                        </div>
                        <div class="flex justify-center items-center text-govblue hover:underline">
                            <p class="cursor-pointer">Esqueceu sua senha?</p>
                        </div>
                        <div class="bg-gray-300 w-full px-10 flex justify-center py-3">
                            <div class="bg-gray-300 w-full px-10 flex justify-center py-3 text-gray-900">Não tem uma conta ?
                                <button @click="switchTo()" class="hover:underline ml-2"> Cadastre-se</button>
                            </div>
                        </div>
                    </form>

                    <form v-if="!boolForm" class="flex flex-col gap-5 rounded-lg border-2 border-maingreen pt-10">
                        <div class="flex justify-center">
                            <img class="w-72 h-18" :src="require('@/assets/icons/ifmg.jpg')" alt="">
                        </div>
                        <p class="px-10 font-bold text-2xl underline underline-offset-2 decoration-4 decoration-maingreen">Cadastre-se</p>
                        <div class="w-full px-10" >
                            <label class="text-maingray font-medium">Nome:</label>
                            <input class="rounded-lg border border-maingreen w-full focus:border-red-600"
                                v-model="newUser.firstName" type="text"/>
                        </div>
                        <div class="w-full px-10" >
                            <label class="text-maingray font-medium">Sobrenome:</label>
                            <input class="rounded-lg border border-maingreen w-full focus:border-red-600"
                                v-model="newUser.lastName" type="text"/>
                        </div>
                        <div class="w-full px-10" >
                            <label class="text-maingray font-medium">Nome de Usuário:</label>
                            <input class="rounded-lg border border-maingreen w-full focus:border-red-600"
                                v-model="newUser.username" type="text"/>
                        </div>
                        <div class="w-full px-10" >
                            <label for="" class="text-maingray font-medium">Email:</label>
                            <input class="rounded-lg border border-maingreen w-full focus:border-red-600"
                                v-model="newUser.email" type="text"/>
                        </div>
                        <div class="w-full px-10" >
                            <label for="" class="text-maingray font-medium">Senha:</label>
                            <input class="rounded-lg border border-maingreen w-full focus:border-red-600"
                                v-model="newUser.password" type="text"/>
                        </div>
                        <div class="w-full px-10" >
                            <label class="text-maingray font-medium">Confirme sua senha:</label>
                            <input class="rounded-lg border border-maingreen w-full focus:border-red-600"
                                v-model="newUser.confirmPassword" type="text"/>
                        </div>
                        <div class="w-full px-10" >
                            <label class="text-maingray font-medium">Aluno/Professor:</label>
                            <input class="rounded-lg border border-maingreen focus:border-red-600 ml-1"
                                 type="checkbox"/>
                        </div>
                        <div class="w-full px-10 flex justify-center gap-10">
                            <button class="text-white bg-maingreen hover:bg-govblue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center px-36 py-3 transition duration-200"
                                @click.prevent="requestCreateUser()" type="submit">Salvar</button>
                        </div> 
                        <div class="flex justify-center items-center gap-3 w-full">
                            <hr class="h-1 bg-red-600 w-36"/>
                            <p>OU</p>
                            <hr class="h-1 bg-red-600 w-36"/>
                        </div>
                        <div class="flex justify-center items-center text-govblue hover:underline">
                            <p class="cursor-pointer">Esqueceu sua senha?</p>
                        </div>
                        <div class="bg-gray-300 w-full px-10 flex justify-center py-3 text-gray-900">
                            <div>Já tem conta ?
                                <button @click="switchTo()" class="hover:underline">Faça Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
// import router from '@/router/index.js'
import { createUser } from '@/services/UserService.js';

export default {
    name: 'LoginPage',
    components:{

    },
    data(){
        return {
            boolForm: true,
            newUser:{
                firstName: '',
                lastName: '',
                username: '',
                email: '',
                password: '',
                confirmPassword: '',
            }
        }
    },
    methods:{
        switchTo(){
            this.boolForm = !this.boolForm
        },
        requestCreateUser(){
            console.log(this.newUser)
            createUser(this.newUser).then((response) => {
                console.log(response)
            })
            // .finally(() => {
            //     router.push('/').then(() => {
            //         window.location.reload();
            //     }); 
            // })
        },
        requestLogin(){

        }
    }
}
</script>
<style lang="">
    
</style>