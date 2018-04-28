<template>
    <div class="myClassSchedule MainBox" v-title :data-title="icoachuTitle">
      <PageTitle :text="$t('icoachu7')"></PageTitle>
      <div class="scheduleBox">
          <div class="scheduleItemsBox">
              <h2>fsdf</h2>
          </div>
          <div class='candle'>
            <Calendar></Calendar>
          </div>
      </div>
    </div>

</template>

<script>
  import PageTitle from '@/components/PageTitle'
  import Calendar from '@/components/Calendar'
    export default {
        name: 'myClassSchedule',
        data() {
            return {}
        },
        computed: {},
        methods: {},
        components: {PageTitle,Calendar},
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
  @import "../style/commen";
.myClassSchedule{
  background-color: #fff;
  .scheduleBox{
    min-height: 500px;
    position: relative;
    display: flex;
    margin: 20px 30px 0;
    overflow: hidden;
    .scheduleItemsBox{
      flex: 1;
      height: 100%;
      h2{
        height: 40px;
        line-height: 40px;
        background-color: @icoachuBackground2;
        padding-left: 10px;
        color: @icoachuAuxiliaryColor06;
        .F14;
        cursor: default;
      }
    }
    .candle{
      width: 280px;
      margin-left: 15px;
      min-height: 500px;
    }
  }
}

</style>
