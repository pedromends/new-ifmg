<template lang="">
    <section id="login-screen" class="flex items-start justify-between p-10">
        <div class="p-18 flex justify-end w-full gap-20">
            <div class="flex items-center gap-10 pt-10">
                <div class="flex flex-col gap-36 justify-between">

                    <!-- Formulário Login -->
                    <form v-if="boolForm"
                        class="flex flex-col gap-5 rounded-2xl border-2 border-maingreen pt-10 bg-white">
                        <div class="flex justify-center">
                            <img class="w-72 h-18" :src="require('@/assets/icons/ifmg.jpg')" alt="">
                        </div>
                        <p
                            class="px-10 text-2xl underline underline-offset-2 decoration-2 decoration-maingreen font-semibold">
                            Bem-vindo de volta!</p>
                        <div class="w-full px-10">
                            <label class="text-maingray font-medium">Email:</label>
                            <input class="rounded-lg border border-maingreen w-full focus:border-red-600"
                                v-model="login.email" type="text" />
                        </div>
                        <div class="w-full px-10">
                            <label class="text-maingray font-medium">Senha:</label>
                            <input class="rounded-lg border border-maingreen w-full focus:border-red-600"
                                v-model="login.password" type="password" />
                        </div>
                        <div class="w-full px-10 flex flex-col justify-center gap-10">
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


                            <button data-modal-target="retrieve-modal" data-modal-toggle="retrieve-modal"
                                class="block text-white bg-maingreen hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-maingreen dark:focus:ring-blue-800"
                                type="button">
                                Esqueceu sua senha ?
                            </button>

                            <div id="retrieve-modal" tabindex="-1" aria-hidden="true"
                                class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                                <div class="relative p-4 w-full max-w-2xl max-h-full">
                                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                        <div
                                            class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                                Esqueceu sua senha ?
                                            </h3>
                                            <button type="button"
                                                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                                                data-modal-hide="retrieve-modal">
                                                <svg class="w-3 h-3" aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                    <path stroke="currentColor" stroke-linecap="round"
                                                        stroke-linejoin="round" stroke-width="2"
                                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                                </svg>
                                                <span class="sr-only">Close modal</span>
                                            </button>
                                        </div>
                                        <div class="p-4 md:p-5 space-y-4">
                                            <div class="p-2">
                                                <label class="text-maingray font-medium">Email:</label>
                                                <input
                                                    class="rounded-lg border border-maingreen w-full focus:border-red-600"
                                                    v-model="retrieve.email" type="text" />
                                            </div>
                                        </div>
                                        <div
                                            class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                                            <button data-modal-hide="retrieve-modal" type="button"
                                                class="text-white bg-maingreen hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                                Enviar</button>
                                            <button data-modal-hide="retrieve-modal" type="button"
                                                class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-maingreen focus:z-10 focus:ring-4 focus:ring-gray-100">
                                                Cancelar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="bg-gray-300 rounded-b-2xl w-full px-10 flex justify-center py-3">
                            <div class="bg-gray-300 w-full px-10 flex justify-center py-3 text-gray-900">Não tem uma
                                conta ?
                                <button @click="switchForm()" class="hover:underline ml-2">Cadastre-se</button>
                            </div>
                        </div>
                    </form>

                    <!-- Formulário Cadastro -->
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
                            <div class="w-full flex justify-center gap-10">
                                <button
                                    class="text-white bg-maingreen hover:bg-govblue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center px-36 py-3 transition duration-200"
                                    @click.prevent="requestCreateUser()" type="submit">Salvar</button>
                            </div>
                        </div>
                        <div class="bg-gray-300 rounded-b-2xl w-full px-10 flex justify-center py-3 text-gray-900">
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
    import { createUser, loginUser, sendRegisterEmail, getUserInfo } from '@/services/UserService.js';
    import { mapMutations, mapActions } from "vuex";
    import { getOneImage } from '@/services/ImageService';

    export default {
        name: 'LoginPage',
        mounted() {
            getOneImage(145).then((response) => {
                let div = document.getElementById("login-screen");
                if (div) {
                    this.img_obj = response.data;
                    this.loadBackground()

                    div.classList.add('dyna-bg-image');
                }
            });
        },
        data() {
            return {
                isLoggedIn: this.$store.getters.isLoggedIn,
                boolForm: true,
                retrieve: {
                    email: ''
                },
                login: {
                    email: '',
                    password: ''
                },
                newUser: {
                    firstName: '',
                    lastName: '',
                    role: 'USER',
                    email: '',
                    password: '',
                    confirmPassword: '',
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
            ...mapMutations([
                "setUser",
                "setToken",
                "setRole",
                "setAlert"
            ]),
            ...mapActions([
                "getToken",
                "getUser",
                "isAlertFired"
            ]),
            requestCreateUser() {
                if (this.newUser.firstName.length > 0 && this.newUser.lastName.length > 0 && this.newUser.email.length > 0 && this.newUser.password.length > 0 && this.newUser.confirmPassword.length > 0) {
                    if (this.newUser.password == this.newUser.confirmPassword) {
                        createUser(this.newUser).then((response) => {
                            const res = response.data

                            this.$store.commit('setAlert', true)
                            this.$store.commit('setUser', res.userVO.email)
                            this.$store.commit('setRole', 'USER')

                            this.$nextTick(() => {
                                this.showSuccessRegister()

                                let obj = {
                                    email: res.userVO.email,
                                    firstName: res.userVO.firstName,
                                    lastName: res.userVO.lastName,
                                    token: res.token
                                }

                                sendRegisterEmail(obj).then(() =>
                                    setInterval(() => {
                                        router.push("/").then(() => {
                                            this.$store.commit('setAlert', false)
                                            window.location.reload()
                                        })
                                    }, 3000)
                                )
                            })
                        }).catch(e => {
                            console.log(e)
                            this.$store.commit('setAlert', true)
                            this.$nextTick(() => {
                                this.showEqualFields()
                            })
                        })
                    } else {
                        alert('As senhas precisam ser iguais')
                    }
                } else {
                    this.$nextTick(() => {
                        this.showMissingFields()
                    })
                }
            },
            getInicialInfo() {
                getUserInfo({ email: this.login.email }).then((response) => {
                    let res = response.data
                    console.log(res)
                    this.$store.commit('setUser', res.email)
                    this.$store.commit('setRole', res.role)
                })
            },
            requestLogin() {
                if (this.login.email.length > 0 && this.login.password.length > 0) {
                    loginUser(this.login).then((response) => {
                        console.log(response.data)
                        if (parseInt(response.data) !== 403) {

                            this.$store.commit('setToken', response.data)
                            window.localStorage.setItem("refresh_token", response.data)

                            this.getInicialInfo()

                            this.$store.commit('setAlert', true)
                            this.$nextTick(() => {
                                this.showSuccessLogin()
                            })
                        } else {
                            this.$store.commit('setAlert', true)
                            this.$nextTick(() => {
                                this.showErrorLogin()
                            })
                        }
                    }).catch((e) => {
                        this.$store.commit('setAlert', true)
                        this.$nextTick(() => {
                            this.showErrorLogin()
                        })
                    })
                } else {
                    this.$nextTick(() => {
                        this.alertMissingFields()
                    })
                }
            },
            loadBackground() {
                let dynamicStyle = document.createElement('style');
                dynamicStyle.innerHTML = `
                    .dyna-bg-image {
                        background-image: url('${this.img_obj.code}');
                    }
                `;
                document.head.appendChild(dynamicStyle);
            },
            showSuccessLogin() {
                let div = document.getElementById("success-login-alert")
                div.style.display = "flex"

                setInterval(() => {
                    window.location.reload()
                }, 3000)
            },
            showMissingFields() {
                let div = document.getElementById("alert-missing-fields")
                div.style.display = "flex"

                setInterval(() => {
                    this.$store.commit('setAlert', false)
                }, 3000)
            },
            alertMissingFields() {
                let div = document.getElementById("alert-missing-fields")
                div.style.display = "flex"

                setInterval(() => {
                    div.style.display = "none"
                }, 3000)
            },
            showErrorLogin() {
                let div = document.getElementById("error-login-alert")
                div.style.display = "flex"

                setInterval(() => {
                    div.style.display = "none"
                    this.$store.commit('setAlert', false)
                }, 3000)
            },
            showSuccessRegister() {
                let div = document.getElementById("success-register-alert")
                div.style.display = "flex"

                setInterval(() => {
                    div.style.display = "none"
                    this.$store.commit('setAlert', false)
                }, 3000)
            },
            showErrorRegister() {
                let div = document.getElementById("error-register-alert")
                div.style.display = "flex"

                setInterval(() => {
                    div.style.display = "none"
                    this.$store.commit('setAlert', false)
                }, 3000)
            },
            showEqualFields() {
                let div = document.getElementById("alert-equal-fields")
                div.style.display = "flex"

                setInterval(() => {
                    div.style.display = "none"
                    this.$store.commit('setAlert', false)
                }, 3000)
            },
            switchForm() {
                this.boolForm = !this.boolForm
            },
        }
    }
</script>

<style>
    .dyna-bg-image {
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
</style>