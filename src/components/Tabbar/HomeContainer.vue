<template>
  <div>
    <my-swiper :lunbotuList="lunbotuList" :isfull="true"></my-swiper>

    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-sm-4 mui-col-xs-4">
          <router-link to="/home/newlist">
            <img src="../../images/menu1.png" alt="">
            <div class="mui-media-body">新闻资讯</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-sm-4 mui-col-xs-4">
          <router-link to="/home/photolist">
            <img src="../../images/menu2.png" alt="">
            <div class="mui-media-body">图片分享</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-sm-4 mui-col-xs-4">
          <router-link to="home/goodslist">
            <img src="../../images/menu3.png" alt="">
            <div class="mui-media-body">商品购买</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-sm-4 mui-col-xs-4">
          <a href="#">
            <img src="../../images/menu4.png" alt="">
            <div class="mui-media-body">留言反馈</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-sm-4 mui-col-xs-4">
          <a href="#">
            <img src="../../images/menu5.png" alt="">
            <div class="mui-media-body">视频专区</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-sm-4 mui-col-xs-4">
          <a href="#">
            <img src="../../images/menu6.png" alt="">
            <div class="mui-media-body">联系我们</div>
          </a>
        </li>
      </ul>
    </div>
    <h1>HomeContainer组件</h1>
  </div>

</template>

<script>
  import {Toast} from 'mint-ui'
  import swiper from '../subcomponent/swiper.vue'

  export default {
    data() {
      return {
        lunbotuList: []
      }
    },
    created() {
      this.getLunbotu();
    },
    methods: {
      getLunbotu() {
        // 获取数据
        this.$http.get('https://jsonplaceholder.typicode.com/photos').then(result => {
          // console.log('ok');
          // console.log(result);
          if (result.status === 200) {
            Toast({
              message: '获取轮播图成功',
              position: 'middle',
              duration: 1000
            });
            this.lunbotuList = result.body.slice(0, 5)
          } else {
            Toast('获取轮播图失败。。。')
          }
        })
      }
    },
    components:{
      "my-swiper":swiper
    }
  }
</script>

<style scoped lang="less">

  .mui-content{

    .mui-grid-view{
      background-color: #fff;
      border: 0;
      .mui-table-view-cell{
        background-color: #fff;
        border: 0;
        img{
          width: 60px;
          height: 60px;
        }
        div{
          font-size:13px;
        }
      }

    }
  }

</style>