<template lang="">
    <nav class="w-full relative font-opensans max-lg:hidden" id="navbar">
        <router-link to="/" class="bg-white absolute right-1/2 transform translate-x-1/2 rounded-b-2xl hover:shadow-2xl transition duration-300">
            <img alt="" class="h-40 w-32 px-5 py-4" :src="require('@/assets/icons/main-logo.jpg')"/>
        </router-link>

        <section class="bg-govblue flex justify-between items-center py-1 text-lightgray font-raleway font-bold uppercase">
            <div class="flex justify-end items-center text-center gap-5 text-xs ml-40">
                <img :src="require('@/assets/icons/govbr.svg')" alt=""/>
                <router-link class="pr-2 hover:text-red-600" to="">COMUNICA BR</router-link>
                <router-link class="pr-2 hover:text-red-600" to="">LEGISLAÇÃO</router-link>
            </div>
            <div class="flex justify-center items-center gap-3 text-xs pr-20 mr-16">
                <router-link class="pl-3 hover:text-red-600" to="">PARTICIPE</router-link>
                <router-link class="pl-3 hover:text-red-600" to=""> ACESSO À INFORMAÇÃO</router-link>
                <router-link class="pl-3 hover:text-red-600" to="">ÓRGÃOS DO GOVERNO</router-link>
            </div>
        </section>

        <section class="flex justify-between bg-maingreen">
            <div class="flex justify-between items-center gap-10 px-32 text-lightgray text-sm">
                <router-link class="hover:underline" to="#">CONTATO</router-link>
                <router-link class="hover:underline" to="#">INGRESSO</router-link>
                <router-link class="hover:underline" to="#">NOSSOS CURSOS</router-link>
            </div>

            <div class="flex justify-between items-center px-5 gap-5">
                <div class="flex items-center gap-3 px-5">
                    <a href="https://www.instagram.com/ifmgnarede/" class="hover:bg-govblue rounded-2xl transition duration-200" target="_blank">
                        <img alt="Instagram" class="h-10" :src="require('@/assets/icons/insta.svg')"/>
                    </a>
                    <a href="https://twitter.com/ifmgnarede" class="hover:bg-govblue rounded-2xl transition duration-200" target="_blank">
                        <img alt="Twitter" class="h-10" :src="require('@/assets/icons/twitter.svg')"/>
                    </a>
                    <a href="https://www.youtube.com/comunicacaoifmg" class="hover:bg-govblue rounded-2xl transition duration-200" target="_blank">
                        <img alt="Youtube" class="h-10" :src="require('@/assets/icons/youtube.svg')"/>
                    </a>
                </div>
                <input type="text" class="bg-handglass hover:bg-handglass-blue bg-maingreen bg-no-repeat bg-contain pl-10 h-10 w-72 rounded-xl border-white text-white hover:border-red-600 transition duration-200"/>
                <ProfileDropdown/>
            </div>        
        </section>
        
        <section class="flex justify-between items-center">
            <div class="flex text-sm text-maingray gap-5 p-4 ml-14 max-lg:p-0">
                <NavbarLink :func="goHome" :link="'/'" :text="'INÍCIO'" />
                <NavbarLink :func="aboutUs" :link="'/'" :text="'QUEM SOMOS'" />
                <NavbarLink :func="advantages" :link="'/'" :text="'VANTAGENS'" />
                <NavbarLink :link="'/news'" :text="'NOTÍCIAS'" />
                <NavbarLink :func="ourClients" :link="'/'" :text="'PORTFÓLIO DE PROJETOS'" />
            </div>
            <div class="flex text-sm text-maingray gap-5 py-1  mr-14 max-lg:p-0 items-center">
                <NavbarLink :link="'/researchers'" :text="'PESQUISADORES'" />
                <NavbarLink :link="'/edicts'" :text="'EDITAIS'" />
                <NavbarLink :link="'/docs'" :text="'DOCUMENTOS'" />
                <NavbarLink :func="capacitation" :link="'/capacitation'" :text="'CAPACITAÇÃO'" />
                <router-link to="/embrapii" class="hover:underline shadow shadow-transparent hover:shadow-red-600 transition duration-200 rounded-lg">
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

export default {
    name: 'NavBar',
    components:{
        NavbarLink,
        ProfileDropdown
    },
    data() {
        return {
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
                router.push({ path: '/' }).then(() => {
                    var element = document.getElementById("capacitation");
                    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                })
            },
            goHome: () => {
                router.push({ path: '/' }).then(() => {
                    window.location.reload();
                })
            },
            ourClients: () => {
                router.push({ path: '/' }).then(() => {
                    var element = document.getElementById("ourclients");
                    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                }).finally(() => {
                    window.location.reload();
                })
            },
        }  
    },
}
</script>

<style lang="">

</style>