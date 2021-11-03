<template>
  <div class="profile w">
    <userbg></userbg>
    <profile-nav></profile-nav>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import ProfileNav from './children/ProfileNav.vue'
import Userbg from './children/Userbg.vue'
export default {
  components: { Userbg, ProfileNav },

}
</script>

<style scoped>
.main {
  margin-top: 20px;
}
</style>