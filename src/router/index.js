import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import Product from '../views/Product.vue'
import Jobs from '../views/Jobs.vue'

import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Offer from '../views/Offer.vue'
import Otp from '../views/temporary/Otp.vue'
import Membership from '../views/Membership.vue'
import Signup from '../views/temporary/Signup.vue'
import About_offer from '../views/About_offer.vue'
import Items from '../views/Items.vue'
import Information from '../views/Information.vue'
import Signin from '../views/temporary/Signin.vue'
import Forget from '../views/temporary/Forget.vue'
import Forget_otp from '../views/temporary/Forget_otp.vue'
import Profile from '../views/User/Profile.vue'
import Wallet from '../views/User/Wallet.vue'
import Orders from '../views/User/Orders.vue'

import Images from '../views/Images.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/images',
      name: 'Images',
      component: Images
    },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  {
    path : '/register',
    name: 'Register',
    component: Register
  },
  {
    path : '/offer',
    name : 'Offer',
    component: Offer
  },
  {
    path : '/cart',
    name : 'Cart',
    component: Cart
  },
  {
    path : '/info/:service',
    name : 'Information',
    component: Information
  },
  {
    path : '/membership',
    name : 'Membership',
    component: Membership
  },
  {
    path : '/login',
    name : 'Login',
    component: Login
  },
  {
    path : '/signup',
    name : 'Signup',
    component: Signup
  },
  {
    path : '/product/:slug',
    name : Product,
    component: Product
  },
  {
    path : '/otp',
    name : Otp,
    component: Otp
  },
  {
    path : '/offer-detail/:slug',
    name : About_offer,
    component: About_offer
  },
  {
    path : '/items',
    name : Items,
    component: Items
  },

  {
    path : '/profile',
    name : Profile,
    component: Profile
  },

  {
    path : '/wallet',
    name : Wallet,
    component: Wallet
  },

  {
    path : '/orders',
    name : Orders,
    component: Orders
  },

  {
    path: '/forget',
    name : Forget,
    component: Forget,
  },

  {
    path: '/forget-otp',
    name : Forget_otp,
    component: Forget_otp,
  },
 
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // {
  //   path: '/*',
  //   component: 404
  //   },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
