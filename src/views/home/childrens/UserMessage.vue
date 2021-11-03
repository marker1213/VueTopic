<template>
  <div id="userMessage">
    <h3>猜你喜欢</h3>

    <div v-show="!$store.state.userState">
      <el-card class="box-card">
        <img
          style="width: 100%"
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F19799e4cdda5ce595424858383cf094301de6ce2.jpg&refer=http%3A%2F%2Fi0.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637932890&t=542638f44aecbe1ade4ddb59e92493b6"
          alt=""
        />
        <el-avatar
          :size="60"
          class="avatar"
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201805%2F04%2F20180504210759_mtbvl.thumb.700_0.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637932490&t=758ca7a58ad01c27b534417f8ee60854"
        ></el-avatar>

        <div class="user">
          <span>亲！请登录</span>
        </div>

        <div class="button">
          <el-button type="primary" icon="el-icon-edit" round @click="login"
            >登录</el-button
          >
          <el-button
            type="warning"
            icon="el-icon-star-off"
            round
            @click="signUp"
            >注册</el-button
          >
        </div>
      </el-card>
    </div>

    <div v-show="$store.state.userState">
      <el-card class="box-card">
        <img
          style="width: 100%"
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F19799e4cdda5ce595424858383cf094301de6ce2.jpg&refer=http%3A%2F%2Fi0.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637932890&t=542638f44aecbe1ade4ddb59e92493b6"
          alt=""
        />
        <el-avatar
          :size="60"
          class="avatar"
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201805%2F04%2F20180504210759_mtbvl.thumb.700_0.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637932490&t=758ca7a58ad01c27b534417f8ee60854"
        ></el-avatar>

        <div class="user">
          <span>用户名</span>
        </div>

        <div class="button">
          <el-button type="primary" icon="el-icon-edit" round @click="toProfile"
            >个人中心</el-button
          >
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    login() {
      this.$store.commit("showView");
      this.$store.commit("toLogin");
    },
    signUp() {
      this.$store.commit("showView");
      this.$store.commit("toSignUp");
    },
    toProfile(){
      this.$router.push({path:'/profile'})
    }
  },
};
</script>

<style scoped>
h3 {
  margin-top: 35px;
  font-weight: normal;
}
h3::before {
  content: "";
  position: relative;
  margin-right: 10px;
  top: 7px;
  border-radius: 6px;
  display: inline-block;
  background: pink;
  height: 30px;
  width: 6px;
}

.box-card {
  margin-top: 20px;
  position: relative;
  height: 350px;
  border-radius: 15px;
}
.avatar {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 40%;
}
.user {
  margin-top: 50px;
  text-align: center;
}
.button {
  margin-top: 20px;
  text-align: center;
}
</style>