<template>
  <div class="student-add">
    <!-- 面包屑导航 -->
    <div class="m-nav">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/main' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>
          <a href="/">输入</a>
        </el-breadcrumb-item>
        <el-breadcrumb-item>学员管理</el-breadcrumb-item>
        <el-breadcrumb-item>新建</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="add-message">
      <div class="title">学生添加</div>
      <div class="add-steps">
        <el-steps :space="200" :active="active" finish-status="success" align-center>
          <el-step title="录入学生基本信息"></el-step>
          <el-step title="录入费用信息"></el-step>
          <el-step title="确定缴费时间"></el-step>
          <el-step title="完成"></el-step>
        </el-steps>
      </div>
      <div class="student-add-message">
        <!-- 第一步添加学生信息 -->
        <student-add-step1 v-if="active==0"></student-add-step1>
        <!-- 第二步添加缴费信息 -->
        <student-add-step2 v-if="active==1"></student-add-step2>
        <!-- 添加缴费计划 -->
        <student-add-step3 v-if="active==2"></student-add-step3>
        <student-add-step4 v-if="active==3"></student-add-step4>
        <div class="step-btn">
          <el-button @click="prev" v-if="active==1 || active==2">上一步</el-button>
          <el-button @click="next" type="primary" v-if="active==0||active==1">下一步</el-button>
          <el-button @click="submit" type="primary" v-if="active == 2">提交</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StudentAddStep1 from "@/components/Student/StudentStep1";
import StudentAddStep2 from "@/components/Student/StudentStep2";
import StudentAddStep3 from "@/components/Student/StudentStep3";
import StudentAddStep4 from "@/components/Student/StudentStep4";

export default {
  name: "HelloWorld",
  data() {
    return {
      //步骤条数据
      active: 0,
      token: ""
    };
  },
  components: {
    StudentAddStep1,
    StudentAddStep2,
    StudentAddStep3,
    StudentAddStep4
  },
  created() {
    var token = window.localStorage.getItem("token");
    this.token = token;
  },
  methods: {
    //点击下一步
    next() {
      if (this.active++ > 3) {
        this.active = 0;
      }
    },
    prev() {
      this.active--;
    },
    //点击提交
    async submit() {
      var dict = {
        term: this.$store.state.form1.term,
        tuition_way: this.$store.state.form1.tuition_way,
        course: this.$store.state.form1.course,
        cuppon_way: this.$store.state.form1.cuppon_way,
        tuitionOrigin: this.$store.state.form1.tuitionOrigin,
        tuitionMinus: this.$store.state.form1.tuitionMinus,
        tuition: this.$store.state.form1.tuition,
        room_way: this.$store.state.form1.room_way,
        room_rent: this.$store.state.form1.room_rent,
        room_deposit: this.$store.state.form1.room_deposit,
        room_manage: this.$store.state.form1.room_manage,
        room_net: this.$store.state.form1.room_net,
        pc_way: this.$store.state.form1.pc_way,
        pc_rent: this.$store.state.form1.pc_rent,
        pc_buy: this.$store.state.form1.pc_buy,
        pc_deposit: this.$store.state.form1.pc_deposit,
        cloth: this.$store.state.form1.cloth,
        blanket: this.$store.state.form1.blanket,
        clothflag: this.$store.state.form1.clothflag,
        blanketflag: this.$store.state.form1.blanketflag,
        fee: this.$store.state.form1.fee,
        feeTotal: this.$store.state.form1.feeTotal,
        name: this.$store.state.form.name,
        phone: this.$store.state.form.phone,
        idcard: this.$store.state.form.idcard,
        address: this.$store.state.form.address,
        edu_level: this.$store.state.form.edu_level,
        edu_school: this.$store.state.form.edu_school,
        edu_profession: this.$store.state.form.edu_profession,
        classId: this.$store.state.form.classId,
        sex: this.$store.state.form.sex,
        father: this.$store.state.form.father,
        mother: this.$store.state.form.mother,
        fatherPhone: this.$store.state.form.fatherPhone,
        motherPhone: this.$store.state.form.motherPhone,
        source: this.$store.state.form.source,
        traffic: this.$store.state.form.traffic,
        enroller: this.$store.state.form.enroller,
        consultant: this.$store.state.form.consultant,
        remark: this.$store.state.form.remark,
        token: this.token
      };
      let res = await this.api.studentApi.addUser(dict);
      if (res.code == 1) {
        this.active = 3;
        this.$store.commit("setId", res.student.id);
        this.$store.commit("setName", res.student.name);

        var params ={
          uid:res.student._id,
          tuitionList:this.$store.state.tuitionPlan,
          feeList:this.$store.state.feePlan,
          term: this.$store.state.form1.term,
        tuition_way: this.$store.state.form1.tuition_way,
        course: this.$store.state.form1.course,
        cuppon_way: this.$store.state.form1.cuppon_way,
        tuitionOrigin: this.$store.state.form1.tuitionOrigin,
        tuitionMinus: this.$store.state.form1.tuitionMinus,
        tuition: this.$store.state.form1.tuition,
        room_way: this.$store.state.form1.room_way,
        room_rent: this.$store.state.form1.room_rent,
        room_deposit: this.$store.state.form1.room_deposit,
        room_manage: this.$store.state.form1.room_manage,
        room_net: this.$store.state.form1.room_net,
        pc_way: this.$store.state.form1.pc_way,
        pc_rent: this.$store.state.form1.pc_rent,
        pc_buy: this.$store.state.form1.pc_buy,
        pc_deposit: this.$store.state.form1.pc_deposit,
        cloth: this.$store.state.form1.cloth,
        blanket: this.$store.state.form1.blanket,
        clothflag: this.$store.state.form1.clothflag,
        blanketflag: this.$store.state.form1.blanketflag,
        fee: this.$store.state.form1.fee,
        feeTotal: this.$store.state.form1.feeTotal
        }
        //添加学生缴费计划
        console.log("添加缴费计划获取store="+this.$store.state.tuitionPlan)
         console.log("添加缴费计划获取store="+this.$store.state.feePlan)
        let res1 = await this.api.studentApi.payment(params)
        console.log(res1)

      }
      if (res.code == 0) {
        this.$message({
          type: "warning",
          message: "身份证号码重复"
        });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 面包屑导航样式 */
.m-nav {
  height: 44px;
  padding-left: 20px;
}
.el-breadcrumb {
  line-height: 44px;
}
/* 学生添加样式 */
.add-message {
  background: #fff;
  margin: 0 20px;
}
.title {
  font-size: 16px;
  font-weight: 300;
  height: 50px;
  line-height: 50px;
  padding-left: 35px;
  border-bottom: 1px solid #ccc;
}
/* 步骤条样式 */
.add-steps {
  padding-left: 180px;
  margin-top: 30px;
}
/* 点击下一步 */
.step-btn {
  text-align: center;
  padding-bottom: 20px;
}
</style>
