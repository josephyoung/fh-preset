import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import registerInterceptor from './registerInterceptor';

Vue.use(VueRouter);

// 全局唯一 VueRouter 实例
const router = new VueRouter({
  routes,
});

// 注册路由拦截器
registerInterceptor(router);

export default router;
