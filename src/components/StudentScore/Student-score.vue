<template>
  <div class="student-score">
    <div class="score-tab">
      <div class="title">
        <div class="student-tap" @click="isShow=1" :class="isShow==1?className:''">按学生统计</div>
        <div class="date-tap" @click="isShow=2" :class="isShow==2?className:''">按时间统计</div>
      </div>
      <student-count v-if="isShow==1"></student-count>
      <student-ctime  v-if="isShow==2"></student-ctime>
    </div>
  </div>
</template>

<script>
import StudentCount from "@/components/StudentScore/Student-count"
import StudentCtime from '@/components/StudentScore/Student-ctime'
export default {
  name: "HelloWorld",
  data() {
    return {
      isShow:"1",
      className:["active"]
    };
  },
  components:{
    StudentCount,
    StudentCtime
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.student-score{
  margin-top: 20px;
  padding:0 20px;
}
.title{
  display: flex;
  font-size: 14px;
  height: 40px;
  line-height: 40px;
}
.title>div{
  background: #f8f8f8;
  margin-right: 5px;
  border-radius: 2px;
  padding: 0 10px;
}
.title>div:hover{
   color: #1890ff;
   cursor: pointer;
}
.title>div.active{
  background: #fff;
  color: #1890ff;
}
</style>
