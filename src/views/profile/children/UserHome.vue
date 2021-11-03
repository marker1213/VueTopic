<template>
  <div id="userhome">
    <el-row :gutter="20">
      <el-col :span="18">
        <div class="content">
          <p>请到个人设置里完善个人内容</p>
        </div>
      </el-col>
      <el-col :span="6">

        <div class="addblog" @click="addblog">
          <p>写文章</p>
        </div>

        <div class="message">
          <span>
            <p>0</p>
            文章
          </span>
          <span>
            <p>0</p>
            粉丝
          </span>
          <span>
            <p>0</p>
            评论
          </span>
        </div>

        <div class="usermessage">
          <h3>用户信息</h3>
          <div  class="about">
            <span v-for="item in 4">昵称：嘿嘿嘿</span>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    addblog(){
      this.$router.push({name:'addblog'})
    }
  }
};
</script>

<style scoped>
.content {
  min-height: 670px;
  background: #fff;
  border-radius: 15px;
  text-align: center;
}
.message {
  height: 120px;
  background: #fff;
  border-radius: 30px;
  display: flex;
}
.message span {
  flex: 1;
  text-align: center;
  margin-top: 50px;
}
.usermessage {
  padding: 30px;
  height: 420px;
  margin-top: 40px;
  background: #fff;
  border-radius: 20px;
  font-size: 18px;
}
.about {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  height: 350px;
}
.about span {
  flex: 1;
  display: block;
  height: 20px;
  
  /* background: pink; */
}
.addblog{
  height: 70px;
  border-radius: 25px;
  margin-bottom: 20px;
  background: rgba(15, 103, 175, 0.719);
  text-align: center;
  line-height: 70px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  transition: all .51s;
}
.addblog:hover {
  background: aqua;
  color: red;
}
</style>