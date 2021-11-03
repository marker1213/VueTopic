<template>
  <div class="detail w">
    <el-row :gutter="20">
      <el-col :span="6"><user-message></user-message></el-col>

      <el-col :span="18">
        <div class="main">
            <h2>我是标题</h2>
            <el-divider></el-divider>
            <div class="content">
                我是内容
            </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import UserMessage from "../home/childrens/UserMessage.vue";
export default {
  components: { UserMessage },
  data() {
    return {
      blog: {
        id: "",
        title: "",
        description: "",
        content: "",
      },
    };
  },
};
</script>

<style scoped>
.main {
  height: 666px;
  /* width: 666px; */
  background: #fff;
  padding: 20px;
}
</style>