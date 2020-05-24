/**
 * !!!慎用全局注册
 * 这里只适合注册，具体实现需拆分到单独的文件
 */

import Vue from 'vue';
import { HelloWorld } from '@/components';
import {
  pluginHttp,
  pluginLodash,
  pluginLodashFp,
  pluginDayjs,
} from './plugins';

/* 原型属性/方法 Vue.prototype (使用 $ 前缀) */
Vue.prototype.$env = Object.freeze(process.env);

/* 全局指令 Vue.directive */

/* 全局混入 Vue.mixin */

/* 全局组件 Vue.component */
Vue.component('hello-world', HelloWorld);

/* 插件 Vue.use (重量级插件放主目录，如：vue-router、vuex、element-ui、i18n ...) */
// Vue.prototype.$http
Vue.use(pluginHttp);

// Vue.prototype.$lodash
Vue.use(pluginLodash);

// Vue.prototype.$fp
Vue.use(pluginLodashFp);

// Vue.prototype.$dayjs
Vue.use(pluginDayjs);
