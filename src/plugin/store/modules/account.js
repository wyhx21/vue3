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
    system: state => {
      const _sysId = state.sysId
      const _roleInfo = state.roleInfo
      if(!_sysId || !_roleInfo) { return {}}
      const _systems = _roleInfo.filter(item => item['code'] == _sysId)
      if(!_systems || _systems.length < 1) {return {}}
      return _systems[0]
    },
    roleName: (state, getters) => {
      const _system = getters.system
      const _roleId = getters.roleId
      if(!_roleId || !_system || !_system['children'] || _system['children'].length < 1) { return '' }
      const _roles = _system['children'].filter(item => item['code'] == _roleId)
      if(!_roles || _roles.length < 1) {return '' }
      return _roles[0]['value']
    },
    sysRoleList: state => {
      const res = []
      for(let _system of state.roleInfo) {
        let sysId = _system['code']
        let sysName = _system['value']
        for(let _role of _system['children']) {
          let roleId = _role['code']
          let roleName = _role['value']
          res.push({sysId,sysName,roleId,roleName})
        }
      }
      return res
    }
  },
  mutations: {
    // 登录信息
    loginInfo: (state, {roleId = null,roleType = null,sysId = null,userName = null,token = null}) => {
      state.userInfo = {
        roleId,
        roleType,
        sysId,
        userName,
        token
      }
    },
    // 角色信息
    roleInfo: (state, roleInfo) => {
      state.roleInfo = roleInfo
    },
    roleChange: (state, {sysId, roleId}) => {
      state.userInfo.sysId = sysId
      state.userInfo.roleId = roleId
      console.log(state.userInfo)
    }
  },
  actions: {
    // 清空登录信息
    clearLoginInfo({commit}) {
      commit('loginInfo',{})
      commit('roleInfo',[])
    },
    // 登录
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
    // 角色信息
    systemRole({commit}) {
      return new Promise((resolve, reject) => {
        userRole().then(res => {
          commit('roleInfo', res)
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    },
    roleChange ({commit}, {sysId, roleId}) {
      commit('roleChange',{sysId, roleId})
    }
  }
}