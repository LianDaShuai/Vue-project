import request from './request.js'

var loginUrl = 'apis/user/login'


function login(params){
    return request.request({
        url:loginUrl,
        method:"post",
        params:params
    })
}

export default{
    login
}