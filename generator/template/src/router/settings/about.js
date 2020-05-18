export default [
  {
    path: '/about',
    name: 'about',
    redirect: '/about/about-index',
    component: () =>
      import(/* webpackChunkName: "other-routes" */ '@/views/About.vue'),
    children: [
      {
        path: 'about-index/:id',
        name: 'about-index',
        component: () =>
          import(
            /* webpackChunkName: "other-routes" */ '@/views/AboutIndex.vue'
          ),
      },
      {
        path: 'page-template',
        component: () =>
          import(
            /* webpackChunkName: "other-routes" */ '@/views/page-template'
          ),
      },
    ],
  },
];
