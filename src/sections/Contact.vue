<template lang="">
    <section class="flex justify-center items-center text-white p-20 mb-56">
        <div class="bg-maingreen flex p-20 rounded-3xl relative">
            <div class="flex flex-col gap-4">
                <h1 class="text-4xl w-116 font-bold">Vamos conversar sobre as oportunidades de inovação da sua empresa.</h1>
                <span class="text-sm tracking-wide">Preencha o formulário e entraremos em contato.</span>
                <div class="flex flex-col gap-8 mt-10">
                    <div class="flex gap-3">
                        <img :src="require('@/assets/icons/phone.svg')" alt="Phone"/>
                        <p class="text-sm">+55 (51) 9.8453-4500</p>
                    </div>
                    <div class="flex gap-3">
                        <img :src="require('@/assets/icons/email.svg')" alt="Email"/>
                        <p class="text-sm">contato@namidsgn.com</p>
                    </div>
                    <div class="flex gap-3">
                        <img :src="require('@/assets/icons/location.svg')" alt="Location"/>
                        <p class="text-sm">Rua Papa João XXIII, 1100 - Cachoeirinha - RS</p>
                    </div>
                </div>
            </div>
            <div class="w-128 h-auto relative">
                <div class="shadow-2xl bg-white p-5 rounded-lg text-black flex justify-start gap-10 absolute right-1 -top-40">
                    <form class="flex flex-col gap-10 p-5">
                        <div class="flex flex-col w-96">
                            <label class="text-maingray text-sm">Nome</label>
                            <input type="text" class="rounded-lg border-1 border-gray-1">
                        </div>
                        <div class="flex flex-col w-96">
                            <label class="text-maingray text-sm">Email</label>
                            <input type="text" class="rounded-lg border-1 border-gray-1">
                        </div>
                        <div class="flex flex-col w-96">
                            <label class="text-maingray text-sm">Empresa</label>
                            <input type="text" class="rounded-lg border-1 border-gray-1">
                        </div>
                        <div class="flex flex-col w-96">
                            <label class="text-maingray text-sm">Área de Atuação da Empresa</label>
                            <input type="text" class="rounded-lg border-1 border-gray-1">
                        </div>
                        <div class="flex flex-col w-96">
                            <label class="text-maingray text-sm">Qual seu cargo ?</label>
                            <input type="text" class="rounded-lg border-1 border-gray-1">
                        </div>
                        <div class="flex flex-col w-96">
                            <label class="text-maingray text-sm">Mensagem</label>
                            <input type="text" class="rounded-lg border-1 border-gray-1">
                        </div>
                        <button class="px-5 py-3 bg-maingreen text-white w-48 rounded-md font-bold tracking-wide">Enviar Mensagem</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>

