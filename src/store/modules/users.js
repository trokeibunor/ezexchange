// Import user data from database
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../db/index";
export default {
  namespaced: true,
  state() {
    return {
      register: {
        isProcessing: false,
        error: "",
      },
    };
  },
  getters: {},
  actions: {
    async register({ commit }, { email, password }) {
      commit("setRegisterIsProcessing", true);
      commit("setRegisterError", "");
      const auth = getAuth(app);
      try {
        const userCredentials = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        return userCredentials;
      } catch (error) {
        commit("setRegisterError", error.message);
      } finally {
        commit("setRegisterIsProcessing", false);
      }
    },
  },
  mutations: {
    setRegisterIsProcessing(state, isProcessing) {
      state.register.isProcessing = isProcessing;
    },
    setRegisterError(state, error) {
      state.register.error = error;
    },
  },
};
