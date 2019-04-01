<template>
  <div class="student-score">
    <div class="score-tab">
      <el-tabs type="border-card">
        <el-tab-pane label="按学生统计">
          <StudentCount></StudentCount>
        </el-tab-pane>
        <el-tab-pane label="按时间统计">按时间统计</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import StudentCount from "@/components/Student-count"
export default {
  name: "HelloWorld",
  data() {
    return {};
  },
  components:{
    StudentCount
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.score-tab{
  padding: 0 20px;
}
.student-score{
  margin-top: 20px;
}
.el-tabs__content{
  margin-top: 20px;
}
</style>
