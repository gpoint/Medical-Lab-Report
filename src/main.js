import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/sbadmin.css'
import './assets/fontawesome-free/css/all.min.css'
import App from './App.vue'
import router from './router'
import store from './store/store'
import './registerServiceWorker'


Vue.use(BootstrapVue)



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) },
  mounted(){
  	// this.$route.push('home');
  },
  ready() {
    // this.$route.push('home');
  }
}).$mount('#app')
