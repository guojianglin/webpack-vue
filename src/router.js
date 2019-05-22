

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
import photolist from './components/photos/PhotoList.vue'
import photoinfo from './components/photos/PhotoInfo.vue'
import goodslist from './components/goods/GoodsList.vue'
import goodsinfo from './components/goods/GoodsInfo.vue'
import goodsdesc from './components/goods/GoodsDesc.vue'
import goodscmt from './components/goods/GoodsCMT.vue'


var router = new VueRouter({
  routes:[
    {path: '/', redirect:'/home'},
    { path:'/home', component:home},
    { path:'/member', component:member},
    { path:'/shopcar', component:shopcar},
    { path:'/search', component:search},
    { path:'/home/newlist', component:newlist},
    { path:'/home/newinfo/:id', component:newinfo},
    { path:'/home/photolist', component:photolist},
    { path:'/home/photoinfo/:id', component:photoinfo},
    { path:'/home/goodslist', component:goodslist},
    { path:'/home/goodsinfo/:id', component:goodsinfo},
    { path:'/home/goodsdesc/:id', component:goodsdesc,name:'goodsdesc'},
    { path:'/home/goodscmt/:id', component:goodscmt,name:'goodscmt'}
  ],
  linkActiveClass:'mui-active'//替换原本高亮使用的类样式
})

export default router