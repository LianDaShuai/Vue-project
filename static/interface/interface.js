var host = "http://api.netallin.com/"


//登陆接口
//类型: POST
//Content-Type:application/json;charset=utf-8
var loginUrl = host + "apis/user/login"
//参数:
//  username:""
//  password:""


//获取班级列表
//类型: GET
var classListUrl = host + "apis/class"
//参数:
//  username:""
//  password:""
//范例: http://api.netallin.com/apis/class

//获取用列表
//类型: GET
var userListUrl = host + "apis/student?results=20&size=500&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVpZCI6Miwic3R1Tm8iOiIyIn0sImNyZWF0ZWQiOjE1NTM3MzkxNjEsImV4cCI6NzIwMDAwMH0%3D.bCWpCikQafJMCqMl6UaYoNXDH%2F%2Bp84%2BofoHqm98HC9c%3D"
//参数:
//  默认参数results和size
//范例:  http://api.netallin.com/apis/student?results=20&size=500&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVpZCI6Miwic3R1Tm8iOiIyIn0sImNyZWF0ZWQiOjE1NTM3MzkxNjEsImV4cCI6NzIwMDAwMH0%3D.bCWpCikQafJMCqMl6UaYoNXDH%2F%2Bp84%2BofoHqm98HC9c%3D


//获取咨询老师列表
//类型: GET
var userUrl = host + "apis/user"
//参数:
//  username:""
//  password:""
//范例: http://api.netallin.com/apis/class







//用户搜索接口
//类型: POST
//Content-Type:application/json;charset=utf-8
var serachUrl = host + "apis/student/searchStudents"
//参数:
/*
{
    "page":1,
    "condition":{
        "name":"李雷",
        "id":"",
        "classId":"软工B班",
        "paystate":-1,
        "status":"",
        "idcard":""},
        "token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVpZCI6Miwic3R1Tm8iOiIyIn0sImNyZWF0ZWQiOjE1NTM3MzkxNjEsImV4cCI6NzIwMDAwMH0=.bCWpCikQafJMCqMl6UaYoNXDH/+p84+ofoHqm98HC9c="
    }
*/

//获取费用接口: 点击查看执行
//类型: GET
var feeUrl = host + "apis/student/fee/?"
//http://api.netallin.com/apis/student/fee/?uid=622&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVpZCI6Miwic3R1Tm8iOiIyIn0sImNyZWF0ZWQiOjE1NTM3MzkxNjEsImV4cCI6NzIwMDAwMH0%3D.bCWpCikQafJMCqMl6UaYoNXDH%2F%2Bp84%2BofoHqm98HC9c%3D
//参数1:  uid=      注意, 这个uid是用户的id
//范例:  http://api.netallin.com/apis/student/fee/?uid=622


//添加学员接口
//类型: POST
//Content-Type:application/json;charset=utf-8
var addUserUrl = host+"apis/student"
//参数:
/*
{
    "term":"6",                         学制
    "tuition_way":"1",                  缴费方式   贷款，全款
    "course":"1",                       科目   1.全栈，ui
    "cuppon_way":"0",                   优惠方式
    "tuitionOrigin":22800,              原始学费
    "tuitionMinus":0,                   优惠金额
    "tuition":22800,                    应缴学费
    "room_way":"2",                     住宿方式
    "room_rent":3600,                   住宿租金
    "room_deposit":600,                 住宿押金
    "room_manage":300,                  管理费
    "room_net":180,                     网费
    "pc_way":"1",                       电脑方式
    "pc_rent":0,                        电脑租金
    "pc_buy":1700,                      电脑购买
    "pc_deposit":0,                     电脑押金
    "cloth":300,                        校服
    "blanket":200,                      被褥
    "clothflag":"1",                    是否选择校服
    "blanketflag":"1",                  是否选择被褥
    "fee":6880,                         杂费
    "feeTotal":29680,                   学费+杂费
    "name":"潇潇",                      名字
    "phone":"13800000000",              手机号
    "idcard":"110100201101010001",      身份证号
    "address":"山西太原",               地址
    "edu_level":"3",                    学历
    "edu_school":"",                    毕业学校
    "edu_profession":"",                专业
    "classId":"1901",                   班级
    "sex":"0",                          性别
    "father":"",                        父亲
    "mother":"mom",                     母亲
    "fatherPhone":"",                   父亲电话
    "motherPhone":"13000000001",        母亲电话
    "source":"3",                       信息来源
    "traffic":"1",                      交通方式
    "enroller":"",                      推荐人
    "consultant":"",                    咨询老师
    "remark":"",                        备注
    "token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVpZCI6Miwic3R1Tm8iOiIyIn0sImNyZWF0ZWQiOjE1NTM3MzkxNjEsImV4cCI6NzIwMDAwMH0=.bCWpCikQafJMCqMl6UaYoNXDH/+p84+ofoHqm98HC9c="
}

*/
