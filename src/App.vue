<template>
	<main >
		<section v-if="haveAPI">
			<Alerts />
			<Navbar />
			<Sidebar />
			<router-view />
			<Footer />
		</section>
		<section v-else-if="!haveAPI">
			<h1>Não há conexão com a API (criar tela bonitinha de erro depois)</h1>
		</section>
	</main>

</template>

<script setup>
	import Navbar from "@/components/layout/Navbar.vue";
	import Sidebar from "@/components/layout/Sidebar.vue";
	import Footer from "@/components/layout/Footer.vue";
	import Alerts from "@/components/layout/Alerts.vue";
	import { handshake } from '@/services/api.js';
	import { ref } from 'vue';	
	import { onMounted } from 'vue'
	import {
		initFlowbite, initAccordions,
		initCarousels, initCollapses,
		initDials, initDismisses,
		initDrawers, initDropdowns,
		initModals, initPopovers,
		initTabs, initTooltips
	} from 'flowbite';
	import './index.css'

	const haveAPI = ref(false);
	const successScreen = () => {
		haveAPI.value = true
	};
	const errorScreen = () => {
		haveAPI.value = false
	};

	try {
		handshake().then((response) => {
			window.onload = function () {
				if (navigator.userAgent.indexOf("Chrome") != -1) {
					document.body.style.zoom = "80%";
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
			successScreen()
		}).catch(e => {
			errorScreen()
		})
	} catch (e) {
		console.log(e)
	}


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