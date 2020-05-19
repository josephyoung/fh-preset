<template>
  <div id="about">
    <h1>
      This is a Test page
    </h1>
    <el-button type="primary" @click="handleDownloadClick">
      download
    </el-button>
    <el-button type="warning" @click="handleLogoutClick">
      logout
    </el-button>
    <el-button type="warning" @click="handleClearTokenClick">
      clearToken
    </el-button>
    <router-link
      to="/test/page-template"
      tag="el-button"
      class="el-button--danger"
    >
      children
    </router-link>
  </div>
</template>

<script>
import mockDownload from '@/api/mocks/fileDownload';
import { downloadFile } from '@/service/util';

export default {
  name: 'TestIndex',
  methods: {
    async download() {
      const resp = await mockDownload();
      const fileName = this.$lodash
        .get(resp, 'headers.content-disposition', '')
        .replace(/.*filename="?([^,;"]*)"?$/, '$1');
      const fileType = this.$lodash.get(resp, 'data.type');
      downloadFile(this.$lodash.get(resp, 'data'), fileName, fileType);
    },

    handleDownloadClick() {
      this.download();
    },

    handleLogoutClick() {
      this.$store.dispatch('logout');
    },

    handleClearTokenClick() {
      this.$store.commit('setToken', '');
      this.$msgbox('token cleared');
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
