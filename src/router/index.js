import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MarketView from "../views/MarketView.vue";
import NewsView from "../views/NewsView.vue";
import signupView from "../views/signupView.vue";
import signinView from "../views/signinView.vue";
import verifyEmail from "../views/verifyEmail.vue";
import productCoin from "../views/ProductCoin.vue";
import productCard from "../views/ProductCard.vue";
import dashHome from "../views/dashboard/dashHome.vue";
import dashUsers from "../views/dashboard/dashUsers.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/market",
    name: "market",
    component: MarketView,
  },
  {
    path: "/news",
    name: "news",
    component: NewsView,
  },
  {
    path: "/signup",
    name: "signup",
    component: signupView,
  },
  {
    path: "/signin",
    name: "signin",
    component: signinView,
  },
  {
    path: "/verify",
    name: "verifyEmail",
    component: verifyEmail,
  },
  {
    path: "/coin",
    name: "productCoin",
    component: productCoin,
  },
  {
    path: "/card",
    name: "productCard",
    component: productCard,
  },
  {
    path: "/dashboard/",
    name: "dashboardHome",
    component: dashHome,
  },
  {
    path: "/dashboard/users",
    name: "dashboarduser",
    component: dashUsers,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
