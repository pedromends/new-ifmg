<template lang="">
    <main class="flex justify-center items-center p-16 max-lg:mt-10 max-lg:p-10">
        <div class="flex flex-col gap-10 px-20 max-lg:px-4">
            <div class="flex justify-between items-center gap-5">
                <h1 class="text-4xl text-black font-semibold underline underline-offset-2 decoration-8 decoration-maingreen">Mobilidade e Sistemas Inteligentes</h1>
                <button v-if="isAdmin"  @click.prevent="editMobSys()">
                    <img :src="require('@/assets/icons/pencil-edit-maingreen.svg')" alt="#" class="h-8"/>
                </button>
            </div>
            <hr class="bg-red-600 h-1"/>
            <div class="flex flex-col gap-10 editor-render max-sm:px-4" v-html="newBody.code"></div>
        </div>
        <BackToTop />
    </main>
</template>

<script>
    import router from '@/router/index.js'
import BackToTop  from '@/components/buttons/BackToTop.vue';
import { showOne } from '@/services/NewService.js';

export default {
    name:'MobilitySmartSystems',
    components: {
        BackToTop
    },
    data(){
        return {
            id: null,
            newBody: {
                id: undefined,
                title: '',
                code: null
            },
            res: null,
            isAdmin: this.$store.getters.isAdmin,
        }
    },
    beforeMount() {
        showOne({ id:58 }).then((response) => {
            let res = response.data

            this.newBody.title = res.title
            this.newBody.code = res.code
        })
    },
    methods: {
        editMobSys() {
            router.push('/edit/edit-new/' + 58).then(() => {
                var element = document.getElementById("navbar");
                element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
            }); 
        }
    },
}
</script>
<style>
    
</style>