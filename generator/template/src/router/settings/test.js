export default [
  {
    path: '/test',
    name: 'test',
    component: () =>
      import(
        /* webpackChunkName: "test-routes" */ '@/views/test-page/TestPage.vue'
      ),
    children: [
      {
        path: 'test-index/:id',
        name: 'test-index',
        component: () =>
          import(
            /* webpackChunkName: "test-routes" */ '@/views/test-page/TestIndex.vue'
          ),
      },
      {
        path: 'test-error',
        name: 'test-error',
        component: () =>
          import(
            /* webpackChunkName: "test-routes" */ '@/views/test-page/TestError.vue'
          ),
      },
      {
        path: 'page-template',
        component: () =>
          import(/* webpackChunkName: "test-routes" */ '@/views/page-template'),
      },
    ],
  },
];
