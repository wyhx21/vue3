import { login } from '@axios/system/account.js'
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
    loginInfo: (state, {roleId = null,roleType = null,sysId = null,userName = null,token = null}) => {
      state.roleId = roleId
      state.roleType = roleType
      state.sysId = sysId
      state.userName = userName
      state.token = token
    }
  },
  actions: {
    loginSubmit({commit}, {userCode = '', passWord = ''}){
      return new Promise((resolve, reject) => {
        debugger
        login({userCode, passWord})
        .then(res => {
          commit('loginInfo',res)
          resolve()
        }).catch(err => {
          commit('loginInfo',{})
          reject(err)
        })
      })
    }
  }
}