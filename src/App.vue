<template>
  <div id="app">
    <router-view/>
    <p>{{count}}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>

    <div>

      <el-input v-model="input" placeholder="请输入内容"></el-input>
      <p>{{$t("hello")}}</p>
      <button @click="toggle">切换语言</button>
      <el-transfer v-model="value1" :data="data"></el-transfer>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data:{

  },
  computed:{
    count(){
      return this.$store.state.count
//      return 0
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
      this.$i18n.locale = this.$i18n.locale=='zh'?'en':'zh';
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
#app {
  width: 800px;
  margin:0 auto;
  div{
    padding-top:60px;
    color: @icoachuColor;
  }
}
</style>
