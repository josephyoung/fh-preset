export default {
  menus(state) {
    if (_.isEmpty(state._menus)) {
      return JSON.parse(sessionStorage.getItem('menus')) || [];
    }

    return state._menus;
  },

  auth(state) {
    if (!state._auth) {
      return JSON.parse(sessionStorage.getItem('auth'));
    }

    return state._auth;
  },

  token(state) {
    if (state._token) {
      return state._token;
    }

    return localStorage.getItem('token');
  },
};
