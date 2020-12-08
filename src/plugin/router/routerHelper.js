import Router from '@router/index.js'

// import { toLogin,toMainPage } from '@router/routerHelper.js'
const toLogin = () => Router.push('/login')

const toMainPage = () => Router.push('/container')

const goBack = () => {
  if(window.history.state.back == '/login') {
    Router.push('/container')
  } else {
    window.history.length > 1 ? Router.go(-1) : Router.push('/container')
  }
}

export {
  toLogin,
  toMainPage,
  goBack
}