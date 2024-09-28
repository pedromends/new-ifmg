<template lang="">
    <section class="flex flex-col px-24 py-10">
        <h1 class="text-4xl text-black font-semibold underline underline-offset-2 decoration-8 decoration-maingreen mb-12">Criação de Notícias</h1>
        <TiptapEditor/>
    </section>
</template>

<script>
import router from '@/router/index.js'
import { createNew } from '@/services/NewService.js';
import TiptapEditor from '@/components/neweditor/TiptapEditor.vue'

export default {
    name: 'NewsCreate',
    data(){
        return {
            currentCard: 1,
            cardToSub: 'mainnew',
            newNew:{
                date: '',
                title: '',
                img1: {
                    name: 'noticia',
                    code: ''
                },
                img2: {
                    name: 'noticia',
                    code: ''
                },
                paragraph1: '',
                paragraph2: ''
            }
        }
    },
    components:{
        TiptapEditor
    },
    methods: {
        setImage(img, e){
            const image = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(image);

            if(img == 1){
                reader.onload = e => {
                    this.newNew.img1.code = e.target.result;
                };
            }else{
                reader.onload = e => {
                    this.newNew.img2.code = e.target.result;
                };
            }
        },
        createNew(){
            console.log(this.newNew)
            createNew(this.newNew).then((response) => {
                console.log(response)
            })
            .finally(() => {
                router.push('/news').then(() => {
                    var element = document.getElementById("navbar");
                    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                    window.location.reload();
                }); 
            })
        }
    }
}
</script>
<style lang="">
    
</style>