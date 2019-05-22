<template>
  <div class="goodsInfo-container">

    <transition
    @beforeEnter="beforeEnter"
    @enter="enter"
    @afterEnter="afterEnter"
    >
      <div class="ball" v-show="flag" ref="ball"></div>
    </transition>


    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <my-swiper :lunbotuList="slide" :isfull="false"></my-swiper>
        </div>
      </div>
    </div>

    <div class="mui-card">
      <div class="mui-card-header">商品名称 型号</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价：<del>￥2399</del>&nbsp;&nbsp;销售价：<span class="now_price">￥2199</span>
          </p>
          <p>
            购买数量：
            <numbox class="numbox" @getCount="getSelectCount" :max="maxStorage"></numbox>
          </p>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addToShopCar">放购物车</mt-button>
          </p>
        </div>
      </div>
    </div>

    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：</p>
          <p>库存情况：</p>
          <p>上架时间：</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="goDesc(1)">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="goCmt(1)">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui'
  import swiper from '../subcomponent/swiper.vue'
  import numbox from '../subcomponent/goodsinfo_number.vue'

  export default {
    data(){
      return{
        slide:[],
        flag:false,
        selectCount:1,
        maxStorage:8
      }
    },
    created(){
      this.getlunbotu()
    },
    methods:{
      getlunbotu(){
        this.$http.get('https://my-json-server.typicode.com/guojianglin/vitual-data/slide1').then(result=>{
          if (result.status === 200){
            result.body.forEach(item => {
              item.url = item.msrc;
            })
            this.slide = result.body
            this.maxStorage=60;
            Toast({
              message: '加载轮播图成功',
              position: 'middle',
              duration: 1000
            })
          } else{
            Toast('加载轮播图数据失败')
          }
        })
      },
      goDesc(id){
        this.$router.push({name:"goodsdesc",params:{id}})
      },
      goCmt(id){
        this.$router.push({name:"goodscmt",params:{id}})
      },
      addToShopCar(){
        this.flag=!this.flag;
      },
      beforeEnter(el){
        el.style.transform="translate(0,0)"
      },
      enter(el,done){
        el.offsetWidth
        const ballRect = this.$refs.ball.getBoundingClientRect();
        const badge = document.getElementById('badge').getBoundingClientRect();
        const xDist = badge.left - ballRect.left;
        const yDist = badge.top - ballRect.top;
        // console.log(ballRect);
        // console.log(badge);
        el.style.transform=`translate(${xDist}px, ${yDist}px)`;
        el.style.transition="all 0.5s cubic-bezier(.57,-0.46,.98,.65)";
        done()
      },
      afterEnter(el){
        this.flag=!this.flag
      },
      getSelectCount(count){
        this.selectCount = count;
        console.log(this.selectCount);
      }
    },
    components:{
      "my-swiper":swiper,
      numbox
    }
  }
</script>

<style scoped lang="less">
  .goodsInfo-container{
    position: relative;
    background-color: #eee;
    overflow:hidden;
    .mui-card{
      .mui-card-content-inner{
        .now_price{
          color:red;
          font-weight: bold;
          font-size: 16px;
        }
        .numbox{
          display: inline-block;
        }
      }
      .mui-card-footer{
        display: block;
        button{
          margin: 10px 0;
        }
      }
    }
    .ball{
      position: absolute;
      top: 346px;
      left: 150px;
      /*transform:translate(150px,230px);*/
      z-index: 99;
      background-color: red;
      width: 15px;
      height: 15px;
      border-radius:50%;
    }
  }

</style>