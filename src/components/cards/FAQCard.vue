<template lang="">
    <v-expansion-panels>
        <v-expansion-panel :title="question" :text="answer">
            <template v-slot:title>
                <div class="flex justify-between items-center w-full relative m-2">
                    <!-- Título da pergunta -->
                    <span>{{ question }}</span>

                    <!-- Botões de ação -->
                    <div class="flex gap-4 items-center absolute z-30 right-0" v-if="isAdmin">
                        <button @click="editing()">
                            <img :src="require('@/assets/icons/pencil-edit-maingreen.svg')" alt=""
                                class="h-10 m-2 hover:bg-gray-300 rounded-lg" />
                        </button>
                        <button @click="deleteFAQ()" class="hover:bg-gray-300 rounded-md">
                            <img :src="require('@/assets/icons/trash.svg')" alt="" class="h-7 m-2" v-if="!inEdit" />
                        </button>
                    </div>
                </div>
            </template>
        </v-expansion-panel>
    </v-expansion-panels>
</template>



<script>
    import { updateFAQ, deleteFAQ } from '@/services/FAQService.js';
    import router from '@/router/index.js'

    export default {
        name: 'FAQCard',
        created() {
            this.FAQ.question = this.question,
                this.FAQ.answer = this.answer
        },
        data() {
            return {
                inEdit: false,
                isAdmin: this.$store.getters.isAdmin,
                FAQ: {
                    question: '',
                    answer: '',
                    id: null
                }
            }
        },
        props: {
            id: Number,
            accordionId: String,
            bodyId: String,
            answer: String,
            question: String
        },
        methods: {
            editing() {
                this.inEdit = !this.inEdit
            },
            save() {
                //salvar no banco
                this.FAQ.id = this.id
                updateFAQ(this.FAQ).then((response) => {
                    console.log(response)
                    this.inEdit = false
                }).catch((error) => console.log(error))

            },
            deleteFAQ() {
                deleteFAQ(this.id)
                    .then((response) => {
                        console.log(response)
                    }).catch((error) => console.log(error)).finally(() => {
                        router.push('/').then(() => {
                            var element = document.getElementById("capacitation");
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