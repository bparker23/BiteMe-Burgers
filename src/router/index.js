import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Browse from '../views/Browse.vue'
import Cart from '../views/Cart.vue'; //cart
import Drinks from '../views/Drinks.vue'; //cart


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
      path: '/browse',
      name: 'Browse',
      component: Browse
  },
  {
      path: '/drinks',
      name: 'Drinks',
      component: Drinks
  },
  //cart
  {
    path: '/cart/',
    name: 'cart',
    component: Cart,
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
