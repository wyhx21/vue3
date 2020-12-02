import axios from '@axios/index.js'

export const Login = (data) => axios.doPost('/system/user/login', data)