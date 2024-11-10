<template lang="">
    <section class="flex flex-col justify-center bg-lightgray gap-10">
        <AlertSuccessDelete />
        <div role="status" class="flex max-sm:flex-col gap-24 justify-center items-center mt-10">
            <div class="left-4 flex flex-col gap-5">
                <p
                    class="font-semibold text-2xl underline underline-offset-2 decoration-4 decoration-maingreen self-start mt-5 mb-10">
                    Cards de Talentos</p>

                <v-menu transition="slide-x-transition">
                    <template v-slot:activator="{ props }">
                        <v-btn color="#2F9E40" v-bind="props">
                            Selecione um talento
                        </v-btn>

                    </template>
                        <v-list>
                            <v-list-item v-for="(talent, i) in talents" :key="i" :value="index">
                                <v-list-item-title>{{ talent.name }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                </v-menu>
            </div>

            <!-- Esqueleto do Card -->
            <div
                class="transition duration-300 shadow-lg bg-white flex flex-col gap-5 rounded-3xl border-2 border-white p-3 px-10 hover:shadow-md hover:shadow-red-600 z-20 animate-pulse">
                <div class="flex justify-between items-start gap-24">
                    <div alt="Polo IFMG"
                        class="h-16 rounded-lg border border-maingreen flex items-center px-5 border-transparent hover:border-red-700">
                        <svg class="w-8 h-8 text-gray-200 dark:text-gray-600" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path
                                d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                        </svg>
                    </div>
                    <img :src="require('@/assets/icons/linkedin.svg')" class="" alt="Linkedin" />
                </div>
                <div class="flex flex-col gap-1">
                    <div class="h-2.5 bg-black rounded-full w-36 border border-transparent hover:border-red-700"></div>
                    <div class="h-1.5 bg-black rounded-full w-32 border border-transparent hover:border-red-700"></div>
                </div>
                <div class="h-1.5 bg-black rounded-full w-28 border border-transparent hover:border-red-700"></div>
            </div>
        </div>

        <v-form class="bg-white p-8 rounded-lg mb-10">
            <v-text-field v-model="newTalent.name" :counter="10" :rules="[rules.num]" class="text-maingreen"
                color="#2F9E40" label="Nome"></v-text-field>

            <v-text-field v-model="newTalent.profession" :counter="7" :rules="[rules.text]" class="text-maingreen"
                color="#2F9E40" label="Profisssão"></v-text-field>

            <v-text-field v-model="newTalent.details" :counter="7" :rules="[rules.text]" class="text-maingreen"
                color="#2F9E40" label="Descrição de atividades"></v-text-field>

            <v-file-input accept="image/*" color="#2F9E40" label="Imagem do Perfil" @change="onFileChanged($event)"/>

            <v-btn class="me-4" color="#2F9E40" type="submit" dark @click="updateCard()">
                Salvar
            </v-btn>

            <v-btn  @click.prevent="deleteTalent()" color="error" dark>
                Excluir
            </v-btn>
        </v-form>

    </section>
</template>

<script>
    import router from '@/router/index.js'
    import { createTalent, updateTalent, getTalents, deleteTalent } from '@/services/TalentService.js';
    import { mapMutations, mapActions } from "vuex";

    export default {
        name: 'EditnewTalent',
        data() {
            return {
                bool: false,
                talents: null,
                inEdition: {
                    id: 0,
                    name: 'Selecione um aluno',
                    id_img: null
                },
                newTalent: {
                    id: null,
                    name: '',
                    profession: '',
                    details: '',
                    img: {
                        id: null,
                        code: null
                    }
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
            getTalents().then((response) => {
                this.talents = response.data
            })
        },
        methods: {
            ...mapMutations([
                "setUser",
                "setAlert"
            ]),
            ...mapActions([
                "getToken",
                "getUser",
                "isAlertFired"
            ]),
            onOffEffect(div) {
                let target = document.getElementById(div);
                this.bool ? target.style.borderColor = 'transparent' : target.style.borderColor = 'red'
                this.bool = !this.bool
            },
            onImageChange(e) {
                const image = e.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(image);
                reader.onload = e => {
                    this.newTalent.img.code = e.target.result;
                };
            },
            showDeleteSuccess() {
                let div = document.getElementById("success-delete-alert")
                div.style.display = "flex"
                this.$store.commit('setAlert', false)
            },
            showTalentSuccess() {
                let div = document.getElementById("success-alert-talent")
                div.style.display = "flex"
                this.$store.commit('setAlert', false)
            },
            updateCard() {
                if (this.newTalent.name !== '' && this.newTalent.profession !== '' && this.newTalent.details !== '') {
                    this.newTalent.id = this.inEdition.id
                    if (this.inEdition.id == 0) {
                        createTalent(this.newTalent).then((response) => {
                            this.$store.commit('setAlert', true)
                            this.$nextTick(() => {
                                this.showTalentSuccess();
                            })
                        }).finally(() => {
                            setInterval(() => {
                                router.push('/').then(() => {
                                    window.location.reload();
                                });
                            }, 2500)
                        })
                    } else {
                        let objId = this.talents.filter((talent) => {
                            if (talent.id == this.inEdition.id)
                                return talent
                        })

                        if (this.newTalent.img.code != null) {
                            this.newTalent.img.id = objId[0].img.id
                        }

                        updateTalent(this.newTalent).then((response) => {
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
                    alert('Um ou mais campos vazios')
                }
            },
            deleteTalent() {
                if (this.newTalent.id == 0) {
                    alert('selecione um aluno primeiro')
                } else {
                    this.$store.commit('setAlert', true)
                    this.$nextTick(() => {
                        this.showDeleteSuccess();
                        deleteTalent(this.inEdition.id).then((response) => {
                            console.log(response)
                        }).finally(() => {
                            setInterval(() => {
                                router.push('/').then(() => {
                                    1
                                    window.location.reload();
                                });
                            }, 2000)
                        })
                    })
                }
            }
        },
    }
</script>

<style scoped>

</style>