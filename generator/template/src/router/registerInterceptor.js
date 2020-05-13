/*
 * 路由拦截器注册
 */
export default router => {
  router.beforeEach((to, from, next) => {
    next();
  });

  router.afterEach((to, from) => {});
};
