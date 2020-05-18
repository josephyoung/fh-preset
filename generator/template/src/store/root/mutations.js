export default {
  setState(state, payload) {
    for (const key in payload) {
      if (Object.prototype.hasOwnProperty.call(payload, key)) {
        const value = payload[key];
        state[key] = value;
      }
    }
  },

  setRoutes(state, value) {
    state._routes = value;
    sessionStorage.setItem('routes', JSON.stringify(value));
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
