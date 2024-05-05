import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import PageUserProfile from '../pages/user/PageUserProfile.vue'
import PageUserSetting from '../pages/user/PageUserSetting.vue'
import WidgetUserLayout from '../pages/user/widgets/WidgetUserLayout.vue'

import PageAuthLogin from '../pages/auth/PageAuthLogin.vue'
import PageAuthSignup from '../pages/auth/PageAuthSignup.vue'
import AppLayout from '@/layouts/AppLayout.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppLayout,
      meta: {
        layout: "AppLayout"
      },

    },
    {
      path: '/profile/:id',
      name: 'user',
      component: WidgetUserLayout,
      children: [
        {
          path: '',
          name: 'user-home',
          component: PageUserSetting
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: PageAuthLogin
    },
    {
      path: '/register',
      name: 'register',
      component: PageAuthSignup
    },
    // Add the route for the 404 page
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView
    }
  ]
});

export default router
