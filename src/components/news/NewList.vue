<template>
  <ul class="mui-table-view mui-table-view-chevron">
    <li class="mui-table-view-cell mui-media" v-for="item in newlist" :key="item.id">
      <router-link class="mui-navigate-right" :to="'/home/newlist/' + item.id">
        <img class="mui-media-object mui-pull-left" :src="item.img_url">
        <div class="mui-media-body">
          <h1>{{ item.title }}</h1>
          <p class='mui-ellipsis'>
            <span>发表时间：{{ item.add_time | dateFormat("YY-MM-DD") }}</span>
            <span>点击：{{ item.click }}次</span>
          </p>
        </div>
      </router-link>
    </li>
  </ul>
</template>

<script>
  import { Toast } from 'mint-ui'
  export default {
    data() {
      return {
        newlist: []
      }
    },
    created() {
      this.getNewList()
    },
    methods: {
      getNewList() {
        this.$http.get("https://my-json-server.typicode.com/guojianglin/vitual-data/db").then(result => {
          console.log(result.body)
          if (result.status ===200){
            this.newlist = result.body.newlist;
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
    }
  }
</script>

<style scoped lang="less">
  .mui-table-view {
    .mui-table-view-cell {
      .mui-media-body {
        h1 {
          font-size: 14px;
        }

        .mui-ellipsis {
          font-size: 12px;
          display: flex;
          color: #226aff;
          justify-content: space-between;
        }
      }
    }
  }

</style>