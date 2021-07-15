import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import {isLogin} from "../utils/authService";
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      authentication: false
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      authentication: false
    }
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      authentication: true
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to) => {
  if (to.meta.authentication && !isLogin()) {
    router.replace('login')
  }
})
export default router
