<template lang="">
    <main class="px-16">
        <div class="flex flex-col gap-6">
            <div class="flex items-center gap-2 pt-24 md:pt-4">
                <img class="w-6" :src="require('@/assets/icons/house2.svg')" alt="">
                <router-link to="/news" class="text-maingreen hover:underline">Home</router-link>
                <p class="flex items-center">
                    <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 9 4-4-4-4" />
                    </svg>
                    <span>Configurações</span>
                </p>
            </div>
            <div class="flex items-center gap-2">
                <img :src="require('@/assets/icons/settings.svg')" class="w-8 h-8 mt-2" alt="">
                <h1 class="text-3xl font-semibold underline decoration-maingreen decoration-4">Configurações</h1>
            </div>
            <div v-if="info != null" class="grid grid-cols-1">
                <div class="">
                    <div class="flex flex-col gap-10">
                        <div class="bg-lightgray flex flex-col rounded-lg p-10 gap-10 border border-maingreen text-lg" v-if="isAdmin">
                            <h1 class="text-3xl font-semibold underline decoration-maingreen underline-offset-2">Usuários</h1>
                            <div class="relative overflow-x-auto">
                                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead
                                        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" class="px-6 py-3">
                                                Nome
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Nome de Usuário
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Permissão
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(allUser, i) in allUsers" :key="i"
                                            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row"
                                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {{ allUser.firstName + ' ' + allUser.lastName}}
                                            </th>
                                            <td class="px-6 py-4">
                                                {{ allUser.username}}
                                            </td>
                                            <td class="px-6 py-4">
                                                <select name="" id="" v-model="allUser.role" class="rounded-lg">
                                                    <option value="ADMIN">ADMIN</option>
                                                    <option value="USER">USER</option>
                                                </select>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="flex justify-center w-full">
                                <button class="col-span-2 text-white bg-maingreen hover:bg-govblue focus:ring-2 focus:outline-none focus:ring-red-600 font-medium rounded-lg text-sm w-full sm:w-auto px-20 py-2.5 text-center transition duration-200"
                                @click.prevent="updatePermissions()" type="submit">Salvar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    import { getUserInfo, listUsers, updatePermissions } from '@/services/UserService'

    export default {
        name: 'SettingsPage',
        created() {
            this.user = this.$store.getters.getUser
            getUserInfo({ email: this.user.email }).then((response) => {
                this.info = response.data
                this.setForm()
                if (this.info.img.code != null) {
                    this.loadImg = true
                }
            }).catch((e) => {
                console.log(e)
            })

            if (this.isAdmin) {
                listUsers().then((response) => {
                    this.allUsers = response.data
                }).catch((e) => {
                    console.log(e)
                })
            }
        },
        data() {
            return {
                isAdmin: this.$store.getters.isAdmin,
                css: {
                    kbd: "p-3 text-lg font-semibold text-white bg-maingreen border border-gray-200 rounded-lg",
                    input: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5"
                },
                info: null,
                allUsers: '',
                inEditUser: {
                    id: ''
                },
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
                        code: null,
                        name: ''
                    }
                },
            }
        },
        methods: {
            onFileChanged(e) {
                const image = e.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(image);
                reader.onload = e => {
                    this.newUser.img.code = e.target.result;
                };
            },
            setForm() {
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
            updatePermissions() {
                console.log(this.allUsers)
                updatePermissions(this.allUsers).then((response) => {
                    console.log(response.data)
                })

                // .catch((e) => {
                //     console.log(e)
                // }).finally(() => window.location.reload())
            }
        },
    }
</script>

<style lang="">

</style>