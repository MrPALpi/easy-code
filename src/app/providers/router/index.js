import { createRouter, createWebHistory } from 'vue-router'
import { baseURL } from './middlewares';
import { config } from './config/index'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: config
})

router.beforeEach((to, from, next) => baseURL(to, from, next));

export default router