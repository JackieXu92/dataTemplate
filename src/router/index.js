import Vue from 'vue'
import Router from 'vue-router'
import dataTest from '../components/dataTest/dataTest.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/',
      redirect:''
    },{
      path:'/dataTest',
      component:dataTest
    }
  ]
})
