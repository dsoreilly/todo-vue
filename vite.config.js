/** @format */

import legacy from '@vitejs/plugin-legacy';
import vue from '@vitejs/plugin-vue';

export default {
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    vue(),
  ],
  server: {
    port: 8080,
  },
};
