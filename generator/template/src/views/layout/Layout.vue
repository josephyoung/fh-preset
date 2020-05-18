<template>
  <el-container id="app" class="h100p">
    <el-aside v-if="menuShow" :width="asideWidth" class="layout-aside">
      <el-scrollbar class="h100p">
        <ex-menu-aside
          :menus="$store.getters.menus"
          :collapse="isCollapse"
          router
          :default-active="currentPath"
        />
      </el-scrollbar>
    </el-aside>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script>
import { ExMenuAside } from '@/components';

export default {
  name: 'Layout',
  components: { ExMenuAside },

  data() {
    return {
      isCollapse: false,
    };
  },

  computed: {
    currentPath() {
      return this.$route.path;
    },

    menuShow() {
      return !this.$lodash.isEmpty(this.$store.getters.menus);
    },

    asideWidth() {
      return this.isCollapse ? '65px' : '200px';
    },
  },
};
</script>

<style lang="scss" scoped>
.layout-aside {
  border-right: solid 1px #e6e6e6;
  ::v-deep .el-menu {
    border-right: none;
  }
}
</style>
