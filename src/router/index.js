import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/views/MainPage';
import MyCatalog from '@/components/MyCatalog';
import MyProductPage from '@/components/MyProductPage';
import MyCheckout from '@/components/MyCheckout';
import InfoPage from '@/views/InfoPage';
import ShippingPage from '@/views/ShippingPage';
import PaymentPage from '@/views/PaymentPage';

const routes = [
  {
    path: '/',
    component: MainPage,
  },
  {
    path: '/catalog',
    component: MyCatalog,
    meta: {
      breadcrumb: [
        { name: 'Main page', link: '/' },
        { name: 'Catalog', link: '/catalog' },
      ],
    },
  },
  {
    path: '/product/:id',
    component: MyProductPage,
    meta: {
      breadcrumb: [
        { name: 'Main page', link: '/' },
        { name: 'Catalog', link: '/catalog' },
        { name: 'Product id', link: '' },
      ],
    },
  },
  {
    path: '/checkout',
    component: MyCheckout,
    children: [
      {
        path: 'info',
        component: InfoPage,
        meta: {
          breadcrumb: [{ name: 'Information', link: '/checkout/info' }],
        },
      },
      {
        path: 'shipping',
        component: ShippingPage,
        meta: {
          breadcrumb: [
            { name: 'Information', link: '/checkout/info' },
            { name: 'Shipping', link: '/checkout/shipping' },
          ],
        },
      },
      {
        path: 'payment',
        component: PaymentPage,
        meta: {
          breadcrumb: [
            { name: 'Information', link: '/checkout/info' },
            { name: 'Shipping', link: '/checkout/shipping' },
            { name: 'Payment', link: '/checkout/payment' },
          ],
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
