import { createStore } from "vuex";
import users from "./modules/users";
import toast from "./modules/toast";
export default createStore({
  modules: {
    users,
    toast,
  },
});
