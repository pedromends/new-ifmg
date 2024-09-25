<template>
  <!-- Não entra sem as manha, xóven -->
  <main>
    <Navbar />
    <Sidebar />
    <router-view />
    <Footer />
  </main>
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
    initTabs, initTooltips } from 'flowbite';

  window.onload = function() {
      if (navigator.userAgent.indexOf("Chrome") != -1) {
          document.body.style.zoom = "70%";
      }
      else if (navigator.userAgent.indexOf("Edge") != -1) {
            document.body.style.zoom = "125%";
    }
  };
    
onMounted(() => {
    initFlowbite(); initAccordions();
    initCarousels(); initCollapses();
    initDials(); initDismisses();
    initDrawers(); initDropdowns();
    initModals(); initPopovers();
    initTabs(); initTooltips();
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
