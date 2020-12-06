import 'xe-utils'
import VXETable from 'vxe-table'

VXETable.setup({
  zIndex: 1100
})
// import { Message, Alert, Confirm } from '@vxe/index.js';
export const Message = ({message = '提示信息', status = 'info', iconStatus = ''}) => VXETable.modal.message({message, status, iconStatus})

export const Alert = ({message = '提示信息', status = 'info', iconStatus = ''}) => VXETable.modal.alert({message, status, iconStatus})

export const Confirm = async (param) => {
  return new Promise((resolve, reject) => {
    VXETable.modal.confirm(param).then(res => {
      if(res === 'confirm') {
        resolve(res)
      } else if (res === 'cancel') {
        reject(res)
      } else {
        resolve(res)
      }
    }).catch(err => {
      reject(err)
    })
  })
}

export default VXETable