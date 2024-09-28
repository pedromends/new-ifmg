<template>
	<main>
		<section v-if="haveAPI">
			<Alerts />
			<Navbar />
			<Sidebar />
			<router-view />
			<Footer />
		</section>
		<section v-else-if="!haveAPI" id="backup-screen" class="hidden">
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

	window.onload = function () {
		if (navigator.userAgent.indexOf("Chrome") != -1) {
			document.body.style.zoom = "80%";
		}
		else if (navigator.userAgent.indexOf("Edge") != -1) {
			document.body.style.zoom = "125%";
		}
	};

	try {
		handshake().then((response) => {
			onMounted(() => {
				initFlowbite(); initAccordions();
				initCarousels(); initCollapses();
				initDials(); initDismisses();
				initDrawers(); initDropdowns();
				initModals(); initPopovers();
				initTabs(); initTooltips();
			})
			showSuccessScreen()
		}).catch(e => {
			showErrorScreen()
		})
	} catch (e) {
		console.log(e)
	}

	function showSuccessScreen(){
		haveAPI.value = true
		document.getElementById("backup-screen").style.display = 'none'
	}

	function showErrorScreen(){
		haveAPI.value = false
		document.getElementById("backup-screen").style.display = 'inline'
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