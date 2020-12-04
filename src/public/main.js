import { createApp } from 'vue';
import App from '@public/App.vue';
import Store from '@store/index.js';
import Router from '@router/index.js'
import VXETable from '@vxe/index.js'
import '@style/main.scss';

const app = createApp(App)
app.use(VXETable)
app.use(Router)
app.use(Store)
app.mount('#app');