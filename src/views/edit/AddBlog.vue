<template>
  <div class="edit ">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="60px"
      class="demo-ruleForm"
    >
      <el-form-item label="标题" prop="title">
        <el-input v-model="ruleForm.title"></el-input>
      </el-form-item>

      <el-form-item label="摘要" prop="description">
        <el-input type="textarea"  v-model="ruleForm.description"></el-input>
      </el-form-item>

      <el-form-item label="内容" prop="content">
        <mavon-editor v-model="ruleForm.content" fontSize="16px" :subfield="false"></mavon-editor>
      </el-form-item>

      <el-form-item class="test">
        <el-button type="primary" @click="submitForm('ruleForm')"
          >立即创建</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        id: "",
        title: "",
        description: "",
        content: "",
      },
      rules: {
        title: [
          { required: true, message: "请输入标题", trigger: "blur" },
          { min: 3, max: 15, message: "长度在 3 到 15 个字符", trigger: "blur" },
        ],
        description: [
          { required: true, message: "请输入摘要", trigger: "change" },
        ],
        content: [{ required: true, message: "请输入内容", trigger: "blur" }],
        
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style scoped>
.edit {
    width: 75vw;
    margin: 0 auto;
    background: #fff;
}
.demo-ruleForm {
    width: 80%;
    margin:0 auto;
    padding:50px 0;
}
.test {
    text-align: center;
    
}
</style>