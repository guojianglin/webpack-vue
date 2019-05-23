<template>
  
  <div class="shopCar-container">
    <div class="mui-card" v-for="(item,i) in goodslist" :key="item.id">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <mt-switch
            v-model="$store.getters.getGoodsSelected[item.id]"
            @change="changeSelected(item.id,$store.getters.getGoodsSelected[item.id])"></mt-switch>
          <img :src="item.img_url" alt="">
          <div class="info">
            <h1>小米手机 16g 小米NOte 三网通 高通骁龙855</h1>
            <p>
              <span class="price">￥2166</span>
              <numbox :everyCount="$store.getters.getEveryCount[item.id]" :id="item.id"></numbox>
              <a href="#" @click.prevent="remove(item.id,i)">删除</a>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <div class="left">
            <p>总计（不含运费）</p>
            <p>已勾选商品 <span class="red">{{ this.$store.getters.getCountAndAmount.count }}件</span> 总价 <span class="red">￥{{ this.$store.getters.getCountAndAmount.amount }}元</span></p>
          </div>
          <mt-button type="danger">去结算</mt-button>
        </div>
      </div>
    </div>

<!--    <p>{{$store.getters.getGoodsSelected}}</p>-->
  </div>
</template>

<script>

  import numbox from '../subcomponent/shopcar_number.vue'
  export default {
    data(){
      return{
        goodslist:[]
      }
    },
    created(){
      this.getGoodsList()
    },
    methods:{
      getGoodsList(){
        var idInCar = []
        this.$store.state.car.forEach(item=>{
          idInCar.push(item.id)
        })
        idInCar.forEach(item=>{
          this.$http.get('https://my-json-server.typicode.com/guojianglin/vitual-data/goodslist/'+item).then(result=>{
            if (result.status===200){
              this.goodslist.push(result.body)
            }
          })
        })
      },
      remove(id,index){
        this.goodslist.splice(index,1)
        this.$store.commit("removeGoodsInfo",id)
      },
      changeSelected(id,selected){
        this.$store.commit('changeSelec',{id,selected:selected})
      }
    },
    components:{
      numbox
    }
  }
</script>

<style scoped lang="less">
  .shopCar-container{
    background-color: #eeeeee;
    overflow: hidden;
    .mui-card{
      .mui-card-content-inner{
        display: flex;
        align-items: center;
        justify-content: space-between;
        img{
          width: 60px;
          height: 60px;
        }
        .info{
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          h1{
            font-size: 13px;
          }
          p{
            display: flex;
            align-items: center;
            .price{
              color: red;
              font-weight: bold;
              margin-right: 10px;
            }
            a{
              margin-left: 5px;
            }
          }

        }
        .left{
          .red{
            color:red;
            font-size: 16px;
            font-weight: bold;
          }
        }
      }
    }
  }

</style>