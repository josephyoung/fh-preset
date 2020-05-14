import VueRouter from 'vue-router';
import router from './index';
import login from './login';
import notFound from './notFound';

/**
 * @param {boolean} add404 false: will not add 404 router / otherwise
 */
export default function(add404) {
  if (add404) {
    router.matcher = new VueRouter({ routes: [...login, ...notFound] }).matcher;
  } else {
    router.matcher = new VueRouter({ routes: [...login] }).matcher;
  }
}
