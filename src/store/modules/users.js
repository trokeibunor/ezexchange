// Import user data from database
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../../db";
import router from "@/router";

export default {
  namespaced: true,
  state() {
    return {
      data: null,
      authentication: {
        isProcessing: false,
        error: "",
      },
    };
  },
  getters: {
    isAuthenticated(state) {
      return !!state.data;
    },
  },
  actions: {
    onAuthChanged({ dispatch, commit }, callback) {
      // session management function
      commit("setAuthenticationIsProcessing", true);
      onAuthStateChanged(getAuth(), async (user) => {
        if (user) {
          await dispatch("getUserProfile", user);
          commit("setAuthenticationIsProcessing", false);
          callback(user);
        } else {
          console.log("logged out");
          commit("setAuthenticationIsProcessing", false);
          callback(null);
        }
      });
    },
    async getUserProfile({ commit }, user) {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      const userProfile = docSnap.data();
      const userWithProfile = {
        id: user.uid,
        email: user.email,
        ...userProfile,
      };

      commit("setUser", userWithProfile);
    },
    async register(
      { commit, dispatch },
      { email, password, lastname, firstname }
    ) {
      commit("setAuthenticationIsProcessing", true);
      commit("setAuthenticationError", "");
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
          avater: `https://ui-avatars.com/api/?name=${lastname}+${firstname}&background=0155dc&color=fff&bold=true`,
          transactions: [],
        });
      } catch (error) {
        commit("setAuthenticationError", error.message);
        dispatch("toast/error", error.message, { root: true });
      } finally {
        commit("setAuthenticationIsProcessing", false);
      }
    },
    async login({ commit, dispatch }, { email, password }) {
      commit("setAuthenticationIsProcessing", true);
      commit("setAuthenticationError", "");

      try {
        await signInWithEmailAndPassword(getAuth(), email, password);
        router.push("/");
      } catch (error) {
        commit("setAuthenticationError", error.message);
        dispatch("toast/error", error.message, { root: true });
      } finally {
        commit("setAuthenticationIsProcessing", false);
      }
    },
    async logout({ commit }) {
      try {
        await signOut(getAuth());
        commit("setUser", null);
        router.push("/signin");
      } catch (error) {
        console.log("cannot logout" + error);
      }
    },
    async createUserProfile(_, { id, ...profile }) {
      await setDoc(doc(db, "users", id), profile);
    },
  },
  mutations: {
    setAuthenticationIsProcessing(state, isProcessing) {
      state.authentication.isProcessing = isProcessing;
    },
    setAuthenticationError(state, error) {
      state.authentication.error = error;
    },
    setUser(state, user) {
      console.log(user);
      state.data = user;
    },
  },
};
