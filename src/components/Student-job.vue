<template>
  <div class="student">
    <div class="student-search">
      <el-form :inline="true" :model="formInline" class="demo-form-inline" size="mini">
        <el-form-item label="姓名：">
          <el-input v-model="formInline.name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="学号：">
          <el-input v-model="formInline.id" placeholder="请输入学号"></el-input>
        </el-form-item>
        <el-form-item label="证件：">
          <el-input v-model="formInline.idcard" placeholder="请输入身份证号"></el-input>
        </el-form-item>

        <el-form-item class="search-btn">
          <el-button type="primary" @click="search">
            <i class="el-icon-search"></i>
            搜索
          </el-button>
        </el-form-item>
        <el-form-item label="班级：" class="className">
          <el-select v-model="formInline.region" placeholder="全部" class="ipt">
            <el-option label="全部" value="all"></el-option>
            <div v-for="(item,index) in classList" :key="index">
              <el-option :label="item.classname" :value="item.classname"></el-option>
            </div>
          </el-select>
        </el-form-item>

        <div class="pay">
          缴费状态：
          <el-radio-group v-model="radio2">
            <el-radio label="-1">欠费</el-radio>
            <el-radio label="0">缴清</el-radio>
          </el-radio-group>
        </div>

        <el-form-item label="状态：" class="className">
          <el-select v-model="formInline.region1" placeholder="全部">
            <el-option label="全部" value="-1"></el-option>
            <el-option label="预报名" value="0"></el-option>
            <el-option label="在读" value="1"></el-option>
            <el-option label="毕业" value="2"></el-option>
            <el-option label="休学" value="3"></el-option>
            <el-option label="退学" value="4"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item class="search-btn">
          <el-button type="primary">
            <i class="el-icon-plus"></i>
            新建
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 学生列表部分 -->
    <div class="student-list">
      <el-table :data="showData" border size="mini">
        <el-table-column prop="name" label="姓名" width="70px"></el-table-column>
        <el-table-column prop="classId" label="班级"></el-table-column>
        <el-table-column prop="phone" label="手机号" width="100px"></el-table-column>
        <el-table-column prop="ctime" label="入学日期" width="120px"></el-table-column>
        <el-table-column prop="term" label="学制" width="50px"></el-table-column>
        <el-table-column prop="motherPhone" label="家长电话" width="100px"></el-table-column>
        <el-table-column prop="enroller" label="招生老师" width="70px"></el-table-column>
        <el-table-column prop="tuition" label="学费" width="60px"></el-table-column>
        <el-table-column prop="tuitionPaid" label="已缴学费"></el-table-column>
        <el-table-column prop="fee" label="杂费" width="70px"></el-table-column>
        <el-table-column prop="feePaid" label="已缴杂费"></el-table-column>
        <el-table-column prop="paystateName" label="缴费状态"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="dealSee(scope.$index)">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="page">
        <el-pagination
          background
          layout="prev, pager, next"
          @current-change="dealChange"
          :page-size="count"
          :total="tableData.length"
        ></el-pagination>
      </div>
      <div class="down-list">
        <download-excel
          class="export-excel-wrapper"
          :data="tableData"
          name="学生列表.xls"
        >
          <!-- 上面可以自定义自己的样式，还可以引用其他组件button -->
          <el-button type="primary" size="small">下载</el-button>
        </download-excel>
      </div>
    </div>
    <!-- 点击查看弹出对话框 -->
    <div class="See">
      <el-dialog
        :title="'查看学生信息-'+student_item.name+'('+student_item.id+')'"
        :visible.sync="dialogVisible"
        width="80%"
      >
        <student-see></student-see>

        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import StudentSee from "@/components/Student/StudentSee";

export default {
  name: "HelloWorld",
  data() {
    return {
      formInline: {
        name: "",
        id: "",
        idcard: "",
        classId: "",
        region: "",
        region1: ""
      },
      radio2: "-1",
      classList: [],
      // 学生列表数据
      tableData: [],
      page: 1,
      count: 5,
      showData: [],
      dialogVisible: false,
      student_item: {},
      token: window.localStorage.getItem("token")
    };
  },
  components: {
    StudentSee
  },
  created() {
    this.downClassList();
    this.downUserList();
  },
  methods: {
    /**
     * 搜索功能
     */
    //获取班级信息
    async downClassList() {
      let res = await this.api.classApi.getClassList();
      console.log(res);
      this.classList = res.list;
    },
    //点击搜索功能进行搜索
    async search() {
      //提供查询所需参数
      var dict = {
        page: 1,
        condition: {
          name: this.formInline.name,
          id: this.formInline.id,
          classId: this.formInline.region,
          paystate: this.radio2,
          status: this.formInline.region1,
          idcard: this.formInline.idcard,
          token: window.localStorage.getItem("token")
        }
      };
      //调用搜索查询的方法
      let res = await this.api.studentApi.searchStudent(dict);
      console.log("查询=" + res);
      this.tableData = res.list;
      this.showPageData();
    },
    /**
     * 获取学生列表功能
     */
    //下载学生信息
    async downUserList() {
      var res = await this.api.studentApi.getStudents();
      // console.log(res.list)
      for (var item of res.list) {
        if (item.paystate == 0) {
          item.paystateName = "欠费";
        } else {
          item.paystateName = "缴清";
        }
      }
      this.tableData = res.list;
      this.showPageData();
      // var url = userListUrl;
      // this.axios.get(url).then(res => {
      //   // console.log(res.data)
      //   this.tableData = res.data.list;

      // });
    },
    //要显示的5条数据
    showPageData() {
      // console.log(1)
      var start = (this.page - 1) * this.count;
      var subArray = this.tableData.slice(start, start + this.count);
      this.showData = subArray;
      // console.log(this.showData)
    },
    //点击分页
    dealChange(page) {
      // console.log(page)
      this.page = page;
      this.showPageData();
    },
    //点击查看
    async dealSee(index) {
      console.log(index);
      this.dialogVisible = true;
      var student_item = this.showData[index];
      console.log("点击查看" + student_item);
      this.student_item = student_item;
      this.$store.commit("getStudent_item", student_item);
      //点击查看获取费用接口
      var params = {
        uid: student_item._id,
        token: this.token
      };
      let res = await this.api.studentApi.getFee(params);
      for (var attr in res.fee) {
        res.fee[attr] = res.fee[attr] + "";
      }

      console.log(res);
      this.$store.commit("getFeeMess", res.fee);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 搜索部分的样式 */
.student-search {
  background: #fff;
  margin: 20px;
  border-radius: 5px;
  padding: 20px 0 20px 50px;
}
.pay {
  display: inline-block;
  font-size: 14px;
  margin-right: 75px;
}
.el-form-item {
  width: 270px;
}
.className {
  display: inline-block;
  width: 247px;
  margin-right: 30px;
}
.search-btn {
  width: 80px;
}
/* 学生列表部分的样式 */
.student-list {
  margin: 20px;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
}
/* 分页样式 */
.page {
  text-align: right;
  margin-top: 20px;
}
</style>
