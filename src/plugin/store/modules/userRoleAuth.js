import { userRole,userMenu,userAuth,roleChange } from '@axios/system/account.js'

export default {
  namespaced: true,
  state: {
    roleInfo: [],
    roleMenu: {},
    roleAuth: {}
  },
  getters: {
    system: (_state, _getters, _rootState, _rootGetters) => {
      const _sysId = _rootGetters['account/sysId']
      const _roleInfo = _state.roleInfo
      if(!_sysId || !_roleInfo) { return {}}
      const _systems = _roleInfo.filter(item => item['code'] == _sysId)
      if(!_systems || _systems.length < 1) {return {}}
      return _systems[0]
    },
    roleName: (_state, _getters, _rootState, _rootGetters) => {
      const _system = _getters.system
      const _roleId = _rootGetters['account/roleId']
      if(!_roleId || !_system || !_system['children'] || _system['children'].length < 1) { return '' }
      const _roles = _system['children'].filter(item => item['code'] == _roleId)
      if(!_roles || _roles.length < 1) {return '' }
      return _roles[0]['value']
    },
    sysRoleList: (_state, _getters, _rootState, _rootGetters) => {
      const res = []
      for(let _system of _state.roleInfo) {
        let sysName = _system['value']
        for(let _role of _system['children']) {
          let roleId = _role['code']
          let roleName = _role['value']
          let name = `${sysName}-${roleName}`
          let color = _rootGetters['account/roleId'] == roleId ? '#F00' : ''
          res.push({roleId,name,color})
        }
      }
      return res
    },
    roleSize: (_state,_getters) => _getters.sysRoleList.length,
    roleMenu: (_state) => {
      return _state.roleMenu['children']
    }
  },
  mutations: {
    roleInfo: (_state, roleInfo) => _state.roleInfo = roleInfo,
    roleMenu: (_state, roleMenu) => _state.roleMenu = roleMenu,
    roleAuth: (_state, roleAuth) => _state.roleAuth = roleAuth
  },
  actions: {
    // 初始化数据
    accountInit: async ({ dispatch }) => {
      dispatch('systemRole')
      dispatch('systemMenu')
      dispatch('systemAuth')
    },
    // 修改角色
    roleChange: async ({commit,dispatch}, {roleId}) => {
      return new Promise((resolve, reject) => {
        roleChange(roleId).then(res => {
          commit('account/loginInfo',res,{ root: true })
          dispatch('systemMenu')
          dispatch('systemAuth')
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    },
    // 角色信息
    systemRole: async ({commit}) => {
      return new Promise((resolve, reject) => {
        userRole().then(res => {
          commit('roleInfo', res)
          resolve(res)
        }).catch(err => {})
      })
    },
    // 系统菜单信息
    systemMenu: async ({commit}) => {
      return new Promise((resolve, reject) => {
        userMenu().then(res => {
          commit('roleMenu', res)
          resolve(res)
        }).catch(err => {})
      })
    },
    // 系统权限信息
    systemAuth: async ({commit}) => {
      return new Promise((resolve, reject) => {
        userAuth().then(res => {
          commit('roleAuth', res)
          resolve(res)
        }).catch(err => {})
      })
    }
  }
}