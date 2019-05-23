// 入口文件

// 导入Vue
import Vue from 'vue'

// 导入MUI的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import './lib/mui/fonts/mui-icons-extra.ttf'

// 按需导入需要mint-ui的组件
// import { Header } from 'mint-ui';
// Vue.component(Header.name, Header);
//
// import { Swipe, SwipeItem, Button, Lazyload } from 'mint-ui';
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// Vue.use(Lazyload)
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)


// 引入vue-resource模块
import vueResource from 'vue-resource'
Vue.use(vueResource)


// 引入路由模块
import router from './router.js'

// 定义一个全局的时间过滤器
import moment from 'moment'
Vue.filter("dateFormat", function (dateStr, pattern='YYYY-MM-DD HH:mm:ss') {
  return moment(dateStr).format(pattern)
})


// vue-preview缩略图模块
import VuePreview from 'vue-preview'
import './lib/mui/css/global.css'

// defalut install
Vue.use(VuePreview)
Vue.use('preview', {
  mainClass: 'pswp--minimal--dark',
  barsSize: {top: 0, bottom: 0},
  captionEl: false,
  fullscreenEl: false,
  shareEl: false,
  bgOpacity: 0.85,
  tapToClose: false,
  tapToToggleControls: true
})

import Vuex from "vuex"
Vue.use(Vuex)
var car = JSON.parse(localStorage.getItem('car') || '[]')
const store = new Vuex.Store({
  state:{
    car:car
  },
  mutations:{
    addToCar(state,goodsinfo){

      let flag = false
      state.car.some(item=>{
        if (item.id == goodsinfo.id){
          item.count += parseInt(goodsinfo.count)
          flag = true
          return true
        }
      })
      if (!flag){
        state.car.push(goodsinfo)
      };
      localStorage.setItem('car',JSON.stringify(state.car))
    },
    upgradeGoodsCount(state,goodsinfo){
      state.car.some(item=>{
        if (item.id == goodsinfo.id){
          item.count = parseInt(goodsinfo.count)
          return true
        }
      })
      localStorage.setItem('car',JSON.stringify(state.car))
    },
    removeGoodsInfo(state,id){
      state.car.some((item,i)=>{
        if (item.id == id){
          this.state.car.splice(i,1)
          return true
        }
      })
      localStorage.setItem('car',JSON.stringify(state.car))
    },
    changeSelec(state,info){
      state.car.forEach(item=>{
        if (item.id == info.id){
          item.selected = info.selected;
          return true
        }
      })
      localStorage.setItem('car',JSON.stringify(state.car))
    }
  },
  getters:{
    getAllCount(state){
      var c=0
      state.car.forEach(item=>{
        c+=item.count
      })
      return c
    },
    getEveryCount(state){
      var o={}
      state.car.forEach(item=>{
        o[item.id]=item.count
      })
      return o
    },
    getGoodsSelected(state){
      var s={};
      state.car.forEach(item=>{
        s[item.id] = item.selected
      })
      return s
    },
    getCountAndAmount(state){
      var o={
        count:0,
        amount:0
      }
      state.car.forEach(item=>{
        if (item.selected){
          o.count += item.count
          o.amount += item.count*2166
        }
      })
      return o
    }


  }
})


// 导入APP根组件
import App from './App.vue'


var vm = new Vue({
  el:"#app",
  render:c => c(App),
  router,
  store
})