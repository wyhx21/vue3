import axios from '@axios/index.js';

const queryPage = (data, {page=1,size = 10} = {}) => axios.fontPost('/basic/product/query', data, {page, size})

export {
  queryPage
}