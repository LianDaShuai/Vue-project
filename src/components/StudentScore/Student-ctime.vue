<template>
  <div class="Student-ctime">
    <div class="ctime-content">
      <div class="date-title">
        <el-date-picker
          v-model="value"
          type="daterange"
          range-separator="~"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          size="mini"
          value-format="yyyyMMdd"
        ></el-date-picker>
        <el-button type="primary" size="mini" @click="dealSearch">
          <i class="el-icon-search"></i>
          搜索
        </el-button>
      </div>
      <div class="date-content">
        <el-table :data="showData" border style="width: 100%" size="mini">
          <el-table-column prop="_id" label="id" width="70"></el-table-column>
          <el-table-column prop="uid" label="学号" width="120"></el-table-column>
          <el-table-column prop="name" label="姓名" width="70"></el-table-column>
          <el-table-column prop="classId" label="班级" width="100"></el-table-column>
          <el-table-column prop="day" label="违纪日期"></el-table-column>
          <el-table-column prop="wayName" label="原因" width="100"></el-table-column>
          <el-table-column prop="minus" label="扣分" width="130"></el-table-column>
          <el-table-column prop="left" label="剩余学分"></el-table-column>
        </el-table>
        <div class="page">
          <el-pagination
            background
            layout="sizes,prev, pager, next,jumper"
            :total="tableData.length"
            @current-change="dealChange"
            :page-sizes="[5,10,15,20,30]"
            @size-change="dealSize"
          ></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      value: "",
      tableData: [],
      showData: [],
      page: 1,
      count: 10
    };
  },
  methods: {
    async dealSearch() {
      var dict = {
        from: this.value[0],
        to: this.value[1],
        token: window.localStorage.getItem("token")
      };
      //调用按日期搜索方法
      let res = await this.api.scoreApi.getCtimeScore(dict);
      console.log(res);
      if (res.code == 1) {
        for (var item of res.list) {
          if (item.way == 1) {
            item.wayName = "手机游戏/视频";
          }
          if (item.way == 5) {
            item.wayName = "顶撞老师";
          }
          if (item.way == 3) {
            item.wayName = "迟到";
          }
          if (item.way == 0) {
            item.wayName = "睡觉";
          }
          if (item.way == 4) {
            item.wayName = "旷课";
          }
          if (item.way == 2) {
            item.wayName = "电脑游戏/视频";
          }
        }
        this.tableData = res.list;
        this.showDataList();
      }
    },
    //要显示的每页数据
    showDataList() {
      var start = (this.page - 1) * this.count;
      var subArray = this.tableData.slice(start, start + this.count);
      this.showData = subArray;
    },
    //点击分页
    dealChange(page) {
      // console.log(page);
      this.page = page;
      this.showDataList();
    },
    //点击调整每页显示数
    dealSize(size) {
      console.log(size);
      this.count = size;
      this.showDataList();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Student-ctime {
  background: #f1f1f1;
  padding-top: 20px;
}
.date-title {
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  margin-top: 20px;
}
.date-content {
  margin-top: 30px;
  padding: 0 30px;
}
.ctime-content {
  background: #fff;
  min-height: 400px;
  overflow: hidden;
  border-radius: 5px;
}
.page{
  text-align: right;
  margin-top: 20px;
}
</style>
