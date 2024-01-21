import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import Institutional from "@/pages/Institutional.vue";
import MobSys from "@/pages/MobSys.vue";
import HowItWorks from "@/pages/HowItWorks.vue";
import Embrapii from "@/pages/Embrapii.vue";
import NewsPage from "@/pages/NewsPage.vue";
import Edicts from "@/pages/Edicts.vue";
import Capacitation from "@/pages/Capacitation.vue";
import Documents from "@/pages/Documents.vue";
import Contact from "@/pages/ContactPage.vue";

const routes = [
  {
      path: '/',
      component: HomePage
  },
  {
    path: '/institutional',
    component: Institutional
  },
  {
    path: '/mobility-smart-systems',
    component: MobSys
  },
  {
    path: '/how-it-works',
    component: HowItWorks
  },
  {
    path: '/embrapii',
    component: Embrapii
  },
  {
    path: '/news',
    component: NewsPage
  },
  {
    path: '/edicts',
    component: Edicts
  },
  {
    path: '/capacitation',
    component: Capacitation
  },
  {
    path: '/docs',
    component: Documents
  },
  {
    path: '/contact',
    component: Contact
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
