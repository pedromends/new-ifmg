<template lang="">
    <section class="flex items-start justify-between px-32 py-10 bg-campus bg-no-repeat bg-bottom bg-cover">
        <div class="p-18 flex justify-end w-full gap-20">
            <div class="flex items-center gap-10">
                <div class="flex flex-col gap-36 justify-between">
                    <form v-if="boolForm"
                        class="flex flex-col gap-5 rounded-2xl border-2 border-maingreen pt-10 bg-white">
                        <div class="flex justify-center">
                            <img class="w-72 h-18" :src="require('@/assets/icons/ifmg.jpg')" alt="">
                        </div>
                        <p
                            class="px-10 text-2xl underline underline-offset-2 decoration-2 decoration-maingreen font-semibold">
                            Bem-vindo de volta!</p>
                        <div class="w-full px-10">
                            <label class="text-maingray font-medium">Nome de Usuário:</label>
                            <input class="rounded-lg border border-maingreen w-full focus:border-red-600"
                                v-model="login.email" type="text" />
                        </div>
                        <div class="w-full px-10">
                            <label class="text-maingray font-medium">Senha:</label>
                            <input class="rounded-lg border border-maingreen w-full focus:border-red-600"
                                v-model="login.password" type="password" />
                        </div>
                        <div class="w-full px-10 flex justify-center gap-10">
                            <button
                                class="text-white bg-maingreen hover:bg-govblue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center px-36 py-3 transition duration-200"
                                @click.prevent="requestLogin()" type="submit">Login</button>
                        </div>
                        <div class="flex justify-center items-center gap-3 w-full">
                            <hr class="h-1 bg-red-600 w-36" />
                            <p>OU</p>
                            <hr class="h-1 bg-red-600 w-36" />
                        </div>
                        <div class="flex justify-center items-center text-govblue hover:underline">
                            <p class="cursor-pointer">Esqueceu sua senha?</p>
                        </div>
                        <div class="bg-gray-300 w-full px-10 flex justify-center py-3">
                            <div class="bg-gray-300 w-full px-10 flex justify-center py-3 text-gray-900">Não tem uma
                                conta ?
                                <button @click="switchForm()" class="hover:underline ml-2">Cadastre-se</button>
                            </div>
                        </div>
                    </form>

                    <form v-if="!boolForm"
                        class="flex flex-col rounded-2xl border-2 border-maingreen pt-10 gap-5 bg-white">
                        <div class="flex justify-center">
                            <img class="w-72 h-18" :src="require('@/assets/icons/ifmg.jpg')" alt="">
                        </div>
                        <p
                            class="pl-10 text-2xl underline underline-offset-2 decoration-2 decoration-maingreen font-semibold text-start">
                            Cadastre-se</p>
                        <div class="grid grid-cols-2 gap-5 pt-3 px-10">
                            <div class="w-full">
                                <label class="text-maingray font-medium">Nome:</label>
                                <input class="rounded-lg border border-maingreen w-full focus:border-red-600"
                                    v-model="newUser.firstName" required type="text" />
                            </div>
                            <div class="w-full">
                                <label class="text-maingray font-medium">Sobrenome:</label>
                                <input class="rounded-lg border border-maingreen w-full focus:border-red-600"
                                    v-model="newUser.lastName" required type="text" />
                            </div>
                            <div class="w-full">
                                <label class="text-maingray font-medium">Nome de Usuário:</label>
                                <input class="rounded-lg border border-maingreen w-full focus:border-red-600"
                                    v-model="newUser.username" required type="text" />
                            </div>
                            <div class="w-full">
                                <label for="" class="text-maingray font-medium">Email:</label>
                                <input class="rounded-lg border border-maingreen w-full focus:border-red-600"
                                    v-model="newUser.email" type="text" required />
                            </div>
                            <div class="w-full">
                                <label for="" class="text-maingray font-medium">Senha:</label>
                                <input class="rounded-lg border border-maingreen w-full focus:border-red-600"
                                    v-model="newUser.password" type="password" required />
                            </div>
                            <div class="w-full">
                                <label class="text-maingray font-medium">Confirme sua senha:</label>
                                <input class="rounded-lg border border-maingreen w-full focus:border-red-600"
                                    v-model="newUser.confirmPassword" type="password" required />
                            </div>
                            <div class="w-full">
                                <label class="text-maingray font-medium">Aluno/Professor:</label>
                                <input class="rounded-lg border border-maingreen focus:border-red-600 ml-1"
                                    type="checkbox" required />
                            </div>
                            <div class="w-full flex justify-center gap-10">
                                <button
                                    class="text-white bg-maingreen hover:bg-govblue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center px-36 py-3 transition duration-200"
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
    import { createUser, loginUser, sendRegisterEmail } from '@/services/UserService.js';
    import { mapMutations, mapActions } from "vuex";

    export default {
        name: 'LoginPage',
        data() {
            return {
                isLoggedIn: this.$store.getters.isLoggedIn,
                boolForm: true,
                login: {
                    email: '',
                    password: ''
                },
                newUser: {
                    firstName: null,
                    lastName: null,
                    role: 'USER',
                    username: null,
                    email: null,
                    password: null,
                    confirmPassword: null,
                }
            }
        },
        beforeCreate() {
            if (this.$store.getters.isLoggedIn) {
                router.push('/').then(() => {
                    window.location.reload();
                });
            }
        },
        methods: {
            ...mapMutations(["setUser", "setToken", "setRole"]),
            ...mapActions(["getToken", "getUser"]),
            redirect() {
                // 
            },
            switchForm() {
                this.boolForm = !this.boolForm
            },
            requestCreateUser() {
                // let payload = {to: 'joao.souza@conexao10.com.br', from: 'joaopedromend14@gmail.com', subject: 'Confirmação de Email'}
                // sendRegisterEmail(payload).then((response) => {
                //     console.log(response.data)
                // }).catch(e => {
                //     console.log(e)
                // })
                if(this.newUser.firstName != null && this.newUser.lastName != null && this.newUser.username != null && this.newUser.email != null && this.newUser.password != null && this.newUser.confirmPassword != null){
                    createUser(this.newUser).then((response) => {
                        console.log(response.data)
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
                } else {
                    this.showMissingFields()
                }
            },
            requestLogin() {
                loginUser(this.login).then((response) => {
                    const aux = response.data
                    let newToken = aux.token

                    this.$store.commit('setUser', aux.userVO)
                    this.$store.commit('setToken', newToken)
                    this.$store.commit('setRole', aux.userVO.role)

                    window.localStorage.setItem("refresh_token", newToken)

                    this.showSuccessLogin()
                }).catch((e) => {
                    console.log(e)
                    this.showErrorLogin()
                })
            },
            showSuccessLogin() {
                let div = document.getElementById("success-login-alert")
                div.style.display = "flex"

                setInterval(() => {
                    router.push("/").then(() => {
                        window.location.reload()
                    })
                }, 3000)
            },
            showMissingFields(){
                let div = document.getElementById("alert-missing-fields")
                div.style.display = "flex"

                setInterval(() => {
                    window.location.reload()
                }, 3000)
            },
            showErrorLogin() {
                let div = document.getElementById("error-login-alert")
                div.style.display = "flex"

                setInterval(() => {
                    this.hide('error-login-alert')
                }, 3000)
            },
            showSuccessRegister() {
                let div = document.getElementById("success-register-alert")
                div.style.display = "flex"

                setInterval(() => {
                    this.hide('success-register-alert')
                }, 3000)
            },
            showErrorRegister() {
                let div = document.getElementById("error-register-alert")
                div.style.display = "flex"

                setInterval(() => {
                    this.hide('error-register-alert')
                }, 3000)
            },
            hide(idClass) {
                let div = document.getElementById(idClass)
                div.style.display = "none"
            }
        }
    }
</script>
<style lang="">

</style>