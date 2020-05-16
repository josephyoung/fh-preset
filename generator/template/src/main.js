import _ from 'lodash';
import Vue from 'vue';
import './element-ui';
import './style/index.scss';
import App from './App.vue';
import router from './router';
import store from './store';
import './injects';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
