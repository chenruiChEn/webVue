<template>
    <div   :id="icoachuLang" :class="proType"  v-title :data-title="icoachuTitle">

      <!--头部-->
      <div class='el-header' >
        <div class="headContainer">
          <div class="headUserInfo ">
            <div class="top-right">
              <ul>
                <li class="user"><span class="user-name">wr234werw <em class="el-icon-arrow-down"></em></span>
                  <ul class="user-info tin5-h">
                    <li><router-link to="/">账号信息</router-link></li>
                    <li><router-link to="/">修改密码</router-link></li>
                  </ul>
                </li>
                <li class="exit">退出登录</li>
              </ul>
              <div class="layui-clear"></div>
            </div>
          </div>
        </div>
        <div class="headLogo" >
          <div class="logoBox">
            <h1 :class="proType"   @click="toLogin">{{$t("icoachu")}}</h1>
            <div class="toggleLang" @click="toggle" >{{$t('langBtn')}}</div>
          </div>
        </div>
      </div>

      <div class="el-main">
        <Aside></Aside>
        <!--路由站位-->
        <router-view/>
      </div>

      <!--底部-->
      <div class="el-footer">
          <div class="flootBox" v-html="$t('Copyright')"></div>
      </div>

    </div>

</template>

<script>
  import  Aside from "@/components/Aside"

export default {
  name: 'App',
  data(){
    return {

    }
  },
  computed:{

    isLogin(){
      return this.$store.state.isLogin
    },
  },
  methods:{

  },
  components: { Aside },
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

<style lang="less"  >
  @import "style/commen";

  #en{
    .logoBox>.teacher{
      background-image:url("./style/image/logo-teacherEn.png");
    }
    .logoBox>.org{
      background-image:url("./style/image/logo-orgEn.png");
    }
  }

  #cn{
    .logoBox>.teacher{
      background-image:url("./style/image/logo-teacherCn.png");
    }
    .logoBox>.org{
      background-image:url("./style/image/logo-teacherCn.png");
    }
  }

</style>
