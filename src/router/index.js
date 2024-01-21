import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import Institutional from "@/pages/Institutional.vue";
import MobSys from "@/pages/MobSys.vue";

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
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;