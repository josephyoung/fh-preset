<template>
  <div class="login-outer tac">
    <el-button type="primary" @click="handleLoginClick" v-if="showLogin" key="log-button"
      >login</el-button
    >
    <el-button type="warning" @click="handleLogoutClick" v-else key="log-button">logout</el-button>
  </div>
</template>

<script>
import routerAdd from '@/router/routerAdd';
import getRoutes from '@/router/getRoutes';
import routerReset from '@/router/routerReset.js';
export default {
  name: 'Login',
  computed: {
    showLogin() {
      return !this.$store.getters.auth;
    },
  },
  methods: {
    async routerGen() {
      const menus = await this.$http.get('mock/cart.json');
      this.$store.commit('setAuth', true);
      this.$store.commit('setMenus', menus);
      const routes = getRoutes(menus);
      routerAdd(routes);
    },

    handleLoginClick() {
      this.routerGen().then(() => this.$router.push({ name: 'home' }));
    },

    handleLogoutClick() {
      this.$store.dispatch('logout');
    },
  },
};
</script>
