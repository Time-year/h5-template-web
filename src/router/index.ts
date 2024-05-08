import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'
const routers: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/',
    component: () => import('@/layout/index.vue')
  }
]

const route = createRouter({
  history: createWebHashHistory(),
  routes: routers
})

export default route
