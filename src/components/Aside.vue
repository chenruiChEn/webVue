<template>
      <div class="Aside">
        <h2>
          <router-link  to="../personal-center/personal-center.html">
            <i class="iou-icon_user nav-icon-0"></i>
            <!--Personal Page-->{{$t('icoachu5')}}
          </router-link>
        </h2>
        <h3 class="Course">
          <i class="  iou-icon_curriculum nav-icon-1"></i>
          <!--Course Control-->{{$t('icoachu6')}}
        </h3>
        <ul>
          <li>
            <router-link to="../course-manage/my-schedules.html">
              <!--My Class Schedule-->{{$t('icoachu7')}}
            </router-link>
          </li>
          <li>
            <router-link to="../curriculum/curriculum.html">
              <!--Course Center-->{{$t('icoachu8')}}
            </router-link>
          </li>
          <li>
            <router-link to="../course-manage/course-set.html">
              <!--Set Up Class-->{{$t('icoachu9')}}
            </router-link>
          </li>
          <li>
            <router-link to="../my-classroom/my-classroom.html">
              <!--My Classroom-->{{$t('icoachu10')}}
            </router-link>
          </li>
          <li>
            <router-link to="../my-courseware/my-courseware.html">
              <!--Teaching Materials-->{{$t('icoachu11')}}
            </router-link>
          </li>
          <li>
            <router-link to="../course-manage/course-playback.html">
              <!--Class Replay-->{{$t('icoachu12')}}
            </router-link>
          </li>
        </ul>
        <h3 class="Transaction">
          <i class="  iou-icon_curriculum nav-icon-2"></i>
          <!--Transaction-->{{$t('icoachu13')}}
        </h3>
        <ul>
          <li>
            <router-link to="../trade-manage/myOrder.html">
              <!--My Orders-->{{$t('icoachu14')}}
            </router-link>
          </li>
          <li>
            <router-link to="../trade-manage/my-student.html">
              <!--My Students-->{{$t('icoachu15')}}
            </router-link>
          </li>
          <li>
            <router-link to="../trade-manage/my-evaluate.html">
              <!--My Reviews-->{{$t('icoachu16')}}
            </router-link>
          </li>
        </ul>
        <h3 class="MoneyAccounts">
          <i class="  iou-icon_curriculum nav-icon-3"></i>
          <!--Money Accounts-->{{$t('icoachu17')}}
        </h3>
        <ul>
          <li class="active">
            <router-link to="../settlement/settlement.html">
              <!--Reward Account-->{{$t('icoachu18')}}
            </router-link>
          </li>
          <li>
            <router-link to="../live-account/my-account.html">
              <!--Live Stream Account-->{{$t('icoachu19')}}
            </router-link>
          </li>
          <li>
            <router-link to="../live-account/my-account.html">
              <!--Deposit-->{{$t('icoachu20')}}
            </router-link>
          </li>
        </ul>
        <h3 class="Settings">
          <i class="  iou-icon_curriculum nav-icon-4"></i>
          <!--Settings-->{{$t('icoachu21')}}
        </h3>
        <ul>
          <li>
            <router-link to="../enter/index.html" >
              <!--Be Our Teacher-->{{$t('icoachu22')}}
            </router-link>
          </li>
          <li>
            <router-link to="../personal-set/datum-manage.html">
              <!--Profile Control-->{{$t('icoachu23')}}
            </router-link>
          </li>
          <li>
            <router-link to="../personal-set/update-password.html">
              <!--Change Password-->{{$t('icoachu24')}}
            </router-link>
          </li>
        </ul>
        <h3 class="Organization">
          <i class="iou-icon_curriculum"></i>
          <!--Organization-->{{$t('icoachu25')}}
        </h3>
        <ul>
          <li>
            <router-link to="../org-manage/org-manage.html">
              <!--Organization Control-->{{$t('icoachu26')}}
            </router-link>
          </li>
        </ul>
        <div class="helpCenter"></div>
      </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {

            }
        },
        computed: {
        },
        methods: {},
        components: {},
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
.Aside{
  background-color: #fff;
  width: 200px;
  overflow: hidden;
  /*position: absolute;*/
  /*left: 0;*/
  /*top: 0;*/
  min-height: 996px;
  margin-right: 15px;
  h2,h3,li{
    height: 30px;
    line-height: 30px;
    .F16;
    color: @icoachuAuxiliaryColor06;
  }
  h2{
    margin: 30px 0 ;
    text-align: center;
    a{
      padding-left: 0;
    }
  }
  h3{
    border-left: 3px solid #fff;
    margin-top: 30px;
    margin-bottom: 10px;
    padding-left: 78px;
    position: relative;
     >i{
      position: absolute;
       right:  128px;
       top: 50%;
      width: 18px;
      height: 18px;
       transform: translate(0,-50%);
       background: url("../style/image/icon/icoachu_teacher_sprite.png");
    }
    &.Course>i{
      background-position: -2px -116px;
      background-size: 190px 180px ;
    }
    &.MoneyAccounts> i{
      height: 16px;
      width: 15px;
      background: url("../style/image/icon/icon_money.png")  no-repeat center ;
      background-size: 15px 16px ;
    }
    &.Organization> i{
      height: 16px;
      width: 16px;
      background: url("../style/image/icon/icon_org.png") no-repeat center ;
      background-size:  15px ;
    }
    &.Settings >i{
      background-position: -68px -138px;
      background-size: 190px 180px ;
    }
    &.Transaction >i{
      background-position: -90px -116px;
      background-size: 190px 180px ;
    }
  }
  a{
    box-sizing: border-box;
    cursor:pointer;
    color: @icoachuAuxiliaryColor06;
    display: inline-block;
    width: 100%;
    height: 100%;
    border-left: 3px solid #fff;
    transition: border-left-color 1s ease-in-out 0s;
    padding-left: 80px;
    &:hover{
      border-left: 3px solid @icoachuColor2;
    }
    &.router-link-active{
      border-left: 3px solid @icoachuColor2;
    }
  }
  .helpCenter{
    width: 180px;
    text-align: center;
    margin: 30px auto 5px;
    height: 70px;
    background: url("../style/image/icon/serviceCn.png.png") no-repeat center;
  }
}
  #en {
    .Aside{
      .helpCenter{
        background: url("../style/image/icon/serviceEn.png.png") no-repeat center;
      }
      a{
        padding-left: 40px;
      }
      h2 a{padding-left: 0;}
      h3{
        padding-left: 38px;
        >i{
          right: 168px;
        }
      }
    }

  }


</style>
