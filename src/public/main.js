import { createApp } from 'vue';
import App from '@public/App.vue';
import Store from '@store/index.js';
import Router from '@router/index.js'
import '@style/main.scss';

createApp(App)
  .use(Router)
  .use(Store)
  .mount('#app');