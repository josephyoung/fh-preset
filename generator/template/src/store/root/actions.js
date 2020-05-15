import router from '@/router';
import routerReset from '@/router/routerReset';

export default {
  logout({ commit }) {
    commit('setMenus', []);
    commit('setAuth', false);
    routerReset(true);
    if (_.get(router, 'history.current.name') !== 'login') {
      router.push('/login');
    }
  },
};
