<template lang="">
    <section class="flex max-sm:flex-col  justify-center bg-lightgray gap-10 my-10">
        <div role="status" class="max-w-sm animate-pulse self-center flex flex-col gap-3">
            <p
                class="font-semibold text-2xl underline underline-offset-2 decoration-4 decoration-maingreen self-start mt-8 mb-5">
                Cards de Eventos</p>
            <div @mouseover="setCard(1)"
                class="flex justify-between shadow-lg shadow-transparent hover:shadow-red-600 items-center gap-5 rounded-lg px-3 py-2 transition duration-300 bg-white pt-5">
                <div class="flex flex-col justify-center items-center">
                    <div class="h-2.5 bg-gray-200 rounded-full w-10 mb-4 border border-transparent"></div>
                    <div class="h-2.5 bg-gray-200 rounded-full w-10 mb-4 border border-transparent"></div>
                </div>
                <div>
                    <div class="h-2.5 bg-maingreen rounded-full w-48 mb-4 border border-transparent"></div>
                    <div class="flex gap-3 items-center">
                        <div class="h-2.5 bg-gray-200 rounded-full w-10 mb-4 border border-transparent"></div>|
                        <div class="h-2.5 bg-gray-200 rounded-full w-24 mb-4 border border-transparent"></div>
                    </div>
                </div>
            </div>
            <div @mouseover="setCard(2)"
                class="flex justify-between shadow-lg shadow-transparent hover:shadow-red-600 items-center gap-5 rounded-lg px-3 py-2 transition duration-300 bg-white pt-5">
                <div class="flex flex-col justify-center items-center">
                    <div class="h-2.5 bg-gray-200 rounded-full w-10 mb-4 border border-transparent"></div>
                    <div class="h-2.5 bg-gray-200 rounded-full w-10 mb-4 border border-transparent"></div>
                </div>
                <div>
                    <div class="h-2.5 bg-maingreen rounded-full w-48 mb-4 border border-transparent"></div>
                    <div class="flex gap-3 items-center">
                        <div class="h-2.5 bg-gray-200 rounded-full w-10 mb-4 border border-transparent"></div>|
                        <div class="h-2.5 bg-gray-200 rounded-full w-24 mb-4 border border-transparent"></div>
                    </div>
                </div>
            </div>
            <div @mouseover="setCard(3)"
                class="flex justify-between shadow-lg shadow-transparent hover:shadow-red-600 items-center gap-5 rounded-lg px-3 py-2 transition duration-300 bg-white pt-5">
                <div class="flex flex-col justify-center items-center">
                    <div class="h-2.5 bg-gray-200 rounded-full w-10 mb-4 border border-transparent"></div>
                    <div class="h-2.5 bg-gray-200 rounded-full w-10 mb-4 border border-transparent"></div>
                </div>
                <div>
                    <div class="h-2.5 bg-maingreen rounded-full w-48 mb-4 border border-transparent"></div>
                    <div class="flex gap-3 items-center">
                        <div class="h-2.5 bg-gray-200 rounded-full w-10 mb-4 border border-transparent"></div>|
                        <div class="h-2.5 bg-gray-200 rounded-full w-24 mb-4 border border-transparent"></div>
                    </div>
                </div>
            </div>
            <div @mouseover="setCard(4)"
                class="flex justify-between shadow-lg shadow-transparent hover:shadow-red-600 items-center gap-5 rounded-lg px-3 py-2 transition duration-300 bg-white pt-5">
                <div class="flex flex-col justify-center items-center">
                    <div class="h-2.5 bg-gray-200 rounded-full w-10 mb-4 border border-transparent"></div>
                    <div class="h-2.5 bg-gray-200 rounded-full w-10 mb-4 border border-transparent"></div>
                </div>
                <div>
                    <div class="h-2.5 bg-maingreen rounded-full w-48 mb-4 border border-transparent"></div>
                    <div class="flex gap-3 items-center">
                        <div class="h-2.5 bg-gray-200 rounded-full w-10 mb-4 border border-transparent"></div>|
                        <div class="h-2.5 bg-gray-200 rounded-full w-24 mb-4 border border-transparent"></div>
                    </div>
                </div>
            </div>
        </div>
        <v-form class="bg-white px-10 rounded-lg w-full">
            <p
                class="font-semibold text-lg underline underline-offset-2 decoration-2 decoration-maingreen self-start mt-8 mb-5">
                Em edição: Card {{ cardToUpdate }}</p>
            <div class="flex gap-6 flex-col">
                <v-text-field v-model="newEventCard.title" :counter="10" :rules="[rules.text]" class="text-maingreen"
                    color="#2F9E40" :label="'Título do Card' + cardToUpdate" />

                <v-text-field v-model="newEventCard.local" :counter="10" :rules="[rules.text]" class="text-maingreen"
                    color="#2F9E40" :label="'Local' + cardToUpdate" />

                <v-dialog width="500">
                    <template v-slot:activator="{ props: activatorProps }">
                        <v-btn v-bind="activatorProps" color="#2F9E40" dark text="Selecionar Data"
                            variant="flat"/>
                    </template>

                    <template v-slot:default="{ isActive }">
                        <v-card title="Selecione a Data">
                            <div class="flex justify-center">
                                <v-date-picker color="#2F9E40" v-model="newEventCard.day" />
                            </div>
                            <v-card-actions>
                                <v-spacer></v-spacer>
    
                                <v-btn text="Fechar" dark color="error" @click="isActive.value = false"></v-btn>
                            </v-card-actions>
                        </v-card>
                    </template>
                </v-dialog>

                <v-container>
                    <v-time-picker format="24hr" v-model="newEventCard.hour"></v-time-picker>
                </v-container>
            </div>
            <button
                class="text-white bg-maingreen hover:bg-govblue focus:ring-4 focus:outline-none focus:ring-red-600 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center transition duration-200 mb-10"
                type="submit" @click.prevent="updateCard()">Salvar</button>
        </v-form>
    </section>
</template>

<script>
    import router from '@/router/index.js';
    import { updateEvent } from '@/services/EventService.js';
    import { mapMutations, mapActions } from "vuex";

    export default {
        name: 'EditNewCard',
        data() {
            return {
                newEventCard: {
                    month: null,
                    day: null,
                    title: null,
                    hour: null,
                    local: null
                },
                rules: {
                    text(value) {
                        if (value?.length >= 0) return true;
                        return 'Texto obrigatório';
                    }
                },
                bool: false,
                cardToUpdate: 1
            }
        },
        methods: {
            ...mapMutations([
                "setAlert"
            ]),
            ...mapActions([
                "isAlertFired"
            ]),
            updateCard() {
                if (this.newEventCard.month !== null && this.newEventCard.day !== null && this.newEventCard.title !== null && this.newEventCard.hour !== null && this.newEventCard.local !== null) {
                    this.newEventCard.id = this.cardToUpdate
                    updateEvent(this.newEventCard).then((response) => {
                        console.log(response)
                    }).finally(() => {
                        router.push('/').then(() => {
                            window.location.reload();
                        });
                    })
                } else {
                    this.$store.commit('setAlert', true)
                    this.$nextTick(() => {
                        this.alertMissingFields()
                    })
                }
            },
            alertMissingFields() {
                let div = document.getElementById("alert-missing-fields")
                div.style.display = "flex"
                setInterval(() => {
                    this.$store.commit('setAlert', false)
                }, 2000)
            },
            setCard(form) {
                this.cardToUpdate = form
            }
        },
    }
</script>

<style scoped>

</style>