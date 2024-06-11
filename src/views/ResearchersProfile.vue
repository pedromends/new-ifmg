<template lang="">
    <main class="px-16">
        <div class="flex flex-col gap-6">
            <div class="flex" aria-label="Breadcrumb">
                <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <li class="inline-flex items-center">
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
                        <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 9 4-4-4-4" />
                        </svg>
                        <p>Perfil</p>
                    </li>
                </ol>
            </div>
            <div class="flex items-center gap-2">
                <h1 class="text-4xl font-semibold underline decoration-maingreen decoration-4">Perfil</h1>
                <img :src="require('@/assets/icons/profile.svg')" class="w-8 h-8 mt-1" alt="">
            </div>
            <div v-if="info != null" class="grid grid-cols-2 gap-10">
                <div class="flex flex-col gap-10">
                    <div class="bg-lightgray flex flex-col rounded-lg p-10 gap-10 border border-maingreen text-lg">
                        <div>
                            <img :src="info.img.code" class="w-36 h-36 rounded-full" alt="Profile Pic">
                            <h1 class="text-2xl font-semibold">{{ info.firstName }} {{ info.lastName }}</h1>
                            <p>{{ info.profession }}</p>
                            <p>{{ info.city }}</p>
                        </div>
                        <div>
                            <p>Email:</p>
                            <p class="font-semibold text-maingreen">{{ info.email }}</p>
                        </div>

                        <div>
                            <p>Endereço:</p>
                            <p class="font-semibold text-maingreen">{{ info.address }}, {{ info.city }}</p>
                        </div>

                        <div>
                            <p>Telefone:</p>
                            <p class="font-semibold text-maingreen">{{ info.phone }}</p>
                        </div>
                    </div>
                    
                    <div class="bg-lightgray p-4 flex flex-col gap-4 border border-maingreen rounded-lg">
                        <h1 class="text-2xl font-semibold underline decoration-maingreen underline-offset-2">Hobbies</h1>
                        <div class="flex gap-3">
                            <kbd :class="css.kbd">Futebol</kbd>
                            <kbd :class="css.kbd">Pets</kbd>
                            <kbd :class="css.kbd">Jogos</kbd>
                            <kbd :class="css.kbd">Filmes</kbd>
                        </div>
                        <div class="flex gap-3">
                            <kbd :class="css.kbd">Viagens</kbd>
                            <kbd :class="css.kbd">Surf</kbd>
                            <kbd :class="css.kbd">Ski</kbd>
                            <kbd :class="css.kbd">The Witcher</kbd>
                        </div>
                    </div>
                </div>
                <div class="bg-lightgray p-8 flex flex-col justify-between rounded-lg border border-maingreen gap-5">
                    <div class="flex flex-col gap-3">
                        <h1 class="text-3xl font-semibold underline decoration-maingreen underline-offset-2">Informações Gerais</h1>
                        <div class="w-4/5 flex flex-col gap-4">
                            <h1 class="text-2xl font-semibold underline decoration-maingreen decoration-2">Sobre</h1>
                            <p class="text-lg">{{ info.aboutMe }}</p>
                        </div>
                    </div>
                    <div class="flex flex-col gap-5 justify-between">
                        <div>
                            <p>Educação</p>
                            <p class="font-semibold text-maingreen">{{ info.education }}</p>
                        </div>
                        <div>
                            <p>Histórico de Trabalho</p>
                            <p class="font-semibold text-maingreen">Twitch, Google, Apple</p>
                        </div>
                        <div>
                            <p>Departamento</p>
                            <p class="font-semibold text-maingreen">{{ info.department }}</p>
                        </div>
                    </div>
                    <div class="flex flex-col justify-between gap-5 text-lg">
                        <div class="px-2 flex flex-col gap-4 rounded-lg col-span-2">
                            <h1 class="text-2xl font-semibold underline decoration-maingreen underline-offset-2">Habilidades</h1>
                            <div class="flex gap-3">
                                <kbd :class="css.kbd">HTML</kbd>
                                <kbd :class="css.kbd">CSS</kbd>
                                <kbd :class="css.kbd">Javascript</kbd>
                                <kbd :class="css.kbd">TailwindCSS</kbd>
                            </div>
                           <div class="flex gap-3">
                                <kbd :class="css.kbd">Spring Boot</kbd>
                                <kbd :class="css.kbd">Java</kbd>
                                <kbd :class="css.kbd">Algolia</kbd>
                                <kbd :class="css.kbd">MySQL</kbd>
                           </div>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    </main>
</template>

<script>
import { useRoute } from "vue-router";
import { getByEmail } from '@/services/ResearcherService'

export default {
    name:'ResearchersProfile',
    created() {
        const route = useRoute();
        const id = route.params.id;
        console.log(id)

        getByEmail(id).then((response) => {
            this.info = response.data
            console.log(response.data)
        }).catch((e) => {
            console.log(e)
        })
    },
    data() {
        return {
            info: null,
            css:{
                kbd: "p-3 text-lg font-semibold text-white bg-maingreen border border-gray-200 rounded-lg"
            }
        }
    },
}
</script>
<style lang="">

</style>
