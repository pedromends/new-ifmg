import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import Institutional from "@/pages/Institutional.vue";
import MobSys from "@/pages/MobSys.vue";
import HowItWorks from "@/pages/HowItWorks.vue";
import Embrapii from "@/pages/Embrapii.vue";
import NewsPage from "@/pages/NewsPage.vue";
import Edicts from "@/pages/Edicts.vue";
import NewsCreate from "@/pages/NewsCreate.vue";
import Capacitation from "@/pages/Capacitation.vue";
import Documents from "@/pages/Documents.vue";
import Contact from "@/pages/ContactPage.vue";
import Researchers from "@/pages/Researchers.vue";
import MainEdition from "@/pages/MainEdition.vue";
import OpenedNew from "@/pages/OpenedNew.vue";
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
