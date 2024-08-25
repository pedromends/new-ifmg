<template>
    <div>
      <EditorContent :editor="editor" />
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  import { Editor, EditorContent } from '@tiptap/vue-3'
  import StarterKit from '@tiptap/starter-kit'
  import Image from '@tiptap/extension-image'
  
  export default {
    components: {
      EditorContent,
    },
    setup() {
      const editor = ref(
        new Editor({
          extensions: [
            StarterKit,
            Image.configure({
              inline: true,
              HTMLAttributes: {
                class: 'my-custom-class', // Customize as needed
              },
            }),
          ],
          content: '<p>Insira sua imagem abaixo:</p><img src="https://via.placeholder.com/150" alt="Placeholder Image"/>',
        })
      )
  
      return { editor }
    },
  }
  </script>
  
  <style>
  /* Adicione estilos personalizados se necessário */
  </style>
  