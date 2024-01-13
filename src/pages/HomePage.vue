<template>
  <main class="hello">
    <Navbar />
    <Presenter />
    <AboutUs />
    <Advantages />
    <PartnerCompanies />
    <Capacitation />
  </main>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Presenter from "@/sections/Presenter.vue"
import AboutUs from "@/sections/AboutUs.vue"
import Advantages from "@/sections/Advantages.vue"
import PartnerCompanies from "@/sections/PartnerCompanies.vue"
import Capacitation from "@/sections/Capacitation.vue"

export default {
  name: 'HomePage',
  components:{
    Navbar,
    Presenter,
    AboutUs,
    Advantages,
    PartnerCompanies,
    Capacitation
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
