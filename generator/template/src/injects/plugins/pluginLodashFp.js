import fp from 'lodash/fp';

export default {
  install(Vue, name = '$fp') {
    Object.defineProperty(Vue.prototype, name, { value: fp });
  },
};
