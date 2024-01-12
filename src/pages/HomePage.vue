<template>
  <main class="hello">
    <Navbar />
    <Presenter />
  </main>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Presenter from "@/sections/Presenter.vue"

export default {
  name: 'HomePage',
  components:{
    Navbar,
    Presenter,
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
