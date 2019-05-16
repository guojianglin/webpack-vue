// 入口文件

// 导入Vue
import Vue from 'vue'

// 导入MUI的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import './lib/mui/fonts/mui-icons-extra.ttf'

// 按需导入需要mint-ui的组件
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


// 引入vue-resource模块
import vueResource from 'vue-resource'
Vue.use(vueResource)


// 引入路由模块
import router from './router.js'


// 导入APP根组件
import App from './App.vue'


var vm = new Vue({
  el:"#app",
  render:c => c(App),
  router
})