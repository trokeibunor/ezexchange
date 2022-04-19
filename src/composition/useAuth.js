import { useStore } from "vuex";
import { computed } from "vue";

export default function useAuth() {
  const { state } = useStore();
  const error = computed(() => state.users.register.error);
  const isProcessing = computed(() => state.users.register.isProcessing);
  return {
    error,
    isProcessing,
  };
}
