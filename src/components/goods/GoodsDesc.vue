<template>
  <div class="desc-container">
    <h3>{{ desc.title }}</h3>
    <hr>
    <div class="content" v-html="desc.content"></div>
  </div>

</template>

<script>
  import { Toast } from "mint-ui"
  export default {
    data(){
      return{
        id:this.$route.params.id,
        desc:{}
      }
    },
    created(){
      this.getDesc()

    },
    methods:{
      getDesc(){
        this.$http.get('https://my-json-server.typicode.com/guojianglin/vitual-data/newlist/'+(this.id+5)).then(result=>{
          if (result.status === 200) {
            console.log(result.body)
            this.desc = result.body;
            Toast({
              message: '加载新闻数据成功',
              position: 'middle',
              duration: 1000
            })
          } else{
            Toast('加载新闻数据失败')
          }
        })
      }
    }
  }
</script>

<style scoped lang="less">
.desc-container{
  padding: 4px;
  h3{
    font-size: 16px;
    color: #226aff;
    margin: 15px 0;
    text-align: center;
  }
}
</style>