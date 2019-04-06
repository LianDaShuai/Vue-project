<template>
  <div class="add-step1">
    <div class="add-message">
        <div class="form-box">
          <div class="message-left">
            <el-form ref="form" :model="form" label-width="90px" size="small" :rules="rules">
              <el-form-item label="姓名:" prop="name">
                <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
              </el-form-item>
              <el-form-item label="手机号:" prop="phone">
                <el-input v-model="form.phone" placeholder="请输入手机号"></el-input>
              </el-form-item>
              <el-form-item label="身份证:" prop="idcard">
                <el-input v-model="form.idcard" placeholder="请输入18位身份证"></el-input>
              </el-form-item>
              <el-form-item label="户籍地址:" prop="address">
                <el-input v-model="form.address" placeholder="输入户籍地址"></el-input>
              </el-form-item>
              <el-form-item label="学历:" prop="edu_level">
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
                  <el-option :label="item.classname" :value="item.classname" v-for="(item,index) in classList" :key = "index"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </div>
          <div class="message-right">
            <el-form ref="form" :model="form" label-width="90px" size="small" :rules="rules">
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
              <el-form-item label="母亲:" prop="mother">
                <el-input v-model="form.mother" placeholder="请输入母亲姓名"></el-input>
              </el-form-item>
              <el-form-item label="父亲电话:">
                <el-input v-model="form.fatherPhone" placeholder="请输入父亲电话"></el-input>
              </el-form-item>
              <el-form-item label="母亲电话:" prop="motherPhone">
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
                <el-select v-model="form.consultant" placeholder="无" >
                  <el-option :label="item.name" value="item.name" v-for="(item,index) in userList" :key="index"></el-option>
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
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      form:{},
      classList:[],
      userList:[],
      rules: {
          name: [
            { required: true, message: '请输入姓名', trigger: 'blur' }
          ],
          phone: [
            { required: true, message: '请输入手机号', trigger: 'blur' },
            { min: 11, message: '至少输入11位', trigger: 'blur' }
          ],
          idcard: [
            { required: true, message: '请输入身份证号', trigger: 'blur' },
            { min: 18, message: '至少输入18位', trigger: 'blur' }
          ],
          address: [
            { required: true, message: '请输入户籍地址', trigger: 'blur' }
          ],
          edu_level: [
            {  required: true, message: '请选择学历', trigger: 'blur' }
          ],
          mother: [
            { required: true, message: '请输入母亲姓名', trigger: 'blur' }
          ],
          motherPhone: [
            { required: true, message: '请输入母亲电话', trigger: 'blur' }
          ]
        }
    }
    
  },
  created(){
    this.downClassList()
    this.downUserList()
    this.form = this.$store.state.form
  },
  beforeUpdate(){
    this.$store.commit("setAddStep1",this.form)
    // this.$emit("sendChild","form")
    this.$refs['form'].validate(valid => {
    //  console.log("valid="+valid)
    console.log("表单校验="+true)
    });
  },
  methods:{
    // 获取班级列表
     async downClassList() {
      // var url = classListUrl;
      //调用获取班级列表方法
      let res = await this.api.classApi.getClassList()
      console.log(res)
      this.classList = res.list;
    },
    //获取咨询老师列表
    async downUserList(){
      //调用获取老师列表方法
      let res = await this.api.teacherApi.getTeacherList()
      console.log(res)
      this.userList = res.list;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .form-box > div {
  width: 350px;
}
.form-box {
  display: flex;
  justify-content: space-around;
  padding: 0 100px;
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
  padding: 0 150px;
  text-align: center;
  padding-bottom: 50px;
}
</style>
