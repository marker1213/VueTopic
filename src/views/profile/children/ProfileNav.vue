<template>
  <el-menu class="el-menu-demo"
    :default-active="activeIndex"
    mode="horizontal"
    background-color=""
    text-color="#333"
    active-text-color="blue"
  >
    <el-menu-item 
    :index="index"
    v-for="(item,index) in meau"
    :key="item.path"
    @click="clickMenu(item)">
      {{item.label}}
      </el-menu-item>
  </el-menu>
  
</template>

<script>
import UserHome from './UserHome.vue';
import UserPassage from './UserPassage.vue';
import UserSet from './UserSet.vue';
export default {
  components: { UserHome, UserPassage, UserSet },
  data() {
    return {
      meau: [
        {
          path: "userhome",
          name: "userhome",
          label: "主页",
          icon: "thumb",
        },
        {
          path: "userpassage",
          name: "userpassage",
          label: "文章",
          icon: "edit",
        },
        {
          path: "favorite",
          name: "favorite",
          label: "收藏夹",
          icon: "s-custom",
        },
        {
          path: "userset",
          name: "userset",
          label: "用户设置",
          icon: "s-goods",
        },
      ],
      activeIndex: 0
    };
  },
  methods: {
      clickMenu(item) {
          this.$router.push({name: item.name})
      }
  },
};
</script>

<style scoped>
</style>