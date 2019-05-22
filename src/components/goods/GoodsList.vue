<template>
  <div class="goods-container">
    <div class="goods-item" v-for="item in goodslist" :key="item.id" @click="goDetail(item.id)">
      <img :src="item.img_url" alt="pic">
      <h1>努比亚 nubia 红魔Mars电竞手机 全面屏 游戏手机 6GB+64GB 烈焰红 移动联通电信4G手机 双卡双待</h1>
      <div class="goods-info">
        <p class="price">
          <span class="now">￥999</span>
          <span class="old">￥1099</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>

    </div>
    <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>




  </div>
</template>

<script>
  import { Toast } from "mint-ui"
  export default {
    data(){
      return{
        goodslist:[],
        pageindex:1,
        storage:[]
      }
    },
    created(){
      this.getGoodsList();
    },
    methods:{
      getGoodsList(){
        this.$http.get('https://my-json-server.typicode.com/guojianglin/vitual-data/goodslist').then(result=>{
          if (result.status ===200 ){
            this.goodslist = result.body;
            this.storage = result.body;
            Toast({
              message:"加载商品数据成功",
              position:"middle",
              duration:1000
            })
          } else {
            Toast("加载商品失败")
          }
        })
      },
      getMore(){
        this.pageindex++;
        if (this.goodslist.length / 6 < this.pageindex){
          this.goodslist=this.goodslist.concat(this.storage)
        }
      },
      goDetail(id){
        this.$router.push('/home/goodsinfo/'+ id)
      }
    }
  }
</script>

<style scoped lang="less">
  .goods-container{
    display:flex;
    padding: 8px;
    flex-wrap:wrap;
    display: flex;
    justify-content: space-between;
    .goods-item{
      width: 49%;
      border: 1px solid #ccc;
      box-shadow:0 0 8px #ccc;
      margin: 4px 0;
      display: flex;
      flex-direction: column;
      padding: 2px;
      min-height: 293px;
      justify-content: space-between;
      img{
        width: 100%;
      }
      h1{
        font-size:14px;
      }
      .goods-info{
        background-color: #eee;
        margin: 0;
        padding: 6px;
        .price{

          .now{
            color:red;
            font-weight: bold;
            font-size: 16px;
          }
          .old{
            text-decoration: line-through;
            font-size: 12px;
            margin-left: 10px;
          }
        }
        .sell{
          display:flex;
          justify-content: space-between;
          font-size: 13px;
        }
      }
    }
  }

</style>