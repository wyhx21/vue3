import { createRouter, createWebHistory } from 'vue-router';
import Home from '@com/Home.vue'
import Store from '@com/Store.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/store', component: Store },
]

export default createRouter({
  history: new createWebHistory(),
  routes
})