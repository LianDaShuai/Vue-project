<template>
  <div class="deduction">
    <div class="date">
      <span>违纪日期：</span>
      <el-date-picker v-model="value1" type="date" value-format="yyyyMMdd" placeholder="选择日期" size="mini"></el-date-picker>
    </div>
    <div class="option">
      <span>违纪原因：</span>
      <el-select v-model="value" placeholder="请选择" size="mini">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <div class="number">
      <span>扣分：</span>
      <el-input type="number" v-model="value2" size="mini"></el-input>
    </div>
    <div class="btn">
      <el-button type="primary" @click="dealAdd">添加</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      value1: "",
      options:[
        {value:0,label:'睡觉'},
        {value:1,label:'手机游戏/视频'},
        {value:2,label:'电脑游戏/视频'},
        {value:3,label:'迟到'},
        {value:4,label:'旷课'},
        {value:5,label:'顶撞老师'},
        {value:6,label:'打架'},
        {value:7,label:'酗酒'},
        {value:8,label:'夜不归宿'}
      ],
      value:'',
      value2:3,
    };
  },
  created(){
    console.log("store="+this.$store.state.addScore)
  },
  methods:{
    //点击添加扣分
    async dealAdd(){
      console.log(this.$store.state.addScore.classId)
      var dict = {
        minus:this.value2,
        way:this.value,
        ctime:this.$store.state.addScore.ctime,
        classId:this.$store.state.addScore.classId,
        day:this.value1,
        enroller:this.$store.state.addScore.enroller,
        id:this.$store.state.addScore.id,
        name:this.$store.state.addScore.name,
        term:this.$store.state.addScore.term,
        token:window.localStorage.getItem("token"),
        _id:this.$store.state.addScore._id,
        score:this.$store.state.addScore.score
      }
      let res = await this.api.scoreApi.addDeduction(dict)
      console.log(res)
      if(res.code == 1){
        alert("添加成功")
        // this.$emit("sendChange",false)
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>  
  .deduction{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .number{
    display: flex;
  }
  .number span{
    display: inline-block;
    width: 80px;
    line-height: 40px;
  }
  .option{
    margin: 20px 0;
  }
</style>
