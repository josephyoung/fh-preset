export default [
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "other-routes" */ '@/views/About.vue'),
    children: [
      {
        path: 'page-template',
        component: () => import('@/views/PageTemplate'),
      },
    ],
  },
];
