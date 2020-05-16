import router from './index';
import routerReset from './routerReset';

/**
 * 重置路由, 添加路由
 * @param {RouteConfig[]} routes
 */
export default function addRoutes(routes) {
  routerReset();
  router.addRoutes(routes);
}
