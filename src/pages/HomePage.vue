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
    <BackToTop />
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
import BackToTop from "@/components/buttons/BackToTop.vue"

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
    Contact,
    BackToTop
  },
  props: {
  },
  
}
</script>

<style>
.style{
  font-feature-settings: 'liga' off;
}
</style>
