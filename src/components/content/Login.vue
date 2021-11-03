<template>
    <div id="login-and-sign">
      <!-- 关闭图标 -->
      <span class="close" @click="closeLogin">
        <i class="el-icon-close" size="medium"></i>
      </span>

      <div v-show="$store.state.loginView.signShow" class="loginbox">
        <div class="logintitle">
          <span>登录</span>
        </div>
        <div class="changeState">
          <span @click="toSignUp">没有账号？立即注册</span>
        </div>
        <form>
          <label for="">
            <input type="text" placeholder="用户名或邮箱" key="email" required/>
          </label>
          <label for="">
            <input type="password" placeholder="登录密码" key="password" required/>
          </label>

          <div class="submit">
            <el-button
              size="medium"
              type="primary"
              icon="el-icon-s-home"
              round
              @click="Login"
              >登录</el-button
            >
          </div>
        </form>
      </div>
      
      <div v-show="!$store.state.loginView.signShow" class="loginbox">
        <div class="logintitle">
          <span>注册</span>
        </div>
        <div class="changeState">
          <span class="changestate" @click="toLogin">已有账号？立即登录</span>
        </div>
        <form action="">
          <label for="">
            <input type="text" placeholder="设置用户名" v-model="User.username" required/>
          </label>
          <label for="">
            <input type="password" placeholder="设置密码" v-model="User.password" required/>
          </label>
          <label for="">
            <input type="password" placeholder="重复密码"  @input="monitorPSW" required/>
          </label>

          <div class="submit2">
            <el-button
              native-type="submit"
              size="medium"
              type="warning"
              icon="el-icon-user-solid"
              round
              @click="testPassword"
              >注册</el-button
            >
          </div>
        </form>
      </div>
    </div>
</template>

<script>
//引入动画库
import "animate.css";
export default {
  data() {
    return {
      isshow: true,
      User: {
        username:'',
        password:'',
        repetionPassword:''
      }
    };
  },
  methods: {
    //切换成注册页面
    toSignUp() {
      this.$store.commit("toSignUp");
    },
    //切换成登录页面
    toLogin() {
      this.$store.commit("toLogin");
    },
    //关闭页面
    closeLogin() {
      this.$store.commit("showView");
    },
    //检测重复密码
    monitorPSW(event){
      this.User.repetionPassword = event.target.value
    },
    //测试重复密码是否匹配
    testPassword(){
      if(this.password != this.repetionPassword){
        alert('密码不匹配')
      }
    },
    //更改用户状态(游客->用户)
    Login(){
      this.$store.commit('changeUserState')
      this.$store.commit("showView");
    }
  },
};
</script>

<style scoped>
#login-and-sign {
  position: fixed;
  top: 30vh;
  left: 40vw;
  border-radius: 20px;
  background: rgba(255, 245, 245, 0.9);
  width: 350px;
  height: 350px;
  z-index: 222;
}
.loginbox {
  margin: 27px;
  width: 300px;
  height: 300px;
}
.close {
  position: absolute;
  right: 20px;
  top: 10px;
  transition: all 0.5s;
}
.close:hover {
  transform: rotate(380deg);
}

.logintitle {
  margin-top: 40px;
  margin-left: 20px;
  font-size: 2rem;
  margin-bottom: 5px;
}
.logintitle::after {
  content: "";
  display: block;
  width: 40px;
  height: 5px;
  margin-top: 4px;
  border-radius: 10px;
  background: red;
  transition: all 0.5s;
}
.logintitle:hover::after {
  width: 80px;
}
.changeState {
  margin-left: 18px;
  margin-bottom: 20px;
  font-size: 12px;
  cursor: pointer;
}
.changeState:hover {
  color: deeppink;
}

input {
  margin-top: 30px;
  margin-left: 20px;
  background: rgba(0, 0, 0, 0);
  border: none;
  outline: none;
  width: 250px;
  transition: all 0.5s;
}

.submit {
  margin-top: 50px;
  text-align: center;
}
.submit2 {
  margin-top: 20px;
  text-align: center;
}
</style>