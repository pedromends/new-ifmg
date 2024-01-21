import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import Institutional from "@/pages/Institutional.vue";

const routes = [
  {
      path: '/',
      component: HomePage
  },
  {
    path: '/institutional',
    component: Institutional
}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;