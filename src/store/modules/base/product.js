import { queryPage } from '@axios/base/product.js';

export default {
  namespaced: true,
  state: {
    pageInfo: {
      page: 1,
      size: 10,
    },
    pageResult: {
      total: null,
      toalPage: null,
    },
    params: {
      deleted: null,
      prodCode: '',
      prodName: '',
      prodType: null
    },
    productList: []
  },
  getters: {
    productList: _state => _state.productList,
    pageInfo: _state => _state.pageInfo,
    params: _state => _state.params,
  },
  mutations: {
    productList: (_state, list = []) => _state.productList = list,
    pageResult: (_state, {toalPage,total} = {}) => _state.pageInfo = {toalPage,total},
    params: (_state, params = {}) => _state.params = params
  },
  actions: {
    queryPage: async ({commit, getters}) => {
      return new Promise((resolve, reject) => {
        queryPage(getters.params, getters.pageInfo)
        .then(res => {
          commit('pageResult', res)
          commit('productList', res['data'])
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}