import Vue from 'vue'
import Router from 'vue-router'
import personal from '@/view/personal'
import dataTables from '@/view/dataTables'
import myClassSchedule from '@/view/myClassSchedule'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'personalTitle',
      component: personal
    },
    {
      path: '/dataTables',
      name: 'personalTitle',
      component: dataTables
    },
    {
      path: '/myClassSchedule',
      name: 'icoachu7',
      component: myClassSchedule
    },
  ]
})
