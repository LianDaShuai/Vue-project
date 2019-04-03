<template>
  <div class="score-see">
     <el-table :data="SeeScore" border style="width: 100%" size="mini">
        <el-table-column prop="_id" label="id" width="70"></el-table-column>
        <el-table-column prop="name" label="姓名" width="120"></el-table-column>
        <el-table-column prop="classId" label="班级" width="70"></el-table-column>
        <el-table-column prop="ctime" label="录入时间"></el-table-column>
        <el-table-column prop="term" label="违纪日期" width="70"></el-table-column>
        <el-table-column prop="way" label="原因" width="70"></el-table-column>
        <el-table-column prop="ctime" label="扣分" width="130"></el-table-column>
        <el-table-column prop="score" label="剩余"></el-table-column>
      </el-table>
      
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      SeeScore:[]
    }
  },
  created(){
    this.SeeScore = this.$store.state.childScoreList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
