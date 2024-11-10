<template lang="">
    <section class="flex flex-col justify-center bg-lightgray gap-10">
        <p
            class="font-semibold text-2xl underline underline-offset-2 decoration-4 decoration-maingreen self-start mt-5">
            Sobre Nós</p>
        <div role="status" class="animate-pulse flex bg-white py-10">

            <!-- Esqueleto do componente -->
            <div class="flex max-sm:flex-col  px-4">
                <div class="flex flex-col">
                    <span class="text-maingreen font-bold text-sm underline decoration-red-600 decoration-2 mb-10">QUEM
                        SOMOS</span>
                    <div class="border-2 border-transparent hover:border-red-700 p-2 rounded-lg">
                        <div class="h-5 bg-black rounded-full max-sm:w-72 w-96 mb-1 effect"></div>
                        <div class="h-5 bg-black rounded-full max-sm:w-64 w-84 mb-4 effect"></div>
                    </div>
                    <div class="mb-10 border-2 border-transparent hover:border-red-700 p-2 rounded-lg">
                        <div class="h-1 bg-gray-500 rounded-full max-sm:w-96 w-140 mb-1 effect"></div>
                        <div class="h-1 bg-gray-500 rounded-full max-sm:w-84 w-124 mb-1 effect"></div>
                        <div class="h-1 bg-gray-500 rounded-full max-sm:w-88 w-132 mb-1 effect"></div>
                        <div class="h-1 bg-gray-500 rounded-full max-sm:w-96 w-140 mb-1 effect"></div>
                        <div class="h-1 bg-gray-500 rounded-full max-sm:w-80 w-128 mb-1 effect"></div>
                        <div class="h-1 bg-gray-500 rounded-full max-sm:w-88 w-132 mb-1 effect"></div>
                        <div class="h-1 bg-gray-500 rounded-full max-sm:w-96 w-140 mb-1 effect"></div>
                        <div class="h-1 bg-gray-500 rounded-full max-sm:w-84 w-124 mb-1 effect"></div>
                        <div class="h-1 bg-gray-500 rounded-full max-sm:w-88 w-132 mb-1 effect"></div>
                        <div class="h-1 bg-gray-500 rounded-full max-sm:w-96 w-140 mb-1 effect"></div>
                        <div class="h-1 bg-gray-500 rounded-full max-sm:w-80 w-128 mb-1 effect"></div>
                        <div class="h-1 bg-gray-500 rounded-full max-sm:w-88 w-132 mb-1 effect"></div>
                        <div class="h-1 bg-gray-500 rounded-full max-sm:w-96 w-140 mb-1 effect"></div>
                        <div class="h-1 bg-gray-500 rounded-full max-sm:w-84 w-124 mb-1 effect"></div>
                        <div class="h-1 bg-gray-500 rounded-full max-sm:w-88 w-132 mb-1 effect"></div>
                        <div class="h-1 bg-gray-500 rounded-full max-sm:w-96 w-140 mb-1 effect"></div>
                        <div class="h-1 bg-gray-500 rounded-full max-sm:w-80 w-128 mb-1 effect"></div>
                        <div class="h-1 bg-gray-500 rounded-full max-sm:w-88 w-132 mb-1 effect"></div>
                        <div class="h-1 bg-gray-500 rounded-full max-sm:w-96 w-140 mb-1 effect"></div>
                        <div class="h-1 bg-gray-500 rounded-full max-sm:w-84 w-124 mb-1 effect"></div>
                        <div class="h-1 bg-gray-500 rounded-full max-sm:w-88 w-132 mb-1 effect"></div>
                        <div class="h-1 bg-gray-500 rounded-full max-sm:w-96 w-140 mb-1 effect"></div>
                        <div class="h-1 bg-gray-500 rounded-full max-sm:w-80 w-128 mb-1 effect"></div>
                        <div class="h-1 bg-gray-500 rounded-full max-sm:w-88 w-132 mb-1 effect"></div>
                    </div>
                    <div class="bg-maingreen text-white w-40 py-3 rounded-lg border-2 border-white font-semibold hover:border-maingreen hover:bg-white hover:text-maingreen transition duration-300 text-center"
                        to="/institutional">
                        Saiba Mais
                    </div>
                </div>

                <!-- Imagem de capa -->
                <div alt="Polo IFMG"
                    class="border-transparent hover:border-red-700 p-2 rounded-xl border bg-white flex items-center px-10 py-4">
                    <svg class="w-96 h-20 text-gray-200 dark:text-gray-600" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                        <path
                            d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                    </svg>
                </div>
            </div>
        </div>

        <v-form class="bg-white p-10 rounded-lg mb-10 max-sm:px-1">
            <v-text-field v-model="newAboutUs.title" :counter="10" :rules="[rules.num]" class="text-maingreen"
                color="#2F9E40" label="Título"></v-text-field>

            <v-textarea v-model="newAboutUs.parag" :counter="7" :rules="[rules.text]" class="text-maingreen"
                color="#2F9E40" label="Parágrafo"></v-textarea>

            <v-file-input accept="image/*" color="#2F9E40" label="Imagem de Capa"
                @change="onFileChanged($event)"></v-file-input>

            <v-btn class="me-4" color="#2F9E40" type="submit" dark @click.prevent="updateAboutUs()">
                Salvar
            </v-btn>

            <v-btn @click="handleReset" color="error" dark>
                Limpar
            </v-btn>
        </v-form>
    </section>
</template>

<script>
    import router from '@/router/index.js'
    import { updateWhoWeAre } from '@/services/WhoWeAreService.js'
    import { updateImage } from '@/services/ImageService.js'
    import { mapMutations, mapActions } from "vuex";

    export default {
        name: 'EditAboutUs',
        data() {
            return {
                bool: false,
                newTitle: null,
                newImage: {
                    id: 36,
                    code: undefined
                },
                newAboutUs: {
                    id: 1,
                    title: '',
                    parag: ''
                },
                rules: {
                    title(value) {
                        if (value?.length >= 0) return true;
                        return 'Número obrigatório';
                    },
                    parag(value) {
                        if (value?.length >= 0) return true;
                        return 'Texto obrigatório';
                    }
                }
            }
        },
        methods: {
            ...mapMutations([
                "setAlert"
            ]),
            ...mapActions([
                "isAlertFired"
            ]),
            onFileChanged(e) {
                const image = e.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(image);
                reader.onload = e => {
                    this.newImage.code = e.target.result;
                };
            },
            alertMissingFields() {
                let div = document.getElementById("alert-missing-fields")
                div.style.display = "flex"
                setInterval(() => {
                    this.$store.commit('setAlert', false)
                }, 2000)
            },
            updateAboutUs() {
                if (this.newAboutUs.title !== '' && this.newAboutUs.parag !== '') {
                    updateWhoWeAre(this.newAboutUs).then((response) => {
                        console.log(response)
                    }).finally(() => {
                        router.push('/').then(() => {
                            window.location.reload()
                        });
                    })
                } else {
                    this.$store.commit('setAlert', true)
                    this.$nextTick(() => {
                        this.alertMissingFields()
                    })
                }

                if (this.newImage.code !== undefined) {
                    updateImage(this.newImage).then((response) => {
                        console.log(response)
                    }).finally(() => {
                        router.push('/').then(() => {
                            window.location.reload()
                        });
                    })
                }
            },
        },
    }
</script>

<style scoped>

</style>