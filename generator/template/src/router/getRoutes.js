/**
 * 根据后台返回的路由表,生成实际路由表
 */
import identity from './routesIdentity';
import routes from './routes';

/**
 * 路由表过滤
 * @param {RouteConfig[]} routes
 * @param {[]} userRouts
 * @param {RouteConfig[]} filtered
 */
const filterRoutes = (routes, userRoutes, filtered = []) => {
  for (const route of routes) {
    for (const userRoute of userRoutes) {
      if (identity(route)(userRoute)) {
        const { children: routeChildren, ...rest } = route;
        const title = _.get(userRoute, 'title');
        if (title) {
          if (rest.meta) {
            rest.meta.title = title;
          } else {
            rest.meta = { title };
          }
        }
        rest.meta.isMenu = _.get(userRoute, 'isMenu', false);
        const activeMenu = _.get(userRoute, 'activeMenu');
        if (activeMenu) {
          rest.meta.activeMenu = activeMenu;
        }
        filtered.push(rest);

        const userRouteChildren = _.get(userRoute, 'children');
        if (!_.isEmpty(routeChildren) && !_.isEmpty(userRouteChildren)) {
          rest.children = filterRoutes(routeChildren, userRouteChildren);
        }
      }
    }
  }

  return filtered;
};

/**
 * 根据后台返回的路由表,生成实际路由表
 * @param routes
 */
const getRoutes = _.curry(filterRoutes)(routes);

export default getRoutes;
