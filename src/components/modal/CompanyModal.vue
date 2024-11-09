<template lang="">
	<section>
		<v-btn color="none" class="p-0" style="width: 90%; padding:1rem; height: auto;" @click="isActive.value = true">
			<img :src="img" alt="#" class="w-full h-full object-cover rounded-lg" />
		</v-btn>
		<v-dialog width="800" v-model="isActive.value" v-if="isActive">
			<v-card class="divide-y-2 divide-maingreen gap-4">
				<div class="flex items-center justify-center relative px-2 pt-4 gap-4">
					<div class="flex justify-between items-center absolute w-full px-4">
						<img :src="img" alt="" class="max-h-14" />
						<button @click="isActive.value = false">
							<img :src="require('@/assets/icons/X.svg')" class="w-7 h-7" alt="">
						</button>
					</div>
					<h1 class="text-2xl">{{ company }}</h1>
				</div>
				<div class="flex flex-col p-4 gap-4">
					<v-expansion-panels>
						<v-expansion-panel>
							<v-expansion-panel-title
								class="flex items-center justify-between w-full p-5 font-medium rtl:text-right border border-maingreen rounded-t-xl hover:bg-blue-100 gap-3 transition duration-200">
								{{ projName }}
							</v-expansion-panel-title>
							<v-expansion-panel-text>
								{{ resume }}
							</v-expansion-panel-text>
						</v-expansion-panel>
					</v-expansion-panels>
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
				<v-card-actions>
					<v-spacer></v-spacer>
					<div class="flex justify-between items-center p-4 md:p-5 border-t border-gray-200 rounded-b">
						<div class="flex gap-5">
							<button
								class="text-white bg-maingreen border-2 border-maingreen hover:bg-white hover:text-maingray transition duration-300 rounded-lg text-sm px-5 py-2.5" type="button">
								Saiba Mais!
							</button>
						</div>
						<button @click="editModal()" class="" v-if="isAdmin">
							<img :src="require('@/assets/icons/pencil-edit-maingreen.svg')" alt="#" class="h-10" />
						</button>
					</div>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</section>
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
				router.push('/edit/project-modal').then(() => {
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