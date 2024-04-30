<template lang="">
    <section class="flex flex-col justify-center bg-lightgray gap-10">
        <div class="px-16">
            <div class="bg-white border-b-4 border-maingreen flex flex-col text-center items-center px-2 py-6 hover:shadow-2xl transition duration-400 relative z-20">
                <div role="status" class="max-w-sm animate-pulse flex flex-col pt-4 px-14 gap-4">
                    <h1 @mouseover="onOffNum()" @mouseleave="onOffNum()" class="h-8 bg-maingreen rounded-full w-24 self-center border-4 border-transparent hover:border-red-700"></h1>
                    <p  @mouseover="onOffCarac()" @mouseleave="onOffCarac()" class="h-2 bg-black rounded-full w-36 mb-2.5 border-2 border-transparent hover:border-red-700"></p>
                </div>
            </div>
        </div>
        <form class="bg-white p-10 rounded-lg">
            <div class="grid gap-6 mb-2 grid-cols-1">
                <div id="number-div" class="border border-transparent rounded-lg">
                    <label for="number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Número</label>
                    <input type="text" id="number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5" placeholder="45+, 10+, 20+ etc..." required />
                </div>
                <div id="name-div" class="border border-transparent rounded-lg">
                    <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Característica</label>
                    <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5" placeholder="Projetos Publicados, Alunos, Empresas Parceiras....." required />
                </div>
                <button type="submit" class="text-white bg-maingreen hover:bg-govblue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Salvar</button>
            </div>
        </form>
    </section>
</template>

<script>
export default {
    name: 'EditPresenterCard',
    data(){
        return {
            boolNum: false,
            boolCarac: false,
        }
    },
    methods: {
        onOffNum(){
            let target = document.getElementById('number-div');
            if(this.boolNum){
                target.style.borderColor = 'transparent'
            }else{
                target.style.borderColor = 'red'
            }
            this.boolNum = !this.boolNum
            console.log(this.boolNum)
        },
        onOffCarac(){
            let target = document.getElementById('name-div');
            if(this.boolCarac){
                target.style.borderColor = 'transparent'
            }else{
                target.style.borderColor = 'red'
            }
            this.boolCarac = !this.boolCarac
            console.log(this.boolCarac)
        }
    },
}
</script>

<style scoped>

    #number-div {

    }
</style>