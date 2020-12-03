import { createRouter, createWebHashHistory } from 'vue-router';
import Login from '@com/common/Login.vue'

const routes = [
  {path: '/', redirect: '/login'},
  { path: '/login', name: 'login', component: Login},
]

const route = createRouter({
  history: new createWebHashHistory(),
  routes
})

route.beforeEach((to, from, next) => {
  next()
})

// route.isReady().then(succ => console.log(succ)).catch(err => console.log(err))

export default route