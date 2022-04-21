import { createStore } from "vuex";
import users from "./modules/users";
import toast from "./modules/toast";
export default createStore({
  state() {
    return {
      isLoggedIn: false,
    };
  },
  modules: {
    users,
    toast,
  },
  actions: {
    loggedIn() {
      this.isLoggedIn = !this.isLoggedIn;
    },
  },
});
