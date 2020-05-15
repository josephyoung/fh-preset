import Vue from 'vue';
import VueRouter from 'vue-router';
import login from './login';
import notFound from './notFound';
import registerInterceptor from './registerInterceptor';

Vue.use(VueRouter);

// 全局唯一 VueRouter 实例
const router = new VueRouter({
  mode: 'history',
  routes: [...login, ...notFound],
});

// 注册路由拦截器
registerInterceptor(router);

export default router;
