<script setup lang="ts">
import { RouterView } from "vue-router";
import MyHeader from "./components/MyHeader.vue";
import MyFooter from "./components/MyFooter.vue";
</script>

<template>
  <MyHeader></MyHeader>
  <main>
    <RouterView />
  </main>
  <MyFooter></MyFooter>
</template>

<style lang="scss" scoped>
#app {
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  main {
    height: calc(100vh - 208px);
    section {
      width: 75%;
      margin: auto;
    }
  }
}
</style>
