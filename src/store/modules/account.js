export default {
  namespaced: true,
  state: {
    name: null,
    sysId: null,
    count: 0
  },
  getters: {
    getName: state => state.name,
    getSysId: state => state.sysId,
    getCount: state => state.count
  },
  mutations: {
    setName: (state, name = null) => state.name = name,
    setSysId: (state, sysId = null) => state.sysId = sysId,
    increment: (state, inc = 1) => state.count += inc
  },
  actions: {
    login({commit, getters}, {name, sysId, inc}){
      commit('setName',name)
      commit('setSysId',sysId)
      commit('increment', inc)
    }
  }
}