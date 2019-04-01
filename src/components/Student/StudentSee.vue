<template>
  <div class="student-see">
    <!-- 选项卡第一部分 -->
    <div class="see-navbar">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="基本信息" name="first">
          <div class="add-message">
            <div class="form-box">
              <div class="message-left">
                <el-form ref="form" :model="form" label-width="90px" size="small">
                  <el-form-item label="*姓名:">
                    <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
                  </el-form-item>
                  <el-form-item label="*手机号:">
                    <el-input v-model="form.phone" placeholder="请输入手机号"></el-input>
                  </el-form-item>
                  <el-form-item label="*身份证:">
                    <el-input v-model="form.idcard" placeholder="请输入18位身份证"></el-input>
                  </el-form-item>
                  <el-form-item label="*户籍地址:">
                    <el-input v-model="form.address" placeholder="输入户籍地址"></el-input>
                  </el-form-item>
                  <el-form-item label="*学历:">
                    <el-select v-model="form.edu_level" placeholder="请选择学历">
                      <el-option label="初中" value="1"></el-option>
                      <el-option label="中专" value="2"></el-option>
                      <el-option label="高中" value="3"></el-option>
                      <el-option label="高中(未毕业)" value="4"></el-option>
                      <el-option label="专科" value="5"></el-option>
                      <el-option label="本科" value="6"></el-option>
                      <el-option label="研究生" value="7"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="毕业院校:">
                    <el-input v-model="form.edu_school" placeholder="请输入毕业院校"></el-input>
                  </el-form-item>
                  <el-form-item label="毕业时间:">
                    <el-col :span="11">
                      <el-date-picker
                        type="date"
                        placeholder="请选择日期"
                        v-model="form.date1"
                        style="width: 100%;"
                      ></el-date-picker>
                    </el-col>
                  </el-form-item>
                  <el-form-item label="专业或职业:">
                    <el-input v-model="form.edu_profession"></el-input>
                  </el-form-item>

                  <el-form-item label="入学班级:">
                    <el-select v-model="form.classId" placeholder="请选择班级">
                      <el-option
                        :label="item.classname"
                        :value="item.classname"
                        v-for="(item,index) in classList"
                        :key="index"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-form>
              </div>
              <div class="message-right">
                <el-form ref="form" :model="form" label-width="80px" size="small">
                  <div class="radio">
                    <label class="el-form-item__label sex">性别:</label>
                    <el-radio-group v-model="form.sex">
                      <el-radio label="1">男</el-radio>
                      <el-radio label="0">女</el-radio>
                    </el-radio-group>
                  </div>

                  <el-form-item label="父亲:">
                    <el-input v-model="form.father" placeholder="请输入父亲姓名"></el-input>
                  </el-form-item>
                  <el-form-item label="*母亲:">
                    <el-input v-model="form.mother" placeholder="请输入母亲姓名"></el-input>
                  </el-form-item>
                  <el-form-item label="父亲电话:">
                    <el-input v-model="form.fatherPhone" placeholder="请输入父亲电话"></el-input>
                  </el-form-item>
                  <el-form-item label="*母亲电话:">
                    <el-input v-model="form.motherPhone" placeholder="请输入母亲电话"></el-input>
                  </el-form-item>
                  <el-form-item label="信息来源:">
                    <el-select v-model="form.source" placeholder>
                      <el-option label="网络" value="网络"></el-option>
                      <el-option label="院校" value="院校"></el-option>
                      <el-option label="招生老师" value="招生老师"></el-option>
                      <el-option label="转介绍" value="转介绍"></el-option>
                    </el-select>
                  </el-form-item>

                  <div class="radio">
                    <label class="el-form-item__label label">交通方式:</label>
                    <el-radio-group v-model="form.traffic">
                      <el-radio label="1">大巴</el-radio>
                      <el-radio label="2">火车</el-radio>
                      <el-radio label="3">私家车</el-radio>
                    </el-radio-group>
                  </div>

                  <el-form-item label="推荐人:">
                    <el-input v-model="form.enroller" placeholder="请选择推荐人"></el-input>
                  </el-form-item>

                  <el-form-item label="咨询老师:">
                    <el-select v-model="form.consultant" placeholder="无">
                      <el-option
                        :label="item.name"
                        value="item.name"
                        v-for="(item,index) in userList"
                        :key="index"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-form>
              </div>
            </div>
            <div class="remarks">
              <el-form ref="form" :model="form" label-width="90px" size="small">
                <el-form-item label="备注:">
                  <el-input type="textarea" v-model="form.desc" :rows="5"></el-input>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="费用信息" name="second">
          <div class="fee-message">
            <div class="period">
              <el-form ref="form" :model="feeMess" label-width="100px" size="small" class="fee">
                <div>
                  <el-form-item label="学制:">
                    <el-select v-model="feeMess.term" placeholder="无">
                      <el-option label="6" value="6个月"></el-option>
                      <el-option label="10" value="10个月"></el-option>
                      <el-option label="16" value="16个月"></el-option>
                      <el-option label="30" value="30个月"></el-option>
                    </el-select>
                  </el-form-item>
                  <div class="radio">
                    <label class="el-form-item__label label">学费缴纳方式:</label>
                    <el-radio-group v-model="feeMess.tuition_way">
                      <el-radio label="1">全款</el-radio>
                      <el-radio label="2">贷款</el-radio>
                      <el-radio label="3">分期</el-radio>
                    </el-radio-group>
                  </div>
                  <div class="radio">
                    <label class="el-form-item__label label">优惠方式:</label>
                    <el-radio-group v-model="feeMess.cuppon_way">
                      <el-radio label="0">无</el-radio>
                      <el-radio label="1">活动</el-radio>
                      <el-radio label="2">预报名</el-radio>
                      <el-radio label="3">特批</el-radio>
                    </el-radio-group>
                  </div>
                </div>
                <div>
                  <el-form-item label="专业:">
                    <el-select v-model="feeMess.course" placeholder="无">
                      <el-option label="web全栈" value="1"></el-option>
                      <el-option label="JavaEE+大数据" value="2"></el-option>
                      <el-option label="UI全链路" value="3"></el-option>
                      <el-option label="新媒体+电商" value="4"></el-option>
                      <el-option label="云计算+运维" value="5"></el-option>
                      <el-option label="python+人工智能" value="6"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="学费:">
                    <el-input v-model="feeMess.tuitionOrigin" :disabled="true"></el-input>
                  </el-form-item>
                  <el-form-item label="现金优惠:">
                    <el-input v-model="feeMess.tuitionMinus" type="number"></el-input>
                  </el-form-item>
                </div>
              </el-form>
            </div>
            <div class="period">
              <el-form ref="form" :model="feeMess" label-width="100px" size="small" class="fee">
                <div>
                  <div class="radio">
                    <label class="el-form-item__label label">住宿:</label>
                    <el-radio-group v-model="feeMess.room_way" >
                      <el-radio label="1">校内</el-radio>
                      <el-radio label="2">赋腾</el-radio>
                      <el-radio label="3">自理</el-radio>
                    </el-radio-group>
                  </div>
                </div>
                <div>
                  <el-form-item label="宿舍押金:">
                    <el-input v-model="feeMess.room_deposit"></el-input>
                  </el-form-item>
                  <el-form-item label="宿舍租金:">
                    <el-input v-model="feeMess.room_rent"></el-input>
                  </el-form-item>
                  <el-form-item label="管理费:">
                    <el-input v-model="feeMess.room_manage"></el-input>
                  </el-form-item>
                  <el-form-item label="网费:">
                    <el-input v-model="feeMess.room_net"></el-input>
                  </el-form-item>
                </div>
              </el-form>
            </div>
            <div class="period">
              <el-form ref="form" :model="feeMess" label-width="100px" size="small" class="fee">
                <div>
                  <div class="radio">
                    <label class="el-form-item__label label">电脑:</label>
                    <el-radio-group v-model="feeMess.pc_way">
                      <el-radio label="1">购买</el-radio>
                      <el-radio label="2">租用</el-radio>
                      <el-radio label="3">自理</el-radio>
                    </el-radio-group>
                  </div>
                </div>
                <div>
                  <el-form-item label="电脑购买费:">
                    <el-input v-model="feeMess.pc_buy"></el-input>
                  </el-form-item>
                  <el-form-item label="电脑租金:">
                    <el-input v-model="feeMess.pc_rent"></el-input>
                  </el-form-item>
                  <el-form-item label="电脑押金:">
                    <el-input v-model="feeMess.pc_deposit"></el-input>
                  </el-form-item>
                </div>
              </el-form>
            </div>
            <div class="period">
              <el-form ref="form" :model="feeMess" label-width="100px" size="small" class="fee">
                <div>
                  <div class="radio">
                    <label class="el-form-item__label label">校服:</label>
                    <el-radio-group v-model="feeMess.clothflag">
                      <el-radio label="1">购买</el-radio>
                      <el-radio label="2">不购买</el-radio>
                    </el-radio-group>
                  </div>
                  <div class="radio">
                    <label class="el-form-item__label label">被褥:</label>
                    <el-radio-group v-model="feeMess.blanketflag">
                      <el-radio label="1">购买</el-radio>
                      <el-radio label="2">自理</el-radio>
                    </el-radio-group>
                  </div>
                </div>
                <div>
                  <el-form-item label="校服:">
                    <el-input v-model="feeMess.cloth"></el-input>
                  </el-form-item>
                  <el-form-item label="被褥:">
                    <el-input v-model="feeMess.blanket"></el-input>
                  </el-form-item>
                </div>
              </el-form>
            </div>
            <div class="total">
              <el-form ref="form" :model="feeMess" label-width="100px" size="small" class="fee">
                <div>
                  <el-form-item label="应缴学费:">
                    <el-input v-model="feeMess.tuition" :disabled="true"></el-input>
                  </el-form-item>
                </div>
                <div>
                  <el-form-item label="杂费合计:">
                    <el-input v-model="feeMess.fee" :disabled="true"></el-input>
                  </el-form-item>
                </div>
              </el-form>
              <div class="all-price">
                <el-form ref="form" :model="feeMess" label-width="100px" size="small">
                  <el-form-item label="学杂费合计:">
                    <el-input v-model="feeMess.feeTotal" :disabled="true"></el-input>
                  </el-form-item>
                </el-form>
              </div>
              <div class="step-btn">
                <!-- <el-button @click="twoNext" type="primary">下一步</el-button> -->
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="缴费计划" name="third"  >角色管理</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      student_item: {},
      activeName: "first",
      form: {
        name: "",
        phone: "13800000000",
        idcard: "110100201101010001",
        address: "山西太原",
        edu_level: "3",
        edu_school: "",
        edu_profession: "",
        classId: "",
        sex: "0",
        father: "",
        mother: "mom",
        fatherPhone: "",
        motherPhone: "13000000001",
        source: "3",
        traffic: "1",
        enroller: "",
        consultant: "",
        remark: ""
      },
      classList: [],
      userList: [],
      feeMess:{}
    };
  },
  created() {
    this.student_item = this.$store.state.student_item;
    this.feeMess = this.$store.state.feeMess
    console.log("费用信息="+this.feeMess.pc_way)
    console.log("查看="+this.feeMess) 
  },
  methods: {
    handleClick(tab, event) {}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 基本信息样式 */
.form-box > div {
  width: 350px;
}
.form-box {
  display: flex;
  justify-content: space-around;
  padding: 0 50px;
}
.radio {
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-bottom: 10px;
}
.el-radio-group {
  vertical-align: middle;
}
.label {
  margin-left: 10px;
}
.sex {
  margin-left: 35px;
}
.el-col-11 {
  width: 100%;
}
.el-select--small {
  width: 100%;
}
.remarks {
  padding: 0 80px;
  text-align: center;
  padding-bottom: 50px;
}
/* 费用信息 */
 .fee-message {
  padding-bottom: 30px;
}
.fee {
  display: flex;
  justify-content: space-around;
  padding: 0 50px;
}
.fee > div {
  width: 400px;
}
.period {
  margin: 0 50px;
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
}
.all-price {
  padding: 0 100px;
}
.step-btn {
  text-align: center;
  margin-bottom: 20px;
}
.total {
  margin-top: 10px;
}
.radio {
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-bottom: 10px;
}
</style>
