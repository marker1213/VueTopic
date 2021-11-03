<template>
  <div class="hot-article">
      <h3>热门文章</h3>
      <tag-bar></tag-bar>
      <content-artice></content-artice>
      
  </div>
</template>

<script>
import TagBar from '../../../components/content/TagBar.vue'
import ContentArtice from './ContentArtice.vue'

export default {
  components: { TagBar, ContentArtice },

}
</script>

<style scoped>

</style>