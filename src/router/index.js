import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MarketView from "../views/MarketView.vue";
import NewsView from "../views/NewsView.vue";
import signupView from "../views/signupView.vue";
import signinView from "../views/signinView.vue";

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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
