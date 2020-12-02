import { Login } from '@axios/system/account.js'
export default {
  namespaced: true,
  state: {
    roleId: null,
    roleType: null,
    sysId: null,
    userName: null,
    token: null
  },
  getters: {
    roleId: state => state.roleId,
    roleType: state => state.roleType,
    sysId: state => state.sysId,
    userName: state => state.userName,
    token: state => state.token,
  },
  mutations: {
    setRoleId: (state, roleId = null) => state.roleId = roleId,
    setRoleType: (state, roleType = null) => state.roleType = roleType,
    setSysId: (state, sysId = null) => state.sysId = sysId,
    setUserName: (state, userName = null) => state.userName = userName,
    setToken: (state, token = null) => state.token = token,
  },
  actions: {
    login({commit}, {userCode = '', passWord = ''}){
      console.log(userCode, passWord)
      return new Promise((resolve, reject) => {
        Login({userCode, passWord})
        .then(res => {
          commit('setRoleId',res.roleId)
          commit('setRoleType',res.roleType)
          commit('setSysId',res.sysId)
          commit('setUserName',res.userName)
          commit('setToken',res.token)
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}