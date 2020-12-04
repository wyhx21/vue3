
// import { filterParam } from '@utils/array.js'
export const filterParam = (arr, value, prop = 0) => {
  // let res = new Array()
  // for(let item of arr) {
  //   if(item[prop] == value) {
  //     res.push(item)
  //   }
  // }
  // return res
  // return arr.find(obj => obj[prop] == value)
  return Array.of(arr).filter(item => item[prop] == value)
}
