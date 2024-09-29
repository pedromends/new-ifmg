import { Image as TiptapImage } from '@tiptap/extension-image';

const CustomImage = TiptapImage.extend({
    addAttributes() {
      return {
        ...this.parent?.(),
        width: {
          default: '300', // Valor padrão
          parseHTML: element => element.getAttribute('width') || '300',
          renderHTML: attributes => {
            return {
              width: attributes.width,
            };
          },
        },
        height: {
          default: 'auto', // Valor padrão
          parseHTML: element => element.getAttribute('height') || 'auto',
          renderHTML: attributes => {
            return {
              height: attributes.height,
            };
          },
        },
      };
    }
  });
  
  export default CustomImage;