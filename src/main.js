// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bulma/css/bulma.css'
import axios from 'axios'
import Notifications from 'vue-notification'
import Button from './components/Button'
import ContainerBox from './components/ContainerBox'

Vue.component('app-btn', Button)
Vue.component('container-box', ContainerBox)
Vue.config.productionTip = false
Vue.use(Notifications)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
