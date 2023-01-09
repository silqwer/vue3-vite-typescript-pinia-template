import { defineStore, acceptHMRUpdate } from "pinia";

const useCounterStore = defineStore("main", {
  state: () => ({
    name: "🎉 Welcome 🍾" as string,
    counter: 0 as number,
  }),
  getters: {
    doubleCounter: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter += 1;
    },
  },
});

// if (import.meta.hot) {
//   import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot));
// }

export default useCounterStore;
