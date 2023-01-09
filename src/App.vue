<script lang="ts" setup>
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div>
    <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
      <img src="./assets/typescript.svg" class="logo typescript" alt="Typescript logo" />
    </a>
    <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener noreferrer">
      <img src="./assets/pinia.svg" class="logo pinia" alt="Pinia logo" />
    </a>
    <a href="https://jestjs.io/" target="_blank" rel="noopener noreferrer">
      <img src="./assets/jest.svg" class="logo jest" alt="Jest logo" />
    </a>
  </div>
  <HelloWorld msg="Boilerplate Vue 3 + Vite + TypeScript + Pinia + Jest" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.logo.typescript:hover {
  filter: drop-shadow(0 0 2em #3178c6);
}

.logo.pinia:hover {
  filter: drop-shadow(0 0 2em #ffd859);
}

.logo.jest:hover {
  filter: drop-shadow(0 0 2em #c21325);
}
</style>
