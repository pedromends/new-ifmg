<template lang="">
    <main class="flex justify-center items-center px-16 py-2 max-lg:p-2 max-lg:mt-20">
        <div class="flex flex-col px-20 max-lg:px-4 gap-10 w-full">
            <div class="flex items-center gap-2">
                <img class="w-6" :src="require('@/assets/icons/house2.svg')" alt="">
                <router-link to="/news" class="text-maingreen hover:underline">Home</router-link>
                <p class="flex items-center">
                    <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 9 4-4-4-4" />
                    </svg>
                    <span>Notícias</span>
                </p>
            </div>
            <div class="flex flex-col gap-10 mb-10 pt-5">
                <div class="flex items-center justify-between">
                    <h1
                        class="text-4xl text-black font-semibold underline underline-offset-2 decoration-8 decoration-maingreen">
                        Blog do Polo</h1>
                    <button v-if="isAdmin"
                        class="text-white bg-maingreen hover:bg-govblue focus:ring-4 focus:outline-none focus:ring-red-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition duration-200 mb-10"
                        type="submit" @click.prevent="createNew()">Criar nova notícia</button>
                </div>
                <hr class="bg-red-600 h-1" />
                <div class="flex items-center">
                    <input type="text" placeholder="Pesquisar..." v-model="searchQuery"
                        class="w-full rounded-l-lg ring ring-transparent focus:ring-red-600" />
                        <button @click="searchItems" class="bg-maingreen rounded-r-lg">
                            <img alt="Laboratório de sistemas automotivos IFMG - Campus Formiga"
                            class="mx-4 my-1 rounded-lg" :src="require('@/assets/icons/hand-glass.svg')" />
                        </button>

                </div>
            </div>
            <div v-if="news != null">
                <div v-if="news.length > 0" class="grid grid-cols-4 gap-5 text-maingray max-lg:grid-cols-1">
                    <NewCard v-for="(newNew, i) in news" :key="i" :tip="'Novidade'" :title="newNew.title" :img1="newNew.img.code"
                        :date="newNew.date" :read="'3 min de Leitura'" :code="newNew.code" :newId="newNew.id" />
                </div>
                <div v-else>
                    <h1>Não há notícias a serem exibidas</h1>
                </div>
            </div>
            <nav aria-label="flex justify-center">
                <ul class="flex items-center -space-x-px h-10 text-base justify-center">
                    <li>
                        <button class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
                            @click="pageSet(this.page - 1)">
                            <span class="sr-only">Previous</span>
                            <svg class="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="M5 1 1 5l4 4" />
                            </svg>
                        </button>
                    </li>
                    <li v-for="(page, i) in totalPages" :key="i">
                        <button  :class="this.page == i ? 'bg-maingreen text-white hover:bg-green-700' : 'bg-white text-gray-500 hover:text-gray-700'"
                            class="flex items-center justify-center px-4 h-10 leading-tight border border-gray-300"
                            @click="pageSet(i)">{{ i + 1 }}</button>
                    </li>
                    <li>
                        <button class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700" @click="pageSet(this.page + 1)">
                            <span class="sr-only">Next</span>
                            <svg class="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
        <BackToTop />
    </main>
</template>

<script>
    import router from '@/router/index.js'
    import NewCard from '@/components/cards/NewCard.vue';
    import BackToTop from '@/components/buttons/BackToTop.vue';
    import { listNews, searchNew } from '@/services/NewService.js';

    export default {
        name: 'NewsSection',
        components: {
            NewCard,
            BackToTop
        },
        data() {
            return {
                news: null,
                isAdmin: false,
                page: 0,
                totalPages: 0,
                totalElements: 0,
                searchQuery: '',
                withSearch: null
            }
        },
        mounted() {
            const searchQuery = this.$route.query.q;
            
            if(searchQuery != undefined){
                this.withSearch = true
                this.searchQuery = searchQuery
                this.searchItems()
            }
            try{
                if(!this.withSearch)
                    this.pageSet(0)
            }catch(e){
                console.log(e)
            }
        },
        created() {
           
            this.isAdmin = this.$store.getters.isAdmin
        },
        methods: {
            createNew() {
                router.push('/news/create').then(()=>window.location.reload())
                
            },
            pageSet(page){
                this.page = page
                listNews(page).then((response) => {
                    this.news = response.data.content
                    this.totalPages = response.data.totalPages
                    this.totalElements = response.data.totalElements
                })
            },
            searchItems() {
                if (this.searchQuery.length > 2) {
                    searchNew(this.searchQuery).then((response) => {
                        this.news = response.data
                    }).catch(error => {
                        console.error("Erro ao buscar itens:", error);
                    });
                }
            }
        },
        props: {
        }
    }
</script>

<style lang="">

</style>