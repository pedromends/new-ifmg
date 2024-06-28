<template lang="">
    <div>
        <!-- Card 1 -->
        <h2 :id="accordionId" class="min-w-216">
            <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 rounded-xl focus:ring-4 focus:ring-gray-200 gap-3" :data-accordion-target="`#${bodyId}`" aria-expanded="true" :aria-controls="bodyId">
                <span>{{ question }}</span>
                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                </svg>
            </button>
        </h2>
        <div :id="bodyId" class="hidden" :aria-labelledby="accordionId">
            <div class="p-5 border border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p class="mb-2 text-gray-500 dark:text-gray-400 max-w-216">{{ answer }}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'FAQCard',
    props:{
        accordionId: String,
        bodyId: String,
        answer: String,
        question: String
    }
}
</script>
<style lang="">
    
</style>