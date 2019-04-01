<template>
  <div class="add-fee-time">
     <div class="pay-time" >
        <div class="tuition-time">
          <div class="tuition-title">学费-缴费时间(总额:{{$store.state.form1.tuition}})</div>
          <div>
              <table border>
                <tr>
                  <td>缴费时间</td>
                  <td>金额</td>
                  <td>操作</td>
                </tr>
                <tr v-for="(item,index) in tableDate" :key="index">
                  <td>
                    <input type="text" v-model="item.dealline">
                  </td>
                  <td>
                    <input type="text" v-model="item.left">
                  </td>
                  <td>
                    <el-button type="primary" icon="el-icon-delete" circle></el-button>
                    <el-button type="primary" icon="el-icon-plus" circle  @click="dealAddTuition(index)"></el-button>
                  </td>
                </tr>
              </table>
              
          </div>
        </div>
        <div class="fee-time">
          <div class="tuition-title">杂费-缴费时间(总额:{{$store.state.form1.fee}})</div>
          <div>
              <table border >
                <tr>
                  <td>缴费时间</td>
                  <td>金额</td>
                  <td>操作</td>
                </tr>
                <tr v-for="(item,index) in tableFee" :key="index">
                  <td>
                    <input type="text" v-model="item.dealline">
                  </td>
                  <td>
                    <input type="text" v-model="item.left">
                  </td>
                  <td>
                    <el-button type="primary" icon="el-icon-delete" circle></el-button>
                    <el-button type="primary" icon="el-icon-plus" circle @click="dealAddFee(index)"></el-button>
                  </td>
                </tr>
              </table>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      tableDate:[],
      tableFee:[],
      tuition:this.$store.state.form1.tuition,
      fee:this.$store.state.form1.fee
    }
  },
  created(){
    this.$store.commit("setGetDate",this.getDate())
    this.tableDate = this.$store.state.tuitionPlan
    this.tableFee = this.$store.state.feePlan
    console.log(this.getDate())
    console.log("传过来的="+this.$store.state.getDate)
  },
  beforeUpdate(){
     this.$store.commit("setTuitonPlan",this.tableDate)
     this.$store.commit("setFeePlan",this.tableFee)
  },
  methods:{
     getDate() {

      var date = new Date();
      var seperator1 = "-";
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      var currentdate = year + seperator1 + month + seperator1 + strDate;
      return currentdate

    },
    //点击学费添加计划
    dealAddTuition(index){
     var temp = 0
     for(var item of this.tableDate){
       temp = parseInt(temp)+parseInt(item.left)
     }
     if(temp==this.tuition){
       return
     }else{
       var key = this.tableDate.length
       var left = parseInt(this.tuition)-parseInt(temp)
       this.tableDate.push({
         key:key,
         left:left,
         dealline:this.getDate(),
         money:this.tuition
       })
       console.log("第二步上传到store="+this.tableDate)
      
     }
    },
    //点击杂费添加计划
     dealAddFee(index){
     var temp = 0
     for(var item of this.tableFee){
       temp = parseInt(temp)+parseInt(item.left)
     }
     if(temp==this.fee){
       return
     }else{
       var key = this.tableFee.length
       var left = parseInt(this.fee)-parseInt(temp)
       this.tableFee.push({
         key:key,
         left:left,
         dealline:this.getDate(),
         money:this.fee
       })
       console.log("第二步上传到store="+this.tableFee)
       
     }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  table{
  border-collapse: collapse;
  border: #ccc;
  width: 700px;
  height: 50px;
}
.pay-time{
  text-align: center;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pay-time input{
  border: none;
  padding:10px 0 10px 20px;  
}
.tuition-title{
  margin-bottom: 20px;
}
.tuition-time{
  margin-bottom: 20px;
}
.add-fee-time{
  margin-bottom: 30px;
}
</style>
