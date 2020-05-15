<template>
  <div id="about">
    <h1>This is an about page</h1>
    <el-button type="primary" @click="handleConfirmClick">confirm</el-button>
    <el-button type="warning" @click="handleCancelClick">cancel</el-button>
    <router-link to="/about/page-template">children</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'About',
  methods: {
    handleConfirmClick() {
      this.$http.get('mock/cart.json').then(resp => {
        console.log({ resp }, this.$router);
      });
    },
    handleCancelClick() {
      this.$store.dispatch('logout');
    },
  },
};
</script>

<style lang="scss" scoped>
#about {
  color: red;
  font-size: 16px;
  font-family: 'Microsoft YaHei';
  text-align: center;
}
</style>
