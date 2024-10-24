<template lang="">
    <section class="flex flex-col justify-center bg-lightgray gap-10">
        <AlertSuccessDelete/>
        <div role="status" class="flex max-sm:flex-col gap-24 justify-center items-center mt-10">
            <div class="left-4 flex flex-col gap-5">
                <p class="font-semibold text-2xl underline underline-offset-2 decoration-4 decoration-maingreen self-start mt-5 mb-10">Cards de Talentos</p>
                <select class="bg-gray-50 border-0 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 w-full p-2.5"
                    v-model="inEdition.id" name="" id="">
                    <option class="bg-white divide-y divide-gray-100 rounded-lg shadow overflow-scroll h-72 overflow-x-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-maingreen"
                        selected="selected" disabled value="0">Selecione um talento</option>
                    <option class="bg-white divide-y divide-gray-100 rounded-lg shadow overflow-scroll h-72 overflow-x-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-maingreen"
                        :value="talent.id" v-for="(talent, i) in talents" :key="i">{{ talent.name }}</option>
                </select>
            </div>
            
            <!-- Esqueleto do Card -->
            <div class="transition duration-300 shadow-lg bg-white flex flex-col gap-5 rounded-3xl border-2 border-white p-3 px-10 hover:shadow-md hover:shadow-red-600 z-20 animate-pulse">
                <div class="flex justify-between items-start gap-24">
                    <div alt="Polo IFMG" class="h-16 rounded-lg border border-maingreen flex items-center px-5 border-transparent hover:border-red-700">
                        <svg class="w-8 h-8 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                        </svg>
                    </div>
                    <img :src="require('@/assets/icons/linkedin.svg')"  class="" alt="Linkedin"/>
                </div> 
                <div class="flex flex-col gap-1">
                    <div class="h-2.5 bg-black rounded-full w-36 border border-transparent hover:border-red-700"></div>
                    <div class="h-1.5 bg-black rounded-full w-32 border border-transparent hover:border-red-700"></div>
                </div>
                <div class="h-1.5 bg-black rounded-full w-28 border border-transparent hover:border-red-700"></div>
            </div>
        </div>

        <!-- Formulário -->
        <form class="bg-white p-10 rounded-lg mb-10">
            <div class="grid gap-6 mb-6 md:grid-cols-2 max-sm:grid-cols-1">
                <div id="name-div" class="border-2 border-transparent p-2 rounded-lg">
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome</label>
                    <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5" 
                        v-model="newTalent.name" type="text" id="name" placeholder="Nome do talento..." required />
                </div>
                <div id="profession-div" class="border-2 border-transparent p-2 rounded-lg">
                    <label for="profession" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profissão</label>
                    <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5" 
                        v-model="newTalent.profession" type="text" id="profession" placeholder="Profissão..." required />
                </div>
                <div id="phrase-div" class="border-2 border-transparent p-2 rounded-lg">
                    <label for="phrase" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Detalhes</label>
                    <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5"
                        v-model="newTalent.details" type="text" id="phrase" placeholder="Descrição das suas atividades...." required />
                </div>
                <div id="image-div" class="border-2 border-transparent p-2 rounded-lg">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Imagem de Perfil</label>
                    <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                        @change="onImageChange($event)" aria-describedby="file_input_help" id="file_input" type="file"/>
                    <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                </div>
            </div>
            <div class="w-full flex max-sm:flex-col justify-center gap-10">
                <button class="text-white bg-maingreen hover:bg-govblue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center px-36 py-3 transition duration-200"
                    @click.prevent="updateCard()" type="submit">Salvar</button>
                
                <div class="flex items-center bg-red-600 hover:bg-maingray focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg transition duration-200"
                    @click.prevent="deleteTalent()" type="submit">
                    <div class="flex w-full justify-start gap-3 items-center text-white px-32">
                        <img class="w-5" :src="require('@/assets/icons/trash.svg')" alt="">
                        <p class="font-medium">Excluir</p>
                    </div>
                </div>
            </div>
        </form>
    </section>
</template>

<script>
import router from '@/router/index.js'
import { createTalent, updateTalent, getTalents, deleteTalent } from '@/services/TalentService.js';
import { mapMutations, mapActions } from "vuex";

export default {
    name: 'EditnewTalent',
    data(){
        return {
            bool: false,
            talents: null,
            inEdition:{
                id: 0,
                name: 'Selecione um aluno',
                id_img: null
            },
            newTalent: {
                id: null,
                name: '',
                profession: '',
                details: '',
                img: {
                    id: null,
                    code: null
                }
            },
        }
    },
    created(){
        getTalents().then((response) => {
            this.talents = response.data
        })
    },
    methods: {
        ...mapMutations([
                "setUser",
                "setToken",
                "setRole",
                "setAlert"
            ]),
            ...mapActions([
                "getToken",
                "getUser",
                "isAlertFired"
            ]),
        onOffEffect(div){
            let target = document.getElementById(div);
            this.bool ? target.style.borderColor = 'transparent' : target.style.borderColor = 'red'
            this.bool = !this.bool
        },
        onImageChange(e){
            const image = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = e => {
                this.newTalent.img.code = e.target.result;
            };
        },
        showDeleteSuccess(){
            let div = document.getElementById("success-delete-alert")
            div.style.display = "flex"
            this.$store.commit('setAlert', false)
        },
        showTalentSuccess(){
            let div = document.getElementById("success-alert-talent")
            div.style.display = "flex"
            this.$store.commit('setAlert', false)
        },
        updateCard(){
            if(this.newTalent.name !== '' && this.newTalent.profession !== '' &&  this.newTalent.details !== ''){
                this.newTalent.id = this.inEdition.id
                if(this.inEdition.id == 0){
                    createTalent(this.newTalent).then((response) => {
                        this.$store.commit('setAlert', true)
                        this.$nextTick(()=>{
                            this.showTalentSuccess();
                        })
                    }).finally(() => {
                        setInterval(() => {
                            router.push('/').then(() => {
                                window.location.reload();
                            });
                        }, 2500)
                    })
                } else {
                    let objId = this.talents.filter((talent) => {
                        if(talent.id == this.inEdition.id)
                            return talent
                    })

                    if(this.newTalent.img.code != null){
                        this.newTalent.img.id = objId[0].img.id
                    }

                    updateTalent(this.newTalent).then((response) => {
                        console.log(response)
                    }).finally(() => {
                        setInterval(() => {
                            router.push('/').then(() => {
                                window.location.reload();
                            });
                        }, 2500)
                    })
                }
            }else{
                alert('Um ou mais campos vazios')
            }
        },
        deleteTalent(){
            if(this.newTalent.id == 0){
                alert('selecione um aluno primeiro')
            } else {
                this.$store.commit('setAlert', true)
                this.$nextTick(()=>{
                    this.showDeleteSuccess();
                    deleteTalent(this.inEdition.id).then((response) => {
                        console.log(response)
                    }).finally(() => {
                        setInterval(() => {
                            router.push('/').then(() => {1
                                window.location.reload();
                            }); 
                        }, 2000)
                    })
                })
            }
        }
    },
}
</script>

<style scoped>

</style>