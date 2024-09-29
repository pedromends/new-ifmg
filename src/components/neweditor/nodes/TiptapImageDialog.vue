<template>
	<Dialog title="Inserir imagem" :show="show" @close="closeDialog">
		<div v-bind="getRootProps()" class="rounded-lg border border-gray-300 p-4">
			<input v-bind="getInputProps()" />
			<div :class="[ isDragActive ? 'bg-gray-100' : '', imageListRef?.length > 0 ? 'mt-4 ' : '', ]"
				class="rounded-lg border border-dashed border-gray-300 px-8 py-12">
				<p v-if="isDragActive" class="text-center text-sm font-medium text-gray-700">
					Drop the files here ...
				</p>
				<p v-else class="text-center text-sm font-medium text-gray-700">
					Drag 'n' drop some image file here, or click to select file
				</p>
			</div>
		</div>
	</Dialog>
</template>

<script>
	import { ref } from "vue"
	import { useDropzone } from "vue3-dropzone"
	import Dialog from "./Dialog.vue"
	import axios from "axios"
	import { createImageNews } from '@/services/ImageService.js'

	const imageListRef = ref([])

	export default {
		name: 'EditCompany',
		components: {
			Dialog
		},
		props: {
			inputLinkRef: {
			type: String,
			required: true
			}
		},
		data() {
			return {
				getRootProps: null,
				getInputProps: null,
				isDragActive: false,
				show: true,
				newImage: {
					code: null
				}
			}
		},
		mounted() {
			const { getRootProps, getInputProps, isDragActive } = useDropzone({
				accept: "image/png,image/jpeg",
				multiple: false,
				onDrop: this.onDropImage, // Chamando o método que processa o drop
				noClick: true
			});

			this.getRootProps = getRootProps;
			this.getInputProps = getInputProps;
			this.isDragActive = isDragActive;
		},
		methods: {
			onImageChange(file) {
                const image = file[0];
                const reader = new FileReader();
                reader.readAsDataURL(image);
                reader.onload = e => {
                    this.newImage.code = e.target.result;
                };
            },
			onDropImage(acceptedFiles) {
				if (acceptedFiles.length === 0)
					return;

				this.onImageChange(acceptedFiles)

				createImageNews(this.newImage).then((response) => {
					console.log(response.data)
					this.closeDialog()
				}).catch(e => {
					console.log(e)
				})
			},
			loadData() {
				// axios.get("http://localhost:8080/files").then((result) => {
				//   imageListRef.value = result.data
				// })
			},
			insertImage() {
				//emit("insert", url)
				this.closeDialog()
			},
			closeDialog() {
				this.$emit("close");
			},
			update() {
				this.$emit("update", this.inputLinkRef);
				this.$emit("close");
			}
		},
	}
</script>