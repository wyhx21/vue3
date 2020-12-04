import axios from '@axios/index.js'
// 登录
export const login = (data) => axios.doPost('/system/user/login', data)
// 获取角色信息
export const userRole = () => axios.doGet('/system/user/role')