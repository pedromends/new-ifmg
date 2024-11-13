<template lang="">
    <main class="flex justify-center items-center px-10 max-sm:px-0">
        <div class="flex flex-col gap-10 px-20 w-full max-sm:px-8 max-sm:py-4">
            <div class="flex items-center gap-2">
                <img class="w-6" :src="require('@/assets/icons/house2.svg')" alt="">
                <router-link to="/" class="text-maingreen hover:underline">Home</router-link>
                <p class="flex items-center">
                    <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 9 4-4-4-4" />
                    </svg>
                    <span>Capacitação</span>
                </p>
            </div>
            <div class="flex justify-between">
                <h1
                    class="text-4xl max-sm:text-2xl text-black font-semibold underline underline-offset-2 decoration-8 decoration-maingreen">
                    Capacitação</h1>

                <v-dialog max-width="500">
                    <template v-slot:activator="{ props: activatorProps }">
                        <v-btn v-if="isAdmin" v-bind="activatorProps" text="Editar
                        Parágrafo" variant="flat" color="#2F9E40"></v-btn>
                    </template>

                    <template v-slot:default="{ isActive }">
                        <v-card class="p-4">
                            <div class="flex items-center justify-end gap-20">
                                <h1 class="text-2xl text-maingreen font-semibold">Editar Parágrafo</h1>
                                <v-btn @click="isActive.value = false" icon="$close" size="large" variant="text"
                                    color="#2F9E40"></v-btn>
                            </div>
                            <!-- Sobre o Projeto -->
                            <div id="about-project-div"
                                class="border-2 border-transparent p-2 rounded-lg col-span-2 w-full">
                                <label for="project_resume"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Texto</label>
                                <v-textarea id="project_resume" rows="10" cols="50" required v-model="newParag"
                                    color="#2F9E40" placeholder="Escreva sobre as capacitações do IFMG"></v-textarea>
                            </div>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <button
                                    class="text-white bg-maingreen hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                    @click="updateParag()">Salvar</button>
                                <v-btn text="Fechar" @click="isActive.value = false"></v-btn>
                            </v-card-actions>
                        </v-card>
                    </template>
                </v-dialog>
            </div>
            <hr class="bg-red-600 h-1" />
            <div class="flex gap-10 max-lg:flex-col">
                <div class="w-3/4 flex flex-col gap-10 max-lg:w-auto">
                    {{ currentParag }}
                </div>
            </div>
        </div>
        <BackToTop />
    </main>
</template>

<script>
    import BackToTop from '@/components/buttons/BackToTop.vue';
    import { updateParag, getText } from '@/services/CapacitationService.js';

    export default {
        name: 'CapacitationPage',
        components: {
            BackToTop
        },
        data() {
            return {
                currentParag: null,
                isAdmin: false,
                page: 0,
                totalPages: 0,
                totalElements: 0,
                newParag: ''
            }
        },
        created() {
            this.isAdmin = this.$store.getters.isAdmin
            getText().then((response) => {
                console.log(response.data)
                this.currentParag = response.data.text
            }).catch((error) => console.log(error))
        },
        methods: {
            updateParag() {
                updateParag(this.newParag).then((response) => {
                    console.log(response.data)
                }).catch((error) => console.log(error))
            }
        }
    }
</script>
<style lang="">

</style>