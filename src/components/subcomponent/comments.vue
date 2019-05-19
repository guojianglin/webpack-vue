<template>
  <div class="cmt-container">
    <h3>评论槽位</h3>
    <hr>
    <textarea placeholder="请输入的您的评论（最多120字）"></textarea>
    <mt-button type="primary" size="large">发表评论</mt-button>

    <div class="cmt-list" v-for="(item,index) in comments">
      <div class="cmt-item">
        <div class="cmt-title">
          第{{ index + 1}}楼&nbsp;&nbsp;用户：{{item.nser_name}}&nbsp;&nbsp;发表时间：{{item.add_time | dateFormat}}
        </div>
        <div class="cmt-body">
          {{item.content === 'undefined' ? '用户很懒什么都没说':item.content }}
        </div>
      </div>
    </div>



    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>

</template>

<script>
  import { Toast } from 'mint-ui'
  export default {
    data(){
      return {
        pageIndex:1,
        comments:[]
      }
    },
    created(){
      this.getComments();
    },
    methods:{
      getComments(){
        console.log(this.id)
        this.$http.get("https://my-json-server.typicode.com/guojianglin/vitual-data/comments").then(result =>{

          if (result.status === 200){
            console.log(result);
            this.comments = this.comments.concat(result.body);
            Toast({
              message:'加载评论数据成功',
              position:'bottom',
              duration:1000
            })
          } else {
            Toast('加载评论数据失败')
          }
        })
      },
      getMore(){
        this.pageIndex++;
        this.getComments();
      }
    },

    props:["id"]

  }
</script>

<style scoped lang="less">
  .cmt-container{
    h3{
      font-size:18px;
    }
    textarea{
      font-size:14px;
      height: 85px;
      margin: 0;
    }

    .cmt-list{
      margin: 10px 0;
      .cmt-item{
        font-size: 13px;
      }
      .cmt-title{
        background-color: #ccc;
        line-height: 30px;
      }
      .cmt-body{
        line-height: 35px;
        text-indent:2em;
      }
    }

  }
</style>