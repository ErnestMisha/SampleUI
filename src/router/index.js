import { createRouter, createWebHistory } from 'vue-router';
import About from '../views/About.vue';
import Products from '../views/Products.vue';
import ProductDetails from '../views/ProductDetails.vue';
import Cart from '../views/Cart.vue';
import OrderDetails from '../views/OrderDetails.vue';
import ConfirmOrder from '../views/ConfirmOrder.vue';

const routes = [
  {
    path: '/',
    name: 'O nas',
    component: About
  },
  {
    path: '/products',
    name: 'Produkty',
    component: Products,
  },
  {
    path: '/cart',
    name: 'Koszyk',
    component: Cart
  },
  {
    path: '/product-details/:id',
    component: ProductDetails,
  },
  {
    path: '/order-details',
    component: OrderDetails
  },
  {
    path: '/confirm-order',
    component: ConfirmOrder
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
