import axios from '@axios/index.js';

const queryPage = (data, {page=1,size = 10} = {}) => axios.fontPost('/basic/product/query', data, {page, size})

const prodType = () => axios.doGet('/system/dic/sysDic/prodType')

export {
  queryPage,
  prodType
}