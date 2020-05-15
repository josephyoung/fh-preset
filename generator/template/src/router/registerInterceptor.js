/**
 * @param {VueRouter} router
 * @description 全局路由拦截器注册
 */
import Vue from 'vue';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
import getRoutes from './getRoutes';
import routerAdd from './routerAdd';
import store from '@/store';

nprogress.configure({ showSpinner: false });

export default router => {
  router.beforeEach((to, from, next) => {
    // 对比sessionStorage与store里的值,判断页面是刷新过的
    if (store.getters.auth && !store.state._auth) {
      nprogress.start();
      store.commit('setAuth', store.getters.auth);
      store.commit('setMenus', store.getters.menus);
      const routes = getRoutes(store.getters.menus);
      routerAdd(routes);
      next({ ...to, replace: true });
    } else {
      next();
    }
  });

  router.afterEach(() => {
    nprogress.done();
  });
};
