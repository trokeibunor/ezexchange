import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MarketView from "../views/MarketView.vue";
import NewsView from "../views/NewsView.vue";
import signupView from "../views/signupView.vue";
import signinView from "../views/signinView.vue";
import verifyEmail from "../views/verifyEmail.vue";
import productCoin from "../views/ProductCoin.vue";
import productCard from "../views/ProductCard.vue";
import forgotPasswordVue from "@/views/forgotPassword.vue";
import { getAuth } from "firebase/auth";

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
    meta: { onlyGuestUser: true },
  },
  {
    path: "/signin",
    name: "signin",
    component: signinView,
    meta: { onlyGuestUser: true },
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
    path: "/forgotPassword",
    name: "ForgotPassword",
    component: forgotPasswordVue,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach(async (to, _, next) => {
  const isAuth = await getAuth().currentUser;
  if (to.meta.onlyGuestUser) {
    if (isAuth) {
      next({ name: "home" });
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router;
