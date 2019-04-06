import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Login from '@/components/Login'
import Main from '@/components/Main'
import Banner from '@/components/Banner'
import Student from '@/components/Student/Student'
import StudentAdd from '@/components/Student/Student-add'
import StudentScore from '@/components/StudentScore/Student-score'
import StudentExport from '@/components/Student-export'
import StudentJob from '@/components/Student-job'
import FinanceExpenditure from '@/components/Finance/Finance-expenditure'

Vue.use(Router)

var r = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect:"/login"
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/main',
      name: 'main',
      component: Main,
      redirect:'/main/banner',
      children:[
        {
          path: '/main/banner',
          name: 'banner',
          component: Banner
        },
        {
          path: '/main/student',
          name: 'student',
          component: Student
        },
        {
          path: '/main/student-add',
          name: 'student-add',
          component: StudentAdd
        },
        {
          path: '/main/student-score',
          name: 'student-score',
          component: StudentScore
        },
        {
          path: '/main/student-export',
          name: 'student-export',
          component: StudentExport
        },
        {
          path: '/main/student-downgrade',
          name: 'student-downgrade',
          component: StudentScore
        },
        {
          path: '/main/student-job',
          name: 'student-job',
          component: StudentJob
        },
        {
          path: '/main/finance-expenditure',
          name: 'finance-expenditure',
          component: FinanceExpenditure
        }
      ]
    }
  ]
})

//router定义的下面, 每个路由跳转之前, 执行回调函数
r.beforeEach((to, from, next) => {
	// console.log("beforeEach");
	// console.log("\tfrom.path=" + from.path);
	// console.log("\tto.path=" + to.path);
  
	console.log("beforeEach")
  
	//如果不是登陆界面
	var isShowLogin = false
	if (to.path != "/login") {
	  //检测是否登陆
	  if(localStorage.isLogin == undefined || localStorage.isLogin != 1){
		
		isShowLogin = true
	  }
	}
  
	if(isShowLogin == true){
	  r.push("/login")
	}else{
	  //继续跳转
	  next();
	}
	
  });


export default r