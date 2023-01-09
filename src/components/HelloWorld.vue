<template>
  <h1>
    {{ couterStore.name }}
  </h1>

  <h2>{{ msg }}</h2>

  <div class="card">
    <button type="button" @click="couterStore.increment">
      count is
      {{ couterStore.counter }}
    </button>
    <button type="button" @click="couterStore.$reset">reset</button>
    <p>double couter: {{ couterStore.doubleCounter }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useCounterStore from "@/stores/counter";

export default defineComponent({
  props: {
    msg: String,
  },
  setup() {
    // Instance to store
    const couterStore = useCounterStore();
    return {
      couterStore,
    };
  },
});
</script>

<style lang="scss" scoped>
.read-the-docs {
  color: var($color-pink);
}

.card {
  button + button {
    margin-left: 1rem;
  }
}
</style>
