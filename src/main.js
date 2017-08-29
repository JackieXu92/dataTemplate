import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'

import './common/sass/index.sass'


Vue.use(iView);

Vue.config.productionTip = false;

fastclick.attach(document.body);
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});
