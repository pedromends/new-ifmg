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
import Profile from "@/views/Profile.vue";
import Settings from "@/views/Settings.vue";
import FAQ from "@/views/FAQ.vue";
import CreateFAQ from "@/views/CreateFAQ.vue";

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
import ResearchersProfile from "@/views/ResearchersProfile.vue";
import Notifications from "@/views/Notifications.vue";
import Edition from "@/components/edition/Edition.vue";
import EditNew from "@/components/edition/EditNew.vue";

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
		path: '/mobilidade-sistemas-inteligentes',
		component: MobSys
	},
	{
		path: '/como-funciona',
		component: HowItWorks
	},
	{
		path: '/embrapii',
		component: Embrapii
	},
	{
		path: '/blog',
		component: NewsPage
	},
	{
		path: '/noticia/criar',
		component: NewsCreate
	},
	{
		path: '/noticia/:id',
		component: OpenedNew
	},
	{
		path: '/editais',
		component: Edicts
	},
	{
		path: '/capacitacao',
		component: Capacitation
	},
	{
		path: '/documentos',
		component: Documents
	},
	{
		path: '/contatos',
		component: Contact
	},
	{
		path: '/pesquisadores',
		component: Researchers
	},
	{
		path: '/login',
		component: LoginPage
	},
	{
		path: '/perfil',
		component: Profile
	},
	{
		path: '/configuracoes',
		component: Settings
	},
	{
		path: '/pesquisadores/:id',
		component: ResearchersProfile
	},
	{
		path: '/notifications',
		component: Notifications
	},
	{
		path: '/FAQ',
		component: FAQ
	},
	{
		path: '/create-faq',
		component: CreateFAQ
	},
	{
		path: '/editar',
		component: MainEdition,
		children: [
			{
				path: "",
				name: 'Index',
				component: Edition
			},
			{
				path: "/editar/card-apresentacao",
				name: 'EditPresenterCard',
				component: EditPresenterCard
			},
			{
				path: "/editar/card-eventos",
				name: 'EditEventCard',
				component: EditEventCard
			},
			{
				path: "/editar/noticia",
				name: 'EditMainNewCard',
				component: EditMainNewCard
			},
			{
				path: "/editar/news-card",
				name: 'EditNewCard',
				component: EditNewCard
			},
			{
				path: "/editar/pesquisador/:id",
				name: 'EditResearcherCard',
				component: EditResearcherCard
			},
			{
				path: "/editar/card-talentos",
				name: 'EditTalentCard',
				component: EditTalentCard
			},
			{
				path: "/editar/card-vantagens",
				name: 'EditAdvantagesCard',
				component: EditAdvantagesCard
			},
			{
				path: "/editar/modal-projetos",
				name: 'EditProjectModal',
				component: EditProjectModal
			},
			{
				path: "/editar/card-capacitacao",
				name: 'EditCapacitationCard',
				component: EditCapacitationCard
			},
			{
				path: "/editar/sobre-nos",
				name: 'EditAboutUs',
				component: EditAboutUs
			},
			{
				path: "/editar/empresa",
				name: 'EditCompany',
				component: EditCompany
			},
			{
				path: "/editar/noticia/:id",
				name: 'EditNew',
				component: EditNew
			},
		]
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
