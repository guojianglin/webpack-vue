<template>
  <div class="photo-container">
<!--    分类栏-->
    <div id="slider" class="mui-slider">
      <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
          <div :class="['mui-control-item',item.id===0 ? 'mui-active':'']" v-for="item in cates" :key="item.id" @tap="getPhotoListByCateId(item.id)">
            {{ item.title }}
          </div>
        </div>
      </div>
    </div>

<!--    图片列表-->
    <ul class="photo-list">
      <router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo/'+item.id" tag="li">
        <img v-lazy="item.url">

        <div class="info">
          <h3 class="info-title">{{ item.title }}</h3>
          <div class="info-body">这里没有摘要的具体内容，用这个有的图片地址缩略图替代{{ item.thumbnailUrl }}</div>
        </div>
      </router-link>
    </ul>

  </div>
</template>

<script>
  import {Toast} from 'mint-ui'
  // 引入js组件
  import mui from '../../lib/mui/js/mui.js'


  export default {
    data(){
      return{
        cates:[],//分类列表数组
        list:[]//图片列表数组
      }
    },
    mounted(){
      // 滑动初始化(操作元素要在mounted挂载阶段才能保证初始化成功)
      mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
      });
    },
    created(){
      this.getCategory()
      this.getPhotoListByCateId(1)
    },
    methods:{
      getCategory(){
        this.$http.get('https://my-json-server.typicode.com/guojianglin/vitual-data/phocategorys').then(result =>{
          if (result.status === 200) {

            result.body.unshift({//unshift()返回值是数组长度而不是数组，不能直接赋值
              title:"全部",
              id:0
            });
            this.cates = result.body
            // console.log(result.body.unshift({
            //   title:"全部",
            //   id:0
            // }));
            Toast({
              message:'加载分类成功',
              duration:1000,
              position:'top'
            })
          }else{
            Toast('加载分类失败')
          }
        })
      },
      getPhotoListByCateId(cateId){
        this.$http.get('http://jsonplaceholder.typicode.com/photos').then(result=>{
          this.list = result.body.slice(cateId*10,(cateId+1)*10)
          Toast('加载图片呢')
        })
      }
    },

  }

  // 这段代码是解决mui默认阻止a链接跳转的问题：在当前页面不能跳回首页的问题
  // mui(document).on('tap', 'a', function() {
  //   var a = document.createElement('a');
  //   a = this.cloneNode(true);
  //   a.click();
  // })
</script>

<style scoped lang="less">
  * { touch-action: pan-y; }
  .photo-container{
    .photo-list{
      list-style: none;
      padding: 10px;
      margin: 0;
      padding-bottom: 0;
      li{
        text-align:center;
        margin-bottom: 10px;
        background-color:#ccc;
        box-shadow: 0 0 9px #999;
        position:relative;
        image[lazy=loading] {
          width: 40px;
          height: 300px;
          margin: auto;
        }
        img{
          width:100%;
          vertical-align:middle;
        }
        .info{
          position:absolute;
          left: 0;
          bottom:0;
          text-align:left;
          background-color: rgba(0,0,0,0.4);
          color:#fff;
          max-height: 84px;
          .info-title{
            font-size: 14px;
          }
          .info-body{
            font-size: 13px;
          }
        }
      }

    }

  }

</style>