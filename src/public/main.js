import { createApp } from 'vue';
import App from '@public/App.vue';
import store from '@store/store.js';
import '@style/main.scss';

createApp(App).use(store).mount('#app');