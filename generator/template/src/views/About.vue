<template>
  <div id="about">
    <h1>
      This is an about page
    </h1>
    <el-button type="primary" @click="handleDownloadClick">
      download
    </el-button>
    <el-button type="warning" @click="handleLogoutClick">
      logout
    </el-button>
    <router-link
      to="/about/page-template"
      tag="el-button"
      class="el-button--danger"
    >
      children
    </router-link>
    <router-view />
  </div>
</template>

<script>
import mockDownload from '@/api/mocks/fileDownload';
import downloadFile from '@/service/util';

export default {
  name: 'About',
  methods: {
    async download() {
      const resp = await mockDownload();
      const fileName = _.get(resp, 'headers.content-disposition', '').replace(
        /.*filename="([^;]*)"$/,
        '$1'
      );
      const fileType = _.get(resp, 'data.type');
      downloadFile(_.get(resp, 'data'), fileName, fileType);
    },

    handleDownloadClick() {
      this.download();
    },

    handleLogoutClick() {
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
