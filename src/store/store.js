import { createStore } from 'vuex';
import VuexPersistence from 'vuex-persist'
import account from '@store/modules/account.js';

const store = createStore({
  modules: {
    account: account
  },
  plugins: [
    new VuexPersistence({
      storage: window.localStorage
    }).plugin
  ]
});

export default store;