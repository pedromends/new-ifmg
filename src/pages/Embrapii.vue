<template lang="">
    <section class="flex justify-center items-center p-16">
        <div class="flex flex-col gap-10 px-20">
            <h1 class="text-4xl text-black font-semibold underline underline-offset-2 decoration-8 decoration-maingreen">EMBRAPII</h1>
            <hr class="bg-red-600 h-1"/>
            <div class="flex flex-col gap-5 text-maingray">
                <div class="flex gap-10">
                    <div class="flex flex-col gap-10">
                        <p>A EMBRAPII (Associação Brasileira de Pesquisa e Inovação Industrial) é uma Organização Social qualificada pelo Poder Público Federal que, desde 2013,
                            apoia instituições de pesquisa tecnológica fomentando a inovação na indústria brasileira. 
                        </p>
                        <p>A EMBRAPII atua por meio da cooperação com instituições de
                            pesquisa científica e tecnológica, públicas ou privadas, tendo como foco as demandas empresariais e como alvo o compartilhamento de risco na fase
                            pré-competitiva da inovação. Ao compartilhar riscos de projetos com as empresas, tem objetivo de estimular o setor industrial a inovar mais e com maior
                            intensidade tecnológica para, assim, potencializar a força competitiva das empresas tanto no mercado interno como no mercado internacional.
                        </p>
                    </div>
                    <img alt="Laboratório de sistemas automotivos IFMG - Campus Formiga" class="w-124 self-start" :src="require('@/assets/banners/embrapii-investimento.png')" />
                </div>
                <a href="#" target="_blank">Conheça mais sobre a EMBRAPII.</a>
                <p class="font-semibold">Vantagens para a empresa:</p>
                <ul>
                    <li class="list-disc">Agilidade no processo de contratação e execução dos projetos;</li>
                    <li class="list-disc">Investimento em inovação com riscos e custos reduzidos;</li>
                    <li class="list-disc">Os recursos para o projeto já estão disponíveis na Unidade EMBRAPII;</li>
                    <li class="list-disc">Flexibilidade de contratação (projetos de qualquer porte podem ser contratados).</li>
                </ul>
            </div>
            <img alt="Laboratório de sistemas automotivos IFMG - Campus Formiga" class="w-124 self-start" :src="require('@/assets/banners/embrapii-investimento.png')" />
        </div>
    </section>
</template>
<script>
export default {
    name:'HowItWorks'
}
</script>
<style lang="">
    
</style>