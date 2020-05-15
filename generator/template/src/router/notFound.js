/* 404页面, 不能设置name属性, 会导致刷新后路由跳转出错 */
import NotFound from '@/views/NotFound';

export default [
  {
    path: '*',
    component: NotFound,
  },
];
