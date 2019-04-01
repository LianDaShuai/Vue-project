import request from './request.js'

var studentUrl = 'apis/student'
var feeUrl ='apis/student/fee'
var searchUrl = "apis/student/searchStudents"
var paymentUrl = "apis/student/payment"

//添加学生方法
function addUser(params){
    return request.request({
        url:studentUrl,
        method:"post",
        params:params
    })
}
//获取学生列表方法
function getStudents(params){
    return request.request({
        url:studentUrl,
        method:"get",
        params:params
    })
}

//学生查询搜索方法
function searchStudent(params){
    return request.request({
        url:searchUrl,
        method:"post",
        params:params
    })
}

//点击查看获取返回对应学生费用信息
function getFee(params){
    return request.request({
        url:feeUrl,
        method:"get",
        params:params
    })
}
//发送添加费用信息
function payment(params){
    return request.request({
        url:paymentUrl,
        method:"post",
        params:params
    })
}


export default{
    addUser,        //添加学生信息
    getStudents,    //获取学生列表
    searchStudent,  //学生查询
    getFee,          //获取点击查看对应学生的费用信息
    payment          //添加缴费计划
}