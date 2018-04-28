var mixin = {
  data(){
    return {
    }
  },
  methods: {
    toggle(){  //全局 切换语言环境方法
      this.$i18n.locale = this.$i18n.locale=='cn'?'en':'cn';
      document.title = this.icoachuTitle
      this.$store.commit('changeLang')
    },
    toLogin(){
      if(this.icoachuLang === 'cn'){
        window.location = 'http://www.icoachu.cn'
      }else {
        window.location = 'http://en.icoachu.cn'
      }
    }
  },
  computed:{
    icoachuTitle(){  //全局 icoachuTitle 字段
      return this.$t(this.$route.name)
    },
    icoachuLang(){   //全局 icoachuLang lang 语言环境字段
      return this.$store.state.lang
    },
    proType(){    //全局 proType 环境字段
      return this.$store.state.proType
    }
  },

}

export default mixin;
