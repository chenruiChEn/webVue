import  cn from './cn'
import  en from './en'
import VueI18n from 'vue-i18n'
import locale from 'element-ui/lib/locale';
import Vue from 'vue'
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'en', // 语言标识
  messages:{
    cn,
    en
  }
})

locale.i18n((key, value) => i18n.t(key, value))

export default i18n
