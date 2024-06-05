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
                        <p class="px-10 text-2xl underline underline-offset-2 decoration-2 decoration-maingreen">Bem-vindo de volta!</p>
                        <div class="w-full px-10" >
                            <label class="text-maingray font-medium">Nome de Usuário:</label>
                            <input class="rounded-lg border border-maingreen w-full focus:border-red-600"
                                v-model="login.email" type="text"/>
                        </div>
                        <div class="w-full px-10" >
                            <label class="text-maingray font-medium">Senha:</label>
                            <input class="rounded-lg border border-maingreen w-full focus:border-red-600"
                                v-model="login.password" type="text"/>
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
                                <button @click="switchForm()" class="hover:underline ml-2"> Cadastre-se</button>
                            </div>
                        </div>
                    </form>

                    <form v-if="!boolForm" class="flex flex-col rounded-lg border-2 border-maingreen pt-10 gap-5">
                        <div class="flex justify-center">
                            <img class="w-72 h-18" :src="require('@/assets/icons/ifmg.jpg')" alt="">
                        </div>
                        <p class="px-10 text-2xl underline underline-offset-2 decoration-2 decoration-maingreen text-center">Cadastre-se</p>
                        <div class="grid grid-cols-2 gap-5">
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
                        </div>
                        <div class="bg-gray-300 w-full px-10 flex justify-center py-3 text-gray-900">
                            <div>Já tem conta ?
                                <button @click.prevent="switchForm()" class="hover:underline">Faça Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import router from '@/router/index.js'
import { createUser, loginUser } from '@/services/UserService.js';
import { mapMutations, mapActions } from "vuex";

export default {
    name: 'LoginPage',
    data(){
        return {
            isLoggedIn: this.$store.getters.isLoggedIn,
            boolForm: true,
            login: {
                email: 'pedro_j.css',
                password: 'joao@20091999'
            },
            newUser:{
                firstName: 'João Pedro',
                lastName: 'Mendonça de Souza',
                username: 'pedro_j.css',
                email: 'joaopedromend14@gmail.com',
                password: 'joao@20091999',
                confirmPassword: 'joao@20091999',
                role: 'KING'
            }
        }
    },
    methods:{
        ...mapMutations(["setUser", "setToken"]),
        ...mapActions(["getToken", "getUser"]),
        switchForm(){
            this.boolForm = !this.boolForm
        },
        requestCreateUser(){
            console.log(this.newUser)
            createUser(this.newUser).then((response) => {
                const aux = JSON.stringify(response.data.token)
                let newToken = aux.substring(1, aux.length-1)
                this.$store.commit('setUser', this.newUser.username)
                this.$store.commit('setToken', newToken)
                window.localStorage.setItem("refresh_token", newToken)
                document.cookie = `refresh_token = ${newToken}`

            }).catch(e => {
                console.log(e)
            })
            .finally(() => {
                router.push('/').then(() => {
                    window.location.reload();
                }); 
            })
        },
        requestLogin(){
            loginUser(this.login).then((response) => {
                const aux = JSON.stringify(response.data.token)
                let newToken = aux.substring(1, aux.length-1)
                this.$store.commit('setUser', this.newUser.username)
                this.$store.commit('setToken', newToken)
                window.localStorage.setItem("refresh_token", newToken)
                document.cookie = `refresh_token = ${newToken}`
                console.log(this.$store.getters.isLoggedIn)
                console.log(this.$store.getters.getUser)
                console.log(this.$store.getters.getToken)
            }).catch(e => {
                console.log(e)
            })
            //  .finally(() => {
            //      router.push('/').then(() => {
            //          window.location.reload();
            //      }); 
            //  })
        },
        
    }
}
</script>
<style lang="">
    
</style>