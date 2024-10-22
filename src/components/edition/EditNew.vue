<template lang="">
    <section class="py-10 bg-white">
        <TiptapEdit :obj="newNew"/>
    </section>
</template>

<script>
import { useRoute } from "vue-router";
import router from '@/router/index.js';
import { showOne } from '@/services/NewService.js';
import TiptapEdit from '@/components/neweditor/TiptapEdit.vue'

export default {
    name: 'NewsCreate',
    components: {
        TiptapEdit
    },
    beforeCreate() {
        const route = useRoute();
        const id = route.params.id;

        if(id != 0){
            showOne({ id:id }).then((response) => {
                this.newNew = response.data
                console.log(this.newNew)
            })
        }
    },
    data(){
        return {
            currentCard: 1,
            cardToSub: 'mainnew',
            newNew: {
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
                paragraph2: '',
                isMain: false,
                tip: 'Novidade'
            }
        }
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
    }
}
</script>
<style lang="">
    
</style>