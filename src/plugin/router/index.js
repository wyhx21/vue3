import { createRouter, createWebHashHistory } from 'vue-router';
import store from '@store/index.js'

const routes = [
  {path: '/', redirect: '/container'},
  { path: '/login', name: 'login', component: () => import('@com/system/Login.vue')},
  { path: '/container', name: 'container', component: () => import('@com/common/Container.vue'), 
    children: [
      { path: '', name: 'messager', component: () => import('@com/system/Messager.vue')},
      { path: 'menu', name: 'menu', component: () => import('@com/system/MenuInfo.vue')},
    ]
  },
  { path: '/base/product', name: 'base_product', component: () => import('@com/base/Product/Index.vue')},
  { path: '/base/productDetail', name: 'base_product_detail', component: () => import('@com/base/Product/ProdDetail.vue')},
  { path: '/base/productEditor', name: 'base_product_editor', component: () => import('@com/base/Product/ProdEditor.vue')},
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