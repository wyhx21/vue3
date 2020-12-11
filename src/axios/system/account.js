import axios from '@axios/index.js'
// 登录
const login = (data) => axios.doPost('/system/user/login', data)
// 获取角色信息
const userRole = () => axios.doGet('/system/user/role')
// 获取菜单信息
const userMenu = () => axios.doGet('/system/menu/roleMenu')
// 获取权限信息
const userAuth = () => axios.doGet('/system/menu/roleAuth')
// 切换角色
const roleChange = (roleId) => axios.doGet(`/system/role/change/${roleId}`)
// 切换角色
const userLogout = () => axios.doGet(`/system/user/logout`)

export {
  login,
  userRole,
  userMenu,
  userAuth,
  roleChange,
  userLogout
}