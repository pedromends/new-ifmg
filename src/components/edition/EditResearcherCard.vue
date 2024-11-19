<template lang="">
    <section class="flex max-sm:flex-col justify-center bg-lightgray gap-10 m-10 w-full">
        <div role="status" class="flex flex-col items-center gap-10">
            <p
                class="font-semibold text-2xl underline underline-offset-2 decoration-4 decoration-maingreen self-start mt-5 mb-10">
                Criar/Editar Pesquisadores
            </p>

            <section class="hover:shadow-lg transition duration-300 rounded-lg border border-gray-200 bg-white">
                <div class="border-t border-maingreen px-4 py-5 gap-48 flex items-center justify-between animate-pulse">
                    <div class="h-2.5 bg-black rounded-full w-48 hover:border-red-700"></div>
                    <div alt="Polo IFMG"
                        class="h-16 rounded-lg flex items-center px-5">
                        <svg class="w-8 h-8 text-gray-200 dark:text-gray-600" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path
                                d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                        </svg>
                    </div>
                </div>
                <div class="flex flex-col px-3 gap-3 py-3 animate-pulse">
                    <div class="h-2 bg-black rounded-full w-40 border border-transparen"></div>
                    <a class="flex items-center gap-3 rounded-lg p-1">
                        <img alt="Polo IFMG" class="h-4" :src="require('@/assets/icons/email-green.svg')" />
                        <div class="h-1.5 bg-maingreen rounded-full w-40"></div>
                    </a>
                    <a class="flex items-center gap-3 rounded-lg p-1">
                        <img alt="Polo IFMG" class="h-4" :src="require('@/assets/icons/book-green.svg')" />
                        <div class="h-1.5 bg-maingreen rounded-full w-40"></div>
                    </a>
                </div>
            </section>

            <div class="flex flex-col gap-4 w-4/5">
                <v-select v-model="inEditionResearcher.id" :items="mappedResearchers" v-if="researchers != null"
                    :rules="[v => !!v || 'Item Necessário']" label="Pesquisador" required color="#2F9E40"></v-select>

                <v-dialog max-width="500" v-if="inEditionResearcher.id != null">
                    <template v-slot:activator="{ props: activatorProps }">
                        <v-btn v-bind="activatorProps" color="error" text="Excluir"
                            variant="flat"></v-btn>
                    </template>

                    <template v-slot:default="{ isActive }">
                        <v-card title="Excluir Pesquisador">
                            <v-card-text>
                                Deseja MESMO deletar este Pesquisador ?
                            </v-card-text>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn text="Excluir" dark  type="submit" color="#2F9E40" @click="updateResearcher()"></v-btn>
                                <v-btn text="Fechar" dark  type="submit" color="error" @click="isActive.value = false"></v-btn>
                            </v-card-actions>
                        </v-card>
                    </template>
                </v-dialog>
            </div>
        </div>

        <v-form class="bg-white p-10 rounded-2xl">
            <div class="grid grid-cols-2 gap-2">
                <v-text-field v-model="inEditionResearcher.firstName" :rules="[rules.text]" width="250"
                    class="text-maingreen" color="#2F9E40" label="Nome"></v-text-field>

                <v-text-field v-model="inEditionResearcher.lastName" :rules="[rules.text]" width="250"
                    class="text-maingreen" color="#2F9E40" label="Sobrenome"></v-text-field>

                <v-text-field v-model="inEditionResearcher.email" :rules="[rules.text]"
                    class="text-maingreen" width="250" color="#2F9E40" label="Email"></v-text-field>

                <v-text-field v-model="inEditionResearcher.address" :rules="[rules.text]" width="250"
                    class="text-maingreen" color="#2F9E40" label="Endereço"></v-text-field>

                <v-text-field v-model="inEditionResearcher.city" :rules="[rules.text]"
                    class="text-maingreen" width="250" color="#2F9E40" label="Cidade"></v-text-field>

                <v-text-field v-model="inEditionResearcher.department" :rules="[rules.text]" width="250"
                    class="text-maingreen" color="#2F9E40" label="Departamento"></v-text-field>

                <v-text-field v-model="inEditionResearcher.level" :rules="[rules.text]"
                    class="text-maingreen" width="250" color="#2F9E40" label="Titulação"></v-text-field>

                <v-text-field v-model="inEditionResearcher.phone" :rules="[rules.text]"
                    class="text-maingreen" width="250" color="#2F9E40" label="Telefone"></v-text-field>

                <v-text-field v-model="inEditionResearcher.course" :rules="[rules.text]"
                    class="text-maingreen" width="250" color="#2F9E40" label="Curso"></v-text-field>

                <v-select v-model="inEditionCampus.campus" :items="mappedCampus" v-if="campuses != null"
                    :rules="[v => !!v || 'Item Necessário']" label="Campus" required color="#2F9E40"></v-select>

                <div class="col-span-2 w-full">
                    <v-file-input accept="image/*" color="#2F9E40" label="Imagem de Perfil"
                        @change="onImageChange($event)"></v-file-input>

                    <v-btn color="#2F9E40" dark class="w-full" @click.prevent="updateResearcher()"
                        type="submit">Salvar</v-btn>
                </div>
            </div>
        </v-form>

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
                inEditionResearcher: {
                    id: null,
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
                rules: {
                    num(value) {
                        if (value?.length >= 0) return true;
                        return 'Número obrigatório';
                    },
                    text(value) {
                        if (value?.length >= 0) return true;
                        return 'Texto obrigatório';
                    }
                },
                bool: false,
                researchers: null,
                researcher: null,
                campuses: null,
            }
        },
        computed: {
            mappedCampus() {
                return this.campuses.map(campus => {
                    return campus.name;
                });
            },
            mappedResearchers() {
                return this.researchers.map(researcher => {
                    return researcher.firstName + ' ' + researcher.lastName;
                });
            }
        },
        beforeCreate() {
            const route = useRoute();
            const id = parseInt(route.params.id);

            if (id != 0) {
                getResearcher({ id: id }).then((response) => {
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
                                router.push('/pesquisadores').then(() => {
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
                            router.push('/pesquisadores').then(() => {
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
                                router.push('/pesquisadores').then(() => {
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