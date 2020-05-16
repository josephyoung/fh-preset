import Vue from 'vue';

const messageError = Vue.prototype.$message.error;

export default (error, subject = '未知', msg = '错误') => {
  messageError(subject + msg);
  console.error({ error });
};
