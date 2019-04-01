<template>
  <div class="main">
    <div class="main-content">
      <el-container>
        <navbar></navbar>
        <el-container>
          <el-header>
            <navbarHeader></navbarHeader>
          </el-header>
          <el-main>
            <router-view></router-view>
            <div class="company">东时OA ©2019 北京名博教育科技有限公司</div>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script>
//导入导航栏
import navbar from "@/components/Navbar";
import navbarHeader from "@/components/Header";
export default {
  name: "HelloWorld",
  data() {
    return {};
  },
  components:{
    navbar,
    navbarHeader
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main,.main-content,.el-container{
    height: 100%;
  }
  .el-main{
    padding: 0;
    background: #f1f1f1;
  }
  .company{
    text-align: center;
    font-size: 14px;
    color: rgba(0,0,0,.65);
    padding-bottom: 30px;
    padding-top: 30px;
  }
</style>
