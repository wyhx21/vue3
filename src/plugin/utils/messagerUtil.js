import { Toast } from 'vant';
import { Dialog } from 'vant';
// import { infoLog,errorLog } from '@utils/messagerUtil.js'

const errorLog = (err) => {
  if (process.env.NODE_ENV === 'development') {
    console.error(err.message, err)
  }
  Message({message:err.message,position: 'top'})
}

const infoLog = ({respCode,respMsg}) => {
  if (process.env.NODE_ENV === 'development') {
    Message({message:`respCode:${respCode},respMsg:${respMsg}`,position: 'top'})
  } else {
    Message({message:`${respMsg}`,position: 'top'})
  }
}

const Message = ({message,icon,position}) => Toast({message,icon,position})

const Confirm = ({message,title,theme}) => Dialog.confirm({message,title,theme})

export {
  infoLog,
  errorLog,
  Message,
  Confirm
}