// Import user data from database
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../db";

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
    async register(
      { commit, dispatch },
      { email, password, lastname, firstname }
    ) {
      commit("setRegisterIsProcessing", true);
      commit("setRegisterError", "");
      const auth = getAuth();
      try {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await dispatch("createUserProfile", {
          id: user.uid,
          displayName: `${lastname + firstname}`,
          avater: `https://ui-avatars.com/api/?name=${
            lastname + firstname
          }&background=006fe8&color=fff`,
          transactions: [],
        });
      } catch (error) {
        commit("setRegisterError", error.message);
        dispatch("toast/error", error.message, { root: true });
      } finally {
        commit("setRegisterIsProcessing", false);
      }
    },
    async createUserProfile(_, { id, ...profile }) {
      await setDoc(doc(db, "users", id), profile);
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
