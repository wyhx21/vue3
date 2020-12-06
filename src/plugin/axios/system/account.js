import axios from '@axios/index.js'
// 登录
export const login = (data) => axios.doPost('/system/user/login', data)
// 获取角色信息
export const userRole = () => axios.doGet('/system/user/role')
// 获取菜单信息
export const userMenu = () => axios.doGet('/system/menu/roleMenu')
// 获取权限信息
export const userAuth = () => axios.doGet('/system/menu/roleAuth')
// 切换角色
export const roleChange = (roleId) => axios.doGet(`/system/role/change/${roleId}`)
// 切换角色
export const userLogout = () => axios.doGet(`/system/user/logout`)