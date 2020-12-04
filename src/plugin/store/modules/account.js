import { login, userRole } from '@axios/system/account.js'
import { filterParam } from '@utils/array.js'
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
      if(null == _sysId || null == _roleId) {
        return ''
      }
      const _system = filterParam(state.roleInfo, _sysId, 'code')[0]
      return filterParam(_system['children'],_roleId,'code')[0]['value']
      // return state.roleInfo.filter(item => _sysId == item.code)[0]['children'].filter(role => _roleId == role.code)[0]['value']
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