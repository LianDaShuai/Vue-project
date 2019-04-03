import request from './request.js'

var scoreUrl = 'apis/student/scores'
var scoreMinusUrl = 'apis/student/score/minus' //参数from,to,token
var scoreSeeUrl = 'apis/student/score'

//获取学分管理列表
function getScore(params){
    return request.request({
        url:scoreUrl,
        method:"get",
        params:params
    })
}
//学分搜索接口
function searchScore(params){
    return request.request({
        url:scoreUrl,
        method:"get",
        params:params
    })
}
//按时间统计获取列表
function getCtimeScore(params){
    return request.request({
        url:scoreMinusUrl,
        method:"get",
        params:params
    })
}
//点击查看发送接口
function getScoreSee(params){
    return request.request({
        url:scoreSeeUrl,
        method:"get",
        params:params
    })
}
//点击扣分
function addDeduction(params){
    return request.request({
        url:scoreSeeUrl,
        method:"post",
        params:params
    })
}

export default{
    getScore,
    searchScore,
    getCtimeScore,
    getScoreSee,
    addDeduction
}