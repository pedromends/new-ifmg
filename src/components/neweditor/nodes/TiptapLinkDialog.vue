<template>
  <Dialog title="Tautan" :show="show" @close="closeDialog">
    <form @submit.prevent="update">
      <div class="flex flex-col space-y-5">
        <InputContainer>
          <Label for="input-link-url">Tautan</Label>
          <Input type="url" id="input-link-url" v-model="inputLinkRef" />
        </InputContainer>

        <div class="flex flex-row justify-end space-x-3">
          <button type="button" class="rounded-md px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-100"
            @click="closeDialog">
            Batal
          </button>
          <button type="submit"
            class="rounded-md bg-blue-700 px-4 py-3 text-sm font-medium text-white hover:bg-opacity-80">
            Simpan
          </button>
        </div>
      </div>
    </form>
  </Dialog>
</template>

<script>
  import { ref } from "vue"
  import Dialog from "./Dialog.vue"
  import Label from "./Label.vue"
  import Input from "./Input.vue"
  import InputContainer from "./InputContainer.vue"

  export default {
    name: 'EditCompany',
    components: {
      InputContainer, Input, Label, Dialog
    },
    data() {
      return {
        show: true,
        currentUrl: '',
        inputLinkRef: ''
      }
    },
    setup(props, { emit }) {
      const inputLinkRef = ref(props.currentUrl);

      const closeDialog = () => {
        emit("close");
      };

      const update = () => {
        emit("update", inputLinkRef.value);
        emit("close");
      };

      return {
        closeDialog,
        update
      };
    }
  };
</script>