<template>
  <div class="studypath">
    <div class="aside">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        @open=""
        @close=""
        :collapse="isCollapse"
      >
        <el-menu-item index="1">
          <i class="el-icon-location"></i>
          <span>找书籍</span>
        </el-menu-item>
        <el-menu-item index="1.1">
          <i class="el-icon-location"></i>
          <span>找教程</span>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>必修基础</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1">算法数据结构</el-menu-item>
            <el-menu-item index="2-2">计算机网络</el-menu-item>
            <el-menu-item index="2-3">操作系统</el-menu-item>
            <el-menu-item index="2-4">数据库</el-menu-item>
            <el-menu-item index="2-5">计算机组成原理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>编程语言</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="3-1">C++</el-menu-item>
            <el-menu-item index="3-2">Python</el-menu-item>
            <el-menu-item index="3-3">C语言</el-menu-item>
            <el-menu-item index="3-4">JavaScript</el-menu-item>
            <el-menu-item index="3-5">Java</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>领域方向</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="4-1">前端</el-menu-item>
            <el-menu-item index="4-2">后端</el-menu-item>
            <el-menu-item index="4-3">人工智能</el-menu-item>
            <el-menu-item index="4-4">大数据</el-menu-item>
            <el-menu-item index="4-5">物联网</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </div>

    <div class="main">
      <div class="header"></div>
      <div class="search"></div>
      <div class="content">
        <el-card class="box-card" v-for="item in 9" shadow="hover" @click="toPathDetail">
          <h3>内容</h3>
          <p>介绍</p>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: {
        books: {},
        course: {},
        basic: {},
      },
    };
  },
  methods: {
    toPathDetail(){
      
    }
  },
};
</script>

<style scoped>
/* 展开收起动画丝滑 */
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
  /* position: fixed; */
}
.studypath {
  margin-top: 20px;
}
.aside {
  float: left;
  margin-right: 20px;
  height: 100vh;
  background: #fff;
  
}
.main {
  /* float: left; */
  overflow: auto;
}
.header {
  
  margin-top: -20px;
  margin-bottom: 20px;
  margin-left: -20px;
  /* margin-right: -20px; */
  height: 100px;
  background: #fff;
}
.search {
  height: 200px;
  background: #fff;
}
.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.box-card {
  height: 200px;
  /* width: 220px; */
  width: 32.3%;
  margin-top: 20px;
  background: #fff;
}
</style>