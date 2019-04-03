// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//导入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//引入axios
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios,axios);
//导入store状态管理器
import store from '@/store/store.js'

//在原型上添加index.js
import api from './apis/index.js'
Vue.prototype.api = api

//导入vue-json-excel
import JsonExcel from 'vue-json-excel'
Vue.component('downloadExcel', JsonExcel)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
