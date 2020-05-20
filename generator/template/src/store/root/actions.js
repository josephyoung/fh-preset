import router from '@/router';
import routerReset from '@/router/routerReset';

export default {
  logout({ commit }) {
    commit('setRoutes', []);
    commit('setAuth', false);
    commit('setToken', '');
    routerReset(true);
    if (_.get(router, 'history.current.name') !== 'login') {
      router.push('/login');
    }
  },

  addErrorLog({ commit }, log) {
    commit('addErrorLog', log);
  },

  clearErrorLogs({ commit }) {
    commit('clearErrorLogs');
  },
};
