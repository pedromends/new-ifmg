<template>
  <!-- Não entra sem as manha, xóven -->
  <Navbar />
  <Sidebar />
  <router-view />
  <Footer />
</template>

<script setup>
import Navbar from "@/components/layout/Navbar.vue";
import Sidebar from "@/components/layout/Sidebar.vue";
import Footer from "@/components/layout/Footer.vue";
import './index.css'

import { onMounted } from 'vue'
import { initFlowbite, initAccordions, 
    initCarousels, initCollapses, 
    initDials, initDismisses, 
    initDrawers, initDropdowns, 
    initModals, initPopovers, 
    initTabs, initTooltips } from 'flowbite'

onMounted(() => {
    initFlowbite(); initAccordions();
    initCarousels(); initCollapses();
    initDials(); initDismisses();
    initDrawers(); initDropdowns();
    initModals(); initPopovers();
    initTabs(); initTooltips();

    console.log('chamou')
})
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
