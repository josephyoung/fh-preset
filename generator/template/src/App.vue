<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">
        Home
      </router-link>
      |
      <router-link to="/about">
        About
      </router-link>
      |
      <router-link to="/page-template">
        page template
      </router-link>
      |
      <router-link to="/login">
        logout
      </router-link>
      |
      <router-link to="/404">
        404
      </router-link>
    </div>
    <router-view />
  </div>
</template>

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
