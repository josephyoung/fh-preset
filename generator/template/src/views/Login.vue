<template>
  <div class="tac">
    <template v-if="showLogin">
      <el-form :model="loginForm" class="login-form" @submit="handleLoginClick">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="loginForm.username" placeholder="jack" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="loginForm.password"
            placeholder="11"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleLoginClick">
            login
          </el-button>
        </el-form-item>
      </el-form>
    </template>
    <template v-else>
      <el-button type="warning" @click="handleLogoutClick">
        logout
      </el-button>
    </template>
  </div>
</template>

<script>
import getRoutes from '@/router/getRoutes';
import routerReset from '@/router/routerReset.js';
import apiMenus from '@/api/mocks/menus';
import apiToken from '@/api/mocks/token';

export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
      },
    };
  },
  computed: {
    showLogin() {
      return !this.$store.getters.auth;
    },
    query() {
      return this.$route.query;
    },
  },
  methods: {
    async routerGen() {
      const menus = await apiMenus.get();
      this.$store.commit('setAuth', true);
      this.$store.commit('setMenus', menus);
      const routes = getRoutes(menus);
      this.$router.addRoutes(routes);
    },

    async login() {
      const result = await apiToken.post(this.loginForm);
      if (result.state) {
        this.$store.commit('setToken', result.token);
        await this.routerGen();
        if (this.query.redirect) {
          this.$router.push({ path: this.query.redirect });
        } else {
          this.$router.push({ name: 'home' });
        }
      } else {
        this.$message.error(result.msg);
      }
    },

    handleLoginClick() {
      this.login();
    },

    handleLogoutClick() {
      this.$store.dispatch('logout');
    },
  },
};
</script>

<style lang="scss" scoped>
.login-form {
  margin: auto;
  max-width: 400px;
}
</style>
