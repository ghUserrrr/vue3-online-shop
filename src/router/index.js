import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/views/MainPage'
import CatalogPage from '@/views/CatalogPage'
import MyProductPage from '@/components/MyProductPage'

const routes = [
{path: '/', component: MainPage},
{path: '/catalog', component : CatalogPage},
{path: '/product/:id', component: MyProductPage, }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router