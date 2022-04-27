import { useStore } from "vuex";
import { computed } from "vue";

export default function useAuth() {
  const store = useStore();
  const { state } = store;
  const error = computed(() => state.users.authentication.error);
  const isProcessing = computed(() => state.users.authentication.isProcessing);
  const isAuthenticated = computed(
    () => store.getters["users/isAuthenticated"]
  );
  const user = computed(() => state.users.data);
  return {
    error,
    isProcessing,
    isAuthenticated,
    user,
  };
}
