/* 404页面, 不能设置name属性, 会导致刷新后路由跳转出错 */
import NotFound from '@/views/404.vue';

export default [
  {
    path: '*',
    component: NotFound,
  },
];
