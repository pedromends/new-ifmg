<template lang="">
    <div class="flex justify-center gap-24 p-4">
        <div class="flex justify-center gap-10 items-center">
            <div class="flex flex-col gap-4">
                <p
                    class="font-semibold text-2xl underline underline-offset-2 decoration-4 decoration-maingreen self-center">
                    Empresa Parceira</p>

                <div alt="Polo IFMG"
                    class="border-transparent animate-pulse shadow-lg transition duration-200 hover:shadow-red-600 p-2 rounded-2xl border bg-white flex items-center px-10 py-4">
                    <svg class=" text-gray-200 dark:text-gray-600 w-36 h-24" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                        <path
                            d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                    </svg>
                </div>

                <v-select v-model="company.name" :items="mappedCompanies" v-if="companies != null" variant="underlined"
                    :rules="[v => !!v || 'Item Necessário']" label="Empresa" required color="#2F9E40"></v-select>
            </div>
        </div>

        <!-- Formulário -->
        <form class="bg-white w-full p-8 rounded-xl">
            <v-text-field v-model="company.name" :counter="10" :rules="[rules.text]" class="text-maingreen" width="400"
                color="#2F9E40" label="Nome"></v-text-field>

            <v-text-field v-model="company.classification" :counter="10" :rules="[rules.text]" width="400"
                class="text-maingreen" color="#2F9E40" label="Classificação"></v-text-field>

            <v-text-field v-model="company.cnpj" :counter="10" :rules="[rules.text]" class="text-maingreen" width="400"
                color="#2F9E40" label="CNPJ"></v-text-field>

            <v-file-input accept="image/*" color="#2F9E40" label="Logomarca da Empresa" width="400"
                @change="onFileChanged($event)"></v-file-input>

            <div class="flex gap-4">
                <v-btn type="submit" @click.prevent="updateCompany()" color="#2F9E40" text="Salvar"></v-btn>
                <v-btn @click.prevent="deleteCompany()" type="submit" text="Excluir">
                </v-btn>
            </div>
        </form>
    </div>
</template>

<script>
    import router from '@/router/index.js'
    import { createCompany, listCompanies, updateCompany, deleteCompany } from '@/services/CompanyService.js';
    import { mapMutations, mapActions } from "vuex";

    export default {
        name: 'EditCompany',
        data() {
            return {
                companies: null,
                company: {
                    id: 0,
                    image: {
                        id: null,
                        name: 'debug',
                        code: null
                    },
                    name: null,
                    classification: null,
                    cnpj: null,
                    active: 1
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
            }
        },
        created() {
            listCompanies().then((response) => {
                this.companies = response.data
            })
        },
        computed: {
            mappedCompanies() {
                return this.companies.map(company => {
                    return company.name;
                });
            }
        },
        methods: {
            ...mapMutations([
                "setAlert"
            ]),
            ...mapActions([
                "isAlertFired"
            ]),
            showEditCompany() {
                console.log(this.company)
            },
            onFileChanged(e) {
                const image = e.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(image);
                reader.onload = e => {
                    this.company.image.code = e.target.result;
                };
            },
            showCompanySuccess() {
                let div = document.getElementById("success-alert-company")
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
            alertMissingFields() {
                let div = document.getElementById("alert-missing-fields")
                div.style.display = "flex"
                setInterval(() => {
                    this.$store.commit('setAlert', false)
                }, 2000)
            },
            updateCompany() {
                if (this.company.name != null && this.company.classification != null && this.company.cnpj != null && this.company.image.code != null) {
                    if (this.company.id == 0) {
                        createCompany(this.company).then((response) => {
                            console.log(response)
                        }).finally(() => {
                            setInterval(() => {
                                router.push('/').then(() => {
                                    window.location.reload();
                                });
                            }, 2500)
                        })
                    } else {
                        updateCompany(this.company).then((response) => {
                            console.log(response)
                        }).finally(() => {
                            setInterval(() => {
                                router.push('/').then(() => {
                                    window.location.reload();
                                });
                            }, 2500)
                        })
                    }
                } else {
                    this.$store.commit('setAlert', true)
                    this.$nextTick(() => {
                        this.alertMissingFields()
                    })
                }

            },
            deleteCompany() {
                deleteCompany(this.company.id).then((response) => {
                    console.log(response)
                }).finally(() => {
                    this.$store.commit('setAlert', true)
                    this.$nextTick(() => {
                        this.showDeleteSuccess()
                        setInterval(() => {
                            router.push('/').then(() => {
                                1
                                window.location.reload()
                            });
                        }, 2000)
                    })
                })
            }
        }
    }
</script>

<style scoped>

</style>