import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import { onAuthStateChanged, getAuth } from "firebase/auth";

// session management function

onAuthStateChanged(getAuth(), (user) => {
  if (user) {
    console.log(user);
  } else {
    console.log("logged out");
  }
});

createApp(App).use(store).use(router).use(Toast).mount("#app");
