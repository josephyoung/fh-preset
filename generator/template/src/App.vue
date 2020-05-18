<template>
  <div id="app" class="h100p">
    <layout />
  </div>
</template>

<script>
import Layout from './views/layout';

export default {
  name: 'App',
  components: { Layout },
};
</script>

<style lang="scss">
#nav {
  padding: 30px;
  text-align: center;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
