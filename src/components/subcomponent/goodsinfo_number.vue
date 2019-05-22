<template>
  <div>
    <div class="mui-numbox" data-numbox-min='1' :data-numbox-max='max'>
      <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
      <input id="test" ref="count" class="mui-input-numbox" type="number" value="1" @change="countChange"/>
      <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
  </div>
</template>

<script>
  import mui from '../../lib/mui/js/mui.min.js'

  export default {
    mounted() {
      mui('.mui-numbox').numbox().setOption('step', 1)
    },
    methods: {
      countChange() {
        this.$emit('getCount', parseInt(this.$refs.count.value))
      }
    },
    props: ["max"],
    watch: {
      'max': function (newV, oldV) {
        mui('.mui-numbox').numbox().setOption('max', newV)
      }
    }
  }

</script>

<style scoped lang="less">
  .mui-numbox {
    height: 25px;
    color: #000;
  }
</style>