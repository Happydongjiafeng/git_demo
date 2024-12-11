import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'registerAndLogin',
      component: () => import('@/views/register_login/index.vue'),
    },
  ],
})

export default router
