

import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)

// 导入各个组件
import home from './components/Tabbar/HomeContainer.vue'
import member from './components/Tabbar/MemberContainer.vue'
import shopcar from './components/Tabbar/ShopCarContainer.vue'
import search from './components/Tabbar/SearchContainer.vue'
import newlist from './components/News/NewList.vue'
import newinfo from './components/News/NewInfo.vue'


var router = new VueRouter({
  routes:[
    {path: '/', redirect:'/home'},
    { path:'/home', component:home},
    { path:'/member', component:member},
    { path:'/shopcar', component:shopcar},
    { path:'/search', component:search},
    { path:'/home/newlist', component:newlist},
    { path:'/home/newlist/:id', component:newinfo},
  ],
  linkActiveClass:'mui-active'//替换原本高亮使用的类样式
})

export default router