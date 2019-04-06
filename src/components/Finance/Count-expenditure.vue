<template>
  <div class="expend-count">
    <div class="count-content">
      <el-form size="mini" class="count-title">
        <el-form-item label="时间:">
          <el-date-picker
            v-model="value"
            type="daterange"
            range-separator="~"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            style="width:220px"
            value-format="yyyyMMdd"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="周期:" class="count-radio">
          <el-radio-group v-model="radio">
            <el-radio :label="1">按日</el-radio>
            <el-radio :label="2">按月</el-radio>
            <el-radio :label="3">按支出类型</el-radio>
            <el-radio :label="4">按支出方式</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-button type="primary" size="mini" @click="dealClick">统计</el-button>
      </el-form>
    </div>
    <div class="echarts-content" v-show="isShow">
      <div id="main" style="width: 600px;height:400px;" ref="chart" ></div>
    </div>
  </div>
</template>

<script>
let echarts = require("echarts/lib/echarts");
require("echarts/lib/chart/bar");
export default {
  name: "HelloWorld",
  data() {
    return {
      value: "",
      radio: "",
      xdata: [],
      ydata: [],
      isShow: false
    };
  },
  mounted() {
    this.myCharts();
  },
  methods: {
    myCharts() {
      var chart = this.$refs.chart;
      //  console.log(chart)
      let myChart = echarts.init(this.$refs.chart);
      // 绘制图表
      myChart.setOption({
        title: { text: "支出统计" },
        tooltip: {},
        xAxis: {
          data: this.xdata
        },
        yAxis: {},
        series: [
          {
            name: "支出",
            type: "bar",
            data: this.ydata
          }
        ]
      });

      // // 使用刚指定的配置项和数据显示图表。
      // myChart.setOption(option);
    },
    //点击统计
    async dealClick() {
      this.xdata = [];
      this.ydata = [];
      var dict = {
        statby: this.radio,
        from: this.value[0],
        to: this.value[1],
        token: window.localStorage.getItem("token")
      };
      let res = await this.api.financeApi.countExpend(dict);
      if (res.code == 1) {
        if(res.list !=0){
           this.isShow = true;
        console.log(res.list);
        for (var item of res.list) {
          console.log(item);
          this.xdata.unshift(item._id);
          this.ydata.unshift(item.sum);
        }
        this.myCharts();
        }else{
          this.$message({
            type:"warning",
            message:"没有查找到数据"
          })
        }
       
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.expend-count {
  background: #fff;
  margin: 20px 20px 0 20px;
}
.count-content {
  overflow: hidden;
}
.count-title {
  display: flex;
  align-items: center;
}
.el-form-item {
  width: 300px;
}
.count-radio {
  width: 500px;
  margin: 0;
}
.el-form-item {
  margin: 0;
}
.el-form {
  margin: 20px 0 20px 20px;
}
#main{
 margin-left: 260px;
}
</style>
