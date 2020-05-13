import _ from 'lodash';
import qs from 'qs';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './element-ui';
import './injects';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
