import _ from 'lodash';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
import { MessageBox } from 'element-ui';
import getRoutes from './getRoutes';
import store from '@/store';
import config from '@/config';

nprogress.configure({ showSpinner: false });

/**
 * 全局路由拦截器注册
 * @param {import('vue-router/types/router').VueRouter} router
 */
export default router => {
  router.beforeEach((to, _from, next) => {
    if (store.getters.token) {
      // 设置页面title
      document.title = _.get(to, 'meta.title', config.name);

      // 对比sessionStorage与store里的值,判断页面是刷新过的
      if (store.getters.auth && !store.state._auth) {
        nprogress.start();
        store.commit('setAuth', store.getters.auth);
        store.commit('setMenus', store.getters.menus);
        store.commit('setToken', store.getters.token);
        const routes = getRoutes(store.getters.menus);
        router.addRoutes(routes);
        next({ ...to, replace: true });
      } else {
        next();
      }
    } else {
      store.commit('setAuth', false);
      store.commit('setMenus', []);
      if ('login' !== to.name) {
        MessageBox.alert('您还未登录或登录已过期, 请登录', '未认证', {
          confirmButtonText: '去登录',
          showClose: false,
          lockScroll: true,
        }).then(() => {
          next({ name: 'login', query: { redirect: to.path } });
        });
      } else {
        next();
      }
    }
  });

  router.afterEach(() => {
    nprogress.done();
  });
};
