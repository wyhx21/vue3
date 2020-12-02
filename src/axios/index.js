import axiosSource from 'axios';
import store from '@store/store.js'

function errorLog(err){
  if (process.env.NODE_ENV === 'development') {
    console.log(err.message, err)
  }
}

const axios = axiosSource.create({
  baseURL: AXIOS_BASE_PATH,
  timeout: AXIOS_TIME_OUT
})

axios.interceptors.request.use(
  config => {
    const token = store.getters['account/token']
    config.headers['authToken'] = token
    return config
  },
  err => {
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
          
          break;
        }
        default: {
          errorLog({
            message: dataAxios.respMsg,
            errorCode: dataAxios.respCode
          })
          return Promise.reject(dataAxios)
        }
      }
    }
    return res
  },
  error => {
    if(error && error.response) {
      switch(error.response.status) {
        case 400: error.message = '请求错误'; break
        case 401: error.message = '未授权，请登录'; break
        case 403: error.message = '拒绝访问'; break
        case 404: error.message = `请求地址出错: ${error.response.config.url}`; break
        case 408: error.message = '请求超时'; break
        case 500: error.message = '服务器内部错误'; break
        case 501: error.message = '服务未实现'; break
        case 502: error.message = '网关错误'; break
        case 503: error.message = '服务不可用'; break
        case 504: error.message = '网关超时'; break
        case 505: error.message = 'HTTP版本不受支持'; break
        default: break
      }
    }
    errorLog(error)
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