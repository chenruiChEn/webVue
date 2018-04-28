<template>
    <h2 class="PageTitle " :class="{borderBottom:showborder}"  :style="styleObject" :title="text">
        {{text}}<slot></slot>
    </h2>

</template>

<script>
    export default {
        name: 'PageTitle',
        data() {
            return {

            }
        },
        props: {
          text:{
            type:String,
            default:'title'
          },
          styleObject:Object,
          showborder:{
            type:Boolean,
            default:true,
          },
        },
        computed: {},
        methods: {},
        components: {},
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

<style lang="less" >
  @import "../style/commen";
.PageTitle{
  margin:  0 30px;
  height: 60px;
  line-height: 60px;
  padding: 0 5px;
  color: @icoachuAuxiliaryColor02;
  cursor: default;
  .F20;
  &.borderBottom{
    border-bottom: 1px solid @icoachuAuxiliaryColor05;
  }

}

</style>
