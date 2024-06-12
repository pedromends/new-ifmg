<template lang="">
    <button :class="css.btn" id="to-top-button" @click="goToTop()" title="Go to top">&uarr;</button>
</template>

<script>
export default {
    name: 'BackToTopButton',
    methods: {
        goToTop() {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    },
    data() {
        return {
            css: {
                btn: 'hidden fixed z-90 bottom-8 right-8 border border-maingreen px-5 py-2 rounded-full drop-shadow-md bg-maingreen hover:bg-white text-white text-2xl font-bold ' +
                'hover:text-maingreen hover:shadow-md hover:shadow-maingray transition duration-200'
            }
        }
    },
    mounted() {
        var toTopButton = document.getElementById("to-top-button");
        // When the user scrolls down 200px from the top of the document, show the button
        window.onscroll = function () {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                toTopButton.classList.remove("hidden");
            } else {
                toTopButton.classList.add("hidden");
            }
        }
    }
}
</script>
<style lang="">
    
</style>