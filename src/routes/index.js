import {createRouter, createWebHistory} from 'vue-router'

import Homepage from "./../components/Homepage.vue"
import Products from "./../components/Products.vue"
import Aboutus from "./../components/Aboutus.vue"
import Cart from "./../components/Cart.vue"
import ContactUs from "./../components/ContactUs.vue"
import ServicesOffered from "./../components/ServicesOffered.vue"
import ManageProducts from "./../components/ManageProducts.vue"
const routes = [
    {
      path: '/',
      name: 'home',
      component: Homepage,
    },
    {
        path: '/products',
        name: 'products',
        component: Products,
      },
      {
        path: '/cart',
        name: 'cart',
        component: Cart,
      },
      {
        path: '/aboutus',
        name: 'aboutus',
        component: Aboutus,
      },
      {
        path: '/services',
        name: 'services',
        component: ServicesOffered,
      },
      {
        path: '/contactus',
        name: 'contactus',
        component: ContactUs,
      },
      {
        path: '/manageproducts',
        name: 'manageproducts',
        component: ManageProducts,
      },        
]
const router = createRouter({
  history: createWebHistory(),
  routes, 
})

export default router