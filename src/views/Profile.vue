<template lang="">
    <main class="px-16">
        <div class="flex flex-col gap-6">
            <div class="flex items-center gap-2">
                <img class="w-6" :src="require('@/assets/icons/house2.svg')" alt="">
                <router-link to="/news" class="text-maingreen hover:underline">Home</router-link>
                <p class="flex items-center">
                    <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 9 4-4-4-4" />
                    </svg>
                    <span>Perfil</span>
                </p>
            </div>
            
            <div class="flex items-center gap-4">
                <img :src="require('@/assets/icons/profile.svg')" class="w-8 h-8 mt-2"  alt="">
                <h1 class="text-3xl font-semibold underline decoration-maingreen decoration-4">Perfil</h1>
            </div>
            <div v-if="userInfo != null" class="grid grid-cols-2 gap-10">
                <div class="flex flex-col gap-10">
                    <div class="bg-lightgray flex flex-col rounded-lg p-10 gap-10 border border-maingreen text-lg">
                        <div class="flex justify-between">
                            <h1 class="text-3xl font-semibold underline decoration-maingreen underline-offset-2">Foto de Perfil</h1>
                            <button @click="editMode = !editMode" class="p-4" v-if="getUser">
                                <img :src="require('@/assets/icons/pencil-edit-maingreen.svg')" alt="#" class="h-8"/>
                            </button>
                        </div>
                        <div class="flex flex-col gap-3">
                            <div class="flex justify-between items-center effect rounded-lg p-1">
                                <div class="effect">
                                    <img v-if="userInfo.img.code != undefined" :src="userInfo.img.code" class="w-36 h-36 rounded-full" alt="Profile Pic">
                                    <button @click="editMode = !editMode" v-if="isAdmin" class="w-36 h-36 rounded-full hidden bg-maingray justify-center items-center">
                                        <img v-if="userInfo.img.code != undefined" :src="require('@/assets/icons/pencil-edit.svg')" alt="Profile Pic" class="w-12 h-12">
                                    </button>
                                </div>
                            </div>
                            <h1 class="text-2xl font-semibold underline decoration-maingreen underline-offset-2">{{ userInfo.firstName }} {{ userInfo.lastName }}</h1>
                            <p class="underline decoration-maingreen underline-offset-2">{{ userInfo.profession }}</p>
                            <input v-if="editMode"
                                class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none"
                                aria-describedby="file_input_help" id="file_input" type="file"
                                @change="onFileChanged($event)" accept="image/*">
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-10">
                    <div class="bg-lightgray p-8 flex flex-col gap-10 rounded-lg border border-maingreen">
                        <div>
                            <h1 class="text-3xl font-semibold underline decoration-maingreen underline-offset-2 my-3">
                                Dados Gerais</h1>
                                <div v-if="userInfo != null" class="flex flex-col md:grid md:grid-cols-2 gap-5 text-lg">
                                    <div>
                                        <p class="font-semibold">Nome</p>
                                        <input v-if="editMode" :class="css.input" v-model="userInfo.firstName" placeholder="" />
                                        <p v-if="!editMode">{{ userInfo.firstName }}</p>
                                    </div>
                                    <div>
                                        <p class="font-semibold">Sobrenome</p>
                                        <input v-if="editMode" :class="css.input" v-model="userInfo.lastName" placeholder="" />
                                        <p v-if="!editMode">{{ userInfo.lastName }}</p>
                                    </div>
                                    <div>
                                        <p class="font-semibold">Educação</p>
                                        <input v-if="editMode" :class="css.input" v-model="userInfo.education" placeholder="" />
                                        <p v-if="!editMode">{{ userInfo.education }}</p>
                                    </div>
                                    <div>
                                        <p class="font-semibold">Departamento</p>
                                        <input v-if="editMode" :class="css.input" v-model="userInfo.department" placeholder="" />
                                        <p v-if="!editMode">{{ userInfo.department }}</p>
                                    </div>
                                    <div>
                                        <p class="font-semibold">Histórico de Trabalho</p>
                                        <input v-if="editMode" :class="css.input" v-model="userInfo.workHistory" placeholder="" />
                                        <p v-if="!editMode">{{ userInfo.workHistory }}</p>
                                    </div>
                                    <div>
                                        <p class="font-semibold">Endereço</p>
                                        <input v-if="editMode" :class="css.input" v-model="userInfo.address" placeholder="" />
                                        <p v-if="!editMode">{{ userInfo.address }}</p>
                                    </div>
                                    <div>
                                        <p class="font-semibold">Cidade</p>
                                        <input v-if="editMode" :class="css.input" v-model="userInfo.city" placeholder="" />
                                        <p v-if="!editMode">{{ userInfo.city }}</p>
                                    </div>
                                </div>
                        </div>
                        <div v-if="editMode">
                            <h1 class="text-3xl font-semibold underline decoration-maingreen underline-offset-2 my-3">
                                Senha</h1>
                            <div class="flex flex-col md:grid md:grid-cols- gap-5 text-lg my-3">
                                <div>
                                    <p class="font-semibold">Nova senha</p>
                                    <input :class="css.input" type="password" placeholder="" />
                                </div>
                                <div>
                                    <p class="font-semibold">Confirmação da nova senha</p>
                                    <input :class="css.input" type="password" placeholder="" />
                                </div>
                                <button
                                    class="col-span-2 text-white bg-maingreen hover:bg-govblue focus:ring-2 focus:outline-none focus:ring-red-600 font-medium rounded-lg text-sm w-full sm:w-auto  py-2.5 text-center transition duration-200"
                                    @click.prevent="updateUser()" type="submit">Salvar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
    .effect:hover > img {
        display: none;
    }

    .effect:hover > button {
        display: flex;
    }
</style>

<script>
import { getUserInfo, updateUserInfo } from '@/services/UserService'

export default {
    name:'ProfilePage',
    created() {
        this.user = this.$store.getters.getUser
        getUserInfo({email: this.user.email}).then((response) => {
            this.userInfo = response.data
            if(this.userInfo.img == undefined){
                this.userInfo.img = {
                    code: null
                }
            }
        }).catch((e) => {
            console.log(e)
        })
    },
    data() {
        return {
            userInfo: null,
            newUser: null,
            editMode: false,
            css:{
                input: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5",
                kbd: "p-3 text-lg font-semibold text-white bg-maingreen border border-gray-200 rounded-lg"
            },
            loadImg: false,
            isAdmin: this.$store.getters.isAdmin,
            getUser: this.$store.getters.getUser
        }
    },
    methods: {
        updateUser() {
            updateUserInfo(this.userInfo).then((response) => {
                console.log(response.data)
            }).catch((e) => {
                console.log(e)
            }).finally(() => window.location.reload())
        },
        onFileChanged(e){
            const image = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = e => {
                this.userInfo.img.code = e.target.result;
            };
        },
    }
}
</script>
<style lang="">

</style>
