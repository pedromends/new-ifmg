import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import Institutional from "@/views/Institutional.vue";
import MobSys from "@/views/MobSys.vue";
import HowItWorks from "@/views/HowItWorks.vue";
import Embrapii from "@/views/Embrapii.vue";
import NewsPage from "@/views/NewsPage.vue";
import Edicts from "@/views/Edicts.vue";
import NewsCreate from "@/views/NewsCreate.vue";
import Capacitation from "@/views/Capacitation.vue";
import Documents from "@/views/Documents.vue";
import Contact from "@/views/ContactPage.vue";
import Researchers from "@/views/Researchers.vue";
import MainEdition from "@/views/MainEdition.vue";
import OpenedNew from "@/views/OpenedNew.vue";
import LoginPage from "@/views/LoginPage.vue";
import EditPresenterCard from "@/components/edition/EditPresenterCard.vue";
import EditEventCard from "@/components/edition/EditEventCard.vue";
import EditMainNewCard from "@/components/edition/EditMainNewCard.vue";
import EditNewCard from "@/components/edition/EditNewCard.vue";
import EditResearcherCard from "@/components/edition/EditResearcherCard.vue";
import EditTalentCard from "@/components/edition/EditTalentCard.vue";
import EditAdvantagesCard from "@/components/edition/EditAdvantagesCard.vue";
import EditProjectModal from "@/components/edition/EditProjectModal.vue";
import EditCapacitationCard from "@/components/edition/EditCapacitationCard.vue";
import EditAboutUs from "@/components/edition/EditAboutUs.vue";
import EditCompany from "@/components/edition/EditCompany.vue";

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
    path: '/news/create',
    component: NewsCreate
  },
  {
    path: '/open-new/:id',
    component: OpenedNew
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
  },
  {
    path: '/researchers',
    component: Researchers
  },
  {
    path: '/login',
    component: LoginPage
  },
  {
    path: '/edit',
    component: MainEdition,
    children: [
      {
        path: "/edit/presenter-card",
        name: 'EditPresenterCard',
        component: EditPresenterCard
      },
      {
        path: "/edit/event-card",
        name: 'EditEventCard',
        component: EditEventCard
      },
      {
        path: "/edit/main-new",
        name: 'EditMainNewCard',
        component: EditMainNewCard
      },
      {
        path: "/edit/news-card",
        name: 'EditNewCard',
        component: EditNewCard
      },
      {
        path: "/edit/researcher",
        name: 'EditResearcherCard',
        component: EditResearcherCard
      },
      {
        path: "/edit/talent-card",
        name: 'EditTalentCard',
        component: EditTalentCard
      },
      {
        path: "/edit/advantages-card",
        name: 'EditAdvantagesCard',
        component: EditAdvantagesCard
      },
      {
        path: "/edit/project-modal",
        name: 'EditProjectModal',
        component: EditProjectModal
      },
      {
        path: "/edit/capacitation-card",
        name: 'EditCapacitationCard',
        component: EditCapacitationCard
      },
      {
        path: "/edit/about-us",
        name: 'EditAboutUs',
        component: EditAboutUs
      },
      {
        path: "/edit/company",
        name: 'EditCompany',
        component: EditCompany
      },
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
