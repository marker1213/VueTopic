<template>
  <div id="navbar">
    <el-row :gutter="0">
      <el-col :span="2"><div class="logo" @click="backhome"></div></el-col>
      <el-col :span="9"><navbaritem :meau="meau"></navbaritem></el-col>
      <el-col :span="8">
        <div id="search">
          <label for="">
            <input type="text" placeholder="请输入您要搜索的内容" />
            <span class="btn"><i class="el-icon-search"></i></span>
          </label>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="user">
          <el-badge :value="200" :max="99" class="item">
            <el-button type="info" icon="el-icon-message" circle></el-button>
          </el-badge>
          <el-dropdown>
            <el-avatar
              :size="50"
              :src="circleUrl"
              src="https://tse1-mm.cn.bing.net/th/id/OIP-C.BbsuQQefhm7hnuyW7bXCAgAAAA?w=209&h=209&c=7&r=0&o=5&dpr=1.25&pid=1.7"
            ></el-avatar>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-plus">个人主页</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-plus"
                >收藏夹</el-dropdown-item
              >
              <el-dropdown-item icon="el-icon-circle-plus-outline"
                >退出登录</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Navbaritem from "../common/navbar/navbaritem.vue";

export default {
  components: { Navbaritem },
  data() {
    return {
      meau: [
        {
          path: "/studypath",
          name: "studypath",
          label: "资源攻略",
          icon: "thumb",
          url: "MallManage/MallManage",
        },
        {
          path: "/about",
          name: "about",
          label: "关于我们",
          icon: "s-custom",
          url: "UserManage/UserManage",
        },
        {
          path: "/compute",
          name: "compute",
          label: "电脑选择",
          icon: "s-goods",
          url: "UserManage/UserManage",
        },
      ],
      //白天黑夜模式开关
      show: true,
    };
  },
  computed: {},
  methods: {
    backhome() {
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<style scoped>
#navbar {
  position: fixed;
  height: 74px;
  background: rgba(255, 255, 255, 0.8);
  left: 0;
  right: 0;
  top: 0;
  z-index: 111;
}
.logo {
  cursor: pointer;
  margin-left: 50px;
  width: 200px;
  height: 60px;
  background: url(https://mirai.one/wp-content/uploads/2020/08/IMG_20200803_183148.png);
}
.navitem {
  margin-left: 5vw;
}
#search {
  margin-top: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
input {
  height: 40px;
  width: 80%;
  outline: 0;
  padding: 15px;
  border: transparent;
  color: #333;
}
button {
  border: transparent;
}
.btn:hover {
  color: red;
  background: rgb(147, 147, 243);
}
.btn {
  float: right;
  width: 10%;
  text-align: center;
  line-height: 40px;
  background: rgb(130, 130, 245);
  cursor: pointer;
  transition: all 0.5s;
}
.user {
  position: absolute;
  right: 10%;
  top: 8px;
  cursor: pointer;
}
.item {
  margin-right: 45px;
  margin-bottom: 40px;
}
</style>