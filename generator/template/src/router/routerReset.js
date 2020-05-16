import VueRouter from 'vue-router';
import router from './index';
import publicRoutes from './publicRoutes';

export default function() {
  const newRouter = new VueRouter({ routes: publicRoutes });
  router.matcher = newRouter.matcher;
}
