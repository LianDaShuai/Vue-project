import axios from 'axios';
var host  = "http://api.netallin.com/"
function request(params){
    if(params.method == 'get'){
        return new Promise((resolve,reject)=>{
            console.log('request',params)
            axios.get(host+params.url,{params:params.params}).then((response)=>{
                resolve(response.data);
            }).catch((error)=>{
                reject(error)
            })
        })
    }

    if(params.method == 'post'){
        return new Promise((resolve,reject)=>{
            axios.post(host+params.url,params.params).then((response)=>{
                resolve(response.data);
            }).catch((error)=>{
                reject(error)
            })
        })
    }
}

export default{
    request
}