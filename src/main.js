// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'es6-promise/auto'
import 'element-ui/lib/theme-chalk/index.css';
import i18n from './common/lang/index'
Vue.use(ElementUI,{i18n: (key, value) => i18n.t(key, value)});

import store from './store/index.js'

import './style/base.less'

Vue.config.productionTip = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
