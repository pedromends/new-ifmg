<template>
  <input
    v-model="proxyModel"
    class="rounded-md border border-gray-400 px-3 py-2 text-gray-800 focus:ring-blue-800"
  />
</template>

<script>
  export default {
    name: 'InputEditor',
    props: {
      modelValue: {
        type: [String, Number],
        required: true,
        default: ''
      }
    },
    computed: {
      proxyModel: {
        get() {
          return this.modelValue ?? "";
        },
        set(value) {
          this.$emit('update:modelValue', value);
        }
      }
    }
  };
  </script>