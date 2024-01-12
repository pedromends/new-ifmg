<template>
  <HomePage class="font-opensans"/>
</template>

<script>
import HomePage from './pages/HomePage.vue'
import './index.css'

export default {
  name: 'App',
  components: {
    HomePage
  }
}
</script>

<style>
@font-face {
  font-family: OpenSans;
  src: url('@/assets/fonts/OpenSans-Regular.ttf');
}
</style>
