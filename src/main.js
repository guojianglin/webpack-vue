// 入口文件

// 导入Vue
import Vue from 'vue'

// 导入MUI的样式
import './lib/mui/css/mui.min.css'

// 按需导入需要mint-ui的组件
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);


// 导入APP根组件
import App from './App.vue'


var vm = new Vue({
  el:"#app",
  render:c => c(App)
})