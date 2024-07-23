import {createRouter, createWebHistory} from 'vue-router'

import Homepage from "./../components/Homepage.vue"
import Products from "./../components/Products.vue"
import AboutUs from "./../components/AboutUs.vue"
import ContactUs from "./../components/ContactUs.vue"
import Cart from "./../components/cart.vue"
import ServicesOffered from "./../components/Services.vue"



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
        path: '/ aboutus',
        name: 'aboutus',
        component: AboutUs,
      },
      {
        path: '/ contactus',
        name: 'contact us',
        component: ContactUs,
      },
      {
        path: '/ cart',
        name: 'cart',
        component: cart,
      },
      {
        path: '/ servicesOffered',
        name: 'servicesOffered',
        component: servicesOffered,
      },
] 
const router = createRouter({
    history: createWebHistory(),
    routes,
})
    
  
export default router