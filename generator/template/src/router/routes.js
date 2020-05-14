/**
 * 读取settings文件夹内路由配置文件,生成路由
 */
const routeFiles = require.context('./settings', true, /\.js$/);

export default _.reduce(
  routeFiles.keys(),
  (prev, cur) => [...prev, ...routeFiles(cur).default],
  []
);
