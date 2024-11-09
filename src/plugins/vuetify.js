import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import '@/settings.scss';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
  components,
  directives,
  defaults: {
    VBtn: {
      defaultProps: {
        color: null, // Remove cores temáticas
        variant: 'plain', // Define o botão como "plain" para que ele não utilize cores de fundo temáticas
      },
    },
  },
});

export default vuetify;
