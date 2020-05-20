import Vue from 'vue';
import store from '@/store';

// 默认开发环境记录error log
const isNeed = process.env.NODE_ENV === 'development';

if (isNeed) {
  Vue.config.errorHandler = function(err, vm, info) {
    // issue: https://forum.vuejs.org/t/dispatch-in-vue-config-errorhandler-has-some-problem/23500
    try {
      // Vue.nextTick(() => {
      store.dispatch('addErrorLog', {
        err,
        vm,
        info,
        url: window.location.href,
      });
      console.error({ err, info });
      // });
    } catch (e) {
      console.error({ e });
    }
  };
}
