<template lang="">
    <div>
        <!-- Card 1 -->
        <h2 :id="accordionId" class="min-w-216">
            <div
                class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 rounded-xl focus:ring-4 focus:ring-gray-200 gap-3">
                <span v-if="!inEdit">{{ question }}</span>
                <div class="flex">
                    <input v-if="inEdit" type="text" v-model="FAQ.question" class="rounded-md">
                    <button @click="save()" class="hover:bg-gray-300 rounded-md">
                        <img :src="require('@/assets/icons/save.svg')" alt="" class="h-7 m-2" v-if="inEdit" />
                    </button>
                </div>
                <div class="self-end flex gap-10 items-center">
                    <div class="flex gap-4 items-center">
                        <button @click="editing()">
                            <img :src="require('@/assets/icons/pencil-edit-maingreen.svg')" alt=""
                                class="h-10 m-2 hover:bg-gray-300 rounded-lg" />
                        </button>
                        <button @click="deleteFAQ()" class="hover:bg-gray-300 rounded-md">
                            <img :src="require('@/assets/icons/trash.svg')" alt="" class="h-7 m-2" v-if="!inEdit" />
                        </button>
                    </div>
                    <button :data-accordion-target="`#${bodyId}`" :aria-controls="bodyId" type="button"
                        aria-expanded="true">
                        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 5 5 1 1 5" />
                        </svg>
                    </button>
                </div>
            </div>
        </h2>
        <div :id="bodyId" class="hidden" :aria-labelledby="accordionId">
            <div class="p-5 border border-gray-200 dark:border-gray-700 dark:bg-gray-900 rounded-lg">
                <p v-if="!inEdit" class="mb-2 text-gray-500 dark:text-gray-400 max-w-216">{{ answer }}</p>
                <textarea class="rounded-md" v-if="inEdit" type="text" v-model="FAQ.answer" cols="50"
                    rows="10"></textarea>
            </div>
        </div>
    </div>
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