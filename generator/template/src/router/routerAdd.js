import router from './index';
import routerReset from './routerReset';

/**
 * @param {Route[]} menus
 * @description reset current router, add menus to router
 */
export default function(routes) {
  routerReset(false);
  router.addRoutes(routes);
}
