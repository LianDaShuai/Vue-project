import request from './request'

var expenseUrl = 'apis/finance/expense'
var expendCountUrl = "apis/finance/expense/stat"
//获取费用支出
function getexpend(params){
    return request.request({
        url:expenseUrl,
        method:"get",
        params:params
    })
}
//点击搜索获取费用支出
function getSearchExpend(params){
    return request.request({
        url:expenseUrl,
        method:"get",
        params:params
    })
}

//点击修改
function modifyExpend(params){
    return request.request({
        url:expenseUrl,
        method:"put",
        params:params
    })
}
//添加支出记录
function addExpend(params){
    return request.request({
        url:expenseUrl,
        method:"post",
        params:params
    })
}
//删除支出记录
function deleteExpend(params){
    return request.request({
        url:expenseUrl,
        method:"delete",
        params:params
    })
}
//
function countExpend(params){
    return request.request({
        url:expendCountUrl,
        method:"get",
        params:params
    })
}
export default{
    getexpend,
    getSearchExpend,
    modifyExpend,
    addExpend,
    deleteExpend,
    countExpend
}