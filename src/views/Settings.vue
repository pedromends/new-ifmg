<template lang="">
    <main class="px-16">
        <div class="flex flex-col gap-6">
            <div class="flex" aria-label="Breadcrumb">
                <ol class="flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <li class="flex items-center">
                        <router-link to="/"
                            class="flex items-center text-sm font-medium text-maingreen hover:underline">
                            <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                            </svg>
                            Home
                        </router-link>
                    </li>
                    <li class="flex items-center">
                        <svg class="rtl:rotate-180 w-3 h-3 text-gray-400" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 9 4-4-4-4" />
                        </svg>
                        <p>Configurações</p>
                    </li>
                </ol>
            </div>
            <div class="flex items-center gap-2">
                <img :src="require('@/assets/icons/settings.svg')" class="w-8 h-8 mt-2" alt="">
                <h1 class="text-4xl font-semibold underline decoration-maingreen decoration-4">Configurações</h1>
            </div>
            <div v-if="info != null" class="grid grid-cols-2 gap-10">
                <div class="">
                    <div class="flex flex-col gap-10">
                        <div class="bg-lightgray flex flex-col rounded-lg p-10 gap-10 border border-maingreen text-lg">
                            <h1 class="text-3xl font-semibold underline decoration-maingreen underline-offset-2">Foto de Perfil</h1>
                            <div class="flex flex-col gap-3">
                                <img :src="info.img.code" class="w-36 h-36 rounded-full" alt="Profile Pic">
                                <h1 class="text-2xl font-semibold underline decoration-maingreen underline-offset-2">{{ info.firstName }} {{ info.lastName }}</h1>
                                <p class="underline decoration-maingreen underline-offset-2">{{ info.profession }}</p>
                                <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none"
                                    aria-describedby="file_input_help" id="file_input" type="file" @change="onFileChanged($event)" accept="image/*">
                            </div>
                        </div>
                        <div class="bg-lightgray flex flex-col rounded-lg p-10 gap-10 border border-maingreen text-lg">
                            <div>
                                <h1 class="text-3xl font-semibold underline decoration-maingreen underline-offset-2">Idioma e Fuso-Horário</h1>
                            </div>  
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-10">
                    <div class="bg-lightgray p-8 flex flex-col gap-10 rounded-lg border border-maingreen">
                        <div>
                            <h1 class="text-3xl font-semibold underline decoration-maingreen underline-offset-2 my-3">Dados Gerais</h1>
                            <div v-if="this.newUser != null" class="grid grid-cols-2 gap-5 text-lg">
                                <div>
                                    <p class="font-semibold">Nome</p>
                                    <input :class="css.input" v-model="this.newUser.firstName" placeholder=""/>
                                </div>
                                <div>
                                    <p class="font-semibold">Sobrenome</p>
                                    <input :class="css.input" v-model="this.newUser.lastName" placeholder=""/>
                                </div>
                                <div>
                                    <p class="font-semibold">Email</p>
                                    <input :class="css.input" v-model="this.newUser.email" placeholder=""/>
                                </div>
                                <div>
                                    <p class="font-semibold">Educação</p>
                                    <input :class="css.input" v-model="this.newUser.education" placeholder=""/>
                                </div>
                                <div>
                                    <p class="font-semibold">Departamento</p>
                                    <input :class="css.input" v-model="this.newUser.department" placeholder=""/>
                                </div>
                                <div>
                                    <p class="font-semibold">Histórico de Trabalho</p>
                                    <input :class="css.input" v-model="this.newUser.firstName" placeholder=""/>
                                </div>
                                <div>
                                    <p class="font-semibold">Endereço</p>
                                    <input :class="css.input" v-model="this.newUser.address" placeholder=""/>
                                </div>
                                <div>
                                    <p class="font-semibold">Cidade</p>
                                    <input :class="css.input" v-model="this.newUser.city" placeholder=""/>
                                </div>
                                <div class="col-span-2">
                                    <p class="font-semibold">Sobre Mim</p>
                                    <textarea class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-red-600 focus:border-red-600"
                                        v-model="this.newUser.aboutMe" placeholder="Sobre mim..."  id="parag" rows="10" cols="20"></textarea>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1 class="text-3xl font-semibold underline decoration-maingreen underline-offset-2 my-3">Senha</h1>
                            <div class="grid grid-cols-2 gap-5 text-lg my-3">
                                <div>
                                    <p class="font-semibold">Nova senha</p>
                                    <input :class="css.input" type="password" placeholder=""/>
                                </div>
                                <div>
                                    <p class="font-semibold">Confirmação da nova senha</p>
                                    <input :class="css.input" type="password" placeholder=""/>
                                </div>
                                <button class="col-span-2 text-white bg-maingreen hover:bg-govblue focus:ring-2 focus:outline-none focus:ring-red-600 font-medium rounded-lg text-sm w-full sm:w-auto px-48 py-2.5 text-center transition duration-200"
                                    @click.prevent="updateUser()" type="submit" >Salvar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import { getUserInfo, updateUserInfo } from '@/services/UserService'

export default {
    name:'SettingsPage',
    created() {
        this.user = this.$store.getters.getUser
        getUserInfo({email: this.user.email}).then((response) => {
            this.info = response.data
            console.log(this.info)
            this.setForm()
        }).catch((e) => {
            console.log(e)
        })
    },
    data() {
        return {
            css:{
                kbd: "p-3 text-lg font-semibold text-white bg-maingreen border border-gray-200 rounded-lg",
                input: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5"
            },
            info: null,
            newUser: {
                firstName: '',
                lastName: '',
                aboutMe: '',
                address: '',
                city: '',
                education: '',
                department: '',
                profession: '',
                phone: '',
                img: {
                    code: '',
                    name: ''
                }
            },
        }
    },
    methods: {
        onFileChanged(e){
            const image = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = e =>{
                this.newUser.img.code = e.target.result;
            };
        },
        setForm(){
            this.newUser.id = this.info.id
            this.newUser.firstName = this.info.firstName;
            this.newUser.lastName = this.info.lastName;
            this.newUser.email = this.info.email;
            this.newUser.aboutMe = this.info.aboutMe;
            this.newUser.address = this.info.address;
            this.newUser.education = this.info.education;
            this.newUser.city = this.info.city;
            this.newUser.department = this.info.department;
            this.newUser.profession = this.info.profession;
            this.newUser.phone = this.info.phone;
            this.newUser.img.id = this.info.img.id;
            this.newUser.img.name = `${this.$store.getters.getUser}-profile`
        },
        updateUser(){
            updateUserInfo(this.newUser).then((response) => {
                console.log(response.data)
            }).catch((e) => {
                console.log(e)
            })
            //.finally(() => window.location.reload())
        }
    },  
}
</script>

<style lang="">

</style>
