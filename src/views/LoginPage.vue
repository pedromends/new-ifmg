<template lang="">
    <section id="login-screen" class="flex items-start justify-end p-10">
        <v-form v-if="boolForm" class="flex flex-col gap-5 rounded-2xl border-2 border-maingreen pt-10 bg-white w-1/4">
            <div class="px-4 flex flex-col gap-2">
                <img class="w-72 h-18 mx-auto" :src="require('@/assets/icons/ifmg.jpg')" alt="">
                <p class="text-2xl underline underline-offset-2 decoration-2 decoration-maingreen font-semibold">
                    Bem-vindo de volta!</p>

                <v-text-field v-model="login.email"  :rules="[rules.text]" clearable class="text-maingreen"
                    color="#2F9E40" label="Email"></v-text-field>

                <v-text-field v-model="login.password" :rules="[rules.password]" clearable
                    class="text-maingreen" color="#2F9E40" label="Senha"></v-text-field>

                <v-btn class="me-4" color="#2F9E40" dark @click="requestLogin()">
                    Entrar
                </v-btn>
            </div>

            <div class="flex justify-center items-center gap-3 w-full">
                <hr class="h-1 bg-red-600 w-36" />
                <p>OU</p>
                <hr class="h-1 bg-red-600 w-36" />
            </div>
            <div class="px-4 flex justify-center">
                <v-dialog max-width="500">
                    <template v-slot:activator="{ props: activatorProps }">
                        <v-btn v-bind="activatorProps" color="#2F9E40" text="Esqueceu sua senha ?"
                            variant="flat"></v-btn>
                    </template>

                    <template v-slot:default="{ isActive }">
                        <v-card title="Dialog">
                            <v-card-text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor
                                incididunt ut labore et dolore magna aliqua.
                            </v-card-text>

                            <v-card-actions>
                                <v-spacer></v-spacer>

                                <v-btn text="Close Dialog" @click="isActive.value = false"></v-btn>
                            </v-card-actions>
                        </v-card>
                    </template>
                </v-dialog>
            </div>

            <div class="bg-gray-300 rounded-b-2xl w-full px-10 flex justify-center py-3">
                <div class="">Não tem uma
                    conta ?
                    <button @click="switchForm()" class="hover:underline ml-2">Cadastre-se</button>
                </div>
            </div>
        </v-form>

        <!-- Formulário Cadastro -->
        <v-form v-if="!boolForm" class="flex flex-col gap-5 rounded-2xl border-2 border-maingreen pt-10 bg-white w-1/2">
            <div class="flex justify-center">
                <img class="w-72 h-18" :src="require('@/assets/icons/ifmg.jpg')" alt="">
            </div>
            <p
                class="pl-10 text-2xl underline underline-offset-2 decoration-2 decoration-maingreen font-semibold text-start">
                Cadastre-se</p>
            <div class="grid grid-cols-2 gap-5 pt-3 px-10">
                <v-text-field v-model="newUser.firstName" :counter="10" :rules="[rules.text]" clearable
                    class="text-maingreen" color="#2F9E40" label="Nome"></v-text-field>

                <v-text-field v-model="newUser.lastName" :counter="10" :rules="[rules.text]" clearable
                    class="text-maingreen" color="#2F9E40" label="Sobrenome"></v-text-field>

                <v-text-field v-model="newUser.email" :counter="10" :rules="[rules.text]" clearable
                    class="text-maingreen" color="#2F9E40" label="Email"></v-text-field>
                <v-text-field v-model="newUser.password" :counter="10" :rules="[rules.text]" clearable
                    class="text-maingreen" color="#2F9E40" label="Senha"></v-text-field>

                <v-text-field v-model="newUser.confirmPassword" :counter="10" :rules="[rules.text]" clearable
                    class="text-maingreen" color="#2F9E40" label="Confirme sua senha"></v-text-field>

                <v-btn class="me-4" color="#2F9E40" type="submit" dark @click="requestCreateUser()">
                    Salvar
                </v-btn>
            </div>
            <div class="bg-gray-300 rounded-b-2xl w-full px-10 flex justify-center py-3 text-gray-900">
                <div>Já tem conta ?
                    <button @click.prevent="switchForm()" class="hover:underline">Faça Login</button>
                </div>
            </div>
        </v-form>
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
                rules: {
                    num(value) {
                        if (value?.length >= 0) return true;
                        return 'Número obrigatório';
                    },
                    password(value) {
                        if (value?.length >= 0) return true;
                        return 'Texto obrigatório';
                    }
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