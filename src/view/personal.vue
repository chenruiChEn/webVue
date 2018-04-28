<template>

  <div class="personalPage MainBox"  v-title :data-title="icoachuTitle">
      <div class="main">


      </div>
      <div class="newsCenter">

      </div>
  </div>
</template>

<script>


  export default {
    name: 'personal',
    data() {
      return {
        titles:'hfhfgh'
      }
    },
    computed: {},
    methods: {},
    components: {  },
    beforeCreate: function () {  //创建前状态


    },
    created: function () {  //创建完毕状态
      console.log(this._i18n);
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
  @import "../style/commen";
.personalPage{
  display: flex;
  .newsCenter{
    width: 270px;
    margin-left: 15px;
    height: 100%  ;
    background-color: #fff;
  }
  .main{
    flex: 1;
    height: 100%;
    background-color: #fff;
  }
}

</style>
