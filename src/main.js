import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
////////////////ele
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

///////////////axios
import axios from 'axios';
axios.defaults.baseURL = "https://www.liulongbin.top:8888/api/private/v1/";
Vue.prototype.$axios = axios;


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
