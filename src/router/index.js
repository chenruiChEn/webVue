import Vue from 'vue'
import Router from 'vue-router'
import personal from '@/view/personal'
import dataTables from '@/view/dataTables'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'personalTitle',
      component: personal
    },
    {
      path: '/',
      name: 'personalTitle',
      component: dataTables
    },
  ]
})
