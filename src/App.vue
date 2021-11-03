<template>
  <div id="app" :class="{night: true}">
    <el-container>
      <el-header><navbar></navbar></el-header>
      <el-main><router-view /></el-main>
      <el-footer><footer-link></footer-link></el-footer>
    </el-container>
  </div>
</template>

<script>
import FooterLink from './components/content/FooterLink.vue';

import Navbar from "./components/content/navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
    FooterLink,
  },
};
</script>

<style>
@import "~@/assets/css/base.css";
#app {
  background: rgba(244, 244, 244, 0.945);
}
</style>
