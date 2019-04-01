<template>
  <div class="navbar">
    <div class="navbar-content">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        @select="handleSelect"
        background-color="#001529"
        height="100%"
        text-color="#fff"
        active-text-color="#ffd04b"
        :collapse="isCollapse"
      >
        <div class="mask"></div>
        <router-link to="/main/banner">
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
        </router-link>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>学员管理</span>
          </template>
          <el-menu-item-group>
            <!-- <template slot="title">分组一</template> -->
            <el-menu-item index="2-1">学员查询</el-menu-item>
            <el-menu-item index="2-2">添加学员</el-menu-item>
            <el-menu-item index="2-3">导出学员</el-menu-item>
            <el-menu-item index="2-4">学分管理</el-menu-item>
            <el-menu-item index="2-5">末班管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>财务管理</span>
          </template>
          <el-menu-item-group>
            <!-- <template slot="title">分组一</template> -->
            <el-menu-item index="3-1">学员查询</el-menu-item>
            <el-menu-item index="3-2">欠费查询</el-menu-item>
            <el-menu-item index="3-3">学费统计</el-menu-item>
            <el-menu-item index="3-4">缴费</el-menu-item>
            <el-menu-item index="3-5">支出</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-menu-item index="4">
          <i class="el-icon-info"></i>
          <span slot="title">关于</span>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {};
  },
  computed: {
		isCollapse(){
			return this.$store.state.isCollapse
		}
  },
  methods:{
		handleSelect(key,keyPath){
			console.log(key,keyPath)
			var dict = {
				"2-1":"/main/student",
				"2-2":"/main/student-add",
				"2-3":"/main/student-export",
				"2-4":"/main/student-score",
				"2-5":"/main/student-downgrade",
			}
			var path = dict[key]
			if(path != undefined){
				this.$router.push(path)
			}
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a{
    text-decoration: none;
  }
  .navbar,.navbar-content,.el-menu{
    height: 100%;
  }
  .mask{
		height: 32px;
		margin: 16px;
		background:rgba(255, 255, 255, 0.2);
	}
  .is-active {
		background-color: #1890ff !important;
		color: #fff !important;
	}
	.el-menu-vertical-demo:not(.el-menu--collapse) {
		width: 200px;
		min-height: 400px;
	}
</style>
