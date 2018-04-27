<template>
  <!--<router-link v-bind:to="item.routeName">{{item.name}}</router-link>-->
  <Aside></Aside>
</template>

<script>
  import  Aside from "@/components/Aside"
  export default {
    name: 'personal',
    data() {
      return {}
    },
    computed: {},
    methods: {},
    components: { Aside },
    beforeCreate: function () {  //创建前状态


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


</style>
