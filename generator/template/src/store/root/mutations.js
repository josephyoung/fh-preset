export default {
  setState(state, payload) {
    for (const key in payload) {
      if (Object.prototype.hasOwnProperty.call(payload, key)) {
        const value = payload[key];
        state[key] = value;
      }
    }
  },

  setMenus(state, value) {
    state._menus = value;
    sessionStorage.setItem('menus', JSON.stringify(value));
  },

  setAuth(state, value) {
    state._auth = value;
    sessionStorage.setItem('auth', value);
  },

  setToken(state, value) {
    state._token = value;
    localStorage.setItem('token', value);
  },
};
