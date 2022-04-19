import { createStore } from "vuex";
import users from "./modules/users";
export default createStore({
  state() {
    return {
      isLoggedIn: false,
    };
  },
  modules: {
    users,
  },
  actions: {
    loggedIn() {
      this.isLoggedIn = !this.isLoggedIn;
    },
  },
});
