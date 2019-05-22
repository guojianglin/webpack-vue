<template>
  <div class="cmt-container">
    <cmt :id="id"></cmt>
  </div>
</template>

<script>
  import cmt from '../subcomponent/comments.vue'

  export default {
    data(){
      return{
        id:this.$route.params.id
      }
    },
    components:{
      cmt
    }
  }
</script>

<style scoped lang="less">
.cmt-container{
  padding: 4px;
}
</style>