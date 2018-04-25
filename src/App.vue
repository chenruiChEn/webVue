<template>
  <div id="app"  v-title data-title="标题内容">
    <el-container>
      <el-header >
        <div style="height: 40px;width: 100%;">fasdf</div>
        <div style="height: 80px;width: 100%;">fasdf</div>
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
      tableData:[],
    }
  },
  computed:{
    count(){
      return this.$store.state.count
    },
    isLogin(){
      return this.$store.state.isLogin
    }
  },
  methods:{
    increment(){
      this.$store.commit('increment')
    },
    decrement(){
      this.$store.commit('decrement')
    },
    toggle(){
      this.$i18n.locale = this.$i18n.locale=='cn'?'en':'cn';
    }
  },
  beforeCreate: function () {  //创建前状态

  },
  created: function () {  //创建完毕状态

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
  }
  .el-main{
    width: 1200px;
    margin: 15px auto;
    padding: 0;
    display: flex;
  }
</style>
