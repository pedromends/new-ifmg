<template>
	<Dialog title="Inserir Link" :show="show" @close="closeDialog">
		<form @submit.prevent="update(newLink)">
			<div class="flex gap-4 space-y-5">
				<InputContainer>
					<Label for="input-link-url">Inserir Link</Label>
					<input @change="console.log(inputLinkRef)" type="url" id="input-link-url" v-model="inputLinkRef" />
				</InputContainer>

				<div class="flex flex-row justify-end space-x-3">
					<button type="button" class="rounded-md px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-100"
						@click="closeDialog">
						Cancelar
					</button>
					<button type="submit"
						class="rounded-md bg-blue-700 px-4 py-3 text-sm font-medium text-white hover:bg-opacity-80">
						Salvar
					</button>
				</div>
			</div>
		</form>
	</Dialog>
</template>

<script>
	import { ref, watch } from "vue"
	import Dialog from "./Dialog.vue"
	import Label from "./Label.vue"
	import InputContainer from "./InputContainer.vue"

	export default {
		name: 'EditCompany',
		components: {
			InputContainer, Label, Dialog
		},
		data() {
			return {
				show: true,
				inputLinkRef: 'teste'
			}
		},
		watch: {
			inputLinkRef(newVal) {
				this.newLink = newVal;
			}
		},
		methods: {
			closeDialog() {
				this.$emit("close");
			},
			update() {
				this.$emit("update", this.newLink);
				this.$emit("close");
			}
		}
	};
</script>