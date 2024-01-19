<template lang="">
    <section class="flex justify-center items-center text-white p-20 mb-56">
        <div class="bg-maingreen flex max-lg:flex-col p-10 max-lg:p-14 rounded-3xl relative">
            <div class="flex flex-col gap-4">
                <h1 class="text-3xl w-112 max-lg:w-auto font-semibold">Vamos conversar sobre as oportunidades de inovação da sua empresa.</h1>
                <span class="text-sm">Preencha o formulário e entraremos em contato.</span>
                <div class="flex flex-col gap-5 mt-10">
                    <div class="flex gap-3">
                        <img :src="require('@/assets/icons/phone.svg')" alt="Phone"/>
                        <p class="text-sm">+55 (37) 99863-5940 / (37) 3322-8529</p>
                    </div>
                    <div class="flex gap-3">
                        <img :src="require('@/assets/icons/email.svg')" alt="Email"/>
                        <p class="text-sm">diretoria.polo@ifmg.edu.br</p>
                    </div>
                    <div class="flex gap-3">
                        <img :src="require('@/assets/icons/location.svg')" alt="Location"/>
                        <p class="text-sm flex flex-col">Rua Padre Alberico, nº 440 - São Luiz <span>Formiga/MG - CEP: 35.577-020</span></p>
                    </div>
                </div>
            </div>
            <div class="w-128 max-lg:w-auto h-auto relative">
                <div class="shadow-2xl bg-white p-5 rounded-lg text-black flex justify-start gap-10 absolute -top-28 max-lg:top-0">
                    <form class="flex flex-col gap-5 p-5 max-lg:gap-3">
                        <div class="flex flex-col w-96 max-lg:w-auto">
                            <label class="text-maingray text-sm">Nome</label>
                            <input type="text" class="rounded-lg border-1 border-gray-1 max-lg:h-8">
                        </div>
                        <div class="flex flex-col w-96 max-lg:w-auto">
                            <label class="text-maingray text-sm">Email</label>
                            <input type="text" class="rounded-lg border-1 border-gray-1 max-lg:h-8">
                        </div>
                        <div class="flex flex-col w-96 max-lg:w-auto">
                            <label class="text-maingray text-sm">Empresa</label>
                            <input type="text" class="rounded-lg border-1 border-gray-1 max-lg:h-8">
                        </div>
                        <div class="flex flex-col w-96 max-lg:w-auto">
                            <label class="text-maingray text-sm">Área de Atuação da Empresa</label>
                            <input type="text" class="rounded-lg border-1 border-gray-1 max-lg:h-8">
                        </div>
                        <div class="flex flex-col w-96 max-lg:w-auto">
                            <label class="text-maingray text-sm">Mensagem</label>
                            <input type="text" class="rounded-lg border-1 border-gray-1 max-lg:h-8">
                        </div>
                        <button class="px-5 py-2 bg-maingreen text-white w-48 rounded-md font-semibold border-2 border-maingreen transition duration-300 hover:text-maingreen hover:bg-white">Enviar Mensagem</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'ContactSection',
    components:{  
    },
    props: {
    }
}
</script>
<style lang="">
    
</style>

