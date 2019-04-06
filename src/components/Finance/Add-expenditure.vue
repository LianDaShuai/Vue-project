<template>
  <div class="add-expenditure">
    <div class="expenditure-search">
      <el-form
        :inline="true"
        :model="searchList"
        class="demo-form-inline"
        size="mini"
        label-width="10"
      >
        <el-form-item label="姓名:">
          <el-input v-model="searchList.name" placeholder="请输入姓名" style="width:220px"></el-input>
        </el-form-item>
        <el-form-item label="支出类型:">
          <el-select v-model="searchList.type" placeholder="请选择支出类型">
            <el-option label="全部" value="-1"></el-option>
            <el-option label="管理费用-办公用品" value="0"></el-option>
            <el-option label="管理费用-水电费" value="1"></el-option>
            <el-option label="管理费用-房租/科经管" value="2"></el-option>
            <el-option label="管理费用-房租/赋腾" value="3"></el-option>
            <el-option label="管理费用-房租/其它" value="4"></el-option>
            <el-option label="管理费用-工资" value="5"></el-option>
            <el-option label="管理费用-社保/公积金" value="6"></el-option>
            <el-option label="管理费用-个税" value="7"></el-option>
            <el-option label="管理费用-增值税" value="8"></el-option>
            <el-option label="管理费用-交通费" value="9"></el-option>
            <el-option label="管理费用-招待费" value="10"></el-option>
            <el-option label="管理费用-住宿费" value="11"></el-option>
            <el-option label="管理费用-加油费" value="12"></el-option>
            <el-option label="退费/住宿押金" value="13"></el-option>
            <el-option label="退费/电脑押金" value="14"></el-option>
            <el-option label="退费/学费" value="15"></el-option>
            <el-option label="退费/学历费" value="16"></el-option>
            <el-option label="学历费" value="17"></el-option>
            <el-option label="财务费用" value="18"></el-option>
            <el-option label="贷款保证金" value="19"></el-option>
            <el-option label="宿舍押金" value="20"></el-option>
            <el-option label="床/被褥/桌椅" value="21"></el-option>
            <el-option label="印刷费/快递费" value="22"></el-option>
            <el-option label="电脑租金/购买/通讯费" value="23"></el-option>
            <el-option label="市场工资" value="24"></el-option>
            <el-option label="其它" value="25"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSearch">
            <i class="el-icon-search"></i>
            搜索
          </el-button>
        </el-form-item>
        <el-form-item label="时间:">
          <el-date-picker
            v-model="value6"
            type="daterange"
            range-separator="~"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            style="width:220px"
            value-format="yyyyMMdd"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="支出方式:">
          <el-select v-model="searchList.way" placeholder="请选择支出方式">
            <el-option label="全部" value="-1"></el-option>
            <el-option label="现金" value="0"></el-option>
            <el-option label="刘卡" value="1"></el-option>
            <el-option label="名博-BB" value="2"></el-option>
            <el-option label="名博-CMB" value="3"></el-option>
            <el-option label="万众" value="4"></el-option>
            <el-option label="微信" value="5"></el-option>
            <el-option label="支付宝" value="6"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="addDialogVisible=true">
            <i class="el-icon-plus"></i>
            新建
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="expendList">
      <el-table :data="tableData" border style="width: 100%" size="mini">
        <el-table-column prop="_id" label="ID" width="100"></el-table-column>
        <el-table-column prop="name" label="姓名" width="100"></el-table-column>
        <el-table-column prop="typeName" label="类型" width="130"></el-table-column>
        <el-table-column prop="money" label="金额"></el-table-column>
        <el-table-column prop="wayName" label="支出方式"></el-table-column>
        <el-table-column prop="day" label="支出日期"></el-table-column>
        <el-table-column prop="ctime" label="录入时间" width="150"></el-table-column>
        <el-table-column prop="invoiceName" label="发票"></el-table-column>
        <el-table-column prop label="编辑" width="160">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="modify(scope.$index)">修改</el-button>
            <el-button type="primary" size="mini" @click="deleteExpend(scope.$index)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 点击添加 -->
    <div class="add-box">
      <el-dialog title="添加支出记录" :visible.sync="addDialogVisible" width="50%">
        <el-form size="mini" :model="form" label-width="100px">
          <el-form-item label="姓名:">
            <el-input v-model="form.name" placeholder="请输入姓名" style="width:260px"></el-input>
          </el-form-item>
          <el-form-item label="费用类型:">
            <el-select v-model="form.type" placeholder="请选择支出类型" style="width:260px">
              <el-option label="全部" value="-1"></el-option>
              <el-option label="管理费用-办公用品" value="0"></el-option>
              <el-option label="管理费用-水电费" value="1"></el-option>
              <el-option label="管理费用-房租/科经管" value="2"></el-option>
              <el-option label="管理费用-房租/赋腾" value="3"></el-option>
              <el-option label="管理费用-房租/其它" value="4"></el-option>
              <el-option label="管理费用-工资" value="5"></el-option>
              <el-option label="管理费用-社保/公积金" value="6"></el-option>
              <el-option label="管理费用-个税" value="7"></el-option>
              <el-option label="管理费用-增值税" value="8"></el-option>
              <el-option label="管理费用-交通费" value="9"></el-option>
              <el-option label="管理费用-招待费" value="10"></el-option>
              <el-option label="管理费用-住宿费" value="11"></el-option>
              <el-option label="管理费用-加油费" value="12"></el-option>
              <el-option label="退费/住宿押金" value="13"></el-option>
              <el-option label="退费/电脑押金" value="14"></el-option>
              <el-option label="退费/学费" value="15"></el-option>
              <el-option label="退费/学历费" value="16"></el-option>
              <el-option label="学历费" value="17"></el-option>
              <el-option label="财务费用" value="18"></el-option>
              <el-option label="贷款保证金" value="19"></el-option>
              <el-option label="宿舍押金" value="20"></el-option>
              <el-option label="床/被褥/桌椅" value="21"></el-option>
              <el-option label="印刷费/快递费" value="22"></el-option>
              <el-option label="电脑租金/购买/通讯费" value="23"></el-option>
              <el-option label="市场工资" value="24"></el-option>
              <el-option label="其它" value="25"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="金额:">
            <el-input type="number"  v-model="form.money" style="width:100px"></el-input>
          </el-form-item>
          <el-form-item label="实际支出时间:">
            <el-date-picker v-model="form.day" type="date" placeholder="选择日期" style="width:180px" value-format="yyyyMMdd"></el-date-picker>
          </el-form-item>
          <el-form-item label="付款方式:">
            <el-select v-model="form.way" placeholder="请选择支出方式" style="width:260px">
              <el-option label="全部" value="-1"></el-option>
              <el-option label="现金" value="0"></el-option>
              <el-option label="刘卡" value="1"></el-option>
              <el-option label="名博-BB" value="2"></el-option>
              <el-option label="名博-CMB" value="3"></el-option>
              <el-option label="万众" value="4"></el-option>
              <el-option label="微信" value="5"></el-option>
              <el-option label="支付宝" value="6"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="备注:">
            <el-input v-model="form.remark" style="width:260px"></el-input>
          </el-form-item>
          <el-button type="primary" size="mini" @click="newAdd">保存</el-button>
        </el-form>
      </el-dialog>
    </div>
    <!-- 点击修改 -->
    <div class="modify-box">
      <el-dialog title="添加支出记录" :visible.sync="dialogVisible" width="50%">
        <el-form size="mini" :model="modifyList" label-width="100px">
          <el-form-item label="姓名:">
            <el-input v-model="modifyList.name" placeholder="请输入姓名" style="width:260px"></el-input>
          </el-form-item>
          <el-form-item label="费用类型:">
            <el-select v-model="modifyList.type" placeholder="请选择支出类型" style="width:260px">
              <el-option label="全部" value="-1"></el-option>
              <el-option label="管理费用-办公用品" value="0"></el-option>
              <el-option label="管理费用-水电费" value="1"></el-option>
              <el-option label="管理费用-房租/科经管" value="2"></el-option>
              <el-option label="管理费用-房租/赋腾" value="3"></el-option>
              <el-option label="管理费用-房租/其它" value="4"></el-option>
              <el-option label="管理费用-工资" value="5"></el-option>
              <el-option label="管理费用-社保/公积金" value="6"></el-option>
              <el-option label="管理费用-个税" value="7"></el-option>
              <el-option label="管理费用-增值税" value="8"></el-option>
              <el-option label="管理费用-交通费" value="9"></el-option>
              <el-option label="管理费用-招待费" value="10"></el-option>
              <el-option label="管理费用-住宿费" value="11"></el-option>
              <el-option label="管理费用-加油费" value="12"></el-option>
              <el-option label="退费/住宿押金" value="13"></el-option>
              <el-option label="退费/电脑押金" value="14"></el-option>
              <el-option label="退费/学费" value="15"></el-option>
              <el-option label="退费/学历费" value="16"></el-option>
              <el-option label="学历费" value="17"></el-option>
              <el-option label="财务费用" value="18"></el-option>
              <el-option label="贷款保证金" value="19"></el-option>
              <el-option label="宿舍押金" value="20"></el-option>
              <el-option label="床/被褥/桌椅" value="21"></el-option>
              <el-option label="印刷费/快递费" value="22"></el-option>
              <el-option label="电脑租金/购买/通讯费" value="23"></el-option>
              <el-option label="市场工资" value="24"></el-option>
              <el-option label="其它" value="25"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="金额:">
            <el-input type="number"  v-model="modifyList.money" style="width:100px"></el-input>
          </el-form-item>
          <el-form-item label="实际支出时间:">
            <el-date-picker v-model="modifyList.utime" type="date" placeholder="选择日期" style="width:180px" value-format="yyyyMMdd"></el-date-picker>
          </el-form-item>
          <el-form-item label="付款方式:">
            <el-select v-model="modifyList.way" placeholder="请选择支出方式" style="width:260px">
              <el-option label="全部" value="-1"></el-option>
              <el-option label="现金" value="0"></el-option>
              <el-option label="刘卡" value="1"></el-option>
              <el-option label="名博-BB" value="2"></el-option>
              <el-option label="名博-CMB" value="3"></el-option>
              <el-option label="万众" value="4"></el-option>
              <el-option label="微信" value="5"></el-option>
              <el-option label="支付宝" value="6"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="备注:">
            <el-input v-model="modifyList.remark" style="width:260px"></el-input>
          </el-form-item>
          <el-button type="primary" size="mini" @click="Preservation">保存</el-button>
        </el-form>
      </el-dialog>
    </div>
    <div class="delete-box"></div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      searchList: {
        type: "-1",
        way: "-1"
      },
      value6: [],
      tableData: [],
      dialogVisible: false,
      modifyList: {
        // day:"2019-04-03"
      },
      addDialogVisible:false,
      form:{}
    };
  },
  created() {
    this.downExoendList();
  },
  methods: {
    //下载费用列表
    async downExoendList() {
      let res = await this.api.financeApi.getexpend();
      // console.log(res);
      this.ergodic(res.list);
    },
    //点击搜索
    async onSearch() {
      var dict = {
        name: this.searchList.name,
        from: this.value6[0],
        to: this.value6[1],
        token: window.localStorage.getItem("token")
      };
      if (this.searchList.type != -1) {
        dict.type = this.searchList.type;
      }
      if (this.searchList.way != -1) {
        dict.way = this.searchList.way;
      }

      let searchList = await this.api.financeApi.getSearchExpend(dict);
      // console.log(searchList);
      this.ergodic(searchList.list);
    },
    //点击添加
    async newAdd() {
      // var date = new date()
      // console.log(date)
      var dict = {
        day:this.form.day,
        money:this.form.money,
        name:this.form.name,
        paytime:this.form.day,
        remark:this.form.remark,
        token:window.localStorage.getItem("token"),
        type:this.form.type,
        way:this.form.way
      }
      let res = await this.api.financeApi.addExpend(dict)
      // console.log(res)
      if(res.code == 1){
        this.addDialogVisible = false
        this.$message({
          type:"success",
          message:"添加成功"
        })
        this.downExoendList()
      }else{
        this.$message({
          type:"warning",
          message:"添加失败"
        })
      }
    },
    //遍历数据并修改
    ergodic(list) {
      for (var item of list) {
        // console.log(item);
        if (item.type == -1) {
          item.typeName = "全部";
        } else if (item.type == 0) {
          item.typeName = "管理费用-办公用品";
        } else if (item.type == 1) {
          item.typeName = "管理费用-水电费";
        } else if (item.type == 2) {
          item.typeName = "管理费用-房租/科经管";
        } else if (item.type == 3) {
          item.typeName = "管理费用-房租/赋腾";
        } else if (item.type == 4) {
          item.typeName = "管理费用-房租/其它";
        } else if (item.type == 5) {
          item.typeName = "管理费用-工资";
        } else if (item.type == 6) {
          item.typeName = "管理费用-社保/公积金";
        } else if (item.type == 7) {
          item.typeName = "管理费用-个税";
        } else if (item.type == 8) {
          item.typeName = "管理费用-增值税";
        } else if (item.type == 9) {
          item.typeName = "管理费用-交通费";
        } else if (item.type == 10) {
          item.typeName = "管理费用-招待费";
        }
        if (item.way == -1) {
          item.wayName = "全部";
        } else if (item.way == 0) {
          item.wayName = "现金";
        } else if (item.way == 1) {
          item.wayName = "刘卡";
        } else if (item.way == 2) {
          item.wayName = "名博-BB";
        } else if (item.way == 3) {
          item.wayName = "名博-CMB";
        } else if (item.way == 4) {
          item.wayName = "万众";
        } else if (item.way == 5) {
          item.wayName = "微信";
        } else if (item.way == 6) {
          item.wayName = "支付宝";
        }
        if (item.invoice == 0) {
          item.invoiceName = "无";
        }
      }
      this.tableData = list;
    },
    //点击修改按钮弹出修改窗口
    modify(index) {
      this.dialogVisible = true;
      // console.log(index)
      var modifyList = this.tableData[index]
      console.log(modifyList)
      
      this.modifyList = modifyList
    },
    //点击保存修改
    async Preservation(){
      var dict = {
        day:this.modifyList.day,
        money:this.modifyList.money,
        name:this.modifyList.name,
        paytime:this.modifyList.ctime,
        token:window.localStorage.getItem("token"),
        type:this.modifyList.type,
        way:this.modifyList.way,
        _id:this.modifyList._id
      }
      let res = await this.api.financeApi.modifyExpend(dict)
      // console.log("点击保存="+res)
      if(res.code == 1) {
        this.dialogVisible = false
        this.$message({
          message: '修改成功',
          type: 'success'
        });
        this.downExoendList()
      }
    },
    //点击删除
    async deleteExpend(index){
      console.log(index)
      var deleteitem = this.tableData[index]
      var dict = {
        _id: deleteitem._id,
        token:window.localStorage.getItem("token")
      }
      let res = await this.api.financeApi.deleteExpend(dict)
      console.log(res)
      if(res.code == 1){
        this.$message({
          type:"success",
          message:"删除成功"
        })
        this.downExoendList()
      }

    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.add-expenditure {
  background: #fff;
  margin: 20px 20px 0 20px;
  padding: 20px 30px;
}
.expenditure-search {
  width: 900px;
}
.el-form-item--mini {
  width: 270px;
}
/* 修改弹出框样式 */
  .modify-box .el-form{
    display: flex;
    flex-direction: column;
    align-items: center; 
  }
  .modify-box .el-form-item{
    width: 400px;
  }
  .add-box .el-form{
     display: flex;
    flex-direction: column;
    align-items: center; 
  }
  .add-box .el-form-item{
    width: 400px;
  }
</style>
