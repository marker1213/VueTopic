<template>
  <div class="tab-control">
    <span>排序 |</span> 
    <div v-for="(item, index) in tags"
         class="tab-control-item"
         :class="{active: index === currentIndex}"
         @click="itemClick(index)">
      <span>{{item}} ·</span> 
    </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        activeName: 'first',
        tags: ['更新','浏览','点赞'],
        currentIndex: 0
      };
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index;
        // this.$emit('tabClick', index)
      }
    }
}
</script>

<style scoped>
    .tab-control {
    display: flex;
    justify-content: flex-start;
    /* text-align: center; */
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
  }

  .tab-control-item span {
    padding: 5px;
  }

  .tab-control-item span:hover {
    color: pink;
  }
    .active {
    color: pink;
  }
</style>