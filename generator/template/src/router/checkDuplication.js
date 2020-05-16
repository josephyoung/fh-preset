import identity from './routesIdentity';
import RouteDuplicationError from './RouteDuplicationError';

/**
 * 开发模式时检查route/settings里面路由配置是否重复
 * @param {RouteConfig} routes
 */
const checkDuplication = routes => {
  for (let index = 0; index < routes.length; index++) {
    const route = routes[index];

    /**
     * _.findIndex返回找到的第一个令identity为true的index,
     * 如果有重复,重复项的index值必不等于第一个的index值
     */
    if (index !== _.findIndex(routes, identity(route))) {
      throw new RouteDuplicationError(
        `路由 ${route.name || route.path} 重复,请检查配置`
      );
    }

    if (!_.isEmpty(_.get(route, 'children'))) {
      checkDuplication(route.children);
    }
  }
};

export default checkDuplication;
