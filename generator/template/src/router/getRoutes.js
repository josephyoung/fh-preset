/**
 * 读取settings文件夹内路由配置文件,生成路由,并检查重复
 * 根据传入的menus生成真正路由列表
 */
import RouteDuplicationError from './RouteDuplicationError';
import notFound from './notFound';

const routeFiles = require.context('./settings', true, /\.js$/);

const routes = _.reduce(
  routeFiles.keys(),
  (prev, cur) => [...prev, ...routeFiles(cur).default],
  []
);

/* path相同或name相同被认为是重复路由 */
const identity = route1 => route2 => route1.name === route2.name || route1.path === route2.path;

const checkDuplication = routes => {
  for (let index = 0; index < routes.length; index++) {
    const route = routes[index];
    if (index !== _.findIndex(routes, identity(route))) {
      throw new RouteDuplicationError(`路由 ${route.name || route.path} 重复,请检查配置`);
    }

    if (!_.isEmpty(_.get(routes, 'children'))) {
      checkDuplication(routes.children);
    }
  }
};

checkDuplication(routes);

const filterRoutes = (routes, menus, filtered = []) => {
  for (const route of routes) {
    for (const menu of menus) {
      if (identity(route)(menu)) {
        const { children: routeChildren, ...rest } = route;
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
 *
 * @param {Array<Menu>} menus
 * @param {Vue} vm
 * @returns {Route[]} routes
 * @description 根据传入的menus生成路由列表, 保存到store
 */
function getRoutes(menus) {
  return [...filterRoutes(routes, menus), ...notFound];
}

export default getRoutes;
