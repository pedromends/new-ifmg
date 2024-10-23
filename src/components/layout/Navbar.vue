<template lang="">
    <nav class="w-full relative font-opensans max-lg:hidden" id="navbar">
        <a href="/"
            class="bg-white absolute right-1/2 transform translate-x-1/2 rounded-b-2xl hover:shadow-black shadow-lg transition duration-300">
            <img alt="" class="h-48 w-36 px-5 py-4" :src="require('@/assets/icons/main-logo.jpg')" />
        </a>

        <section class="bg-govblue flex justify-between items-center py-1 text-lightgray font-raleway font-bold uppercase">
            <div class="flex justify-end items-center text-center gap-5 text-xs ml-40">
                <img :src="require('@/assets/icons/govbr.svg')" alt="" />
                <router-link class="pr-2 hover:text-red-600" to="/">COMUNICA BR</router-link>
                <router-link class="pr-2 hover:text-red-600" to="/">LEGISLAÇÃO</router-link>
            </div>
            <div class="flex justify-center items-center gap-3 text-xs pr-20 mr-16">
                <router-link class="pl-3 hover:text-red-600" to="/">PARTICIPE</router-link>
                <router-link class="pl-3 hover:text-red-600" to="/"> ACESSO À INFORMAÇÃO</router-link>
                <router-link class="pl-3 hover:text-red-600" to="/">ÓRGÃOS DO GOVERNO</router-link>
            </div>
        </section>

        <section class="flex justify-between bg-maingreen">
            <div class="flex justify-between items-center gap-10 px-32 text-lightgray text-sm">
                <router-link class="hover:underline hover:text-govblue transition duration-200"
                    to="/contact">CONTATO</router-link>
                <a class="hover:underline hover:text-govblue transition duration-200"
                    href="https://www2.ifmg.edu.br/portal/processo-seletivo" target="_blank">INGRESSO</a>
                <a class="hover:underline hover:text-govblue transition duration-200"
                    href="https://www.formiga.ifmg.edu.br/graduacao" target="_blank">NOSSOS CURSOS</a>
            </div>

            <div class="flex justify-between items-center">
                <div class="flex items-center gap-3 mx-3">
                    <a href="https://www.instagram.com/ifmgnarede/"
                        class="hover:bg-govblue rounded-2xl transition duration-200" target="_blank">
                        <img alt="Instagram" class="h-10" :src="require('@/assets/icons/insta.svg')" />
                    </a>
                    <a href="https://twitter.com/ifmgnarede"
                        class="hover:bg-govblue rounded-2xl transition duration-200" target="_blank">
                        <img alt="Twitter" class="h-10" :src="require('@/assets/icons/twitter.svg')" />
                    </a>
                    <a href="https://www.youtube.com/comunicacaoifmg"
                        class="hover:bg-govblue rounded-2xl transition duration-200" target="_blank">
                        <img alt="Youtube" class="h-10" :src="require('@/assets/icons/youtube.svg')" />
                    </a>
                </div>
                <div class="h-10 flex items-center rounded-xl bg-maingreen border-white text-black transition duration-200 border-2 hover:ring-2 hover:ring-maingreen hover:bg-white mr-10">
                    <input type="text" id="search-bar"
                        class="bg-handglass border-none bg-transparent hover:bg-handglass-blue mx-3 bg-no-repeat bg-contain focus:ring-0 pl-10"
                        v-model="searchQuery"/>
                        <button v-if="searchQuery.length > 1" @click="searchQuery = ''" class="rounded-xl hover:bg-gray-200">
                            <img :src="require('@/assets/icons/X.svg')" alt="" class="w-6 h-6 m-1">
                        </button>
                </div>
                <ProfileDropdown />
                <div class="flex items-center gap-3 px-3">
                    <NotificationDropdown />
                </div>
            </div>
        </section>

        <section class="flex justify-between items-center">
            <div class="flex text-sm text-maingray gap-5 p-4 ml-14 max-lg:p-0">
                <NavbarLink :func="home" :link="'/'" :text="'HOME'"/>
                <NavbarLink :func="aboutUs" :link="'/'" :text="'QUEM SOMOS'" />
                <NavbarLink :func="advantages" :link="'/'" :text="'VANTAGENS'" />
                <NavbarLink :link="'/news'" :text="'NOTÍCIAS'" />
                <NavbarLink :func="portfolio" :link="'/'" :text="'PORTFÓLIO DE PROJETOS'" />
            </div>
            <div class="flex text-sm text-maingray gap-5 py-1  mr-14 max-lg:p-0 items-center">
                <NavbarLink :func="goResearchers" :link="'/researchers'" :text="'PESQUISADORES'" />
                <NavbarLink :func="edicts" :link="'/edicts'" :text="'EDITAIS'" />
                <NavbarLink :func="docs" :link="'/docs'" :text="'DOCUMENTOS'" />
                <NavbarLink :func="capacitation" :link="'/capacitation'" :text="'CAPACITAÇÃO'" />
                <NavbarLink :func="faq" :link="'/capacitation'" :text="'FAQ'" />
                <router-link to="/embrapii"
                    class="hover:underline shadow shadow-transparent hover:shadow-red-600 transition duration-200 rounded-lg">
                    <img :src="require('@/assets/icons/embrapii.png')" class="w-16" alt="">
                </router-link>
            </div>
        </section>
    </nav>
