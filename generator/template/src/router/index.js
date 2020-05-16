import Vue from 'vue';
import VueRouter from 'vue-router';
import publicRoutes from './publicRoutes';
import registerInterceptor from './registerInterceptor';

Vue.use(VueRouter);

// 全局唯一 VueRouter 实例
const router = new VueRouter({
  mode: 'history',
  routes: publicRoutes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    return { x: 0, y: 0 };
  },
});

// 注册路由拦截器
registerInterceptor(router);

export default router;
