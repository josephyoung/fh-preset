/**
 * 根据menus过滤权限,生成路由表
 */
import identity from './routesIdentity';
import routes from './routes';

/**
 * 路由表过滤
 * @param {RouteConfig[]} routes
 * @param {Menu[]} menus
 * @param {RouteConfig[]} filtered
 */
const filterRoutes = (routes, menus, filtered = []) => {
  for (const route of routes) {
    for (const menu of menus) {
      if (identity(route)(menu)) {
        const { children: routeChildren, ...rest } = route;
        const title = _.get(menu, 'title');
        if (title) {
          if (rest.meta) {
            rest.meta.title = title;
          } else {
            rest.meta = { title };
          }
        }
        filtered.push(rest);

        const menuChildren = _.get(menu, 'children');
        if (!_.isEmpty(routeChildren) && !_.isEmpty(menuChildren)) {
          rest.children = filterRoutes(routeChildren, menuChildren);
        }
      }
    }
  }

  return filtered;
};

/**
 * 根据menus过滤权限,生成路由表
 * @param {Array<Menu>} menus
 */
const getRoutes = _.curry(filterRoutes)(routes);

export default getRoutes;
