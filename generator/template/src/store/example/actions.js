export default {
  changeMessage({ commit, state }) {
    commit('setState', {
      message: state.message === 'World' ? 'Vue' : 'World',
    });
  },
};
