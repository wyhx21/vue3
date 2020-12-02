import { createStore } from 'vuex';
import account from '@store/modules/account.js';

const store = createStore({
  modules: {
    account: account
  }
});

export default store;