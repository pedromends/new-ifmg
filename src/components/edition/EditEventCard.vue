<template lang="">
    <section class="flex justify-center bg-lightgray gap-10">
        <div role="status" class="max-w-sm animate-pulse self-center flex flex-col gap-3">
            <div @mouseover="setCard(1)" class="flex justify-between items-center gap-5 rounded-lg px-3 py-2 transition duration-300 bg-white pt-5">
                <div class="flex flex-col justify-center items-center">
                    <div @mouseover="onOffEffect('day-div')" @mouseleave="onOffEffect('day-div')" class="h-2.5 bg-gray-200 rounded-full w-10 mb-4 border border-transparent hover:border-red-700"></div>
                    <div @mouseover="onOffEffect('month-div')" @mouseleave="onOffEffect('month-div')" class="h-2.5 bg-gray-200 rounded-full w-10 mb-4 border border-transparent hover:border-red-700"></div>
                </div>
                <div>
                    <div @mouseover="onOffEffect('title-div')" @mouseleave="onOffEffect('title-div')" class="h-2.5 bg-maingreen rounded-full w-48 mb-4 border border-transparent hover:border-red-700"></div>
                    <div class="flex gap-3 items-center">
                        <div @mouseover="onOffEffect('hour-div')" @mouseleave="onOffEffect('hour-div')" class="h-2.5 bg-gray-200 rounded-full w-10 mb-4 border border-transparent hover:border-red-700"></div>|
                        <div @mouseover="onOffEffect('local-div')" @mouseleave="onOffEffect('local-div')" class="h-2.5 bg-gray-200 rounded-full w-24 mb-4 border border-transparent hover:border-red-700"></div>
                    </div>
                </div>
            </div>
            <div @mouseover="setCard(2)" class="flex justify-between items-center gap-5 rounded-lg px-3 py-2 transition duration-300 bg-white pt-5">
                <div class="flex flex-col justify-center items-center">
                    <div @mouseover="onOffEffect('day-div')" @mouseleave="onOffEffect('day-div')" class="h-2.5 bg-gray-200 rounded-full w-10 mb-4 border border-transparent hover:border-red-700"></div>
                    <div @mouseover="onOffEffect('month-div')" @mouseleave="onOffEffect('month-div')" class="h-2.5 bg-gray-200 rounded-full w-10 mb-4 border border-transparent hover:border-red-700"></div>
                </div>
                <div>
                    <div @mouseover="onOffEffect('title-div')" @mouseleave="onOffEffect('title-div')" class="h-2.5 bg-maingreen rounded-full w-48 mb-4 border border-transparent hover:border-red-700"></div>
                    <div class="flex gap-3 items-center">
                        <div @mouseover="onOffEffect('hour-div')" @mouseleave="onOffEffect('hour-div')" class="h-2.5 bg-gray-200 rounded-full w-10 mb-4 border border-transparent hover:border-red-700"></div>|
                        <div @mouseover="onOffEffect('local-div')" @mouseleave="onOffEffect('local-div')" class="h-2.5 bg-gray-200 rounded-full w-24 mb-4 border border-transparent hover:border-red-700"></div>
                    </div>
                </div>
            </div>
            <div @mouseover="setCard(3)" class="flex justify-between items-center gap-5 rounded-lg px-3 py-2 transition duration-300 bg-white pt-5">
                <div class="flex flex-col justify-center items-center">
                    <div @mouseover="onOffEffect('day-div')" @mouseleave="onOffEffect('day-div')" class="h-2.5 bg-gray-200 rounded-full w-10 mb-4 border border-transparent hover:border-red-700"></div>
                    <div @mouseover="onOffEffect('month-div')" @mouseleave="onOffEffect('month-div')" class="h-2.5 bg-gray-200 rounded-full w-10 mb-4 border border-transparent hover:border-red-700"></div>
                </div>
                <div>
                    <div @mouseover="onOffEffect('title-div')" @mouseleave="onOffEffect('title-div')" class="h-2.5 bg-maingreen rounded-full w-48 mb-4 border border-transparent hover:border-red-700"></div>
                    <div class="flex gap-3 items-center">
                        <div @mouseover="onOffEffect('hour-div')" @mouseleave="onOffEffect('hour-div')" class="h-2.5 bg-gray-200 rounded-full w-10 mb-4 border border-transparent hover:border-red-700"></div>|
                        <div @mouseover="onOffEffect('local-div')" @mouseleave="onOffEffect('local-div')" class="h-2.5 bg-gray-200 rounded-full w-24 mb-4 border border-transparent hover:border-red-700"></div>
                    </div>
                </div>
            </div>
            <div @mouseover="setCard(4)" class="flex justify-between items-center gap-5 rounded-lg px-3 py-2 transition duration-300 bg-white pt-5">
                <div class="flex flex-col justify-center items-center">
                    <div @mouseover="onOffEffect('day-div')" @mouseleave="onOffEffect('day-div')" class="h-2.5 bg-gray-200 rounded-full w-10 mb-4 border border-transparent hover:border-red-700"></div>
                    <div @mouseover="onOffEffect('month-div')" @mouseleave="onOffEffect('month-div')" class="h-2.5 bg-gray-200 rounded-full w-10 mb-4 border border-transparent hover:border-red-700"></div>
                </div>
                <div>
                    <div @mouseover="onOffEffect('title-div')" @mouseleave="onOffEffect('title-div')" class="h-2.5 bg-maingreen rounded-full w-48 mb-4 border border-transparent hover:border-red-700"></div>
                    <div class="flex gap-3 items-center">
                        <div @mouseover="onOffEffect('hour-div')" @mouseleave="onOffEffect('hour-div')" class="h-2.5 bg-gray-200 rounded-full w-10 mb-4 border border-transparent hover:border-red-700"></div>|
                        <div @mouseover="onOffEffect('local-div')" @mouseleave="onOffEffect('local-div')" class="h-2.5 bg-gray-200 rounded-full w-24 mb-4 border border-transparent hover:border-red-700"></div>
                    </div>
                </div>
            </div>
        </div>
        <form class="bg-white p-10 rounded-lg">
            <p class="font-bold text-lg">Card 1</p>
            <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div id="day-div" class="border-2 border-transparent p-2 rounded-lg">
                    <label for="day" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Dia:</label>
                    <input type="text" id="day" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main-700 focus:border-main-700 block w-full p-2.5" placeholder="1,2,3..." required />
                </div>
                <div id="month-div" class="border-2 border-transparent p-2 rounded-lg">
                    <label for="month" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mês:</label>
                    <input type="text" id="month" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main-700 focus:border-main-700 block w-full p-2.5" placeholder="Jan, Fev..." required />
                </div>
                <div id="title-div" class="border-2 border-transparent p-2 rounded-lg">
                    <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Título</label>
                    <input type="text" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main-700 focus:border-main-700 block w-full p-2.5" placeholder="Fórum de Desenvolvimento Humano" required />
                </div>  
                <div id="hour-div" class="border-2 border-transparent p-2 rounded-lg">
                    <label for="hour" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Horário</label>
                    <input type="tel" id="hour" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main-700 focus:border-main-700 block w-full p-2.5" placeholder="16h30..." pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                </div>
                <div id="local-div" class="border-2 border-transparent p-2 rounded-lg">
                    <label for="local" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Local</label>
                    <input type="url" id="local" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main-700 focus:border-main-700 block w-full p-2.5" placeholder="Auditório Principal..." required />
                </div>
            </div>
            <button type="submit" class="text-white bg-maingreen hover:bg-gov-blue focus:ring-4 focus:outline-none focus:ring-main-700 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Salvar</button>
        </form>
    </section>
</template>

<script>
export default {
    name: 'EditNewCard',
    data(){
        return {
            bool: false,
            cardToUpdate: 1,
            newEventCard: {
                number: 0,
                caracteristic: ''
            },
        }
    },
    methods: {
        onOffEffect(div){
            let target = document.getElementById(div);
            this.bool ? target.style.borderColor = 'transparent' : target.style.borderColor = 'red'
            this.bool = !this.bool
        },
        setCard(form){
            this.currentForm = form
        }
    },
}
</script>

<style scoped>

</style>