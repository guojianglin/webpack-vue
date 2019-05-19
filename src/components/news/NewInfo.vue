<template>
  <div class="newinfo-container">
    <h3 class="title">{{ newInfo.title }}</h3>
    <p class="subtitle">
      <span>发表时间:{{ newInfo.add_time | dateFormat }}</span>
      <span>点击：{{ newInfo.click }} 次</span>
    </p>
    <hr>
    <div class="content" v-html="newInfo.content">
    </div>
    <comment-box :id="this.id"></comment-box>
  </div>


</template>

<script>
  import comment from '../subcomponent/comments.vue'
  import { Toast } from 'mint-ui'
  export default {
    data(){
      return {
        id: this.$route.params.id,
        newInfo:{}
      }
    },
    created(){
      this.getNewInfo()
    },
    methods:{
      getNewInfo(){
        this.$http.get('https://my-json-server.typicode.com/guojianglin/vitual-data/newlist/' + this.id).then(result => {
          // console.log(result.body)
          if(result.status === 200){
            this.newInfo = result.body;
            Toast({
              message: '加载新闻数据成功',
              position: 'middle',
              duration: 1000
            })
          } else {
            Toast('加载新闻数据失败')
          }

        })
      }
    },
    components:{
      "comment-box":comment
    }
  }
</script>

<style scoped lang="less">
  
  .newinfo-container{
    padding:0 4px;
    .title{
      text-align:center;
      margin:15px 0;
      font-size:16px;
      color:red;
    }
    .subtitle{
      font-size: 13px;
      color: #226aff;
      display:flex;
      justify-content: space-between;
    }
    .content{

    }
  }
  
</style>