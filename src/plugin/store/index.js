import { createStore } from 'vuex';
import VuexPersistence from 'vuex-persist'
import account from '@store/modules/account.js';
import userRoleAuth from '@store/modules/userRoleAuth.js';

const store = createStore({
  modules: {
    account,
    userRoleAuth
  },
  plugins: [
    new VuexPersistence({
      storage: window.localStorage,
      modules: ['account']
    }).plugin
  ]
});

export default store;