<template>
  <div class="cmt-container">
    <h3>评论槽位</h3>
    <hr>
    <textarea placeholder="请输入的您的评论（最多120字）" v-model="msg"></textarea>
    <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>

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
        comments:[],
        msg:''
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
      },
      postComment(){
        //验证内容不能为空
        if (this.msg.trim().length === 0) {
          return Toast('评论内容不能为空')
        }

        // 这里是当有能够真实接收评论数据接口时用的代码
        // this.$http.post('url',{
        //   content:this.msg.trim()
        // },{emulateJSON:true}).then()



        // 将来有真实数据接口时，以下内容应在post成功之后执行
        var cmt = {
          nser_name:'匿名用户',
          add_time:Date.now(),
          content:this.msg.trim()
        }
        this.comments.unshift(cmt)
        this.msg = ''

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