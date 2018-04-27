<template>
    <div class="hello">
      gfdghdfg
        <span v-bind:title="msg">ghjggfjgfhjgdfj</span>
    </div>


</template>

<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                msg: 'Welcome to Your myVue'
            }
        },
      mounted: function () {  //挂载结束状态
        console.log(this);
        console.log(this.$route.name);
      },
    }
</script>

<style lang="less" >
  @import "../style/commen";
  .hello{
    position: relative;
    height: auto;
    span{
      width: 300px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      height: 20rem;
      line-height:20rem;
      color: @icoachuColor;
    }
  }
</style>
