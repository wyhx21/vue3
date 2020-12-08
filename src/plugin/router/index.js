import { createRouter, createWebHashHistory } from 'vue-router';
import store from '@store/index.js'
import Login from '@com/common/Login.vue'
import Container from '@com/common/Container.vue'
import Messager from '@com/system/Messager.vue'
import MenuInfo from '@com/system/MenuInfo.vue'

const routes = [
  {path: '/', redirect: '/container'},
  { path: '/login', name: 'login', component: Login},
  { path: '/container', name: 'container', component: Container, children: [
    { path: '', name: 'messager', component: Messager},
    { path: 'menu', name: 'menu', component: MenuInfo},
  ]},
]

const route = createRouter({
  history: new createWebHashHistory(),
  routes
})

route.beforeEach((to, from, next) => {
  if(to.name === 'login') {
    store.commit('account/loginInfo',{})
    return next()
  } else if(to.matched.length < 1) {
    return next('/container')
  } else {
    next()
  }
})

// route.isReady().then(succ => console.log(succ)).catch(err => console.log(err))

export default route