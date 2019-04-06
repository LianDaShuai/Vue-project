<template>
  <div class="expenditure">
    <div class="expenditure-title">
      <div @click="isShow=1" :class="isShow==1?className:''">新增支出/查询支出</div>
      <div @click="isShow=2" :class="isShow==2?className:''">支出统计</div>
    </div>
    <add-expenditure v-if="isShow == 1"></add-expenditure>
    <count-expenditure v-if="isShow == 2"></count-expenditure>
  </div>
</template>

<script>
import AddExpenditure from './Add-expenditure'
import CountExpenditure from './Count-expenditure'

export default {
  name: 'HelloWorld',
  data () {
    return {
      isShow:1,
      className:["active"]
    }
  },
  components:{
    AddExpenditure,
    CountExpenditure
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .expenditure-title{
    display: flex;
    font-size: 14px;
    border-bottom: 1px solid #ccc;
    height: 40px;
    line-height: 40px;
    margin: 20px 20px 0 20px;
  }
  .expenditure-title>div{
    border: 1px solid #ccc;
    border-bottom: none;
    border-radius: 3px 3px 0 0;
    margin-right: 4px;
    padding: 0 10px;
    background: #fafafa;
  }
  .expenditure-title>div:hover{
    color: #1890ff;
    cursor: pointer;
  }
  .expenditure-title>div.active{
    background: #fff;
    color: #1890ff;
  }
</style>
