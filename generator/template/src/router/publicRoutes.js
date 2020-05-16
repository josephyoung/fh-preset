import Login from '@/views/Login.vue';
import Page404 from '@/views/404.vue';

export default [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '*',
    component: Page404,
  },
];
