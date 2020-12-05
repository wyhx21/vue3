import { login, userRole } from '@axios/system/account.js'
// import { filterParam } from '@utils/array.js'
export default {
  namespaced: true,
  state: {
    userInfo: {},
    roleInfo: []
  },
  getters: {
    roleId: state => state.userInfo.roleId,
    // roleType: state => state.userInfo.roleType,
    sysId: state => state.userInfo.sysId,
    userName: state => state.userInfo.userName,
    token: state => state.userInfo.token,
    roleName: (state, getters) => {
      const _sysId = getters.sysId
      const _roleId = getters.roleId
      const _roleInfo = state.roleInfo
      if(!_sysId || !_roleId) { return '' }
      const _systems = _roleInfo.filter(item => item['code'] == _sysId)
      if(!_systems || _systems.length < 1) {return '' }
      const _roles = _systems[0]['children'].filter(item => item['code'] == _roleId)
      if(!_roles || _roles.length < 1) {return '' }
      return _roles[0]['value']
    }
  },
  mutations: {
    loginInfo: (state, {roleId = null,roleType = null,sysId = null,userName = null,token = null}) => {
      state.userInfo = {
        roleId,
        roleType,
        sysId,
        userName,
        token
      }
    },
    roleInfo: (state, roleInfo) => {
      state.roleInfo = roleInfo
    }
  },
  actions: {
    clearLoginInfo({commit}) {
      commit('loginInfo',{})
      commit('roleInfo',[])
    },
    loginSubmit({commit}, {userCode = '', passWord = ''}){
      return new Promise((resolve, reject) => {
        login({userCode, passWord})
        .then(res => {
          commit('loginInfo',res)
          resolve()
        }).catch(err => {
          commit('loginInfo',{})
          reject(err)
        })
      })
    },
    systemRole({commit}) {
      return new Promise((resolve, reject) => {
        userRole().then(res => {
          commit('roleInfo', res)
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}