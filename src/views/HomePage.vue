<template>
  <section>
    <Presenter />
    <WhoWeAre />
    <Advantages />
    <News />
    <PartnerCompanies />
    <Capacitation />
    <TalentBank />
    <Contact />
    <BackToTop />
  </section>
</template>

<script>

  import Presenter from "@/components/sections/Presenter.vue"
  import WhoWeAre from "@/components/sections/WhoWeAre.vue"
  import Advantages from "@/components/sections/Advantages.vue"
  import PartnerCompanies from "@/components/sections/PartnerCompanies.vue"
  import Capacitation from "@/components/sections/Capacitation.vue"
  import TalentBank from "@/components/sections/TalentBank.vue"
  import News from "@/components/sections/News.vue"
  import Contact from "@/components/sections/Contact.vue"
  import BackToTop from "@/components/buttons/BackToTop.vue"
  import { mapMutations } from "vuex";

  export default {
    name: 'HomePage',
    components: {
      Presenter,
      WhoWeAre,
      Advantages,
      PartnerCompanies,
      Capacitation,
      TalentBank,
      News,
      Contact,
      BackToTop
    },
    mounted() {
      if (this.$store.getters.isClient) {
        setInterval(() => {
          const element = document.getElementById('ourclients');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 3000)
        this.$store.commit('setClients', false)
      }
    },
    methods: {
      ...mapMutations(["setClients","setCapacitation"]),
    }
  }
</script>

<style>
  .style {
    font-feature-settings: 'liga' off;
  }
</style>