import '@style/main.scss';
import { createApp } from 'vue';
import App from '@public/App.vue';
import Store from '@store/index.js';
import Router from '@router/index.js'
import {Icon,Form,Button,Field,NoticeBar,NavBar,Tabbar,TabbarItem,
  Popup,ActionSheet,Divider,Grid,GridItem} from 'vant';

const app = createApp(App)

app.use(Icon)
app.use(Form)
app.use(Button)
app.use(Field)
app.use(NoticeBar)
app.use(NavBar)
app.use(Tabbar)
app.use(TabbarItem)
app.use(Popup)
app.use(ActionSheet)
app.use(Divider)
app.use(Grid)
app.use(GridItem)

app.use(Router)
app.use(Store)
app.mount('#app');