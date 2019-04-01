import request from './request.js'


var teacherList = 'apis/user'
function getTeacherList(params){
    return request.request({
        url:teacherList,
        method:"get",
        params:params
    })
}

export default{
    getTeacherList
}