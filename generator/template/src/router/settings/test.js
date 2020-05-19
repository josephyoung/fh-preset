export default [
  {
    path: '/test',
    name: 'test',
    component: () =>
      import(/* webpackChunkName: "test-routes" */ '@/views/Test.vue'),
    children: [
      {
        path: 'test-index/:id',
        name: 'test-index',
        component: () =>
          import(/* webpackChunkName: "test-routes" */ '@/views/TestIndex.vue'),
      },
      {
        path: 'page-template',
        component: () =>
          import(/* webpackChunkName: "test-routes" */ '@/views/page-template'),
      },
    ],
  },
];
