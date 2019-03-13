import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AddReport from './views/AddReport.vue'
import Login from './views/Login.vue'
import Settings from './views/Settings.vue'
import ViewReport from './views/ViewReport.vue'
import ReportAction from './plugins/ReportAction.vue'
import ViewReports from './views/ViewReports.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Login
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/view-report',
      name: 'view-report',
      component: ViewReport
    },
    {
      path: '/view-report/:id',
      name: 'view-report-id',
      component: ViewReport
    },
    {
      path: '/view-reports',
      name: 'view-reports',
      component: ViewReports
    },
    {
      path: '/add-report',
      name: 'add-report',
      component: AddReport
    },
    {
      path: '/report-action/:id/:action',
      name: 'report-action',
      component: ReportAction
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    }
    // ,
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: function () { 
    //     return import(/* webpackChunkName: "about" */ './views/About.vue')
    //   }
    // }
  ]
})
