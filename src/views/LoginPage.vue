<template lang="">
    <section class="flex items-start justify-between px-32 py-10 bg-campus bg-no-repeat bg-bottom bg-cover">
        <div class="p-18 flex justify-end w-full gap-20">

            <!-- Alertas -->
            <div class="transition duration-200">

                <!-- Sucesso Cadastro -->
                <div id="success-register-alert" class="hidden items-center p-4 mb-4 text-sm text-white rounded-lg bg-maingreen" role="alert">
                    <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                    </svg>
                    <span class="sr-only">Info</span>
                    <div>
                      <span class="text-lg">Cadastrado com sucesso! Agora você pode logar livremente.</span>
                    </div>
                </div>

                <!-- Sucesso Login -->
                <div id="success-login-alert" class="hidden items-center p-4 mb-4 text-sm text-white rounded-lg bg-maingreen" role="alert">
                    <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                    </svg>
                    <span class="sr-only">Info</span>
                    <div>
                      <span class="text-lg">Logado com sucesso! Redirecionando.....</span>
                    </div>
                </div>

                <!-- Erro Cadastro -->
                <div id="error-register-alert" class="hidden items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
                    <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                    </svg>
                    <span class="sr-only">Info</span>
                    <div>
                      <span class="text-lg">Erro ao cadastrar! Um ou mais campos com erro.</span>
                    </div>
                </div>

                <!-- Erro Login -->
                <div id="error-login-alert" class="hidden items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
                    <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                    </svg>
                    <span class="sr-only">Info</span>
                    <div>
                      <span class="text-lg">Erro ao logar! Credenciais incorretas.</span>
                    </div>
                </div>
            </div>

            <div class="flex items-center gap-10">
                <div class="flex flex-col gap-36 justify-between">
                    <form v-if="boolForm" class="flex flex-col gap-5 rounded-2xl border-2 border-maingreen pt-10 bg-white">
                        <div class="flex justify-center">
                            <img class="w-72 h-18" :src="require('@/assets/icons/ifmg.jpg')" alt="">
                        </div>
                        <p class="px-10 text-2xl underline underline-offset-2 decoration-2 decoration-maingreen font-semibold">Bem-vindo de volta!</p>
                        <div class="w-full px-10" >
                            <label class="text-maingray font-medium">Nome de Usuário:</label>
                            <input class="rounded-lg border border-maingreen w-full focus:border-red-600"
                                v-model="login.email" type="text"/>
                        </div>
                        <div class="w-full px-10" >
                            <label class="text-maingray font-medium">Senha:</label>
                            <input class="rounded-lg border border-maingreen w-full focus:border-red-600"
                                v-model="login.password" type="password"/>
                        </div>
                        <div class="w-full px-10 flex justify-center gap-10">
                            <button class="text-white bg-maingreen hover:bg-govblue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center px-36 py-3 transition duration-200"
                                @click.prevent="requestLogin()" type="submit">Login</button>
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
                                <button @click="switchForm()" class="hover:underline ml-2">Cadastre-se</button>
                            </div>
                        </div>
                    </form>

                    <form v-if="!boolForm" class="flex flex-col rounded-2xl border-2 border-maingreen pt-10 gap-5 bg-white">
                        <div class="flex justify-center">
                            <img class="w-72 h-18" :src="require('@/assets/icons/ifmg.jpg')" alt="">
                        </div>
                        <p class="pl-10 text-2xl underline underline-offset-2 decoration-2 decoration-maingreen font-semibold text-start">Cadastre-se</p>
                        <div class="grid grid-cols-2 gap-5 pt-3 px-10">
                            <div class="w-full">
                                <label class="text-maingray font-medium">Nome:</label>
                                <input class="rounded-lg border border-maingreen w-full focus:border-red-600"
                                    v-model="newUser.firstName" type="text"/>
                            </div>
                            <div class="w-full">
                                <label class="text-maingray font-medium">Sobrenome:</label>
                                <input class="rounded-lg border border-maingreen w-full focus:border-red-600"
                                    v-model="newUser.lastName" type="text"/>
                            </div>
                            <div class="w-full">
                                <label class="text-maingray font-medium">Nome de Usuário:</label>
                                <input class="rounded-lg border border-maingreen w-full focus:border-red-600"
                                    v-model="newUser.username" type="text"/>
                            </div>
                            <div class="w-full">
                                <label for="" class="text-maingray font-medium">Email:</label>
                                <input class="rounded-lg border border-maingreen w-full focus:border-red-600"
                                    v-model="newUser.email" type="text"/>
                            </div>
                            <div class="w-full">
                                <label for="" class="text-maingray font-medium">Senha:</label>
                                <input class="rounded-lg border border-maingreen w-full focus:border-red-600"
                                    v-model="newUser.password" type="password"/>
                            </div>
                            <div class="w-full">
                                <label class="text-maingray font-medium">Confirme sua senha:</label>
                                <input class="rounded-lg border border-maingreen w-full focus:border-red-600"
                                    v-model="newUser.confirmPassword" type="password"/>
                            </div>
                            <div class="w-full">
                                <label class="text-maingray font-medium">Aluno/Professor:</label>
                                <input class="rounded-lg border border-maingreen focus:border-red-600 ml-1"
                                     type="checkbox"/>
                            </div>
                            <div class="w-full flex justify-center gap-10">
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
import router from '@/router/index.js';
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
            newUser: {
                firstName: 'João Pedro',
                lastName: 'Mendonça de Souza',
                username: 'pedro_j.css',
                email: 'joaopedromend14@gmail.com',
                password: 'joao@20091999',
                confirmPassword: 'joao@20091999',
                role: 'Codemaster'
            }
        }
    },
    methods:{
        ...mapMutations(["setUser", "setToken"]),
        ...mapActions(["getToken", "getUser"]),
        redirect(){
           // 
        },
        switchForm(){
            this.boolForm = !this.boolForm
        },
        requestCreateUser(){
            createUser(this.newUser).then((response) => {
                const aux = JSON.stringify(response.data)
                this.$store.commit('setUser', aux)
                this.showSuccessRegister()
                setInterval(() => {
                    router.push("/").then(() => {
                        window.location.reload()
                    })
                }, 3000)
            }).catch(e => {
                console.log(e)
                this.showErrorRegister()
            })
        },
        requestLogin(){
            loginUser(this.login).then((response) => {
                const aux = response.data
                let newToken = aux.token
                console.log(newToken)
                this.$store.commit('setUser', response.data.userVO)
                this.$store.commit('setToken', newToken)
                window.localStorage.setItem("refresh_token", newToken)
                this.showSuccessLogin()
                
                setInterval(() => {
                    router.push("/").then(() => {
                        window.location.reload()
                    })
                }, 3000)
            }).catch((e) => {
                console.log(e)
                this.showErrorLogin()
            })
        },
        showSuccessLogin(){
            let div = document.getElementById("success-login-alert")
            div.style.display = "flex"
        },
        showErrorLogin(){
            let div = document.getElementById("error-login-alert")
            div.style.display = "flex"
        },
        showSuccessRegister(){
            let div = document.getElementById("success-register-alert")
            div.style.display = "flex"
        },
        showErrorRegister(){
            let div = document.getElementById("error-register-alert")
            div.style.display = "flex"
        }
    }
}
</script>
<style lang="">
    
</style>