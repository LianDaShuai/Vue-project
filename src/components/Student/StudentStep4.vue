<template>
  <div class="success-step">
    <div  class="last">
      <div class="complete">
        <i class="el-icon-success"></i>
        <p class="success">操作成功</p>
        <p>
          <span>姓名：{{$store.state.name}}</span>
          <span>学号：{{$store.state.id}}</span>
        </p>
      </div>
      <div>
        <el-button type="primary" @click="subAdd">再次添加</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      
    }
  },
  created(){
    console.log("完成中="+this.$store.state.id)
    console.log("完成中="+this.$store.state.name)
  },
  methods:{
    subAdd(){
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-icon-success{
  font-size: 100px;
  color: #52c41a;
}
.complete .success{
  font-size: 30px;
}
.complete{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.complete>p{
  font-size: 14px;
}
.last{
  min-height: 260px;
  padding:0 50px;
}
</style>
