<template>
  <Dialog title="Criação de tabelas" :show="show" @close="closeDialog">
    <form @submit.prevent="onSubmit">
      <div class="flex flex-col space-y-5">
        <div class="flex flex-row space-x-5">
          <InputContainer class="w-full flex-1">
            <Label for="input-table-columns">Colunas</Label>
            <Input v-model="inputColumnsRef" id="input-table-columns" required type="number" min="1" class="w-full" />
          </InputContainer>
          <InputContainer class="w-full flex-1">
            <Label for="input-table-rows">Linhas</Label>
            <Input v-model="inputRowsRef" id="input-table-rows" required type="number" min="1" class="w-full" />
          </InputContainer>
        </div>
        <SwitchGroup>
          <div class="flex flex-row items-center space-x-3">
            <Switch v-model="inputWithHeaderRef" :class="inputWithHeaderRef ? 'bg-maingreen' : 'bg-gray-200'"
              class="relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              <span :class="inputWithHeaderRef ? 'translate-x-6' : 'translate-x-1'"
                class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform" />
            </Switch>
            <SwitchLabel class="select-none text-sm text-gray-600">Cabeçalho</SwitchLabel>
          </div>
        </SwitchGroup>
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
  import Label from "./Label.vue"
  import Input from "./Input.vue"
  import { Switch, SwitchLabel, SwitchGroup } from "@headlessui/vue"

  export default {
    name: 'EditCompany',
    components: {
      Switch, SwitchLabel, SwitchGroup, InputContainer, Dialog, Label, Input
    },
    data() {
      return {
        inputColumnsRef: 3,
        inputRowsRef: 3,
        inputWithHeaderRef: true,
        show: true
      }
    },
    mounted() {
    },
    methods: {
      closeDialog() {
        this.$emit("close")
      },

      onSubmit() {
        this.$emit("insert", {
          rows: this.inputRowsRef,
          columns: this.inputColumnsRef,
          withHeader: this.inputWithHeaderRef,
        })
        this.closeDialog()
      }
    }
  }
</script>