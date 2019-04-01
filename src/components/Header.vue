<template>
  <div class="hello">
    <div>
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>
    </div>
    <div class="header-message">
			<i class="el-icon-rank"></i>
			<i class="el-icon-bell"></i>
			<img src="http://api.netallin.com/static/media/04.541539c2.jpg" alt="">
		</div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      isCollapse: false
    };
  },
  watch: {
    isCollapse() {
      this.$store.commit("setIsCollapse", this.isCollapse);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.hello{
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #fff;
	}
	.header-message{
		display: flex;
		align-items: center;
	}
	.header-message img{
		width: 50px;
		height: 50px;
		border-radius: 50%;
	}
	.header-message i{
		margin-right:30px;
	}
</style>
