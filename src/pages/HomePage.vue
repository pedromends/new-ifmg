<template>
  <main class="hello">
    <Navbar />
    <Presenter />
    <AboutUs />
  </main>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Presenter from "@/sections/Presenter.vue"
import AboutUs from "@/sections/AboutUs.vue"

export default {
  name: 'HomePage',
  components:{
    Navbar,
    Presenter,
    AboutUs
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
