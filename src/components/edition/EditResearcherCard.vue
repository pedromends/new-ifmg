<template lang="">
    <section class="flex max-sm:flex-col justify-center bg-lightgray gap-10 my-10 mx-5">
        <div role="status" class="flex flex-col items-center gap-10">
            <p class="font-semibold text-2xl underline underline-offset-2 decoration-4 decoration-maingreen self-start mt-5 mb-10">
                Criar/Editar Pesquisadores
            </p>

            <section class="hover:shadow-lg transition duration-300 rounded-lg border border-gray-200 bg-white">
                <div class="border-t border-maingreen px-4 py-5 gap-48 flex items-center justify-between animate-pulse">
                    <div class="h-2.5 bg-black rounded-full w-48 border border-transparent hover:border-red-700"></div>
                    <div alt="Polo IFMG"
                        class="h-16 rounded-lg border border-maingreen flex items-center px-5 border-transparent hover:border-red-700">
                        <svg class="w-8 h-8 text-gray-200 dark:text-gray-600" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path
                                d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                        </svg>
                    </div>
                </div>
                <div class="flex flex-col px-3 gap-3 py-3 animate-pulse">
                    <div class="h-2 bg-black rounded-full w-40 border border-transparent hover:border-red-700"></div>
                    <a class="flex items-center gap-3 border border-transparent hover:border-red-700 rounded-lg p-1">
                        <img alt="Polo IFMG" class="h-4" :src="require('@/assets/icons/email-green.svg')" />
                        <div class="h-1.5 bg-maingreen rounded-full w-40"></div>
                    </a>
                    <a class="flex items-center gap-3 border border-transparent hover:border-red-700 rounded-lg p-1">
                        <img alt="Polo IFMG" class="h-4" :src="require('@/assets/icons/book-green.svg')" />
                        <div class="h-1.5 bg-maingreen rounded-full w-40"></div>
                    </a>
                </div>
            </section>

            <div class="flex flex-col gap-4">
                <select v-model="inEditionResearcher.id" name="" id=""
                    class="bg-gray-50 border border-maingreen text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 w-full p-2.5">
                    <option
                        class="bg-white divide-y divide-gray-100 rounded-lg text-center shadow overflow-scroll h-72 overflow-x-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-maingreen"
                        value="0">Novo Pesquisador</option>
                    <option
                        class="bg-white divide-y divide-gray-100 text-start rounded-lg shadow overflow-scroll h-72 overflow-x-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-maingreen"
                        :value="researcher.id" v-for="(researcher, i) in researchers" :key="i">{{ researcher.firstName +
                        ' ' + researcher.lastName }}</option>
                </select>

                <button class="flex items-center bg-red-600 hover:bg-maingray focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg transition duration-200 text-center px-32 text-white"
                    data-modal-target="delete-modal" data-modal-toggle="delete-modal">
                        <img class="w-5 m-4" :src="require('@/assets/icons/trash.svg')" alt="">
                        Excluir
                </button>
                <!-- Delete modal -->
                <div id="delete-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div class="relative p-4 w-full max-w-2xl max-h-full">
                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                    Deseja REALMENTE deletar este Pesquisador ?
                                </h3>
                                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="delete-modal">
                                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                    </svg>
                                    <span class="sr-only">Fechar</span>
                                </button>
                            </div>
                            <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                                <button class="text-white bg-maingreen hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                    data-modal-hide="delete-modal" type="button" @click.prevent="deleteResearcher()">Sim</button>
                                <button class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-maingreen focus:z-10 focus:ring-4 focus:ring-gray-100"
                                    data-modal-hide="delete-modal" type="button">Não</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <form class="bg-white p-10 rounded-2xl">
            <div class="flex justify-between max-sm:flex-col">
                <div class="flex gap-6 mb-6 flex-col">
                    <div id="name-div" class="border-2 border-transparent p-2 rounded-lg">
                        <label for="name"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome</label>
                        <input
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5"
                            v-model="inEditionResearcher.firstName" type="text" id="lastname" required />
                    </div>

                    <div id="lastname-div" class="border-2 border-transparent p-2 rounded-lg">
                        <label for="lastname"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sobrenome</label>
                        <input
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5"
                            v-model="inEditionResearcher.lastName" type="text" id="lastname" required />
                    </div>

                    <div id="lastname-div" class="border-2 border-transparent p-2 rounded-lg">
                        <label for="lastname"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Endereço</label>
                        <input
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5"
                            v-model="inEditionResearcher.address" type="text" id="lastname" required />
                    </div>

                    <div id="lastname-div" class="border-2 border-transparent p-2 rounded-lg">
                        <label for="lastname"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cidade</label>
                        <input
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5"
                            v-model="inEditionResearcher.city" type="text" id="lastname" required />
                    </div>

                    <div id="lastname-div" class="border-2 border-transparent p-2 rounded-lg">
                        <label for="lastname"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Departamento</label>
                        <input
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5"
                            v-model="inEditionResearcher.department" type="text" id="lastname" required />
                    </div>

                    <div id="lastname-div" class="border-2 border-transparent p-2 rounded-lg">
                        <label for="lastname"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Titulação</label>
                        <input
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5"
                            v-model="inEditionResearcher.level" type="text" id="lastname" required />
                    </div>
                </div>

                <div class="flex gap-6 mb-6 flex-col">
                    <div id="lastname-div" class="border-2 border-transparent p-2 rounded-lg">
                        <label for="lastname"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telefone</label>
                        <input
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5"
                            v-model="inEditionResearcher.phone" type="text" id="lastname" required />
                    </div>

                    <div id="course-div" class="border-2 border-transparent p-2 rounded-lg">
                        <label for="course"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Curso</label>
                        <input
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5"
                            required v-model="inEditionResearcher.course" type="text" id="course" />
                    </div>

                    <div id="email-div" class="border-2 border-transparent p-2 rounded-lg">
                        <label for="email"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5"
                            v-model="inEditionResearcher.email" type="text" id="email" required />
                    </div>

                    <div id="campus-div" class="border-2 border-transparent p-2 rounded-lg">
                        <label for="campus"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Campus</label>
                        <select v-model="inEditionResearcher.campus.id" name="" id=""
                            class="bg-gray-50 border border-maingreen text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 w-full p-2.5">
                            <option
                                class="bg-white divide-y divide-gray-100 rounded-lg text-center shadow overflow-scroll h-72 overflow-x-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-maingreen"
                                value="0" disabled>Selecione um Campus</option>
                            <option
                                class="bg-white divide-y divide-gray-100 text-start rounded-lg shadow overflow-scroll h-72 overflow-x-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-maingreen"
                                :value="campus.id" v-for="(campus, i) in campuses" :key="i">{{ campus.name }}</option>
                        </select>
                    </div>

                    <div id="sex-div" class="border-2 border-transparent p-2 rounded-lg">
                        <label for="sex_link"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gênero</label>
                        <select v-model="inEditionResearcher.sex" name="" id=""
                            class="bg-gray-50 border border-maingreen text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 w-full p-2.5">
                            <option
                                class="bg-white divide-y divide-gray-100 rounded-lg text-center shadow overflow-scroll h-72 overflow-x-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-maingreen"
                                value="0" disabled>Selecione</option>
                            <option
                                class="bg-white divide-y divide-gray-100 rounded-lg text-center shadow overflow-scroll h-72 overflow-x-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-maingreen"
                                value="F">Feminino</option>
                            <option
                                class="bg-white divide-y divide-gray-100 rounded-lg text-center shadow overflow-scroll h-72 overflow-x-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-maingreen"
                                value="M">Masculino</option>
                        </select>
                    </div>

                    <div id="image-div" class="border-2 border-transparent p-2 rounded-lg col-span-2">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            for="file_input">Imagem de Perfil</label>
                        <input
                            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none"
                            aria-describedby="file_input_help" id="file_input" type="file"
                            @change="onImageChange($event)">
                        <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                    </div>
                </div>
            </div>
            <div id="image-div" class="border-2 border-transparent p-2 rounded-lg">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    for="file_input">Sobre:</label>
                <textarea name="" id="" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none" rows="10" v-model="inEditionResearcher.about"></textarea>
            </div>
            <div class="w-full flex max-sm:flex-col justify-center gap-10">
                <button
                    class="text-white bg-maingreen hover:bg-govblue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center px-36 py-3 transition duration-200"
                    @click.prevent="updateResearcher()" type="submit">Salvar</button>
            </div>
        </form>
        
    </section>
