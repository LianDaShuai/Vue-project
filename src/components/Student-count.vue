<template>
  <div class="student-count">
    <div class="count-search">
      <el-form :inline="true" :model="formInline" class="demo-form-inline" size="mini">
        <el-form-item label="姓名:">
          <el-input v-model="formInline.user" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="学号:">
          <el-input v-model="formInline.user" placeholder="请输入学号"></el-input>
        </el-form-item>
        <el-form-item label="班级:">
          <el-select v-model="formInline.region" placeholder="请选择班级">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">
            <i class="el-icon-search"></i>
            搜索
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="count-table">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="id" label="id" width="180"></el-table-column>
        <el-table-column prop="uid" label="学号" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="classId" label="班级"></el-table-column>
        <el-table-column prop="term" label="学制"></el-table-column>
        <el-table-column prop="term" label="招生老师"></el-table-column>
        <el-table-column prop="ctime" label="时间"></el-table-column>
        <el-table-column prop="score" label="学分"></el-table-column>
        <el-table-column prop="record" label="添加扣分记录">
          <el-button type="primary">查看</el-button>
          <el-button type="primary">扣分</el-button>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      formInline: {
        user: "",
        region: ""
      },
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
