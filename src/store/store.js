import { createStore } from 'vuex';
import loginInfo from './modules/loginInfo.js';

const store = createStore({
  modules: {
    login: loginInfo
  }
});

export default store;