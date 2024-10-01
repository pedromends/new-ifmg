<template>
  <Dialog title="Vídeo do Youtube" :show="show" @close="closeDialog">
    <form @submit.prevent="onSubmit">
      <div class="flex flex-col space-y-5">
        <InputContainer>
          <Label for="input-add-youtube-url">Vídeo do Youtube</Label>
          <Input type="url" id="input-add-youtube-url" v-model="inputYoutubeUrlRef" required />
        </InputContainer>
        <div class="flex flex-row justify-end space-x-3">
          <button type="button" class="rounded-md px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-100"
            @click="closeDialog">
            Cancelar
          </button>
          <button type="submit"
            class="rounded-md bg-maingreen px-4 py-3 text-sm font-medium text-white hover:bg-opacity-80">
            Salvar
          </button>
        </div>
      </div>
    </form>
  </Dialog>
</template>

<script>
  import Dialog from "./Dialog.vue"
  import InputContainer from "./InputContainer.vue"
  import Input from "./Input.vue"
  import Label from "./Label.vue"

  export default {
    name: 'EditCompany',
    components: {
      InputContainer, Input, Label, Dialog
    },
    data() {
      return {
        show: null,
        inputYoutubeUrlRef: ''
      }
    },
    mounted() {
    },
    methods: {
    }
  }
</script>