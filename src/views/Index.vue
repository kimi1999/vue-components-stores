
<template>
  <!-- 首页 -->
  <div>
    <h2>首页</h2>
    <router-link to="/child">显示子路由</router-link>
    <router-view></router-view>
  </div>
</template>

<style lang="less" scoped>
  h2{
    font-size: 25px;
    margin: 10px 0;

  }
</style>

<script lang="babel">
  import {mapGetters,mapActions} from 'vuex'
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
    created(){
      //1.0 第一种方式直接调用仓库里面的方法 （注意methods里面的mapActions）
      this.setVisitTime();
      console.log("当前时间: "+this.tools.time);
      //1.1 第二种方式调用仓库里面的方法
      this.$store.dispatch("setVisitTime","现在？什么鬼");
      console.log("变了吧:  "+this.tools.time);

      //2.0 调用其他methods里面的方法
      this.testFun();
    },
    methods:{
      ...mapActions({
        setVisitTime:'setVisitTime'
      }),
      testFun(){
        //其他的方法....
        console.log("...............testing...............");
      }
    }
  }
</script>
