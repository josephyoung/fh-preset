function getMenus(routes) {
  let res = [];
  for (const route of routes) {
    const { children, ...rest } = route;
    if (rest.isMenu) {
      res.push(rest);
    }
    if (Array.isArray(route.children)) {
      rest.children = getMenus(route.children);
    }
  }

  return res;
}

export default {
  routes(state) {
    if (_.isEmpty(state._routes)) {
      return JSON.parse(sessionStorage.getItem('routes')) || [];
    }

    return state._routes;
  },

  menus(_state, getters) {
    return getMenus(getters.routes);
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
