<template>
  <div class="add-fee">
    <div class="fee-message">
        <div class="period">
          <el-form ref="form" :model="form" label-width="100px" size="small" class="fee">
            <div>
              <el-form-item label="学制:">
                <el-select v-model="form.term" placeholder="无" @change="dealTerm">
                  <el-option label="6个月" value="6"></el-option>
                  <el-option label="10个月" value="10"></el-option>
                  <el-option label="16个月" value="16"></el-option>
                  <el-option label="30个月" value="30 "></el-option>
                </el-select>
              </el-form-item>
              <div class="radio">
                <label class="el-form-item__label label">学费缴纳方式:</label>
                <el-radio-group v-model="form.tuition_way">
                  <el-radio label="1">全款</el-radio>
                  <el-radio label="2">贷款</el-radio>
                  <el-radio label="3">分期</el-radio>
                </el-radio-group>
              </div>
              <div class="radio">
                <label class="el-form-item__label label">优惠方式:</label>
                <el-radio-group v-model="form.cuppon_way">
                  <el-radio label="0">无</el-radio>
                  <el-radio label="1">活动</el-radio>
                  <el-radio label="2">预报名</el-radio>
                  <el-radio label="3">特批</el-radio>
                </el-radio-group>
              </div>
            </div>
            <div>
              <el-form-item label="专业:">
                <el-select v-model="form.course" placeholder="无">
                  <el-option label="web全栈" value="1"></el-option>
                  <el-option label="JavaEE+大数据" value="2"></el-option>
                  <el-option label="UI全链路" value="3"></el-option>
                  <el-option label="新媒体+电商" value="4"></el-option>
                  <el-option label="云计算+运维" value="5"></el-option>
                  <el-option label="python+人工智能" value="6"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="学费:">
                <el-input v-model="form.tuitionOrigin" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item label="现金优惠:">
                <el-input v-model="form.tuitionMinus" type="number"></el-input>
              </el-form-item>
            </div>
          </el-form>
        </div>
        <div class="period">
          <el-form ref="form" :model="form" label-width="100px" size="small" class="fee">
            <div>
              <div class="radio">
                <label class="el-form-item__label label">住宿:</label>
                <el-radio-group v-model="form.room_way" @change="dealRoom">
                  <el-radio label="1">校内</el-radio>
                  <el-radio label="2">赋腾</el-radio>
                  <el-radio label="3">自理</el-radio>
                </el-radio-group>
              </div>
            </div>
            <div>
              <el-form-item label="宿舍押金:">
                <el-input v-model="form.room_deposit"></el-input>
              </el-form-item>
              <el-form-item label="宿舍租金:">
                <el-input v-model="form.room_rent"></el-input>
              </el-form-item>
              <el-form-item label="管理费:">
                <el-input v-model="form.room_manage"></el-input>
              </el-form-item>
              <el-form-item label="网费:">
                <el-input v-model="form.room_net"></el-input>
              </el-form-item>
            </div>
          </el-form>
        </div>
        <div class="period">
          <el-form ref="form" :model="form" label-width="100px" size="small" class="fee">
            <div>
              <div class="radio">
                <label class="el-form-item__label label">电脑:</label>
                <el-radio-group v-model="form.pc_way" @change="dealPc">
                  <el-radio label="1">购买</el-radio>
                  <el-radio label="2">租用</el-radio>
                  <el-radio label="3">自理</el-radio>
                </el-radio-group>
              </div>
            </div>
            <div>
              <el-form-item label="电脑购买费:">
                <el-input v-model="form.pc_buy"></el-input>
              </el-form-item>
              <el-form-item label="电脑租金:">
                <el-input v-model="form.pc_rent"></el-input>
              </el-form-item>
              <el-form-item label="电脑押金:">
                <el-input v-model="form.pc_deposit"></el-input>
              </el-form-item>
            </div>
          </el-form>
        </div>
        <div class="period">
          <el-form ref="form" :model="form" label-width="100px" size="small" class="fee">
            <div>
              <div class="radio">
                <label class="el-form-item__label label">校服:</label>
                <el-radio-group v-model="form.clothflag" @change="dealCloth">
                  <el-radio label="1">购买</el-radio>
                  <el-radio label="2">不购买</el-radio>
                </el-radio-group>
              </div>
              <div class="radio">
                <label class="el-form-item__label label">被褥:</label>
                <el-radio-group v-model="form.blanketflag" @change="dealBlanket">
                  <el-radio label="1">购买</el-radio>
                  <el-radio label="2">自理</el-radio>
                </el-radio-group>
              </div>
            </div>
            <div>
              <el-form-item label="校服:">
                <el-input v-model="form.cloth"></el-input>
              </el-form-item>
              <el-form-item label="被褥:">
                <el-input v-model="form.blanket"></el-input>
              </el-form-item>
            </div>
          </el-form>
        </div>
        <div class="total">
          <el-form ref="form" :model="form" label-width="100px" size="small" class="fee">
            <div>
              <el-form-item label="应缴学费:">
                <el-input v-model="tuition" :disabled="true"></el-input>
              </el-form-item>
            </div>
            <div>
              <el-form-item label="杂费合计:">
                <el-input v-model="form.fee" :disabled="true"></el-input>
              </el-form-item>
            </div>
          </el-form>
          <div class="all-price">
            <el-form ref="form" :model="form" label-width="100px" size="small">
              <el-form-item label="学杂费合计:">
                <el-input v-model="feeTotal" :disabled="true"></el-input>
              </el-form-item>
            </el-form>
          </div>
          <div class="step-btn">
           
            <!-- <el-button @click="twoNext" type="primary">下一步</el-button> -->
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      form:{}
    }
  },
   computed: {
    //应缴学费
    tuition() {
      return parseInt(this.form.tuitionOrigin) - parseInt(this.form.tuitionMinus);
    },
    //全部学费
    feeTotal() {
      return (
        parseInt(this.form.tuitionOrigin - this.form.tuitionMinus) +
        parseInt(this.form.fee)
      );
    }

  },
  created(){
    // this.$store.commit("setAddStep2",this.form)
    this.form = this.$store.state.form1
    
  },
  beforeUpdate(){
    this.$store.commit("setAddStep2",this.form)
    //储存应缴学费
    this.$store.commit("getTuition",this.tuition)
    //储存应缴杂费
    this.$store.commit("getFee",this.form.fee)
  },
  methods:{
     //监控学制
    dealTerm() {
      this.dealChange();
      this.fee();
    },

    //判断费用
    dealChange() {
      if (this.form.term == "6") {
        //学制是6个月
        this.form.tuitionOrigin = 22800;
        this.form.term = 6;
        if (this.form.room_way == 1) {
          this.form.room_net = 0; //网费
          this.form.room_rent = 3600; //租金
          this.form.room_deposit = 600; //押金
          this.form.room_manage = 300; //管理费
        } else if (this.form.room_way == 2) {
          //学生住在赋腾
          this.form.room_net = 180;
          this.form.room_rent = 3600;
          this.form.room_deposit = 600;
          this.form.room_manage = 300; //管理费
        } else if (this.form.room_way == 3) {
          this.form.room_net = 0;
          this.form.room_rent = 0;
          this.form.room_deposit = 0;
          this.form.room_manage = 0;
        }

        //判断电脑费用
        if (this.form.pc_way == 2) {
          //租用学校电脑
          this.form.pc_rent = 720; //租金
          this.form.pc_deposit = 1700; //押金
          this.form.pc_buy = 0;
        }
        if (this.form.pc_way == 1) {
          //购买电脑
          this.form.pc_rent = 0; //租金
          this.form.pc_deposit = 0; //押金
          this.form.pc_buy = 1700;
        }
        if (this.form.pc_way == 3) {
          //电脑自理
          this.form.pc_rent = 0; //租金
          this.form.pc_deposit = 0; //押金
          this.form.pc_buy = 0;
        }
      } else if (this.form.term == "10") {
        //学制10个月
        this.form.tuitionOrigin = 33800;
        this.form.term = 10;
        if (this.form.room_way == 1) {
          this.form.room_net = 0; //网费
          this.form.room_rent = 6000; //租金
          this.form.room_deposit = 600; //押金
          this.form.room_manage = 700; //管理费
        } else if (this.form.room_way == 2) {
          //学生住在赋腾
          this.form.room_net = 300;
          this.form.room_rent = 6000;
          this.form.room_deposit = 600;
          this.form.room_manage = 700; //管理费
        } else if (this.form.room_way == 3) {
          this.form.room_net = 0;
          this.form.room_rent = 0;
          this.form.room_deposit = 0;
          this.form.room_manage = 0;
        }
        if (this.form.pc_way == 2) {
          //租用学校电脑
          this.form.pc_rent = 1200; //租金
          this.form.pc_deposit = 1700; //押金
          this.form.pc_buy = 0;
        }
        if (this.form.pc_way == 1) {
          //购买电脑
          this.form.pc_rent = 0; //租金
          this.form.pc_deposit = 0; //押金
          this.form.pc_buy = 1700;
        }
        if (this.form.pc_way == 3) {
          //电脑自理
          this.form.pc_rent = 0; //租金
          this.form.pc_deposit = 0; //押金
          this.form.pc_buy = 0;
        }
      } else if (this.form.term == 16) {
        //学制是16个月
        this.form.tuitionOrigin = 45800;
        this.form.term = 16;
        if (this.form.room_way == 1) {
          this.form.room_net = 0; //网费
          this.form.room_rent = 9600; //租金
          this.form.room_deposit = 600; //押金
          this.form.room_manage = 1000; //管理费
        } else if (this.form.room_way == 2) {
          //学生住在赋腾
          this.form.room_net = 480;
          this.form.room_rent = 9600;
          this.form.room_deposit = 600;
          this.form.room_manage = 1000; //管理费
        } else if (this.form.room_way == 3) {
          this.form.room_net = 0;
          this.form.room_rent = 0;
          this.form.room_deposit = 0;
          this.form.room_manage = 0;
        }
        if (this.form.pc_way == 2) {
          //租用学校电脑
          this.form.pc_rent = 1920; //租金
          this.form.pc_deposit = 1700; //押金
          this.form.pc_buy = 0;
        }
        if (this.form.pc_way == 1) {
          //购买电脑
          this.form.pc_rent = 0; //租金
          this.form.pc_deposit = 0; //押金
          this.form.pc_buy = 1700;
        }
        if (this.form.pc_way == 3) {
          //电脑自理
          this.form.pc_rent = 0; //租金
          this.form.pc_deposit = 0; //押金
          this.form.pc_buy = 0;
        }
      } else if (this.form.term == 30) {
        //学制是30个月
        this.form.tuitionOrigin = 57500;
        this.form.term = 30;
        if (this.form.room_way == 1) {
          this.form.room_net = 0; //网费
          this.form.room_rent = 18000; //租金
          this.form.room_deposit = 600; //押金
          this.form.room_manage = 2500; //管理费
        } else if (this.form.room_way == 2) {
          //学生住在赋腾
          this.form.room_net = 0;
          this.form.room_rent = 18000;
          this.form.room_deposit = 600;
          this.form.room_manage = 2500; //管理费
        } else if (this.form.room_way == 3) {
          this.form.room_net = 0;
          this.form.room_rent = 0;
          this.form.room_deposit = 0;
          this.form.room_manage = 0;
        }
        if (this.form.pc_way == 2) {
          //租用学校电脑
          this.form.pc_rent = 3600; //租金
          this.form.pc_deposit = 1700; //押金
          this.form.pc_buy = 0;
        }
        if (this.form.pc_way == 1) {
          //购买电脑
          this.form.pc_rent = 0; //租金
          this.form.pc_deposit = 0; //押金
          this.form.pc_buy = 1700;
        }
        if (this.form.pc_way == 3) {
          //电脑自理
          this.form.pc_rent = 0; //租金
          this.form.pc_deposit = 0; //押金
          this.form.pc_buy = 0;
        }
      }
    },
    //学生住宿方式
    dealRoom() {
      this.dealChange();
      this.fee();
    },
    //电脑方式
    dealPc() {
      this.dealChange();
      this.fee();
    },
    // 是否购买校服
    dealCloth(e) {
      this.fee();
      if (e == 1) {
        this.form.cloth = 300;
      } else if (e == 2) {
        this.form.cloth = 0;
      }
    },
    //是否购买被褥
    dealBlanket(e) {
      this.fee();
      if (e == 1) {
        this.form.blanket = 200;
      } else if (e == 2) {
        this.form.blanket = 0;
      }
    },

    //杂费
    fee() {
      this.form.fee =
        parseInt(this.form.room_rent) +
        parseInt(this.form.room_deposit) +
        parseInt(this.form.room_manage) +
        parseInt(this.form.room_net) +
        parseInt(this.form.pc_rent) +
        parseInt(this.form.pc_buy) +
        parseInt(this.form.pc_deposit) +
        parseInt(this.form.cloth) +
        parseInt(this.form.blanket);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
