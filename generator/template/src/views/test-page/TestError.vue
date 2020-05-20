<template>
  <div class="h100p tac">
    <h1>test error</h1>
    <el-button
      @click="handleShowErrorClick"
      type="warning"
      icon="el-icon-error"
    >
      点击查看错误日志
    </el-button>
    <ErrorA />
    <ErrorB />
    <el-dialog title="错误日志" :visible.sync="visible" width="75%">
      <el-button @click="handleClearErrorClick" class="test-error-btn">
        清除错误
      </el-button>
      <el-table :data="errorLogs" border>
        <el-table-column label="Message">
          <template slot-scope="{ row }">
            <div>
              <span class="test-error-label">Msg:</span>
              <el-tag type="danger">
                {{ row.err.message }}
              </el-tag>
            </div>
            <div>
              <span class="test-error-label">Info:</span>
              <el-tag type="warning">
                {{ `${row.vm.$vnode.tag} error in ${row.info}` }}
              </el-tag>
            </div>
            <div>
              <span class="test-error-label">URL:</span>
              <el-tag type="danger">
                {{ row.url }}
              </el-tag>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="Stack">
          <template slot-scope="{ row }">
            {{ row.err.stack }}
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
import { ErrorA, ErrorB } from './components';
export default {
  name: 'TestError',

  components: {
    ErrorA,
    ErrorB,
  },

  data() {
    return {
      visible: false,
    };
  },

  computed: {
    errorLogs() {
      return this.$store.state.errorLogs;
    },
  },

  methods: {
    handleShowErrorClick() {
      this.visible = true;
    },

    handleClearErrorClick() {
      this.$store.dispatch('clearErrorLogs');
    },
  },
};
</script>

<style lang="scss" scoped>
.test-error-label {
  display: inline-block;
  width: 40px;
  font-weight: bold;
  padding-right: 10px;
  margin-bottom: 10px;
}

.test-error-btn {
  float: left;
  margin-bottom: 10px;
}
</style>
