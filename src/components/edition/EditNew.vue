<template lang="">
    <section class="py-10">
        <TiptapEdit :obj="newNew"/>
    </section>
</template>

<script>
import { useRoute } from "vue-router";
import router from '@/router/index.js';
import { updateNew, deleteNew } from '@/services/NewService.js';
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
        showDeleteSuccess(){
            let div = document.getElementById("success-delete-alert")
            console.log(div)
            div.style.display = "flex"
        },
        createNew(){
            console.log(this.newNew)
            updateNew(this.newNew).then((response) => {
                console.log(response)
            }).finally(() => {
                setInterval(() => {
                    router.push('/news').then(() => {
                        window.location.reload();
                    });
                }, 2500)
            })
        },
        deleteNew(){
            deleteNew(this.newNew.id).then((response) => {
                console.log(response)
                this.showDeleteSuccess()
            }).finally(() => {
                setInterval(() => {
                    router.push('/news').then(() => {
                        window.location.reload();
                    });
                }, 2500)
            })
        },
    }
}
</script>
<style lang="">
    
</style>