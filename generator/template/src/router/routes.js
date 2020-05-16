/**
 * 读取settings文件夹内路由配置文件,生成路由表, 并检测是否有重复
 */
import checkDuplication from './checkDuplication';

const routeFiles = require.context('./settings', true, /\.js$/);

const routes = _.reduce(
  routeFiles.keys(),
  (prev, cur) => [...prev, ...routeFiles(cur).default],
  []
);

/* 开发时才会添加settings内路由设置,故只在开发模式检测 */
if (process.env.NODE_ENV === 'development') {
  checkDuplication(routes);
}

export default routes;
