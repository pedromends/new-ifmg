import { Image as TiptapImage } from '@tiptap/extension-image';

const CustomImage = TiptapImage.extend({
    addAttributes() {
      return {
        ...this.parent?.(),
        width: {
          default: '500', // Valor padrão
          parseHTML: element => element.getAttribute('width') || '500',
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
        center: {
          default: true,
          parseHTML: element => element.style.display === 'block' && element.style.margin === '0 auto',
          renderHTML: attributes => {
            return {
              style: attributes.center ? 'display: block; margin: 0 auto;' : '',
            };
          },
        },
      };
    }
  });
  
  export default CustomImage;