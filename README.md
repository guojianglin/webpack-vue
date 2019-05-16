# 这是一个Vue项目

## 基于webpack和Vue搭建的移动电商项目

## 常用git指令
1.git status 查看工作台文件修改状态

2.git add . 添加已修改文件到git门口

3.git commit -m "提交描述"

4.git push 推送到GitHub仓库

## 组件库网址
+ [Mint-UI](http://mint-ui.github.io/#!/zh-cn)
+ [MUI](http://dev.dcloud.net.cn/mui/)

## 前端测试用的万能数据接口
+ [JSONPlaceholder](http://jsonplaceholder.typicode.com/)




## 制作首页App组件
1.完成 Header 区域，使用的是 Mint-UI 中的 Header 组件

2.完成 Tabbar 区域，使用的是 MUI 中的额Tabbar.html
+ 注意对应的图标需要添加对应的css样式及字体图标文件

3.要在中间的放置一个router-view用于展示router匹配到的组件


## 改造 tabbar 的 a 链接为 router-link, href 改为 to
+ 在 App.vue 中改，把MUI自带的 mui-active 类名去掉


## 设置 tabbar 选中的高亮样式为MUI组件的高亮样式
+ 在 router.js 中将将默认的选中样式改为 mui-active


## 点击 Tabbar 的路由链接，展示对应的组件
+ 先建立一个文件夹 components 专门放置组件的,在建立一个Tabbar文件夹，放置对应的4个组件
+ 在 router.js 中 import 4个组件，然后再 routes 配置 各个路径对应的组件
+ 记得 App.vue 中需要留一个 router-view 来显示 4 个组件
+ 设置一个请求根路径'/'的重定向，到 '/home'


## 首页轮播图的设置，使用 Mint-Ui 的 swipe 组件
+ 将 swipe 组件放到 HomeContainer.vue 中，按照文档说明在 main.js 引入对应的模块
+ 注意由于没有图片支撑，引入的组件没有高度，在 HomeContainer.vue 设置高度


## 加载轮播图数据
+ 载入 vue-resource 并跟 Vue 结合起来 
+ 借助 this.$http.get() 从[图片数据接口](http://jsonplaceholder.typicode.com/photos)拿到数据
+ 拿到的图片数据 5000 条，借助 Array.slice(0,5) 只拿5条数据
+ 将拿到的数据用 v-for 渲染到轮播图的位置


## 首页菜单的六宫格布局
+ 引用 MUI 的 grid-default 代码片段进行改造
+ 将 grid-default 字体图标部分尝试用本地图片替代，并设置样式
+ 借助栅格系统进行控制：mui-col-sm-3 改为 mui-col-sm-4


## 为4个组件之间的切换添加动画
+ 先在 App.vue 将 router-view 用 transition 标签包裹起来 
+ 利用添加动画的 4 个阶段类进行动画的控制
+ 注意切换时从右往左进入，出去用绝对定位，动画时设置 overflow-x:hidden


