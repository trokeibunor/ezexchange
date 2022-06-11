import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import BootstrapVue3 from "bootstrap-vue-3";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHamburger,
  faBarsStaggered,
  faBars,
  faHome,
  faNewspaper,
  faMoneyBill,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add([
  faHamburger,
  faBarsStaggered,
  faBars,
  faHome,
  faNewspaper,
  faMoneyBill,
  faBook,
]);
let app;
store.dispatch("users/onAuthChanged", () => {
  if (!app) {
    app = createApp(App);
    app.component("font-awesome-icon", FontAwesomeIcon);
    app
      .use(store)
      .use(router)
      .use(Toast)
      .use(BootstrapVue3)
      .use(FontAwesomeIcon)
      .mount("#app");
  }
});
