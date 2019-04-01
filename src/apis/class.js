import request from './request.js'

var classListUrl = 'apis/class'

function getClassList(params){
    return request.request({
        url:classListUrl,
        method:"get",
        params:params
    })
}

export default{
    getClassList
}