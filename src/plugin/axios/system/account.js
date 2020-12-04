import axios from '@axios/index.js'

export const login = (data) => axios.doPost('/system/user/login', data)