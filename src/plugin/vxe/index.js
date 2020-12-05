import 'xe-utils'
import VXETable from 'vxe-table'

VXETable.setup({

})
// import { Message, Alert, Confirm } from '@vxe/index.js';
export const Message = ({message = '提示信息', status = 'info', iconStatus = ''}) => VXETable.modal.message({message, status, iconStatus})

export const Alert = ({message = '提示信息', status = 'info', iconStatus = ''}) => VXETable.modal.alert({message, status, iconStatus})

export const Confirm = (param) => VXETable.modal.confirm(param)

export default VXETable