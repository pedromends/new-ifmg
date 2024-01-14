<template>
  <Navbar />
  <HomePage class="font-opensans"/>
  <Footer />
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import HomePage from './pages/HomePage.vue'
import './index.css'

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
  src: url('@/assets/fonts/OpenSans-Regular.ttf');
}
</style>
