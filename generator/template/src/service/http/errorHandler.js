import Vue from 'vue';

const messageSend = Vue.prototype.$message.error;

export default (error, subject = '未知', msg = '错误') => {
  messageSend(subject + msg);
  console.error({ error });
};
