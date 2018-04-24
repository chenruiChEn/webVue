import  zh from './zh'
import  en from './en'
import VueI18n from 'vue-i18n'
import Vue from 'vue'
import locale from 'element-ui/lib/locale';
Vue.use(VueI18n)


export default new VueI18n({
  locale: 'en', // 语言标识
  messages:{
    zh,
    en
  }
})

