import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import vBindTitle from '@/components/vBindTitle'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/vBindTitle',
      name: 'vBindTitle',
      component: vBindTitle
    }
  ]
})
