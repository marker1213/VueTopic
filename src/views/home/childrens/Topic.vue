<template>
  <div id="topic">
      <h3>最新评论</h3>

    <el-card class="box-card">
      <div v-for="o in 4" :key="o" class="text item">
        <div class="left"></div>
        <div class="right"></div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .box-card {
    margin-top: 20px;
    height: 450px;
    border-radius: 15px;
}
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
.item {
    height: 75px;
    margin: 20px 0;
    border: 1px solid black;
}
</style>