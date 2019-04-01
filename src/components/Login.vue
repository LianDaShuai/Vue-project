<template>
  <div class="login">
    <div class="login-content">
      <el-form
        :model="ruleForm2"
        status-icon
        ref="ruleForm2"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="账号:" prop="username">
          <el-input type="text" v-model="ruleForm2.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码:" prop="password">
          <el-input type="password" v-model="ruleForm2.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="验证码:" prop="code" class="code-content">
          <el-input v-model="ruleForm2.code"></el-input>
          <span class="code" @click="dealSetCode">{{showCode}}</span>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
          <el-button @click="resetForm('ruleForm2')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      ruleForm2: {
        username: "",
        password: "",
        code: ""
      },
      showCode: ""
    }
  },
  created() {
    this.dealSetCode();
  },
  methods:{
     //点击登录
    async submitForm(formName) {
      //验证码校验
      if (this.showCode != this.ruleForm2.code) {
        this.$message({
          message: "验证码错误",
          type: "warning"
        });
      }
      if (this.ruleForm2.username == "") {
        this.$message({
          message: "用户名不能为空",
          type: "warning"
        });
      }
      if (this.ruleForm2.password == "") {
        this.$message({
          message: "密码不能为空",
          type: "warning"
        });
      }
      //登录所需的参数
      var dict = {
        username: this.ruleForm2.username,
        password: this.ruleForm2.password
      };
      //调用登陆的方法
      let res = await this.api.loginApi.login(dict)
      console.log(res)

      if (res.code == 0) {
          this.$message({
            message: "用户名或密码错误",
            type: "warning"
          });
        }
        if (res.code == 1) {
          localStorage.isLogin = 1
          localStorage.user = JSON.stringify(res.user)
          localStorage.token = res.token

          //储存班级信息列表
          var classList = res.classlist
          var userList = res.userlist
          this.$store.commit("setClassList",classList)
          this.$store.commit("setUserList",userList)

          //跳转main界面
          this.$router.push("/main");
          this.$message({
            message: "登陆成功",
            type: "success"
          });
        }
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    dealSetCode() {
      var getCode = () => {
        return parseInt(Math.random() * 9);
      };
      this.showCode =
        getCode() + "" + getCode() + "" + getCode() + "" + getCode();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  overflow: hidden;
}
.demo-ruleForm {
  width: 350px;
  padding: 25px;
  background-color: white;
  border: 1px solid #eee;
  margin: 160px auto 0;
  box-shadow: 0 0 25px #cacaca;
}

.title {
  text-align: center;
}

.code {
  display: inline-block;
  width: 60px;
  height: 35px;
  text-align: center;
  background-color: #f1f1f1;
  cursor: pointer;
  vertical-align: middle;
}

.code-content .el-input {
  width: 180px;
  display: inline-block;
  vertical-align: middle;
}
</style>
