<template>
    <div :id="lang" v-title :data-title="title">
      <div class="Aside">
        <h2>
          <router-link  to="../personal-center/personal-center.html">
            <i class="iou-icon_user nav-icon-0"></i>
            Personal Page
          </router-link>
        </h2>
        <h3>
          <i class="  iou-icon_curriculum nav-icon-1"></i>
          Course
        </h3>
        <ul>
          <li>
            <router-link to="../course-manage/my-schedules.html">
              My Class Time Table
            </router-link>
          </li>
          <li>
            <router-link to="../curriculum/curriculum.html">
              Course Center
            </router-link>
          </li>
          <li>
            <router-link to="../course-manage/course-set.html">
              Course Control
            </router-link>
          </li>
          <li>
            <router-link to="../my-classroom/my-classroom.html">
              My Classroom
            </router-link>
          </li>
          <li>
            <router-link to="../my-courseware/my-courseware.html">
              My Courseware
            </router-link>
          </li>
          <li>
            <router-link to="../course-manage/course-playback.html">
              Class Replay
            </router-link>
          </li>
        </ul>
        <h3>
          <i class="  iou-icon_curriculum nav-icon-2"></i>
          Transaction
        </h3>
        <ul>
          <li>
            <router-link to="../trade-manage/myOrder.html">
              My Orders
            </router-link>
          </li>
          <li>
            <router-link to="../trade-manage/my-student.html">
              My Students
            </router-link>
          </li>
          <li>
            <router-link to="../trade-manage/my-evaluate.html">
              Comments
            </router-link>
          </li>
        </ul>
        <h3>
          <i class="  iou-icon_curriculum nav-icon-3"></i>
          Account
        </h3>
        <ul>
          <li class="active">
            <router-link to="../settlement/settlement.html">
              Teaching Account
            </router-link>
          </li>
          <li>
            <router-link to="../live-account/my-account.html">
              Live Stream Account
            </router-link>
          </li>
        </ul>
        <h3>
          <i class="  iou-icon_curriculum nav-icon-4"></i>
          Settings
        </h3>
        <ul>
          <li>
            <router-link to="../enter/index.html" style="display: none;">
              Apply to Join
            </router-link>
          </li>
          <li>
            <router-link to="../personal-set/datum-manage.html">
              Material Control
            </router-link>
          </li>
          <li>
            <router-link to="../personal-set/update-password.html">
              Change Password
            </router-link>
          </li>
        </ul>
        <h3>
          <i class="  iou-icon_curriculum nav-icon-5"></i>
          Organization
        </h3>
        <ul>
          <li>
            <router-link to="../org-manage/org-manage.html">
              Organization Control
            </router-link>
          </li>
        </ul>
        <div class="helpCenter"></div>
      </div>
    </div>

</template>

<script>
    export default {
        name: 'App',
        data() {
            return {

            }
        },
        computed: {},
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
  h2,h3,li{
    height: 30px;
    line-height: 30px;
    .F16;
  }
}

</style>
