<template>
  <main class="font-opensans style">
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

import Presenter from "@/components/sections/Presenter.vue"
import AboutUs from "@/components/sections/AboutUs.vue"
import Advantages from "@/components/sections/Advantages.vue"
import PartnerCompanies from "@/components/sections/PartnerCompanies.vue"
import Capacitation from "@/components/sections/Capacitation.vue"
import TalentBank from "@/components/sections/TalentBank.vue"
import News from "@/components/sections/News.vue"
import Contact from "@/components/sections/Contact.vue"

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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.style{
  font-feature-settings: 'liga' off;
}
</style>
