import Vue from 'vue'
import Router from 'vue-router'
import dataTest from '../components/dataTest/dataTest.vue'
import dataTest2 from '../components/dataTest/dataTest2.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/',
      redirect:''
    },{
      path:'/dataTest',
      component:dataTest
    },{
      path:'/dataTest2',
      component:dataTest2
    }
  ]
})
