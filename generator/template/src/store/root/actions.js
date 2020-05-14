import router from '@/router';
import routerReset from '@/router/routerReset';

export default {
  logout({ commit }) {
    commit('setMenus', []);
    commit('setAuth', false);
    routerReset(true);
    router.push('/login');
  },
};
