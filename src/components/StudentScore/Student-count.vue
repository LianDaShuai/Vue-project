<template>
  <div class="student-count">
    <div class="count-search">
      <el-form :inline="true" :model="formInline" class="demo-form-inline" size="mini">
        <el-form-item label="姓名:">
          <el-input v-model="formInline.name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="学号:">
          <el-input v-model="formInline.uid" placeholder="请输入学号"></el-input>
        </el-form-item>
        <el-form-item label="班级:">
          <el-select v-model="formInline.classId" placeholder="请选择班级">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="dealSearch">
            <i class="el-icon-search"></i>
            搜索
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="count-table">
      <el-table :data="showData" border style="width: 100%" size="mini">
        <el-table-column prop="_id" label="id" width="70"></el-table-column>
        <el-table-column prop="id" label="学号" width="120"></el-table-column>
        <el-table-column prop="name" label="姓名" width="70"></el-table-column>
        <el-table-column prop="classId" label="班级"></el-table-column>
        <el-table-column prop="term" label="学制" width="70"></el-table-column>
        <el-table-column prop label="招生老师" width="70"></el-table-column>
        <el-table-column prop="ctime" label="时间" width="130"></el-table-column>
        <el-table-column prop="score" label="学分"></el-table-column>
        <el-table-column prop="record" label="添加扣分记录" width="180">
          <template slot-scope="scope">
          <el-button type="primary" size="mini"  @click="dealDialog(scope.$index)">查看</el-button>
          <el-button type="primary" size="mini"  @click="dealDialog1(scope.$index)">扣分</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="page">
        <el-pagination
          background
          layout="sizes,prev, pager, next,jumper"
          :total="tableData.length"
          @current-change="dealChange"
          :page-sizes="[5,10,20,30]"
          @size-change="dealSize"
        ></el-pagination>
      </div>
    </div>
    <div class="dialog-see">
      <el-dialog :title="'查看违纪扣分记录-'+student_score.name+'('+student_score._id+'-'+student_score.id+'-'+student_score.classId+'班)'" :visible.sync="dialogVisible" width="80%" >
        <student-see></student-see>
      </el-dialog>
    </div>
    <div class="dialog-deduction">
      <el-dialog :title="'查看违纪扣分记录-'+student_score.name+'('+student_score._id+'-'+student_score.id+'-'+student_score.classId+'班)'" :visible.sync="dialogVisible1" width="50%" >
        <deduction></deduction>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import StudentSee from './Score-see.vue'
import deduction from './Deduction.vue'
export default {
  name: "HelloWorld",
  data() {
    return {
      formInline: {
        name: "",
        uid: "",
        classId: ""
      },
      tableData: [], //下载到的所有数据
      page: 1, //要显示的页数
      count: 10,
      showData: [], //要显示的数据,
      dialogVisible:false,
       dialogVisible1:false,
      student_score:{},
    };
  },
  components:{
    StudentSee,
    deduction

  },
  created() {
   
    this.downScoreList();
  },
  methods: {
    //显示页面上学生学分数据
    async downScoreList() {
      let res = await this.api.scoreApi.getScore();
      console.log(res);
      for (var item of res.list) {
        // console.log(item.ctime)
        item.ctime = item.ctime.slice(0, 10);
      }
      this.tableData = res.list;
      this.showScoreList();
    },
    //对数据进行分页
    showScoreList() {
      var start = (this.page - 1) * this.count;
      var subArray = this.tableData.slice(start, start + this.count);
      this.showData = subArray;
    },
    //点击分页
    dealChange(page) {
      // console.log(page);
      this.page = page;
      this.showScoreList();
    },
    //点击调整每页显示数
    dealSize(size) {
      console.log(size);
      this.count = size;
      this.showScoreList();
    },
    //点击进行搜索功能
    async dealSearch() {
      var dict = {
        name: this.formInline.name,
        id: this.formInline.uid,
        classId: this.formInline.classId,
        token: window.localStorage.getItem("token")
      };
      let res = await this.api.scoreApi.searchScore(dict);
      console.log(res);
      this.tableData = res.list;
      this.showScoreList();
    },
    //点击查看
    async dealDialog(index){
      this.dialogVisible = true
      console.log(index)
      var student_score = this.showData[index]
      this.student_score = student_score
      console.log(student_score)
      var dict = {
        _id:student_score._id,
        term:student_score.term,
        name:student_score.name,
        classId:student_score.classId,
        enroller:student_score.enroller,
        id:student_score.id,
        ctime:student_score.ctime,
        uid:student_score._id,
        token:window.localStorage.getItem("token")
      }
      let res= await this.api.scoreApi.getScoreSee(dict)
      console.log(res.list)
      this.$store.commit("childScore",res.list)
    },
    //点击扣分
    dealDialog1(index){
      this.dealDialog1 = true
      var student_score = this.showData[index]
      this.student_score = student_score
      this.$store.commit("setAddScore",student_score)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page {
  text-align: right;
  margin-top: 20px;
  background: #fff;
}
.student-count {
  background: #f2f2f2;
  padding-top: 20px;
}
.count-table {
  margin-top: 20px;
  border-radius: 5px;
  padding: 20px;
  background: #fff;
}
.count-search {
  background: #fff;
  padding-top: 10px;
  padding: 30px 0 20px 20px;
  border-radius: 5px;
}
.el-tabs--border-card > .el-tabs__content {
  box-sizing: border-box;
}
</style>
