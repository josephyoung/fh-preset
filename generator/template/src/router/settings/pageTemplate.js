/**
 * 路由的name和path统一采用kebab-case命令
 */
export default [
  {
    path: '/page-template',
    name: 'page-template',
    component: () => import(/* webpackChunkName: "other-routes" */ '@/views/PageTemplate'),
  },
];
