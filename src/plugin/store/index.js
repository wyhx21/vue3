import { createStore } from 'vuex';
import VuexPersistence from 'vuex-persist'
import account from '@store/modules/account.js';

const store = createStore({
  modules: {
    account
  },
  plugins: [
    new VuexPersistence({
      storage: window.localStorage,
      modules: ['account']
    }).plugin
  ]
});

export default store;