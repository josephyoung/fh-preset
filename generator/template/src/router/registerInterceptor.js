/**
 * @param {VueRouter} router
 * @description 全局路由拦截器注册
 */
import getRoutes from './getRoutes';
import routerAdd from './routerAdd';
import store from '@/store';

export default (router) => {
  router.beforeEach((to, from, next) => {
    // 对比sessionStorage与store里的值,判断页面是刷新过的
    if (store.getters.auth && !store.state._auth) {
      store.commit('setAuth', store.getters.auth);
      store.commit('setMenus', store.getters.menus);
      const routes = getRoutes(store.getters.menus);
      routerAdd(routes);
      next({ ...to, replace: true });
    } else {
      next();
    }
  });
};
