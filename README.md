# 这是一个Vue项目

## 基于webpack和Vue搭建的移动电商项目

## 常用git指令
1.git status 查看工作台文件修改状态

2.git add . 添加已修改文件到git仓库门口

3.git commit -m "提交描述" 提交并添加描述

4.git push 推送到GitHub仓库

## 组件库网址
+ [Mint-UI](http://mint-ui.github.io/#!/zh-cn)
+ [MUI](http://dev.dcloud.net.cn/mui/)

## 前端测试用的万能数据接口
+ [JSONPlaceholder](http://jsonplaceholder.typicode.com/)




## 制作首页App组件
1.完成 Header 区域，使用的是 Mint-UI 中的 Header 组件

2.完成 Tabbar 区域，使用的是 MUI 中的 Tabbar.html
+ 注意对应的图标需要引入对应的 css 样式及字体图标文件

3.要在中间的放置一个 router-view 用于展示 router 匹配到的组件



## 改造 tabbar 的 a 链接为 router-link, href 改为 to
+ 在 App.vue 中改，把MUI自带的 mui-active 类名去掉


## 设置 tabbar 选中的高亮样式为MUI组件的高亮样式
+ 在 router.js 中将将默认的选中样式类名改为 mui-active


## 点击 Tabbar 的路由链接，展示对应的组件
+ 先建立一个文件夹 components 专门放置组件的，再建立一个Tabbar文件夹，放置对应的4个组件

+ 在 router.js 中 import 4个组件，然后在 routes 配置 各个路径对应的组件
+ 记得 App.vue 中需要留一个 router-view 来显示 4 个组件
+ 设置一个请求根路径 '/' 的重定向，到 '/home'


## 首页轮播图的设置，使用 Mint-Ui 的 swipe 组件
+ 将 swipe 组件放到 HomeContainer.vue 中，按照文档说明在 main.js 引入对应的模块

+ 注意由于没有图片支撑，引入的组件没有高度，在 HomeContainer.vue 的 style 标签设置高度


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
+ 利用添加动画的4个阶段类进行动画的控制

+ 注意切换时从右往左进入，出去用绝对定位，动画时设置 overflow-x:hidden


## 改造首页菜单中的新闻资讯为路由链接
+ 将 a 标签改为 router-link, href 改为 to 
+ 在 components 目录下新建一个 News 文件夹存放 NewList.Vue 组件

+ 在 router.js 中 import NewList.Vue 组件并在 routes 配置对应的路由

## 新闻页面的制作
+ 在 MUI 中将 media-list.html 选择一个模板复制过来
+ 修改样式为我们需要的样子，图片src暂时指向我的GitHub头像
+ 同样借助 vue-resource 在新闻页面进行[新闻数据](https://my-json-server.typicode.com/guojianglin/vitual-data/db)的获取,这里用的是放到GitHub的假数据，借助[JSONPlaceholder](http://jsonplaceholder.typicode.com/)进行网络数据模拟
+ 用 v-for 渲染到页面,调整样式

+ 定义一个全局时间过滤器，对新闻的时间进行过滤

## 改造新闻列表，点击跳转到新闻详情页
+ 同上改造路由，新加组件 NewInfo.vue, 注意需要 id 的传递
+ 将详情的页面手动写上
+ 依旧是假数据，借助[JSONPlaceholder](http://jsonplaceholder.typicode.com/)，实现根据ID请求对应新闻详情页面的给你 $route.params.id获取数据

+ 将数据渲染到页面，由于假数据在上述提供该服务的网址那里有字数限制，只做了一条的新闻内容数据

## 评论内容组件页面的完成

+ 由于评论区域在项目后面的多个地方都需要使用到，所以单独抽离出来作为一个子组件，放在 subcomponent 目录下，命名为 comments.vue。

+ 项目本来是要能够分页加载评论数据的，但是数据接口没有，只能用假数据，当然一旦有了符合要求的接口，并不难修改。
+ 评论页面的两个button按钮是借助
MINT-UI 做的
+ 同其他组件一样，请求到数据之后用v-for渲染到页面。
+ 之后将评论组件挂载到新闻详情组件页面的后面。

+ 评论页面“加载更多”功能：设置一个pageIndex=1，点击按钮+1，然后再次调用请求数据的方法

+ 防止新数据覆盖老数据，请求拿到数据之后应该调用array.cancat()方法拼接数据放到data里面
+ 发表评论，利用Vue双向数据绑定的特性，设置用户点击发表评论的时候，做两件事：1是将评论内容放到data里面，2是向数据接口推送评论数据保存到数据库。之后一旦请求成功，那么就将数据unshift到this.comments数组里面。

## 改造首页图片分享，链接到图片分享界面组件，为其添加分类栏
+ 先添加组件：“components/photos/PhotoList.vue”

+ 在HomeContainer.vue中改，同时在router.js中添加相应的路由
### 添加分类栏及其坑

+ 图片分享界面，顶部滑动条，用MUI的tab-top-webview-main.html，将其拷贝到PhotoList.vue界面，同时把全屏样式(坑1)去掉。
+ MUI中不是所有代码都采用严格模式(坑2)，而webpack是用严格模式，所以需要借用插件将webpack的严格模式关掉===[babel-plugin-transform-remove-strict-mode](https://blog.csdn.net/weixin_42218847/article/details/82255570)
+ 虽然能够滑动了，但是会[警告](https://www.jianshu.com/p/04bf173826aa),这是谷歌的性能优化折腾出来的问题（坑3）
+ （坑4）页面出来之后，需要刷新之后才能滑动（这是对滑动元素初始化的时机不对，应该在mounted阶段初始化）
+ （坑5）路由链接会失效===这是因为MUI默认阻止a链接跳转，而router-link渲染成a链接，解决办法参见[第3种](http://www.bcty365.com/content-146-6269-1.html) 这里说明一下（造成该问题不是a链接的问题，因为试过将router-link 的tag设为=“div”，依旧不能跳转，而后又发现是类名mui-tab-item的问题，改掉了就可以正常跳转）
+ 加载分类栏的数据

### 图片列表的加载

+ 原来的功能是按照分类请求图片数据，但是缺乏这样的数据接口，只能进行模拟，[JSONPlaceholder](http://jsonplaceholder.typicode.com/)的[图片接口](http://jsonplaceholder.typicode.com/photos)可以取到5000条图片数据，然后借助array.slice()方法按照分类提取一定间隔的图片数据，模拟真实的数据接口。

+ 用MINT_UI的Lazy load组件进行懒加载
+ 样式的美化

### 改变图标列表的链接变成路由，跳转到特定的图片详情页面
+ 在photos目录下新建一个组件PhotoInfo.vue,同时配置路由
+ 设置样式，美化。
+ 将评论的子组件引入

### 设置缩略图区域
+ 借助vue-preview可以实现图片的预览，但是配置需按照[官网](https://www.npmjs.com/package/vue-preview),同时，样式需要全局样式进行设置才能生效，参考[网友文章](https://blog.csdn.net/weixin_44730897/article/details/88917513)
+ 基本没有问题，但是之前在弄MUI插件时，为了解决a链接默认跳转被屏蔽的问题，参考[网友文章](http://www.bcty365.com/content-146-6269-1.html) 解决了问题，但是也导致了现在的问题，就是：缩略图区域渲染出来的HTML结构包含了a标签，且指向的是图片原图的地址，所以点击之后直接跳转而不是查看大图，目前只能在设置样式时让点击区域大于a标签，并只能点击a链接以外的区域来实现功能。
+ 为了实现图片能够正常预览的又不影响路由链接的跳转，只能使用另外一种办法：tabbar路由的链接不要引用MUI组件的类名，而是自定义一个类名，但样式和原来一样。去除前面所使用的clone A链接的相关代码。最终功能完美实现！！！！

## 改造商品购买，并创组件文件，添加路由

### 商品列表，给出基本结构并美化

### 获取商品列表数据，渲染到页面
+ 数据是自己自己编的放在[GitHub仓库](https://github.com/guojianglin/vitual-data/blob/master/db.json),然后借助[JSONPlaceholder](http://jsonplaceholder.typicode.com/)进行访问，同时模拟了加载更多按钮的功能。

### 新加商品详情页面组件，用编程式导航，跳转该页面（于之前的标签式导航不同）

### 抽离轮播图组件，以便以后其他地方可调用，比如商品详情页面组件也需要轮播图
+ 抽离组件的步骤不难，拿出去-引进来-挖个坑
+ 这里由于不同区域的轮播图在宽度和高度上是否要求100%有差异，需要通过类来控制
```vue
<img :class="{类名:布尔值}">
```
### 商品详情
+ 写上样式，但由于没有数据接口，所以详情的数据渲染与其他组件基本一样，这里就省略不做了
+ 图文介绍和商品评论也一样

### 加入购物车的半场动画
+ 利用半场动画的钩子函数实现加入购物车有个小球飞入购物车的动画。
+ 存在问题，用translate()写死位移距离，会导致屏幕分辨率改变之后动画的位移不对
+ 解决办法：借助原生方法getBoundingClientRect()实时获取距离。

### 购买数量的改变，将数值传递给商品详情组件
+ 利用input的change事件，将值作为参数传递给绑定在子组件的函数上，父组件在函数内进行接收。
+ 此时numberBox组件有点小问题，点击一次增加两个。。除非在网页模式切换到手机模式才没有这个问题。网上的[解决方法](https://segmentfault.com/q/1010000015906265)

+ 购买数量的子盒子属于自子组件，库存的数量传给子组件来控制最大值，但是由于库存数量的数据需要一定网络请求时间，属于异步进程。故而应该Vue的watch进行属性监听

### 借助vuex进行状态管理，将购买数量添加到vuex这个“公共数据仓库”。然后购物车组件可以访问该组件

### 构建购物车界面
+ 首先，在商品详情界面放入购物车，会将商品的ID，price等信息放到vuex的公共仓库中，同时也要讲信息放到浏览器的本地存储中。
+ 其次，在加载页面的时候，根据保存的商品ID，发送请求获取商品并渲染出界面，由于我没有数据接口，这里就只是模拟数量的变化。
+ 放在公共仓库的数据，可以拿到各个商品的数量，借助getters来计算放到渲染的页面。
+ 接下来就是，当在购物车界面增减数量时，同步更新vuex公共仓库的中数据
+ 选中商品与否的状态也要同步更新到公共仓库==vuex创建的时间store中
+ 根据store中的数据，计算总的要结算的总件数与总价

## 各页面header添加返回键
+ 只有首页不需要返回键，其他页面都需要
+ 采用编程时导航，在点击事件时：this.$router.go(-1)实现返回之前的页面

# 项目完成
##总结：
+ 这个项目的目的是为了熟悉webpack搭建开发环境，用Vue框架进行项目开发。项目中，还借用了MUI、MINT_UI等组件插件进行开发。
+ 这个项目最令人头疼的地方是没有数据接口，只能自己编数据或者借助一下网站进行数据接口模拟。
+ 项目主要开发了首页、购物车等主页面，在首页，对菜单的前三个链接：新闻资讯、图片分享、商品购买进行深入开发，基本的思路是点进去后是相应的列表，然后再点进去就是详情页面。其中最复杂的是商品购买页面，主要是数据的传递，除了父子组件的传值，还有没有父子关系的组件之前的传值，借助vuex来存储公共数据。
+ 体会：基本的思路就是获取数据、渲染数据。其次就是一些特殊效果的实现，比如图片的查看、比如钩子函数实现的跳入购物车动画。

# 一下是项目各界面显示的效果
+ 1首页
![Image 1首页](https://github.com/guojianglin/webpack-vue/blob/master/show_img/HOME.png)

+ 2购物车
![Image 2购物车](https://github.com/guojianglin/webpack-vue/blob/master/show_img/SHOPCAR.png)

+ 3新闻列表
![Image 3新闻列表](https://github.com/guojianglin/webpack-vue/blob/master/show_img/NEWSLIST.png)

+ 4新闻详情
![Image 4新闻详情](https://github.com/guojianglin/webpack-vue/blob/master/show_img/NEWSINFO.png)

+ 5图片分享列表
![Image 5图片分享列表](https://github.com/guojianglin/webpack-vue/blob/master/show_img/PHOTOSLIST.png)

+ 6图片详情
![Image 6图片详情](https://github.com/guojianglin/webpack-vue/blob/master/show_img/PHOTOSINFO.png)

+ 7图片预览
![Image 7图片预览](https://github.com/guojianglin/webpack-vue/blob/master/show_img/PHOTOSINFO_PREVIEW.png)

+ 8图片评论
![Image 8图片评论](https://github.com/guojianglin/webpack-vue/blob/master/show_img/PHOTOSINFO_COMMENTS.png)

+ 9商品列表
![Image 9商品列表](https://github.com/guojianglin/webpack-vue/blob/master/show_img/GOODSLIST.png)

+ 10商品详情
![Image 10商品详情](https://github.com/guojianglin/webpack-vue/blob/master/show_img/GOODSINFO.png)

+ 11加入购物车动画
![Image 11加入购物车动画](https://github.com/guojianglin/webpack-vue/blob/master/show_img/ADDTOCAR.png)









