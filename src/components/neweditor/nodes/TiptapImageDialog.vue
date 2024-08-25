<template>
  <Dialog title="Pilih Gambar" :show="show" @close="closeDialog">
    <div v-bind="getRootProps()" class="rounded-lg border border-gray-300 p-4">
      <input v-bind="getInputProps()" />
      <div v-if="imageListRef?.length > 0" class="grid grid-cols-3 gap-3 sm:grid-cols-4">
        <button @click="insertImage(image.Url)" type="button" v-for="image in imageListRef" :key="image.Name"
          class="rounded-md border border-gray-300 p-1">
          <img alt="" :src="image.Url" class="aspect-square object-scale-down object-center" />
        </button>
      </div>
      <div :class="[
          isDragActive ? 'bg-gray-100' : '',
          imageListRef?.length > 0 ? 'mt-4 ' : '',
        ]" class="rounded-lg border border-dashed border-gray-300 px-8 py-12">
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

  const imageListRef = ref([])

  export default {
    name: 'EditCompany',
    components: {
      Dialog
    },
    data() {
      return {
        show: true,
      }
    },
    setup(props, { emit }) {
      const onDropImage = (acceptedFiles) => {
        console.log(acceptedFiles);
        // Aqui você pode processar os arquivos recebidos
      };

      const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: "image/png,image/jpeg",
        multiple: false,
        onDrop: onDropImage,
        noClick: true,
      });

      const closeDialog = () => {
        emit("close");
      };

      const update = () => {
        emit("update", this.inputLinkRef);
        emit("close");
      };

      return {
        getRootProps,
        getInputProps,
        isDragActive,
        closeDialog,
        update
      };
    },
    mounted() {
      this.loadData()
    },
    methods: {
      onDropImage(acceptedFiles) {
        if (acceptedFiles.length === 0) {
          return
        }

        const formData = new FormData()
        formData.append("file", acceptedFiles[0])

        axios
          .post("http://localhost:8080/files", formData, {
            headers: {
              "Content-type": "multipart/form-data",
            },
          })
          .then(() => {
            this.loadData()
          })
      },
      loadData() {
        axios.get("http://localhost:8080/files").then((result) => {
          imageListRef.value = result.data
        })
      },
      insertImage() {
        //emit("insert", url)
        this.closeDialog()
      }
    },
  }
</script>