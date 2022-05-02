import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import BootstrapVue3 from "bootstrap-vue-3";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

store.dispatch("users/onAuthChanged");
createApp(App)
  .use(store)
  .use(router)
  .use(Toast)
  .use(BootstrapVue3)
  .mount("#app");
