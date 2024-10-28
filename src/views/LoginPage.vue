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
                            <p class="cursor-pointer">Esqueceu sua senha?</p>
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
    import { createUser, loginUser, sendRegisterEmail } from '@/services/UserService.js';
    import { mapMutations, mapActions } from "vuex";
    import { getOneImage } from '@/services/ImageService';

    export default {
        name: 'LoginPage',
        mounted() {
            getOneImage(145).then((response) => {
                let div = document.getElementById("login-screen");

                this.img_obj = response.data;
                this.loadBackground()

                div.classList.add('dyna-bg-image');
            });
        },
        data() {
            return {
                isLoggedIn: this.$store.getters.isLoggedIn,
                boolForm: true,
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
                this.$store.commit('setAlert', true)
                console.log(this.newUser.firstName.length, this.newUser.lastName.length, this.newUser.email.length, this.newUser.password.length, this.newUser.confirmPassword.length)
                if (this.newUser.firstName.length > 0 && this.newUser.lastName.length > 0 && this.newUser.email.length > 0 && this.newUser.password.length > 0 && this.newUser.confirmPassword.length > 0) {
                    if (this.newUser.password == this.newUser.confirmPassword) {
                        createUser(this.newUser).then((response) => {
                            const aux = JSON.stringify(response.data)
                            this.$store.commit('setUser', aux)

                            this.$nextTick(() => {
                                this.showSuccessRegister()
                            })

                            setInterval(() => {
                                router.push("/").then(() => {
                                    this.$store.commit('setAlert', false)
                                    window.location.reload()
                                })
                            }, 3000)
                        }).catch(e => {
                            console.log(e)
                            this.$nextTick(() => {
                                this.showErrorRegister()
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
            requestLogin() {
                this.$store.commit('setAlert', true)
                if (this.login.email.length > 0 && this.login.password.length > 0) {
                    loginUser(this.login).then((response) => {
                        const aux = response.data
                        let newToken = aux.token

                        this.$store.commit('setUser', aux.userVO)
                        this.$store.commit('setToken', newToken)
                        this.$store.commit('setRole', aux.userVO.role)

                        window.localStorage.setItem("refresh_token", newToken)
                        this.$nextTick(() => {
                            this.showSuccessLogin()
                        })
                    }).catch((e) => {
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