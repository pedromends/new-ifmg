<template>
  <Navbar />
  <HomePage />
  <Footer />
</template>

<script>
import Navbar from "@/components/layout/Navbar.vue";
import Footer from "@/components/layout/Footer.vue";
import HomePage from './pages/HomePage.vue'
import './index.css'

import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

onMounted(() => {
    initFlowbite();
})

export default {
  name: 'App',
  components: {
    HomePage,
    Navbar,
    Footer
  }
}
</script>

<style>
@font-face {
  font-family: OpenSans;
  src: url('@/assets/fonts/OpenSans-Italic.ttf')
}

@font-face {
  font-family: OpenSans;
  src: url('@/assets/fonts/OpenSans.ttf')
}

@font-face {
  font-family: Raleway;
  src: url('@/assets/fonts/Raleway.ttf')
}
</style>
