<template>
  <main class="hello">
    <Presenter />
    <AboutUs />
    <Advantages />
    <PartnerCompanies />
    <Capacitation />
    <TalentBank/>
    <News />
    <Contact />
  </main>
</template>

<script>

import Presenter from "@/sections/Presenter.vue"
import AboutUs from "@/sections/AboutUs.vue"
import Advantages from "@/sections/Advantages.vue"
import PartnerCompanies from "@/sections/PartnerCompanies.vue"
import Capacitation from "@/sections/Capacitation.vue"
import TalentBank from "@/sections/TalentBank.vue"
import News from "@/sections/News.vue"
import Contact from "@/sections/Contact.vue"

export default {
  name: 'HomePage',
  components:{
    Presenter,
    AboutUs,
    Advantages,
    PartnerCompanies,
    Capacitation,
    TalentBank,
    News,
    Contact
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
