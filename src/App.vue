<script setup lang="ts">
import { RouterView } from "vue-router";
import MyHeader from "./components/MyHeader.vue";
import MyFooter from "./components/MyFooter.vue";
</script>

<template>
  <MyHeader></MyHeader>
  <main>
    <router-view></router-view>
  </main>
  <!--<MyFooter></MyFooter>-->
</template>

<style lang="scss" scoped></style>
