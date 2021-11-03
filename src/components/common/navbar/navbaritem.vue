<template>
  <div class="navitem">
      <li v-for="item in meau"  @click="clickMenu(item)">
        <i :class="'el-icon-'+item.icon"></i>{{item.label}}
      </li>
  </div>
</template>

<script>

export default {
  components: {  },
  props: {
    meau: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      data() {
        return {
          currentIndex:0
        };
      },
    };
  },
  methods: {
      clickMenu(item){
          this.$router.push({path: item.path})
    }
  },
};
</script>

<style scoped>
  .navitem {
    display: flex;
    font-size: 18px;
  }
  .navitem li {
    flex: 1;
    text-align: center;
    padding: 20px 0;
    border-top: 4px solid transparent ;
    transition: all .5s;
    cursor: pointer;
  }
  .navitem li:hover {
    border-top: 4px solid pink ;
    border-radius: 3px;
    color: pink
  }
  
</style>