import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/1-html-basic',
      name: '1-html-basic',
      component: () => import('../views/1HtmlBasicView.vue')
    },
    {
      path: '/2-playground',
      name: '2-playground',
      component: () => import('../views/2PlaygroundView.vue')
    },
    {
      path: '/3-sexy',
      name: '3-sexy',
      component: () => import('../views/3SexyView.vue')
    },
    {
      path: '/4-final-playground',
      name: '4-final-playground',
      component: () => import('../views/4FinalPlayground.vue')
    }
  ]
})

export default router
