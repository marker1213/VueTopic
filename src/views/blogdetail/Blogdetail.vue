<template>
  <div class="detail w">
    <h2>标题</h2>
    <div>目录</div>
    <div class="content">内容</div>
  </div>
</template>

<script>

export default {
  components: {  },
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
.detail {
  height: 666px;
  /* width: 666px; */
  background: #fff;
  padding: 40px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
}
</style>