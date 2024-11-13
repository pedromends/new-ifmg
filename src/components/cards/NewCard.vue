<template>
	<v-card @click.prevent="goTo(1)" v-if="newBody != null" max-width="400">
		<v-img v-if="img1 != null" height="200px" :src="img1" cover></v-img>
		<div class="p-4">
			<h1 class="text-xl">{{ title }}</h1>
		</div>
		<v-card-subtitle>
			{{ tip }}
		</v-card-subtitle>
		<v-card-actions class="relative">
			<v-btn color="#2F9E40" text="Ler Mais"></v-btn>
			<v-spacer></v-spacer>
			<button @click.stop="goTo(2)" class="bottom-1 right-1 z-50 absolute p-4" v-if="isAdmin">
				<img :src="require('@/assets/icons/pencil-edit-maingreen.svg')" alt="#" class="h-8" />
			</button>
		</v-card-actions>
	</v-card>
</template>

<script>
	import router from '@/router/index.js'
	import { showOne } from '@/services/NewService.js';

	export default {
		name: 'NewCard',
		data() {
			return {
				isAdmin: this.$store.getters.isAdmin,
				show: false,
				newBody: {
					title: null,
					paragraph1: '',
					img1: {
						code: ''
					}
				}
			}
		},
		props: {
			tip: String,
			title: String,
			img1: String,
			date: String,
			code: String,
			newId: Number
		},
		beforeCreate() {
			showOne({ id: this.newId }).then((response) => {
				let res = response.data
				this.newBody.title = res.title
				this.newBody.code = res.code
			})
		},
		methods: {
			editNewCard() {
				// levar para editar notícia
				router.push('/editar/noticia/' + this.newId).then(() => {
					var element = document.getElementById("navbar");
					element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
				});
			},
			openNew() {
				router.push('/noticia/' + this.newId).then(() => {
					var element = document.getElementById("navbar");
					element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
				});
			},
			goTo(op) {
				console.log(op)
				op == 1 ? this.openNew() : this.editNewCard()
			}
		}
	}
</script>
<style lang="">

</style>