<template>
	<div v-if="isVisible" :class="bg_color"
		class="fixed top-36 left-1/2 transform -translate-x-1/2 max-w-sm w-full text-white p-4 rounded-lg shadow-lg z-50">

		<div class="flex justify-between items-center mb-2">
			<span class="font-semibold">{{ title }}</span>
			<button @click="closeAlert" class="text-xl font-bold text-white">&times;</button>
		</div>
		<p>{{ message }}</p>
		<div class="mt-4 bg-green-700 h-1 rounded-full overflow-hidden">
			<div class="bg-white h-full transition-all duration-100" :style="{ width: progressWidth + '%' }"></div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'UniversalAlert',
		props: {
			bg_color: {
				type: String,
				required: true
			},
			title: {
				type: String,
				required: true,
			},
			message: {
				type: String,
				required: true,
			},
			duration: {
				type: Number,
				default: 5000, // Duração do alerta em milissegundos
			},
		},
		data() {
			return {
				isVisible: true,
				progressWidth: 100,
			};
		},
		methods: {
			closeAlert() {
				this.isVisible = false;
			},
			startProgress() {
				const intervalTime = 50; // Intervalo em milissegundos
				const decrement = (100 / this.duration) * intervalTime;

				const interval = setInterval(() => {
					if (this.progressWidth > 0) {
						this.progressWidth -= decrement;
					} else {
						clearInterval(interval);
						this.isVisible = false;
					}
				}, intervalTime);
			},
		},
		mounted() {
			this.startProgress();
			setTimeout(() => {
				this.isVisible = false;
			}, this.duration);
		},
	};
</script>

<style scoped>
	/* Estilos adicionais se necessário */
</style>