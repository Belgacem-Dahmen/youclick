import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import Profile from '@/views/Profile.vue'
import Login from '@/views/Auth/Login.vue'
import Dashboard from '@/views/Auth/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
    },
    { path: '/:pathMatch(.*)*', 
      name : "not-found",
      component: NotFoundView },
  ],
})

export default router
