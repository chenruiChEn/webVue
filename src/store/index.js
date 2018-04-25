import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex)
import mutations from './mutations'
import actions from './actions'


let state = {
  count: 0,
  lang:'cn',
  proType:'teacher',
  isLogin:false,
}

export default  new Vuex.Store({
  state,
  mutations,
  actions
})

