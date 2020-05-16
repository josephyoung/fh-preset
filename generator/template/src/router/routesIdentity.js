/**
 * path相同或name相同被认为是相同路由
 * @param {RouteConfig} route1
 * @param {RouteConfig} route2
 */
function identity(route1, route2) {
  return route1.name === route2.name || route1.path === route2.path;
}

export default _.curry(identity);
