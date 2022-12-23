import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/views/MainPage";
import MyCatalog from "@/components/MyCatalog";
import MyProductPage from "@/components/MyProductPage";
import MyCheckout from "@/components/MyCheckout";
import InfoPage from "@/views/InfoPage";
import ShippingPage from "@/views/ShippingPage";

const routes = [
  { path: "/", component: MainPage },
  { path: "/catalog", component: MyCatalog },
  { path: "/product/:id", component: MyProductPage },
  {
    path: "/checkout",
    component: MyCheckout,
    children: [
      { path: "info", component: InfoPage },
      { path: "shipping", component: ShippingPage },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
