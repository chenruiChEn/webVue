import Vue from 'vue'
import Router from 'vue-router'
import personal from '@/components/personal'
import vBindTitle from '@/components/vBindTitle'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'personalTitle',
      component: personal
    },
    {
      path: '/vBindTitle',
      name: 'logon',
      component: vBindTitle
    }
  ]
})
