<template>
  <mt-swipe :auto="4000">
    <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
      <img :src="item.url" alt="" :class="{full:isfull}">
    </mt-swipe-item>
  </mt-swipe>
</template>

<script>
  export default {
    data(){
      return{

      }
    },
    props:['lunbotuList','isfull']
  }
</script>

<style scoped lang="less">
  .mint-swipe {
    height: 200px;

    .mint-swipe-item {
      text-align: center;

      img {
        /*width: 100%;*/
        height: 100%;
      }
    }
  }
  .full{
    width:100%
  }
</style>