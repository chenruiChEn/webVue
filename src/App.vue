<template>
  <div id="app"  v-title :data-title="title" >
    <el-container :id="lang">
      <el-header >
        <div style="height: 40px;width: 100%;">fasdf</div>
        <div class="h_panel" >
          <div class="h_logo new-logo" style="width: 50px;" onclick="window.location='http://www.icoachu.cn'">dfsfs</div>
          <!--<div class="language-box">-->
            <!--<a href="http://www.icoachu.cn/icoachu-teacher-cms/login/login.html">中文</a> / <a href="http://en.icoachu.cn/icoachu-teacher-cms/login/login.html">English</a>-->
          <!--</div>-->
          <div @click="toggle" >{{title}}{{$t('logon')}}</div>
        </div>


      </el-header>
      <el-main>
        <router-view/>
      </el-main>
      <el-footer>

      </el-footer>
    </el-container>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      input:'fsdfs',
    }
  },
  computed:{
    count(){
      return this.$store.state.count
    },
    isLogin(){
      return this.$store.state.isLogin
    },
  },
  methods:{
    increment(){
      this.$store.commit('increment')
    },
    decrement(){
      this.$store.commit('decrement')
    },

  },
  beforeCreate: function () {  //创建前状态
    console.log(this.$route.name);

  },
  created: function () {  //创建完毕状态
    console.log(this);
  },
  beforeMount: function () {  //挂载前状态

  },
  mounted: function () {  //挂载结束状态

  },
  beforeUpdate: function () {  //更新前状态

  },
  updated: function () {  //更新完成状态

  },
  beforeDestroy: function () {  //销毁前状态

  },
  destroyed: function () {  //销毁完成状态

  }
}
</script>

<style lang="less">
  @import "style/commen";
  .el-header{
    min-height: 80px;
    width: 1200px;
    margin: 0 auto;
    padding:0;
  }
  .el-main{
    width: 1200px;
    margin: 15px auto;
    padding: 0;
    display: flex;
  }
</style>