</template>

<script>
    import NavbarLink from '@/components/links/NavbarLink.vue';
    import router from '@/router/index.js';
    import ProfileDropdown from "@/components/dropdown/ProfileDropdown.vue";
    import NotificationDropdown from "@/components/dropdown/NotificationDropdown.vue";
    import { mapMutations } from "vuex";

    export default {
        name: 'NavBar',
        mounted() {
            // Obter o campo de input após o componente ser montado
            var input = document.getElementById("search-bar");
            
            if (input) {
            // Adicionar o evento de keypress ao campo de input
            input.addEventListener("keypress", (event) => {
                // Verifica se a tecla pressionada foi "Enter"
                if (event.key === "Enter") {
                    event.preventDefault(); // Previne a ação padrão
                    // Aciona o clique no botão
                    this.search()
                }
            });
            }
        },
        components: {
            NavbarLink,
            ProfileDropdown,
            NotificationDropdown
        },
        data() {
            return {
                searchQuery: '', // q de query
                search() {
                    router.push({ path: '/news', query: { q: this.searchQuery } })
                },
                home: () => {
                    router.push({ path: '/' }).then(() => {
                        window.location.reload()
                    })
                },
                aboutUs: () => {
                    router.push({ path: '/' }).then(() => {
                        var element = document.getElementById("aboutus");
                        element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                    })
                },
                advantages: () => {
                    router.push({ path: '/' }).then(() => {
                        var element = document.getElementById("advantages");
                        element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                    })
                },
                capacitation: () => {
                    router.push({ path: '/capacitation' }).then(() => {
                        window.location.reload()
                    })
                },
                edicts: () => {
                    router.push({ path: '/edicts' }).then(() => {
                        window.location.reload()
                    })
                },
                docs: () => {
                    router.push({ path: '/docs' }).then(() => {
                        window.location.reload()
                    })
                },
                portfolio: () => {
                    router.push({ path: '/' }).then(() => {
                        window.location.reload()
                        this.$store.commit('setClients', true)
                    })
                },
                goResearchers: () => {
                    router.push({ path: '/researchers' }).then(() => {
                        window.location.reload();
                    })
                },
                faq: () => {
                    router.push({ path: '/FAQ' }).then(() => {
                        window.location.reload();
                    })
                },
            }
        },
        methods: {
            ...mapMutations(["setClients", "setCapacitation"]),
        }
    }
</script>

<style lang="">

</style>