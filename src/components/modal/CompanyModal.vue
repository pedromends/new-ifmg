<template lang="">
	<div class="pl-1 pb-1 bg-gradient-to-r from-maingreen to-white shadow-lg hover:shadow-red-600 rounded-lg transition duration-200">
		<v-btn color="none" class="w-full h-auto" @click="isActive.value = true">
			<img :src="img" alt="#" class="w-auto h-full object-cover rounded-lg my-1" />
		</v-btn>
	</div>
	<v-dialog width="800" v-model="isActive.value" v-if="isActive">
		<v-card class="divide-y-2 divide-maingreen gap-4">
			<div class="flex items-center justify-center relative p-2 pt-8 gap-4">
				<div class="flex justify-between items-center absolute w-full px-4">
					<div class="flex gap-4 items-center">
						<img :src="img" alt="" class="max-h-10" />
					</div>

					<v-btn @click="isActive.value = false" icon="$close" size="large" variant="text"
						color="#2F9E40"></v-btn>
				</div>
				<h1 class="text-2xl text-maingreen font-semibold">{{ company }}</h1>
			</div>
			<div class="flex flex-col p-4 gap-4">
				<div class="p-4">
					<v-expansion-panels class="">
						<v-expansion-panel class="rounded-t-xl text-maingreen">
							<v-expansion-panel-title class="text-lg">
								{{ projName }}
							</v-expansion-panel-title>
							<v-expansion-panel-text class="text-black">
								{{ resume }}
							</v-expansion-panel-text>
						</v-expansion-panel>
					</v-expansion-panels>
				</div>
				<div class="flex flex-col px-2 text-sm gap-2">
					<div class="flex gap-2 items-center max-lg:text-sm">
						<p class="font-bold text-maingray">Coordenador: </p>
						<p>{{ coorName }}</p>
					</div>
					<!-- <div class="flex gap-2 items-center max-lg:text-sm">
							<p class="font-bold text-maingray">Pesquisador(es): </p>
							<p>Nome e Campus</p>
						</div>
						<div class="flex gap-2 items-center max-lg:text-sm">
							<p class="font-bold text-maingray">Aluno(s): </p>
							<p>Nome e Curso</p>
						</div> -->
					<div class="flex gap-2 items-center max-lg:text-sm">
						<p class="font-bold text-maingray">Situação: </p>
						<p>{{ situ }}</p>
					</div>
					<div class="flex gap-2 items-center max-lg:text-sm">
						<p class="font-bold text-maingray">Valor:</p>
						<p>R$ {{ value }}</p>
					</div>
				</div>
			</div>
			<div class="flex justify-start p-4 md:p-5 rounded-b">
				<button
					class="text-white bg-maingreen border-2 border-maingreen hover:bg-white hover:text-maingray transition duration-300 rounded-lg text-sm px-5 py-2.5"
					type="button">
					Saiba Mais!
				</button>
				<button @click="editModal()" class="" v-if="isAdmin">
					<img :src="require('@/assets/icons/pencil-edit-maingreen.svg')" alt="#" class="h-10" />
				</button>
			</div>
		</v-card>
	</v-dialog>
</template>

<script>
	import router from '@/router/index.js'

	export default {
		name: 'CompanyModal',
		components: {
		},
		data() {
			return {
				isAdmin: this.$store.getters.isAdmin,
				isActive: {
					value: false
				}
			}
		},
		props: {
			img: String, //imagem a ser utilizada
			company: String, // nome da empresa
			resume: String, // texto resumo do projeto
			extraClass: String, // CSS extra
			coorName: String, // NOme do Coordenador do projeto
			situ: String, // Situação do Projeto
			projName: String, // Nome do projeto
			value: String // Valor do projeto
		},
		methods: {
			editModal() {
				router.push('/editar/modal-projetos').then(() => {
					window.location.reload();
					this.isActive.value = false
				}).finally(() => {
					var element = document.getElementById("navbar");
					element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
				})
			}
		},
	}
</script>

<style scoped>
	.v-expansion-panel__shadow {
		box-shadow: 0px 3px 1px -2px #2F9E40, 0px 2px 2px 0px #2F9E40, 0px 1px 5px 0px #2F9E40 !important;
	}
</style>