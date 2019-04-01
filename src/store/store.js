import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)



const store = new Vuex.Store({
  state: {
    isCollapse: false,
    classList: [],
    userList: [],
    active: 0,
    form: {
      name: "",
      phone: "",
      idcard: "",
      address: "",
      edu_level: "3",
      edu_school: "",
      edu_profession: "",
      classId: "",
      sex: "0",
      father: "",
      mother: "mom",
      fatherPhone: "",
      motherPhone: "",
      source: "3",
      traffic: "1",
      enroller: "",
      consultant: "",
      remark: ""
    },
    form1: {
      term: "6",
      tuition_way: "1",
      course: "1",
      cuppon_way: "0",
      tuitionOrigin: 22800,
      tuitionMinus: 0,
      tuition: 22800,
      room_way: "2",
      room_rent: 3600,
      room_deposit: 600,
      room_manage: 300,
      room_net: 180,
      pc_way: "1",
      pc_rent: 0,
      pc_buy: 1700,
      pc_deposit: 0,
      cloth: 300,
      blanket: 200,
      clothflag: "1",
      blanketflag: "1",
      fee: 6880,
      feeTotal: 29680
    },
    name: '',
    id: '',
    student_item: {},
    feeMess: {},
    tuition: '',
    Fee: '',
    tuitionPlan: [],
    feePlan: []
  },
  getters: {
    getTuition(state){
      console.log(state.getDate)
      state.tuitionPlan.push({
        key: '0',
        dealline:"2019-04-01",
        money: state.form1.tuition, //应缴总的学费
        left: state.form1.tuition
      })
      return state.tuitionPlan
    },
    getFee(state){
      state.feePlan.push({
        key: '0',
        dealline: "2019-04-01",
        money:state.form1.fee, //应缴总的学费
        left: state.form1.fee
      })
      return state.feePlan
    }
  },
  mutations: {
    setIsCollapse(state, title) {
      state.isCollapse = title
    },
    //班级信息
    setClassList(state, title) {
      state.classList = title
    },
    //咨询老师信息
    setUserList(state, title) {
      state.userList = title
    },
    //点击下一步
    setActive(state, title) {
      state.active = title
    },
    //获取添加学生信息
    setAddStep1(state, title) {
      state.form = title
    },
    //获取缴费信息
    setAddStep2(state, title) {
      state.form1 = title
    },
    setId(state, title) {
      state.id = title
    },
    setName(state, title) {
      state.name = title
    },
    //点击查看获取单个学生信息
    getStudent_item(state, title) {
      state.student_item = title
    },
    //获取费用信息
    getFeeMess(state, title) {
      state.feeMess = title
    },
    //获取第二步储存的应缴学费
    getTuition(state, title) {
      state.form1.tuition = title
    },
    //获取第二步储存的应缴杂费
    getFee(state, title) {
      state.form1.Fee = title
    },
    //获取缴费计划中的学费缴纳
    setTuitonPlan(state, title) {
      console.log("title=" + title)
      state.tuitionPlan = title
    },
    //获取缴费计划中的杂费缴纳
    setFeePlan(state, title) {
      console.log("title=" + title)
      state.feePlan = title
    },
    //获取当前时间
    setGetDate(state,title){
      state.getDate = title
    }
  },
  actions: {

  }
})



export default store
