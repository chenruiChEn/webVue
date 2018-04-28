
import VueI18n from 'vue-i18n'
import locale from 'element-ui/lib/locale';
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import Vue from 'vue'
import {titleCn,titleEn} from './title.js'   //页面title标签文案
import en from './en.js'
import cn from './cn.js'

Vue.use(VueI18n)



const i18n = new VueI18n({
  locale: 'cn', // 语言标识
  messages:{
    cn:{
      ...zhLocale,
      ...titleCn,
      ...cn,
    },
    en:{
      ...enLocale,
      ...titleEn,
      ...en,
    },
  },
  dateTimeFormats:{       //时间格式国际化
    cn:{
      short: {
        year: 'numeric', month: 'short', day: 'numeric',
        weekday: 'short', hour: 'numeric', minute: 'numeric'
      },
      long: {
        year: 'numeric', month: 'numeric', day: 'numeric',hour:'numeric',minute: 'numeric',timeZoneName:'long'
      },
    },
    en:{
      short: {
        year: 'numeric', month: 'short', day: 'numeric',
        weekday: 'short', hour: 'numeric', minute: 'numeric'
      },
      long: {
        year: 'numeric', month: 'numeric', day: 'numeric',hour:'numeric',minute: 'numeric',timeZoneName:'long'

      },
    }
  }
})


locale.i18n((key, value) => i18n.t(key, value))

export default i18n
