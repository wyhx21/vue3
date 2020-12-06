import axiosSource from 'axios';
import store from '@store/index.js'
import { toLogin } from '@router/routerHelper.js'
import { Message } from '@vxe/index.js';

function errorLog(err){
  if (process.env.NODE_ENV === 'development') {
    console.error(err.message, err)
  }
  Message({message:err.message,status: 'error'})
}

function infoLog({respCode,respMsg}){
  if (process.env.NODE_ENV === 'development') {
    Message({message:`respCode:${respCode},respMsg:${respMsg}`})
  } else {
    Message({message:`${respMsg}`})
  }
}

const axios = axiosSource.create({
  baseURL: AXIOS_BASE_PATH,
  timeout: AXIOS_TIME_OUT
})

axios.interceptors.request.use(
  config => {
    const token = store.getters['account/token']
    config.headers['device'] = AXIOS_HEADER_DEVICE
    config.headers['authToken'] = token
    return config
  },
  error => {
    errorLog({message:'request error',error})
    return Promise.reject(err)
  }
)

axios.interceptors.response.use(
  response =>{
    const dataAxios = response.data
    const { respCode } = dataAxios
    if (respCode === undefined) {
      return dataAxios
    } else {
      switch (respCode) {
        case '000000': return dataAxios.data
        case '200001': {
          store.dispatch('account/clearLoginInfo')
          toLogin()
          return Promise.reject(dataAxios)
        }
        default: {
          infoLog(dataAxios)
          return Promise.reject(dataAxios)
        }
      }
    }
    return response
  },
  error => {
    let message = error.message
    if(error && error.response) {
      switch(error.response.status) {
        case 400: message = '请求错误'; break
        case 401: message = '未授权，请登录'; break
        case 403: message = '拒绝访问'; break
        case 404: message = `请求地址出错: ${error.response.config.url}`; break
        case 408: message = '请求超时'; break
        case 500: message = '服务器内部错误'; break
        case 501: message = '服务未实现'; break
        case 502: message = '网关错误'; break
        case 503: message = '服务不可用'; break
        case 504: message = '网关超时'; break
        case 505: message = 'HTTP版本不受支持'; break
        default: message = '系统发生未知错误';break
      }
    }
    errorLog({message,error})
    return Promise.reject(error)
  }
)

const doGet = (url, params ={}) => {
  return axios({
    method: 'get',
    url,
    params
  })
}

const doPost = (url, data = {}, params = {}) => {
  return axios({
    method: 'post',
    url,
    data,
    params
  })
}

export default {
  doGet,
  doPost
}