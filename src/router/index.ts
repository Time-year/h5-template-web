import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'
const routers: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: () => import('@/view/layout/index.vue')
  },
  {
    path: '/login',
    component: () => import('@/view/login/index.vue')
  }
]

const route = createRouter({
  history: createWebHashHistory(),
  routes: routers
})

export default route
