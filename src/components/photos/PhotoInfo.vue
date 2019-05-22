<template>
  <div class="photoinfo-container">
    <h3 class="title">标题：{{ photoInfo.title }}</h3>
    <p class="subtitle">
      <span>发表时间：{{ time | dateFormat }}</span>
      <span>所属相册：{{ photoInfo.albumId }}号相册</span>
    </p>
    <hr>

<!--    缩略图区域-->

    <div class="thumbs">
      <vue-preview :slides="slide1" @close="preventLink"></vue-preview>
    </div>

<!--    图片内容区域-->
    <div class="content">
      数据接口限制，用数据的标题代替{{ photoInfo.title }}
      数据接口限制，用数据的标题代替{{ photoInfo.title }}
    </div>

<!--    发表评论区域-->
    <cmt-box :id="this.id"></cmt-box>

  </div>
</template>

<script>

  import comment from '../subcomponent/comments.vue'
  import { Toast } from 'mint-ui'
  export default {
    data(){
      return{
        id:this.$route.params.id,
        photoInfo:{},
        time:Date.now(),
        slide1:[]
      }
    },
    created(){
      this.getPhotoInfo();
      this.getTthumbnailSlide()
    },
    methods:{
      getPhotoInfo(){
        this.$http.get('http://jsonplaceholder.typicode.com/photos/'+this.id).then(result =>{
          if (result.status === 200){
            this.photoInfo = result.body;
            Toast({
              message: '加载图片成功',
              position: 'middle',
              duration: 1000
            })
          }else{
            Toast('加载图片数据失败')
          }
        })

      },
      getTthumbnailSlide(){
        this.$http.get('https://my-json-server.typicode.com/guojianglin/vitual-data/slide1').then(result=>{
          if (result.status === 200){
            this.slide1 = result.body
            Toast({
              message: '加载图片成功',
              position: 'middle',
              duration: 1000
            })
          } else{
            Toast('加载图片数据失败')
          }
        })
      },
      preventLink(){
        console.log('ok');
      }
    },
    components:{
      "cmt-box":comment,
    }
  }
</script>

<style scoped lang="less">
  .photoinfo-container{
    padding: 3px;
    h3{
      color:#26a2ff;
      font-size:15px;
      text-align:center;
      margin: 15px 0;
    }
    .subtitle {
      display:flex;
      justify-content:space-between;
    }


    .content{
      font-size:13px;
      line-height:30px;
    }
  }
</style>