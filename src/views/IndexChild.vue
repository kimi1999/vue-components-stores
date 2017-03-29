
<template>
  <!-- 首页 字路由指向的页面 -->
  <div class="outer">
    <div class="inner">
      你赢了
    </div>
  </div>
</template>

<style lang="less" scoped>
  .outer{
    width: 100%;
    position: relative;
    display: table;
    height: 200px;
    .inner{
      display: table-cell;
      vertical-align: middle;
      color: goldenrod;
      font-size: 20px;
      text-align: center;
    }
  }

</style>

<script lang="babel">
  import {mapGetters} from 'vuex'
  export default {
    name: "Index",
    computed:{
      ...mapGetters({
        tools:'tools'
      })
    },
    data(){
      return {}
    },
    created(){},
    methods:{}
  }
</script>