</template>

<script>
    import router from '@/router/index.js'
    import { createResearcher, listResearchers, updateResearcher, deleteResearcher } from '@/services/ResearcherService.js';
    import { listCampus } from '@/services/CampusService.js';
    import { getResearcher } from '@/services/ResearcherService.js';
    import { useRoute } from "vue-router";
	import { mapMutations, mapActions } from "vuex";

    export default {
        name: 'EditResearcherCard',
        data() {
            return {
                bool: false,
                researchers: null,
                researcher: null,
                campuses: null,
                inEditionResearcher: {
                    id: 0,
                    about: '',
                    address: '',
                    city: '',
                    course: '',
                    department: '',
                    email: '',
                    level: '',
                    phone: '',
                    sex: 0,
                    active: 1,
                    firstName: null,
                    lastName: '',
                    campus: {
                        id: 0,
                        name: ''
                    },
                    img: {
                        id: null,
                        code: null
                    },
                },
                inEditionCampus: {
                    id: null,
                    name: 'Selecione um Campus',
                },
            }
        },
        created() {
            const route = useRoute();
            const id = parseInt(route.params.id);

            if (id != 0) {
                getResearcher({id: id}).then((response) => {
                    this.researcher = response.data
                    this.inEditionResearcher = this.researcher
                    console.log(this.researcher)
                })
            }

            listResearchers().then((response) => {
                this.researchers = response.data
            })

            listCampus().then((response) => {
                this.campuses = response.data
            })
        },
        methods: {
            ...mapMutations([
                "setAlert"
            ]),
            ...mapActions([
                "isAlertFired"
            ]),
            onImageChange(e) {
                const image = e.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(image);
                reader.onload = e => {
                    this.inEditionResearcher.img.code = e.target.result;
                };
            },
            showSuccessRegister() {
                let div = document.getElementById("success-researcher-alert")
                div.style.display = "flex"
                setInterval(() => {
                    this.$store.commit('setAlert', false)
                }, 2000)
            },
            alertMissingFields() {
                let div = document.getElementById("alert-missing-fields")
                div.style.display = "flex"
                setInterval(() => {
                    this.$store.commit('setAlert', false)
                }, 2000)
            },
            showDeleteSuccess() {
                let div = document.getElementById("success-delete-alert")
                div.style.display = "flex"
                setInterval(() => {
                    this.$store.commit('setAlert', false)
                }, 2000)
            },
            setImgId(img_id) {
                this.inEditionResearcher.img.id = img_id
            },
            updateResearcher() {
                this.$store.commit('setAlert', true)
                if (this.inEditionResearcher.firstName !== '' && this.inEditionResearcher.lastName !== '' &&
                    this.inEditionResearcher.campus !== '' && this.inEditionResearcher.email !== '' && this.inEditionResearcher.course !== '') {
                    if (this.inEditionResearcher.id == 0) {
                        createResearcher(this.inEditionResearcher).then((response) => {
                            console.log(response)
                            this.$store.commit('setAlert', true)
                            this.$nextTick(() => {
                                this.showSuccessRegister()
                            })
                        }).finally(() => {
                            setInterval(() => {
                                router.push('/researchers').then(() => {
                                    window.location.reload();
                                });
                            }, 2500)
                        })
                    } else {
                        let objId = this.researchers.filter((researcher) => {
                            if (researcher.id == this.inEditionResearcher.id)
                                return researcher
                        })

                        this.inEditionResearcher.img.id = objId[0].img.id
                        updateResearcher(this.inEditionResearcher).then((response) => {
                            console.log(response)
                        }).finally(() => {
                            router.push('/researchers').then(() => {
                                window.location.reload();
                            });
                        })
                    }
                } else {
                    this.$store.commit('setAlert', true)
                    this.$nextTick(() => {
                        this.alertMissingFields()
                    })
                }
            },
            deleteResearcher() {
                if (this.inEditionResearcher.id == 0) {
                    alert('Selecione um Pesquisador antes')
                } else {
                    deleteResearcher(this.inEditionResearcher.id).then((response) => {
                        console.log(response)
                    })
                    .finally(() => {
                        this.$store.commit('setAlert', true)
                        this.$nextTick(() => {
                            this.showDeleteSuccess()
                        })
                        setInterval(() => {
                            router.push('/researchers').then(() => {
                                window.location.reload();
                            });
                        }, 2000)
                    })
                }
            }
        }
    }
</script>

<style scoped>

</style>