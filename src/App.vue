<template>
    <div   :id="lang"  v-title :data-title="title">

      <!--头部-->
      <div class='el-header' >
        <div class="headContainer">
          <div class="headUserInfo ">
            <div class="top-right">
              <ul>
                <li class="user"><span class="user-name">wr234werw <em class="el-icon-arrow-down"></em></span>
                  <ul class="user-info tin5-h">
                    <li><a href="../personal-set/datum-manage.html">账号信息</a></li>
                    <li><a href="../personal-set/update-password.html">修改密码</a></li>
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



        <!--路由站位-->
        <router-view/>

      </div>

      <!--底部-->
      <div class="el-footer">
          <div class="flootBox">{{$t('Copyright')}}</div>
      </div>

    </div>

</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      input:'fsdfs',
        tableList:{
            loading:false,
            list:[
                {
                    id:'1',
                    plaChargeMainNum: 1201,
                    chaStuName: '小李',
                    chaClaName: '一班',
                    createDate:'2012-12-22',
                    chaMoney: 22,
                    tag:'家'
                },
                {
                    id:'2',
                    plaChargeMainNum: 1201,
                    chaStuName: '小李',
                    chaClaName: '一班',
                    createDate:'2012-12-22',
                    chaMoney: 22,
                    tag:'公司'
                }
            ],
            columns: [
                {
                    prop: 'plaChargeMainNum',
                    label: '单号',
                    width: '200'
                },
                {
                    prop: 'tag',
                    label: '类型',
                    width: '120',
                    filters:[{ text: '家', value: '家' }, { text: '公司', value: '公司' }],
                    filterMethod: this.filterTag,
                    filterPlacement:"bottom-end"
                },
                {
                    prop: 'chaStuName',
                    label: '学生'
                },
                {
                    prop: 'chaClaName',
                    label: '班级'
                },
                {
                    prop: 'createDate',
                    label: '日期',
                    // formatter: (r, b) => this.mixin_table_formatDate(r, '-')
                },
                {
                    prop: 'chaMoney',
                    label: '金额',
                    slotName: 'money-slot'//此处需要注意，此字段是新增属性，后边做详细解释
                }
            ],
            pagination: {
                page:1,
                pageSize: 10,
                total: 20
            },
            options: {
                border: true,
                checkbox: true,
                radio: false,
                radioSelect: '1',
                selectionWidth:'55'
            }
        }
    }
  },
  computed:{
    count(){
      return this.$store.state.count
    },
    isLogin(){
      return this.$store.state.isLogin
    },
  },
  methods:{
    increment(){
      this.$store.commit('increment')
    },
    decrement(){
      this.$store.commit('decrement')
    },


  },
    components:{  },
  beforeCreate: function () {  //创建前状态
    console.log(this.$route.name);

  },
  created: function () {  //创建完毕状态
    console.log(this);
  },
  beforeMount: function () {  //挂载前状态

  },
  mounted: function () {  //挂载结束状态
      console.log(process.env.NODE_ENV);
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
