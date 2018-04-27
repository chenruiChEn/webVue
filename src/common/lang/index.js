
import VueI18n from 'vue-i18n'
import locale from 'element-ui/lib/locale';
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import Vue from 'vue'
import {titleCn,titleEn} from './title.js'   //页面title标签文案
import en from './en.js'   //页面title标签文案
import cn from './cn.js'   //页面title标签文案
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
  }
})

locale.i18n((key, value) => i18n.t(key, value))

export default i18n
